/*
 * ============================================================
 *  tps.js – TPS Monitor
 *
 *  Measures server TPS via Date.now() delta, maintains a
 *  moving average and writes the result to the actionbar
 *  of all players who have enabled mcbso:tps.
 *
 *  Commands:  mcbso:tps      – Toggle display (all players)
 *             mcbso:tpsinfo  – Detailed statistics (GameDirectors)
 * ============================================================
 */

import { world, system, Player, CommandPermissionLevel } from "@minecraft/server";
import { get } from "../core/settings.js";
import {
  tps, setTps,
  tpsSum, setTpsSum,
  lastTime, setLastTime,
  tpsHistory,
  tpsPlayers,
  afkPlayers,
} from "../state.js";
import { setActionbarSlot, clearActionbarSlot } from "../core/actionbar.js";
import { fail, success } from "../core/util.js";
import { t } from "../lang/i18n.js";

// ── Loop ──────────────────────────────────────────────────────

export function startTpsLoop() {
  let lastTpsValue = -1;
  let tpsColorStr  = "§aTPS: 20";

  system.runInterval(() => {
    // Measure TPS
    const now    = Date.now();
    const diff   = now - lastTime;
    setLastTime(now);
    const sample = Math.min(20, 1000 / (diff / 20));
    tpsHistory.push(sample);
    setTpsSum(tpsSum + sample);
    if (tpsHistory.length > get("TPS_SAMPLE_SIZE")) {
      setTpsSum(tpsSum - tpsHistory.shift());
    }
    setTps(Math.round(tpsSum / tpsHistory.length));

    // Update actionbar
    if (tpsPlayers.size === 0) return;
    if (tps !== lastTpsValue) {
      tpsColorStr  = `${tps >= 18 ? "§a" : tps >= 12 ? "§e" : "§c"}TPS: ${tps}`;
      lastTpsValue = tps;
    }
    for (const player of world.getPlayers()) {
      if (tpsPlayers.has(player.id)) setActionbarSlot(player.id, "tps", tpsColorStr);
    }
  }, 20);
}

// ── Commands ──────────────────────────────────────────────────

export function registerTpsCommands(registry) {

  registry.registerCommand(
    {
      name: "mcbso:tps",
      description: "Toggle TPS display",
      permissionLevel: CommandPermissionLevel.Any,
      cheatsRequired: false,
    },
    (origin) => {
      const player = origin.initiator ?? origin.sourceEntity;
      if (!(player instanceof Player)) return fail(t("only_players"));
      if (tpsPlayers.has(player.id)) {
        tpsPlayers.delete(player.id);
        clearActionbarSlot(player.id, "tps");
        player.sendMessage(t("tps_disabled"));
      } else {
        tpsPlayers.add(player.id);
        player.sendMessage(t("tps_enabled"));
      }
      return success();
    }
  );

  registry.registerCommand(
    {
      name: "mcbso:tpsinfo",
      description: "Detailed TPS statistics",
      permissionLevel: CommandPermissionLevel.GameDirectors,
      cheatsRequired: false,
    },
    (origin) => {
      const player = origin.initiator ?? origin.sourceEntity;
      if (!(player instanceof Player)) return fail(t("only_players"));
      const color  = tps >= 18 ? "§a" : tps >= 12 ? "§e" : "§c";
      const status = tps >= 18
        ? t("tps_info_status_good")
        : tps >= 12
          ? t("tps_info_status_medium")
          : t("tps_info_status_critical");
      player.sendMessage(
        `${t("tps_info_header")}\n` +
        `TPS: ${color}${tps} §7(${status})\n` +
        `${t("tps_info_samples")}${tpsHistory.length}/${get("TPS_SAMPLE_SIZE")}\n` +
        `${t("tps_info_afk")}${afkPlayers.size}`
      );
      return success();
    }
  );
}
