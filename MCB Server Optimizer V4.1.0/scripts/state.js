/*
 * ============================================================
 *  state.js – Shared global state
 *
 *  All modules import their state from here.
 *  No module holds its own global variables that are needed
 *  by other modules → no circular imports.
 * ============================================================
 */

// ── Tick counter ──────────────────────────────────────────────
export let globalTick = 0;
export function tickGlobal() { globalTick++; }

// ── TPS ───────────────────────────────────────────────────────
export let tps        = 20;
export let tpsSum     = 0;
export let lastTime   = Date.now();
export const tpsHistory = [];
export const tpsPlayers = new Set(); // Set<playerId> – players with active TPS display

export function setTps(value)         { tps      = value; }
export function setTpsSum(value)      { tpsSum   = value; }
export function setLastTime(value)    { lastTime = value; }

// ── AFK ───────────────────────────────────────────────────────
export const playerLastPos  = new Map(); // Map<playerId, {x,y,z}>
export const playerAfkTicks = new Map(); // Map<playerId, ticks>
export const afkPlayers     = new Set(); // Set<playerId>

// ── SpawnLimiter ──────────────────────────────────────────────
export const killQueue           = new Map(); // Map<typeId, pendingKills>
export const spawnNotifyCooldown = new Map(); // Map<key, lastTick>

// ── ActionbarSlots ────────────────────────────────────────────
// Map<playerId, Map<slot, {text, expiresTick}>>
export const actionbarSlots = new Map();

// ── ClearLag ──────────────────────────────────────────────────
export let tickCounter = 0;
export function setTickCounter(value) { tickCounter = value; }

// ── Player cleanup (called by playerLeave) ────────────────────
// Imports all required Maps/Sets directly – no cross-module calls needed
export function cleanupPlayer(playerId) {
  actionbarSlots.delete(playerId);
  tpsPlayers.delete(playerId);
  playerLastPos.delete(playerId);
  playerAfkTicks.delete(playerId);
  afkPlayers.delete(playerId);
}
