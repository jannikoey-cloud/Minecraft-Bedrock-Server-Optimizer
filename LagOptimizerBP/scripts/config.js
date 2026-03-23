/*
 * ============================================================
 *  Server Lag Optimizer – CONFIGURATION
 *  All configurable values are located in this file.
 *  Future: values can be read and overridden at runtime
 *  via the UI system (see CONFIG_META).
 * ============================================================
 */

// ──────────────────────────────────────────────
//  CLEARLAG
// ──────────────────────────────────────────────

/** Interval in ticks between automatic ClearLag runs.
 *  20 ticks = 1 second → 24000 = 20 minutes */
export const CLEAR_INTERVAL = 24000;

// ──────────────────────────────────────────────
//  MOB CAP WARNING
// ──────────────────────────────────────────────

/** Mob count in the Overworld at which OPs receive a warning. */
export const MOB_CAP_WARNING = 500;

/** Check interval for mob cap warning in ticks. */
export const MOB_CAP_CHECK_INTERVAL = 400;

// ──────────────────────────────────────────────
//  AFK DETECTION
// ──────────────────────────────────────────────

/** Ticks without movement until a player is considered AFK. (600 = 30s) */
export const AFK_THRESHOLD = 600;

/** Minimum movement distance in blocks to reset AFK status. */
export const AFK_MOVE_THRESHOLD = 0.5;

// ──────────────────────────────────────────────
//  ENTITY / SPAWN LIMITER
// ──────────────────────────────────────────────

/**
 * Per-type limit for loaded entities within a 16-block radius.
 * If a limit is exceeded, the newly spawned entity is killed.
 * Format: { "namespace:type": maxCount }
 */
export const ENTITY_LIMITS = {
  "minecraft:silverfish":       30,
  "minecraft:zombified_piglin": 30,
  "minecraft:zombie_pigman":    30,
  "minecraft:zombie":           30,
  "minecraft:slime":            30,
  "minecraft:skeleton":         30,
};

/** Threshold (as fraction of limit) at which an early warning appears. (0.8 = 80%) */
export const SPAWN_WARN_THRESHOLD = 0.8;

// ──────────────────────────────────────────────
//  ACTIONBAR / UI
// ──────────────────────────────────────────────

/** Ticks a spawn limit message remains visible in the actionbar. */
export const SPAWN_MSG_DURATION = 60;

/** Minimum tick distance between identical player notifications (anti-spam). */
export const NOTIFY_COOLDOWN_TICKS = 40;

/** Radius in blocks for local spawn limit notifications. */
export const SPAWN_NOTIFY_RADIUS = 64;

// ──────────────────────────────────────────────
//  TPS MONITOR
// ──────────────────────────────────────────────

/** Number of TPS samples for the moving average. */
export const TPS_SAMPLE_SIZE = 20;

// ──────────────────────────────────────────────
//  DIMENSIONS
// ──────────────────────────────────────────────

/** All dimensions considered during ClearLag and entity counting. */
export const DIMENSIONS = ["overworld", "nether", "the_end"];

// ──────────────────────────────────────────────
//  AI-LOD SYSTEM
// ──────────────────────────────────────────────

/**
 * Enable / disable the AI-LOD system.
 * false → system does not start, no tags are set,
 *         entities run with full vanilla AI.
 */
export const LOD_ENABLED = true;

/**
 * Distance thresholds for the three AI tiers (in blocks).
 *
 * Tier 1 (0 – LOD_TIER1_DIST):           Full AI, no restrictions
 * Tier 2 (LOD_TIER1_DIST – LOD_TIER2_DIST): Reduced update rate, short navigation
 * Tier 3 (LOD_TIER2_DIST+):              AI frozen, navigation disabled
 */
export const LOD_TIER1_DIST = 16;   // blocks – Tier 1 → 2 boundary
export const LOD_TIER2_DIST = 48;   // blocks – Tier 2 → 3 boundary

/** How often the LOD system checks all entities (in ticks). */
export const LOD_CHECK_INTERVAL = 20;

/**
 * Maximum xz_dist for navigation in Tier 2.
 * Entities in Tier 2 may only calculate short paths.
 */
export const LOD_TIER2_NAV_DIST = 4;

/**
 * Tag set on frozen entities (Tier 3).
 * Can be used externally (e.g. for Behavior Pack conditions).
 */
export const LOD_FROZEN_TAG = "ai_frozen";

/**
 * Entities with this tag are completely ignored by the LOD system.
 * Useful for boss entities, event mobs, etc.
 */
export const LOD_EXEMPT_TAG = "ai_exempt";

// ──────────────────────────────────────────────
//  CONFIG META  (for future UI system)
//  Describes each config value for runtime
//  UI-controlled configuration.
// ──────────────────────────────────────────────

/**
 * Metadata table of all configurable entries.
 * Structure: { key, label, description, type, min?, max?, default }
 *
 * The UI system can read this table to automatically
 * generate forms / sliders.
 */
export const CONFIG_META = [
  {
    key:         "CLEAR_INTERVAL",
    label:       "ClearLag Interval",
    description: "Ticks between automatic ClearLag runs (20 ticks = 1s)",
    type:        "integer",
    min:         2400,
    max:         144000,
    default:     24000,
  },
  {
    key:         "MOB_CAP_WARNING",
    label:       "MobCap Warning Threshold",
    description: "Mob count in the Overworld at which OPs are warned",
    type:        "integer",
    min:         50,
    max:         5000,
    default:     500,
  },
  {
    key:         "MOB_CAP_CHECK_INTERVAL",
    label:       "MobCap Check Interval",
    description: "Ticks between mob cap checks",
    type:        "integer",
    min:         20,
    max:         2000,
    default:     400,
  },
  {
    key:         "AFK_THRESHOLD",
    label:       "AFK Threshold",
    description: "Ticks without movement until a player is considered AFK (20 ticks = 1s)",
    type:        "integer",
    min:         100,
    max:         12000,
    default:     600,
  },
  {
    key:         "AFK_MOVE_THRESHOLD",
    label:       "AFK Move Threshold",
    description: "Minimum distance in blocks to reset AFK status",
    type:        "float",
    min:         0.1,
    max:         5.0,
    default:     0.5,
  },
  {
    key:         "SPAWN_WARN_THRESHOLD",
    label:       "Spawn Warning Threshold",
    description: "Fraction of entity limit at which an early warning appears (0.0–1.0)",
    type:        "float",
    min:         0.5,
    max:         0.95,
    default:     0.8,
  },
  {
    key:         "SPAWN_MSG_DURATION",
    label:       "Spawn Message Duration",
    description: "Ticks a spawn limit message remains in the actionbar",
    type:        "integer",
    min:         20,
    max:         400,
    default:     60,
  },
  {
    key:         "NOTIFY_COOLDOWN_TICKS",
    label:       "Notification Cooldown",
    description: "Minimum ticks between identical player messages (anti-spam)",
    type:        "integer",
    min:         20,
    max:         400,
    default:     40,
  },
  {
    key:         "SPAWN_NOTIFY_RADIUS",
    label:       "Spawn Notification Radius",
    description: "Radius in blocks for local spawn limit notifications",
    type:        "integer",
    min:         16,
    max:         256,
    default:     64,
  },
  {
    key:         "TPS_SAMPLE_SIZE",
    label:       "TPS Sample Size",
    description: "Number of TPS measurements for the moving average",
    type:        "integer",
    min:         5,
    max:         100,
    default:     20,
  },
  {
    key:         "LOD_TIER1_DIST",
    label:       "AI-LOD Tier 1 Distance",
    description: "Blocks to nearest player: Full AI (0 to this value)",
    type:        "integer",
    min:         8,
    max:         32,
    default:     16,
  },
  {
    key:         "LOD_TIER2_DIST",
    label:       "AI-LOD Tier 2 Distance",
    description: "Blocks to nearest player: Reduced AI (Tier 1 to this value)",
    type:        "integer",
    min:         24,
    max:         96,
    default:     48,
  },
  {
    key:         "LOD_CHECK_INTERVAL",
    label:       "AI-LOD Check Interval",
    description: "Ticks between LOD checks (20 = every second)",
    type:        "integer",
    min:         10,
    max:         100,
    default:     20,
  },
  {
    key:         "LOD_TIER2_NAV_DIST",
    label:       "AI-LOD Tier 2 Navigation Distance",
    description: "Maximum xz_dist for navigation in Tier 2 (short paths)",
    type:        "integer",
    min:         2,
    max:         16,
    default:     4,
  },
];
