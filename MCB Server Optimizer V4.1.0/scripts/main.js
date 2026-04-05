/*
 * ============================================================
 *  main.js – Entry Point
 *
 *  Initializes all modules in the correct order.
 *  Contains no own logic – orchestration only.
 *
 *  Module structure:
 *    config.js        – All configuration values (editable)
 *    state.js         – Shared global state
 *    util.js          – Stateless helper functions
 *    actionbar.js     – ActionbarManager (Slots + Render-Loop)
 *    tps.js           – TPS Monitor + mcbso:tps / mcbso:tpsinfo
 *    clearlag.js      – ClearLag Timer + mcbso:cleartime / mcbso:clearnow / mcbso:entities
 *    afk.js           – AFK Detection + mcbso:afklist
 *    spawnlimiter.js  – Spawn Limiter + Mob-Cap Warning
 *    ailod.js         – AI-LOD System + mcbso:lodinfo
 *    villager.js      – Villager Trade-Exempt (playerInteract + Polling)
 *
 *  Language:
 *    lang/i18n.js     – Language manager (t(), setLang(), getLang())
 *    lang/de_DE.js    – German strings
 *    lang/en_US.js    – English strings
 * ============================================================
 */

import { world, system } from "@minecraft/server";
import { tickGlobal }            from "./state.js";
import { initSettings }          from "./core/settings.js";
import { loadRuntimeLimits }     from "./core/ui.js";
import { startActionbarLoop }    from "./core/actionbar.js";
import { startTpsLoop }          from "./features/tps.js";
import { startClearLagLoop }     from "./features/clearlag.js";
import { startAfkLoop }          from "./features/afk.js";
import { startMobCapLoop, startSpawnLimiter } from "./features/spawnlimiter.js";
import { startAiLodLoop }                    from "./features/ailod.js";
import { startVillagerExempt }               from "./features/villager.js";
import { registerAllCommands, registerPlayerEvents } from "./core/commands.js";
import { initLang }              from "./lang/i18n.js";

// ── Global tick counter (runs immediately, independent of worldLoad) ──────
system.runInterval(tickGlobal, 1);

// ── Commands & Player events (registerable before worldLoad) ──────────────
registerAllCommands();
registerPlayerEvents();

// ── Feature loops start after worldLoad ───────────────────────────────────
world.afterEvents.worldLoad.subscribe(() => {
  initSettings();      // Must run first – all modules read settings.get()
  initLang();          // Load persisted language setting
  loadRuntimeLimits(); // Load saved mob limits
  startActionbarLoop();
  startTpsLoop();
  startClearLagLoop();
  startAfkLoop();
  startMobCapLoop();
  startSpawnLimiter();
  startAiLodLoop();
  startVillagerExempt();
});
