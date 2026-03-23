/*
 * ============================================================
 *  util.js – Shared helper functions
 *
 *  Small, stateless functions used by multiple modules.
 *  No imports from state.js or other modules
 *  → no circular dependencies possible.
 * ============================================================
 */

import { CustomCommandStatus } from "@minecraft/server";

/**
 * Formats ticks as a human-readable time string.
 * @param {number} ticks
 * @returns {string}  e.g. "1m 30s"
 */
export function formatTime(ticks) {
  const seconds = Math.floor(ticks / 20);
  const minutes = Math.floor(seconds / 60);
  const sec     = seconds % 60;
  return `${minutes}m ${sec}s`;
}

/** Returns a command failure object. */
export function fail(message) {
  return { status: CustomCommandStatus.Failure, message };
}

/** Returns a command success object. */
export function success() {
  return { status: CustomCommandStatus.Success };
}
