/*
 * ============================================================
 *  clearlag.js – ClearLag System
 *
 *  Automatically deletes all items and XP orbs in all
 *  dimensions at a configurable interval.
 *  Broadcasts countdown warnings to all players.
 *
 *  Fix: entity.kill() inside runInterval is unreliable.
 *       → dimension.runCommand("kill @e[type=...]") guarantees
 *       correct execution without loot drops.
 *
 *  Commands:  mcbso:cleartime  – Show next clear (all players)
 *             mcbso:clearnow   – Run immediately (GameDirectors)
 *             mcbso:entities   – Entity counter (all players)
 * ============================================================
 */

import { world, system, Player, CommandPermissionLevel } from "@minecraft/server";
import { DIMENSIONS } from "../config.js";
import { get } from "../core/settings.js";
import { tickCounter, setTickCounter } from "../state.js";
import { fail, success, formatTime } from "../core/util.js";
import { t } from "../lang/i18n.js";

// OPT: Warnings map is rebuilt only when CLEAR_INTERVAL changes
let _cachedInterval  = -1;
let _warningsMap     = new Map();

function getWarningsMap() {
  const interval = get("CLEAR_INTERVAL");
  if (interval !== _cachedInterval) {
    _cachedInterval = interval;
    _warningsMap = new Map([
      [interval - 1200, t("clearlag_warn_1min")],
      [interval - 600,  t("clearlag_warn_30s")],
      [interval - 200,  t("clearlag_warn_10s")],
      [interval - 100,  "§c[ClearLag] 5..."],
      [interval - 80,   "§c[ClearLag] 4..."],
      [interval - 60,   "§c[ClearLag] 3..."],
      [interval - 40,   "§c[ClearLag] 2..."],
      [interval - 20,   "§c[ClearLag] 1..."],
    ]);
  }
  return _warningsMap;
}

// ── Core function ─────────────────────────────────────────────

function runClearLag() {
  let items = 0;
  let xp    = 0;
  const dims = [];

  // OPT: Single getDimension() call per dimension – reference used for both passes
  for (const dimId of DIMENSIONS) {
    try {
      const dim = world.getDimension(dimId);
      for (const entity of dim.getEntities()) {
        if (entity.typeId === "minecraft:item")        items++;
        else if (entity.typeId === "minecraft:xp_orb") xp++;
      }
      dims.push(dim);
    } catch {}
  }

  for (const dim of dims) {
    try {
      dim.runCommand("kill @e[type=item]");
      dim.runCommand("kill @e[type=xp_orb]");
    } catch {}
  }

  world.sendMessage(t("clearlag_items", { items, xp }));
}

// ── Loop ──────────────────────────────────────────────────────

export function startClearLagLoop() {
  system.runInterval(() => {
    setTickCounter(tickCounter + 20);
    const warn = getWarningsMap().get(tickCounter);
    if (warn) world.sendMessage(warn);
    if (tickCounter >= get("CLEAR_INTERVAL")) { runClearLag(); setTickCounter(0); }
  }, 20);
}

// ── Commands ──────────────────────────────────────────────────

export function registerClearLagCommands(registry) {

  registry.registerCommand(
    {
      name: "mcbso:cleartime",
      description: "Show time until next ClearLag",
      permissionLevel: CommandPermissionLevel.Any,
      cheatsRequired: false,
    },
    (origin) => {
      const player = origin.initiator ?? origin.sourceEntity;
      if (!(player instanceof Player)) return fail(t("only_players"));
      player.sendMessage(t("clearlag_next") + formatTime(get("CLEAR_INTERVAL") - tickCounter));
      return success();
    }
  );

  registry.registerCommand(
    {
      name: "mcbso:clearnow",
      description: "Run ClearLag immediately",
      permissionLevel: CommandPermissionLevel.GameDirectors,
      cheatsRequired: false,
    },
    (origin) => {
      const player = origin.initiator ?? origin.sourceEntity;
      if (!(player instanceof Player)) return fail(t("only_players"));
      system.run(() => {
        world.sendMessage(t("clearlag_manual") + player.name);
        runClearLag();
        setTickCounter(0);
      });
      return success();
    }
  );

  registry.registerCommand(
    {
      name: "mcbso:entities",
      description: "Count entities in all dimensions",
      permissionLevel: CommandPermissionLevel.Any,
      cheatsRequired: false,
    },
    (origin) => {
      const player = origin.initiator ?? origin.sourceEntity;
      if (!(player instanceof Player)) return fail(t("only_players"));
      system.run(() => {
        const lines = [t("entities_header")];
        for (const dimId of DIMENSIONS) {
          try {
            const dim = world.getDimension(dimId);
            let total = 0, items = 0, xp = 0, mobs = 0;
            for (const entity of dim.getEntities()) {
              total++;
              if (entity.typeId === "minecraft:item")        items++;
              else if (entity.typeId === "minecraft:xp_orb") xp++;
              else if (entity.typeId !== "minecraft:player") mobs++;
            }
            lines.push(
              `§6${dimId}\n` +
              t("entities_total") + `${total} ` +
              t("entities_items") + `${items} ` +
              t("entities_xp")    + `${xp} ` +
              t("entities_mobs")  + `${mobs}`
            );
          } catch {}
        }
        player.sendMessage(lines.join("\n"));
      });
      return success();
    }
  );
}
