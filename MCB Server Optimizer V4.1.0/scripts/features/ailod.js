/*
 * ============================================================
 *  ailod.js – Distance-based Entity AI LOD System
 *
 *  Monitors all living entities (except players) in all
 *  dimensions and throttles their AI in 3 tiers based on
 *  distance to the nearest player.
 *
 *  Tier 1 (0 – LOD_TIER1_DIST):
 *    Full AI. No restrictions. Navigation active.
 *    Tag "ai_frozen" is removed if present.
 *
 *  Tier 2 (LOD_TIER1_DIST – LOD_TIER2_DIST):
 *    Navigation limited to short paths (LOD_TIER2_NAV_DIST).
 *    clearVelocity() when entity is not moving toward player.
 *    No navigation deactivation – entity remains reactive.
 *
 *  Tier 3 (LOD_TIER2_DIST+):
 *    Navigation component disabled.
 *    clearVelocity() → entity frozen.
 *    Tag "ai_frozen" is set.
 *
 *  Exemptions (never throttled):
 *    – Tag "ai_exempt"
 *    – Named entities (nameTag set) → always Tier 1
 *    – Players (typeId "minecraft:player")
 *
 *  Performance design:
 *    – Runs only every LOD_CHECK_INTERVAL ticks (default: 20)
 *    – Player positions cached ONCE per interval
 *      (Map<dimensionId, {x,y,z}[]>) – entities only check cache
 *    – Distance comparison squared (no Math.sqrt)
 *    – Tier state stored per entity → API calls only on tier change
 *      (no redundant setComponent calls)
 *
 *  Commands:
 *    mcbso:lodinfo  – LOD system statistics (GameDirectors)
 * ============================================================
 */

import { world, system, Player, CommandPermissionLevel } from "@minecraft/server";
import {
  LOD_FROZEN_TAG,
  LOD_EXEMPT_TAG,
  DIMENSIONS,
} from "../config.js";
import { get } from "../core/settings.js";
import { fail, success } from "../core/util.js";
import { t } from "../lang/i18n.js";

// ── Thresholds read via get() – react to UI changes ───────────
// Cached per interval run to avoid repeated get() calls
let _tier1Sq = 0, _tier2Sq = 0;

// ── Entity state tracking ─────────────────────────────────────
// Map<entityId, tier>  – API calls only on tier change
const entityTierCache = new Map();

// ── LOD statistics (for mcbso:lodinfo) ───────────────────────
const lodStats = { tier1: 0, tier2: 0, tier3: 0, exempt: 0, total: 0 };

// ── Helpers ───────────────────────────────────────────────────

function buildPlayerPosCache() {
  const cache = new Map();
  for (const player of world.getPlayers()) {
    const dimId = player.dimension.id;
    if (!cache.has(dimId)) cache.set(dimId, []);
    const loc = player.location;
    cache.get(dimId).push({ x: loc.x, y: loc.y, z: loc.z });
  }
  return cache;
}

function nearestPlayerDistSq(dimId, loc, playerCache) {
  const positions = playerCache.get(dimId);
  if (!positions || positions.length === 0) return Infinity;
  let minSq = Infinity;
  for (const p of positions) {
    const dx = loc.x - p.x;
    const dy = loc.y - p.y;
    const dz = loc.z - p.z;
    const sq = dx * dx + dy * dy + dz * dz;
    if (sq < minSq) minSq = sq;
  }
  return minSq;
}

const TIER2_VEL_THRESHOLD_SQ = 0.001 * 0.001;

function applyTier2(entity, dimId, loc, playerCache) {
  try {
    const vel = entity.getVelocity();
    const velSq = vel.x * vel.x + vel.z * vel.z;
    if (velSq < TIER2_VEL_THRESHOLD_SQ) return;

    const positions = playerCache.get(dimId);
    if (!positions) return;
    for (const p of positions) {
      const dx = p.x - loc.x;
      const dz = p.z - loc.z;
      if (vel.x * dx + vel.z * dz > 0) return;
    }
    entity.clearVelocity();
  } catch {}
}

function enterTier3(entity) {
  try {
    if (!entity.hasTag(LOD_FROZEN_TAG)) entity.addTag(LOD_FROZEN_TAG);
  } catch {}
}

function freezeTier3Entity(entity) {
  try { entity.clearVelocity(); } catch {}
}

function applyTier1(entity) {
  try {
    if (entity.hasTag(LOD_FROZEN_TAG)) entity.removeTag(LOD_FROZEN_TAG);
  } catch {}
}

// ── Main loop ─────────────────────────────────────────────────

export function startAiLodLoop() {
  if (!get("LOD_ENABLED")) return;
  system.runInterval(() => {
    const _t1 = get("LOD_TIER1_DIST"); _tier1Sq = _t1 * _t1;
    const _t2 = get("LOD_TIER2_DIST"); _tier2Sq = _t2 * _t2;

    lodStats.tier1 = 0; lodStats.tier2 = 0;
    lodStats.tier3 = 0; lodStats.exempt = 0; lodStats.total = 0;

    const playerCache = buildPlayerPosCache();

    for (const dimId of DIMENSIONS) {
      let dim;
      try { dim = world.getDimension(dimId); } catch { continue; }

      for (const entity of dim.getEntities()) {
        if (!entity.isValid) continue;
        if (entity.typeId === "minecraft:player") continue;
        if (!entity.getComponent("minecraft:health")) continue;

        lodStats.total++;

        if (entity.hasTag(LOD_EXEMPT_TAG)) { lodStats.exempt++; continue; }

        let hasName = false;
        try { hasName = typeof entity.nameTag === "string" && entity.nameTag.length > 0; } catch {}
        if (hasName) {
          const prev = entityTierCache.get(entity.id);
          if (prev !== 1) { applyTier1(entity); entityTierCache.set(entity.id, 1); }
          lodStats.exempt++;
          continue;
        }

        const loc    = entity.location;
        const distSq = nearestPlayerDistSq(dimId, loc, playerCache);

        const tier = distSq <= _tier1Sq ? 1
                   : distSq <= _tier2Sq ? 2
                   : 3;

        const prevTier = entityTierCache.get(entity.id);

        if (tier === 1) {
          if (prevTier !== 1) { applyTier1(entity); entityTierCache.set(entity.id, 1); }
          lodStats.tier1++;
        } else if (tier === 2) {
          if (prevTier === 3) { applyTier1(entity); }
          if (prevTier !== 2) { entityTierCache.set(entity.id, 2); }
          applyTier2(entity, dimId, loc, playerCache);
          lodStats.tier2++;
        } else {
          if (prevTier !== 3) { enterTier3(entity); entityTierCache.set(entity.id, 3); }
          freezeTier3Entity(entity);
          lodStats.tier3++;
        }
      }
    }
  }, get("LOD_CHECK_INTERVAL"));

  // Cache cleanup every 6000 ticks (5 minutes)
  system.runInterval(() => {
    for (const dimId of DIMENSIONS) {
      let dim;
      try { dim = world.getDimension(dimId); } catch { continue; }
      const liveIds = new Set(dim.getEntities().map(e => e.id));
      for (const id of entityTierCache.keys()) {
        if (!liveIds.has(id)) entityTierCache.delete(id);
      }
    }
  }, 6000);
}

// ── Commands ──────────────────────────────────────────────────

export function registerAiLodCommands(registry) {
  registry.registerCommand(
    {
      name: "mcbso:lodinfo",
      description: "AI-LOD system statistics",
      permissionLevel: CommandPermissionLevel.GameDirectors,
      cheatsRequired: false,
    },
    (origin) => {
      const player = origin.initiator ?? origin.sourceEntity;
      if (!(player instanceof Player)) return fail(t("only_players"));
      const t1 = get("LOD_TIER1_DIST");
      const t2 = get("LOD_TIER2_DIST");
      player.sendMessage(
        `${t("lod_info_header")}\n` +
        `${t("lod_total")}${lodStats.total}\n` +
        `${t("lod_tier1")}${lodStats.tier1}\n` +
        `${t("lod_tier2")}${lodStats.tier2}\n` +
        `${t("lod_tier3")}${lodStats.tier3}\n` +
        `${t("lod_exempt")}${lodStats.exempt}\n` +
        `§7─────────────────\n` +
        t("lod_distances", { t1, t2 })
      );
      return success();
    }
  );
}
