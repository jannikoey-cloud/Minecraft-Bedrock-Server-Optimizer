/*
 * ============================================================
 *  villager.js – Villager Trade-Exempt System
 *
 *  Grants villagers that are being traded with or recently
 *  traded with the "ai_exempt" tag for 30 seconds.
 *  The LOD system skips entities with this tag entirely
 *  → trading villagers keep full AI during trading.
 *
 *  Two-channel approach (combined for maximum reliability):
 *
 *  Channel 1 – playerInteract event:
 *    Fires when a player clicks a villager.
 *    Sets ai_exempt immediately before the trade screen opens.
 *    Reliable but also fires for non-trade interactions
 *    (e.g. feeding a baby) → conservative, not a problem.
 *
 *  Channel 2 – Component polling (every 20 ticks):
 *    Checks if minecraft:trade_table component is active.
 *    Catches cases where a trade was started without playerInteract
 *    (e.g. via command, other addon).
 *    Also renews the exempt timer while the trade is active.
 *
 *  Timer mechanism:
 *    No system.runTimeout per entity – instead a
 *    Map<entityId, expireTick> stores the expiry tick.
 *    The polling loop cleans up expired tags itself.
 * ============================================================
 */

import { world, system } from "@minecraft/server";
import { LOD_EXEMPT_TAG } from "../config.js";
import { globalTick } from "../state.js";

// Duration in ticks that ai_exempt stays set after trade ends
// 30 seconds = 600 ticks
const TRADE_EXEMPT_DURATION = 600;

// Map<entityId, expireAtTick>
const exemptExpiry = new Map();

// ── Helpers ───────────────────────────────────────────────────

function grantExempt(entity) {
  if (!entity.isValid) return;
  exemptExpiry.set(entity.id, globalTick + TRADE_EXEMPT_DURATION);
  try {
    if (!entity.hasTag(LOD_EXEMPT_TAG)) entity.addTag(LOD_EXEMPT_TAG);
  } catch {}
}

function revokeExempt(entity) {
  exemptExpiry.delete(entity.id);
  try {
    if (entity.isValid && entity.hasTag(LOD_EXEMPT_TAG))
      entity.removeTag(LOD_EXEMPT_TAG);
  } catch {}
}

// ── Channel 1: playerInteract event ──────────────────────────

function startInteractListener() {
  world.afterEvents.playerInteractWithEntity.subscribe(ev => {
    const entity = ev.target;
    if (!entity.isValid) return;
    if (entity.typeId !== "minecraft:villager_v2") return;

    // system.run required – afterEvents is read-only context
    system.run(() => { grantExempt(entity); });
  });
}

// ── Channel 2: Component polling + timer cleanup ───────────────

function startPollingLoop() {
  system.runInterval(() => {
    for (const dimId of ["overworld", "nether", "the_end"]) {
      let dim;
      try { dim = world.getDimension(dimId); } catch { continue; }

      for (const entity of dim.getEntities({ type: "minecraft:villager_v2" })) {
        if (!entity.isValid) continue;

        let trading = false;
        try {
          trading = !!entity.getComponent("minecraft:trade_table");
        } catch {}

        if (trading) {
          grantExempt(entity);
        } else {
          const expiry = exemptExpiry.get(entity.id);
          if (expiry !== undefined && globalTick >= expiry) {
            revokeExempt(entity);
          }
        }
      }
    }

    // Clean up stale entries from despawned entities
    for (const [id, expiry] of exemptExpiry) {
      if (globalTick >= expiry + 200) exemptExpiry.delete(id); // 10s buffer
    }
  }, 20);
}

// ── Public API ────────────────────────────────────────────────

export function startVillagerExempt() {
  startInteractListener();
  startPollingLoop();
}
