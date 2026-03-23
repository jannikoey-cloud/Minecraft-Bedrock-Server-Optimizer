/*
 * ============================================================
 *  spawnlimiter.js – Farm Limit & Mob-Cap Warning
 *
 *  Monitors entity spawns and kills excess entities
 *  once a configurable per-type limit is exceeded.
 *  Outputs warning and kill messages to the actionbar.
 *
 *  Fix: entity.kill() from afterEvent must be wrapped in system.run().
 *       Fallback: runCommand("kill @e[...]") if entity.kill() fails.
 * ============================================================
 */

import { world, system } from "@minecraft/server";
import { ENTITY_LIMITS, MOB_CAP_CHECK_INTERVAL } from "../config.js";
import { get } from "../core/settings.js";
import { getRuntimeLimits } from "../core/ui.js";
import { globalTick, killQueue, spawnNotifyCooldown } from "../state.js";
import { setActionbarSlot } from "../core/actionbar.js";
import { t } from "../lang/i18n.js";

// TRACKED_TYPES is built dynamically from runtimeLimits
// getRuntimeLimits() returns the current map (including UI changes)
function getTrackedTypes() { return getRuntimeLimits(); }

// ── Helpers ───────────────────────────────────────────────────

function notifyOps(message) {
  for (const p of world.getPlayers())
    if (p.permissionLevel >= 1) p.sendMessage(message);
}

function checkAndSetCooldown(key) {
  const last = spawnNotifyCooldown.get(key) || 0;
  if (globalTick - last < get("NOTIFY_COOLDOWN_TICKS")) return false;
  spawnNotifyCooldown.set(key, globalTick);
  return true;
}

function countNearbyEntities(dimension, location, typeId) {
  try {
    return dimension.getEntities({ type: typeId, location, maxDistance: 16 }).length;
  } catch { return 0; }
}

function notifySpawnLimit(snapDimId, snapLoc, message) {
  const radius = get("SPAWN_NOTIFY_RADIUS");
  const dur    = get("SPAWN_MSG_DURATION");
  for (const p of world.getPlayers()) {
    const isOp    = p.permissionLevel >= 1;
    const sameDim = p.dimension.id === snapDimId;
    const nearby  = sameDim &&
      Math.abs(p.location.x - snapLoc.x) <= radius &&
      Math.abs(p.location.y - snapLoc.y) <= radius &&
      Math.abs(p.location.z - snapLoc.z) <= radius;
    if (isOp || nearby) setActionbarSlot(p.id, "spawn", message, dur);
  }
}

// ── Mob Cap Warning ───────────────────────────────────────────

export function startMobCapLoop() {
  system.runInterval(() => {
    try {
      const dim    = world.getDimension("overworld");
      const all    = dim.getEntities();
      let mobCount = 0;
      for (const entity of all) {
        const tp = entity.typeId;
        if (tp !== "minecraft:item" && tp !== "minecraft:xp_orb" && tp !== "minecraft:player")
          mobCount++;
      }
      if (mobCount > get("MOB_CAP_WARNING"))
        notifyOps(t("mobcap_warning", { count: mobCount }));
    } catch {}
  }, MOB_CAP_CHECK_INTERVAL);
}

// ── Spawn Event ───────────────────────────────────────────────

export function startSpawnLimiter() {
  world.afterEvents.entitySpawn.subscribe(ev => {
    const entity = ev.entity;
    if (!entity.isValid) return;

    const type   = entity.typeId;
    const limits = getTrackedTypes();
    if (!limits.has(type)) return;

    const limit     = limits.get(type);
    const snapLoc   = { x: entity.location.x, y: entity.location.y, z: entity.location.z };
    const snapDimId = entity.dimension.id;
    const snapDim   = entity.dimension;

    const realCount      = countNearbyEntities(snapDim, snapLoc, type);
    const queued         = killQueue.get(type) || 0;
    const effectiveCount = realCount - queued;

    // Warning at configured threshold
    const warnThreshold = Math.floor(limit * get("SPAWN_WARN_THRESHOLD"));
    if (effectiveCount >= warnThreshold && effectiveCount < limit) {
      if (checkAndSetCooldown(`warn_${type}`)) {
        notifyOps(t("spawn_warn", { type, count: effectiveCount, limit }));
      }
    }

    // Limit exceeded → kill
    if (effectiveCount > limit) {
      killQueue.set(type, queued + 1);

      system.run(() => {
        const q = killQueue.get(type) || 1;
        if (q <= 1) killQueue.delete(type);
        else        killQueue.set(type, q - 1);

        if (!entity.isValid) return;

        let killed = false;
        try {
          entity.kill();
          killed = true;
        } catch {
          try {
            snapDim.runCommand(
              `kill @e[type=${type},x=${Math.floor(snapLoc.x)},y=${Math.floor(snapLoc.y)},z=${Math.floor(snapLoc.z)},r=2,c=1]`
            );
            killed = true;
          } catch {}
        }

        if (killed && checkAndSetCooldown(`kill_${type}`)) {
          const shortType = type.replace("minecraft:", "");
          notifySpawnLimit(snapDimId, snapLoc, `§c[Limit] §f${shortType} §8(${effectiveCount}/${limit})`);
        }
      });
    }
  });
}
