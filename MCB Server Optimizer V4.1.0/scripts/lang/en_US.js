/*
 * ============================================================
 *  lang/en_US.js – English (United States)
 * ============================================================
 */

export default {
  // ── General ───────────────────────────────────────────────
  only_players:        "Only available for players",
  lang_changed:        "§a[MCBSO] Language set to: English",
  lang_invalid:        "§c[MCBSO] Unknown language. Available: de_DE, en_US, fr_FR, es_ES, tr_TR, pl_PL, pt_BR, ru_RU, zh_CN, ja_JP, it_IT, nl_NL",
  lang_current:        "§e[MCBSO] Current language: ",

  // ── Help ──────────────────────────────────────────────────
  help_header:         "§e§lMCBSO – Server Optimizer §r§7(only visible to you)",
  help_separator:      "§7─────────────────────────────────",
  help_tps:            "§f/mcbso:tps §7– Toggle TPS display",
  help_cleartime:      "§f/mcbso:cleartime §7– Show next ClearLag",
  help_entities:       "§f/mcbso:entities §7– Count entities in all dimensions",
  help_help:           "§f/mcbso:help §7– Show this help",
  help_op_header:      "§c§lOP Commands:",
  help_tpsinfo:        "§f/mcbso:tpsinfo §7– Detailed TPS statistics",
  help_clearnow:       "§f/mcbso:clearnow §7– Run ClearLag immediately",
  help_afklist:        "§f/mcbso:afklist §7– Show AFK players with duration",
  help_lodinfo:        "§f/mcbso:lodinfo §7– AI-LOD system statistics",
  help_settings:       "§f/mcbso:settings §7– Open settings menu",
  help_lang:           "§f/mcbso:lang §7– Change language",

  // ── TPS ───────────────────────────────────────────────────
  tps_enabled:         "§aTPS display enabled",
  tps_disabled:        "§cTPS display disabled",
  tps_info_header:     "§eTPS Info\n§7─────────────────",
  tps_info_status_good:     "Good",
  tps_info_status_medium:   "Medium",
  tps_info_status_critical: "Critical",
  tps_info_samples:    "§7Samples: §f",
  tps_info_afk:        "§7AFK Players: §f",

  // ── ClearLag ──────────────────────────────────────────────
  clearlag_warn_1min:  "§6[ClearLag] §7Items will be deleted in §f1 minute",
  clearlag_warn_30s:   "§e[ClearLag] §7Items will be deleted in §f30 seconds",
  clearlag_warn_10s:   "§c[ClearLag] §7Items will be deleted in §f10 seconds",
  clearlag_removed:    "§7removed",
  clearlag_items:      "§6[ClearLag] §f{items} Items §7and §f{xp} XP Orbs §7removed",
  clearlag_next:       "§6[ClearLag] §7Next clear in §f",
  clearlag_manual:     "§6[ClearLag] §fManual execution by §e",

  // ── Entities ──────────────────────────────────────────────
  entities_header:     "§eEntity Counter (all dimensions)\n§7─────────────────────",
  entities_total:      "§7Total: §f",
  entities_items:      "§7| Items: §f",
  entities_xp:         "§7| XP: §f",
  entities_mobs:       "§7| Mobs: §f",

  // ── AFK ───────────────────────────────────────────────────
  afk_none:            "§e[AFK] §7No AFK players currently",
  afk_list_header:     "§e[AFK] §7AFK Players",

  // ── MobCap ────────────────────────────────────────────────
  mobcap_warning:      "§c[MobCap] §fOverworld has §c{count} §fMobs loaded!",

  // ── SpawnLimiter ──────────────────────────────────────────
  spawn_warn:          "§e[SpawnWarn] §f{type} §7approaching limit §f({count}/{limit})",

  // ── AI-LOD ────────────────────────────────────────────────
  lod_info_header:     "§eAI-LOD Info\n§7─────────────────",
  lod_total:           "§7Entities total: §f",
  lod_tier1:           "§aTier 1 §7(full AI):     §f",
  lod_tier2:           "§eTier 2 §7(throttled):   §f",
  lod_tier3:           "§cTier 3 §7(frozen):      §f",
  lod_exempt:          "§7Exempt:                §f",
  lod_distances:       "§7Distances: §fTier1 <{t1}b  §fTier2 <{t2}b  §fTier3 {t2}b+",

  // ── Settings UI ───────────────────────────────────────────
  ui_main_title:       "MCBSO Settings",
  ui_main_body:        "Choose a category.",
  ui_btn_clearlag:     "ClearLag\nInterval and warnings",
  ui_btn_afk:          "AFK Detection\nThresholds and timing",
  ui_btn_spawn:        "Spawn Limiter\nLimits and notifications",
  ui_btn_lod:          "AI-LOD System\nDistances and toggle",
  ui_btn_tps:          "TPS Monitor\nSample size",
  ui_btn_reset:        "Reset All\nRestore default values",
  ui_btn_lang:         "Language\nChange addon language",

  ui_clearlag_title:   "ClearLag Settings",
  ui_clearlag_iv:      "Interval Ticks (Current: {val})",
  ui_clearlag_cap:     "MobCap Warning Threshold (Current: {val})",
  ui_clearlag_chk:     "MobCap Check Interval Ticks (Current: {val})",
  ui_clearlag_cd:      "Notification Cooldown Ticks (Current: {val})",
  ui_clearlag_saved:   "[MCBSO] ClearLag saved.",

  ui_afk_title:        "AFK Detection Settings",
  ui_afk_thresh:       "AFK Threshold Ticks (Current: {val})",
  ui_afk_move:         "Movement Threshold Blocks (Current: {val})",
  ui_afk_saved:        "[MCBSO] AFK saved.",

  ui_spawn_title:      "Spawn Limiter",
  ui_spawn_body:       "Choose an option.",
  ui_spawn_btn_gen:    "General Settings\nThresholds and notifications",
  ui_spawn_btn_list:   "View and edit Mob Limits\nEdit active limits",
  ui_spawn_btn_add:    "Add new Mob Limit\nEnter type and limit",
  ui_spawn_btn_back:   "Back",

  ui_spawn_settings_title:  "Spawn Limiter Settings",
  ui_spawn_warn_thresh:     "Warning Threshold 0.0-1.0 (Current: {val})",
  ui_spawn_msg_dur:         "Message Duration Ticks (Current: {val})",
  ui_spawn_cooldown:        "Notification Cooldown Ticks (Current: {val})",
  ui_spawn_radius:          "Notification Radius Blocks (Current: {val})",
  ui_spawn_settings_saved:  "[MCBSO] Spawn Limiter saved.",

  ui_mob_list_title:   "Edit Mob Limits",
  ui_mob_list_body:    "Select a mob type to edit or delete its limit.",
  ui_mob_list_none_title: "Mob Limits",
  ui_mob_list_none_body:  "No mob limits configured.",
  ui_mob_list_none_btn:   "OK",
  ui_mob_list_back:    "Back",
  ui_mob_limit_label:  "Limit: ",

  ui_mob_edit_title:   "Edit Limit",
  ui_mob_edit_field:   "Mob Type: {type}\nNew limit (1 to 1000)\nCurrent: {val}",
  ui_mob_edit_delete:  "Delete Limit\nRemoves this mob type from limiting",
  ui_mob_edit_deleted: "[MCBSO] Limit for {type} removed.",
  ui_mob_edit_saved:   "[MCBSO] Limit for {type} set to {val}.",

  ui_mob_add_title:    "New Mob Limit",
  ui_mob_add_type:     "Mob Type\nFormat: minecraft:zombie  or just  zombie",
  ui_mob_add_limit:    "Limit (1 to 1000)\nMax count in 16-block radius",
  ui_mob_add_saved:    "[MCBSO] Limit for {type} set to {val}.",

  ui_lod_title:        "AI-LOD System Settings",
  ui_lod_toggle:       "AI-LOD enabled\nDisabled = full vanilla AI for all entities",
  ui_lod_t1:           "Tier 1 Distance Blocks (Current: {val})",
  ui_lod_t2:           "Tier 2 Distance Blocks (Current: {val})",
  ui_lod_interval:     "Check Interval Ticks (Current: {val})",
  ui_lod_nav:          "Tier 2 Nav Distance Blocks (Current: {val})",
  ui_lod_saved_on:     "[MCBSO] AI-LOD saved. LOD: ON",
  ui_lod_saved_off:    "[MCBSO] AI-LOD saved. LOD: OFF",
  ui_lod_t1_lt_t2:     "Tier 1 ({t1}) must be less than Tier 2 ({t2})",

  ui_tps_title:        "TPS Monitor Settings",
  ui_tps_sample:       "Sample Size (Current: {val})",
  ui_tps_saved:        "[MCBSO] TPS saved.",

  ui_reset_title:      "Reset All",
  ui_reset_body:       "All settings will be reset to default values.\n\nAre you sure?",
  ui_reset_confirm:    "Yes, reset",
  ui_reset_cancel:     "Cancel",
  ui_reset_done:       "[MCBSO] All settings reset.",

  ui_error_title:      "Input Error",
  ui_error_body:       "The following errors occurred:\n\n{errors}\n\nPlease correct the values.",
  ui_error_back:       "Back",
  ui_error_cancel:     "Cancel",

  ui_error_not_number: "{label}: \"{val}\" is not a valid number",
  ui_error_out_of_range: "{label}: {val} out of range [{min}-{max}]",
  ui_error_not_decimal: "{label}: \"{val}\" is not a valid decimal number",
  ui_error_mob_type:   "Please enter a valid mob type",
  ui_error_mob_limit:  "Limit must be a number between 1 and 1000",

  // ── Language UI ───────────────────────────────────────────
  ui_lang_title:       "Language Settings",
  ui_lang_body:        "Select the addon language.",
  ui_lang_current:     "Current: {lang}",
  ui_lang_saved:       "[MCBSO] Language changed to: {lang}",
};
