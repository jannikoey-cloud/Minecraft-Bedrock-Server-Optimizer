/*
 * ============================================================
 *  commands.js – Global command registration & player events
 *
 *  Registers all feature commands from their respective modules
 *  in the startup hook and manages playerJoin/playerLeave events.
 *
 *  mcbso:help is defined here as it spans all features.
 *  mcbso:lang is defined here as it is a global setting.
 * ============================================================
 */

import { world, system, Player, CommandPermissionLevel } from "@minecraft/server";
import { cleanupPlayer } from "../state.js";
import { fail, success } from "./util.js";
import { t, setLang, getLang, AVAILABLE_LANGS } from "../lang/i18n.js";
import { registerTpsCommands }      from "../features/tps.js";
import { registerClearLagCommands } from "../features/clearlag.js";
import { registerAfkCommands }      from "../features/afk.js";
import { registerAiLodCommands }    from "../features/ailod.js";
import { registerSettingsCommand }  from "./ui.js";

// ── Startup: register all commands ────────────────────────────

export function registerAllCommands() {
  system.beforeEvents.startup.subscribe(({ customCommandRegistry }) => {
    registerTpsCommands(customCommandRegistry);
    registerClearLagCommands(customCommandRegistry);
    registerAfkCommands(customCommandRegistry);
    registerAiLodCommands(customCommandRegistry);
    registerSettingsCommand(customCommandRegistry);

    // ── mcbso:help ────────────────────────────────────────────
    customCommandRegistry.registerCommand(
      {
        name: "mcbso:help",
        description: "Show all MCBSO commands",
        permissionLevel: CommandPermissionLevel.Any,
        cheatsRequired: false,
      },
      (origin) => {
        const player = origin.initiator ?? origin.sourceEntity;
        if (!(player instanceof Player)) return fail(t("only_players"));
        // OPT: built at call-time so language is always current
        const helpText = [
          t("help_header"),
          t("help_separator"),
          t("help_tps"),
          t("help_cleartime"),
          t("help_entities"),
          t("help_help"),
          t("help_separator"),
          t("help_op_header"),
          t("help_tpsinfo"),
          t("help_clearnow"),
          t("help_afklist"),
          t("help_lodinfo"),
          t("help_settings"),
          t("help_lang"),
        ].join("\n");
        player.sendMessage(helpText);
        return success();
      }
    );

    // ── mcbso:lang ────────────────────────────────────────────
    customCommandRegistry.registerCommand(
      {
        name: "mcbso:lang",
        description: "Change addon language (en_US / de_DE) or show current",
        permissionLevel: CommandPermissionLevel.GameDirectors,
        cheatsRequired: false,
      },
      (origin, args) => {
        const player = origin.initiator ?? origin.sourceEntity;
        if (!(player instanceof Player)) return fail(t("only_players"));
        // args may be undefined or empty – treat as "show current"
        const code = (args && typeof args.language === "string")
          ? args.language.trim()
          : "";
        if (!code) {
          player.sendMessage(
            t("lang_current") + getLang() +
            `\nAvailable: ${AVAILABLE_LANGS.join(", ")}`
          );
          return success();
        }
        if (!setLang(code)) {
          return fail(t("lang_invalid"));
        }
        player.sendMessage(t("lang_changed"));
        return success();
      }
    );
  });
}

// ── Player events ─────────────────────────────────────────────

export function registerPlayerEvents() {
  world.afterEvents.playerJoin.subscribe(_ev => {
    // Join/Leave messages are shown by vanilla
  });

  world.afterEvents.playerLeave.subscribe(ev => {
    cleanupPlayer(ev.playerId);
  });
}
