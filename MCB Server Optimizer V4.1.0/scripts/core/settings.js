/*
 * ============================================================
 *  settings.js – Runtime configuration
 *
 *  Combines static defaults from config.js with values
 *  saved at runtime via world.getDynamicProperty().
 *
 *  Since config.js cannot be overwritten at runtime,
 *  UI changes are stored as DynamicProperties and are
 *  immediately available via get() on the next tick.
 *
 *  All feature modules read values via settings.get(key)
 *  instead of directly from config.js – so UI changes take
 *  effect without a server restart.
 *
 *  Persistence: DynamicProperties survive server restarts
 *  as they are stored in the world.
 * ============================================================
 */

import { world } from "@minecraft/server";
import * as Defaults from "../config.js";

const PROP_PREFIX = "sal_cfg_"; // Prefix for all DynamicProperty keys

// ── Internal cache (avoids getDynamicProperty() on every get()) ───────────
// Populated once on startup, updated on every set().
const cache = new Map();

/**
 * Initializes the cache from DynamicProperties + config.js defaults.
 * Must be called once on startup (after worldLoad).
 */
export function initSettings() {
  for (const meta of Defaults.CONFIG_META) {
    const stored = world.getDynamicProperty(PROP_PREFIX + meta.key);
    // Stored value present and correct type → use it
    // Otherwise use default from config.js
    if (stored !== undefined && stored !== null) {
      cache.set(meta.key, _coerce(stored, meta.type));
    } else {
      cache.set(meta.key, Defaults[meta.key]);
    }
  }

  // Boolean fields (LOD_ENABLED) separately – not in CONFIG_META
  const lodEnabled = world.getDynamicProperty(PROP_PREFIX + "LOD_ENABLED");
  cache.set("LOD_ENABLED", lodEnabled !== undefined ? Boolean(lodEnabled) : Defaults.LOD_ENABLED);

  // Mob limits are loaded by ui.js itself on module load.
}

/**
 * Returns the current value of a config key.
 * Reads from cache – O(1), no DynamicProperty lookup.
 * @param {string} key  – e.g. "CLEAR_INTERVAL"
 * @returns {any}
 */
export function get(key) {
  return cache.has(key) ? cache.get(key) : Defaults[key];
}

/**
 * Sets a config value at runtime and saves it persistently.
 * @param {string} key
 * @param {any}    value
 */
export function set(key, value) {
  cache.set(key, value);
  try {
    // DynamicProperties only accept string | number | boolean
    world.setDynamicProperty(PROP_PREFIX + key, value);
  } catch (e) {
    // Fallback: save as string
    world.setDynamicProperty(PROP_PREFIX + key, String(value));
  }
}

/**
 * Resets all values to config.js defaults.
 */
export function resetAll() {
  for (const meta of Defaults.CONFIG_META) {
    set(meta.key, Defaults[meta.key]);
  }
  set("LOD_ENABLED", Defaults.LOD_ENABLED);
}

/**
 * Returns all current values as a plain object (for UI).
 * @returns {Object}
 */
export function getAll() {
  const result = {};
  for (const [k, v] of cache) result[k] = v;
  return result;
}

// ── Internal helper ───────────────────────────────────────────

function _coerce(value, type) {
  if (type === "integer") return Math.round(Number(value));
  if (type === "float")   return Number(value);
  if (type === "boolean") return Boolean(value);
  return value;
}
