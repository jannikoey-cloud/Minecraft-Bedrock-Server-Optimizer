/*
 * ============================================================
 *  actionbar.js – ActionbarManager
 *
 *  Manages named "slots" in the actionbar per player.
 *  Other modules write to their slot via setActionbarSlot(),
 *  this manager renders everything together in one interval.
 *
 *  Slots:  "tps"   – permanent (TPS Monitor)
 *          "spawn" – time-limited (SpawnLimiter messages)
 *
 *  Output example:  §aTPS: 20  §7|  §c[Limit] zombie (35/30)
 *
 *  Cross-addon bridge via globalThis:
 *    Other addons (e.g. CombatTag) can use these functions
 *    without a direct import – cross-addon imports are not
 *    possible in Bedrock.
 *
 *    Usage in external addon:
 *      const set   = globalThis.__lagopt_setActionbarSlot;
 *      const clear = globalThis.__lagopt_clearActionbarSlot;
 *      if (set) set(playerId, "combat", "§cCombat: 28s", 560);
 *      else     player.onScreenDisplay.setActionBar("§cCombat: 28s");
 * ============================================================
 */

import { world, system } from "@minecraft/server";
import { actionbarSlots, globalTick } from "../state.js";

// ── Public API ────────────────────────────────────────────────

/**
 * Sets a slot in a player's actionbar.
 * @param {string} playerId
 * @param {string} slot          - Unique slot name ("tps", "spawn", …)
 * @param {string} text          - Text to display (with §-color codes)
 * @param {number} durationTicks - -1 = permanent, otherwise expiry tick
 */
export function setActionbarSlot(playerId, slot, text, durationTicks = -1) {
  if (!actionbarSlots.has(playerId)) actionbarSlots.set(playerId, new Map());
  actionbarSlots.get(playerId).set(slot, {
    text,
    expiresTick: durationTicks === -1 ? -1 : globalTick + durationTicks
  });
}

/**
 * Clears a slot from a player's actionbar.
 * @param {string} playerId
 * @param {string} slot
 */
export function clearActionbarSlot(playerId, slot) {
  actionbarSlots.get(playerId)?.delete(slot);
}

globalThis.__lagopt_setActionbarSlot   = setActionbarSlot;
globalThis.__lagopt_clearActionbarSlot = clearActionbarSlot;

// ── Render loop ───────────────────────────────────────────────

/**
 * Starts the actionbar render loop.
 * Must be called after worldLoad.
 */
export function startActionbarLoop() {
  system.runInterval(() => {
    for (const player of world.getPlayers()) {
      const slots = actionbarSlots.get(player.id);
      if (!slots || slots.size === 0) continue;

      const parts = [];
      for (const [slot, entry] of slots) {
        if (entry.expiresTick !== -1 && globalTick >= entry.expiresTick) {
          slots.delete(slot);
          continue;
        }
        parts.push(entry.text);
      }

      if (parts.length === 0) continue;
      try { player.onScreenDisplay.setActionBar(parts.join("  §7|  ")); } catch {}
    }
  }, 20);
}
