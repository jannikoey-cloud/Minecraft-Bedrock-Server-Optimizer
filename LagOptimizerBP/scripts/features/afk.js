/*
 * ============================================================
 *  afk.js – AFK Detection
 *
 *  Detects inactive players based on position change.
 *  Sets the "afk" tag on the player and maintains afkPlayers set.
 *
 *  Commands:  mcbso:afklist  – Show AFK players with duration (GameDirectors)
 * ============================================================
 */

import { world, system, Player, CommandPermissionLevel } from "@minecraft/server";
import { get } from "../core/settings.js";
import { playerLastPos, playerAfkTicks, afkPlayers } from "../state.js";
import { fail, success, formatTime } from "../core/util.js";
import { t } from "../lang/i18n.js";

// OPT: Threshold squared once – recalculated only when value changes
let _lastMovThresh = -1;
let _afkDistSq     = 0;

function getAfkDistSq() {
  const th = get("AFK_MOVE_THRESHOLD");
  if (th !== _lastMovThresh) { _lastMovThresh = th; _afkDistSq = th * th; }
  return _afkDistSq;
}

// ── Loop ──────────────────────────────────────────────────────

export function startAfkLoop() {
  system.runInterval(() => {
    for (const player of world.getPlayers()) {
      const id   = player.id;
      const pos  = player.location;
      const last = playerLastPos.get(id);

      let moved;
      if (!last) {
        moved = true;
      } else {
        const dx = pos.x - last.x;
        const dy = pos.y - last.y;
        const dz = pos.z - last.z;
        moved = (dx * dx + dy * dy + dz * dz) > getAfkDistSq();
      }

      if (moved) {
        playerAfkTicks.set(id, 0);
        if (afkPlayers.has(id)) { afkPlayers.delete(id); player.removeTag("afk"); }
      } else {
        const afkTicks = (playerAfkTicks.get(id) || 0) + 20;
        playerAfkTicks.set(id, afkTicks);
        if (afkTicks >= get("AFK_THRESHOLD") && !afkPlayers.has(id)) {
          afkPlayers.add(id);
          player.addTag("afk");
        }
      }

      // OPT: Mutate object instead of allocating new {x,y,z}
      if (last) {
        last.x = pos.x; last.y = pos.y; last.z = pos.z;
      } else {
        playerLastPos.set(id, { x: pos.x, y: pos.y, z: pos.z });
      }
    }
  }, 20);
}

// ── Commands ──────────────────────────────────────────────────

export function registerAfkCommands(registry) {

  registry.registerCommand(
    {
      name: "mcbso:afklist",
      description: "Show AFK players with duration",
      permissionLevel: CommandPermissionLevel.GameDirectors,
      cheatsRequired: false,
    },
    (origin) => {
      const player = origin.initiator ?? origin.sourceEntity;
      if (!(player instanceof Player)) return fail(t("only_players"));
      if (afkPlayers.size === 0) {
        player.sendMessage(t("afk_none"));
        return success();
      }
      const names = world.getPlayers()
        .filter(p => afkPlayers.has(p.id))
        .map(p => `§f${p.name} §7(${formatTime(playerAfkTicks.get(p.id) || 0)})`);
      player.sendMessage(`${t("afk_list_header")} (${names.length}):\n` + names.join("\n"));
      return success();
    }
  );
}
