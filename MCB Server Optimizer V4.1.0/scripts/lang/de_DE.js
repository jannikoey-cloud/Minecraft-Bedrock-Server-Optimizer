/*
 * ============================================================
 *  lang/de_DE.js – Deutsch (Deutschland)
 * ============================================================
 */

export default {
  // ── Allgemein ──────────────────────────────────────────────
  only_players:        "Nur fuer Spieler verfuegbar",
  lang_changed:        "§a[MCBSO] Sprache gesetzt: Deutsch",
  lang_invalid:        "§c[MCBSO] Unbekannte Sprache. Verfuegbar: de_DE, en_US, fr_FR, es_ES, tr_TR, pl_PL",
  lang_current:        "§e[MCBSO] Aktuelle Sprache: ",

  // ── Hilfe ─────────────────────────────────────────────────
  help_header:         "§e§lMCBSO – Server Optimizer §r§7(nur fuer dich sichtbar)",
  help_separator:      "§7─────────────────────────────────",
  help_tps:            "§f/mcbso:tps §7– TPS-Anzeige ein-/ausschalten",
  help_cleartime:      "§f/mcbso:cleartime §7– Naechsten ClearLag anzeigen",
  help_entities:       "§f/mcbso:entities §7– Entities aller Dimensionen zaehlen",
  help_help:           "§f/mcbso:help §7– Diese Hilfe anzeigen",
  help_op_header:      "§c§lOP Commands:",
  help_tpsinfo:        "§f/mcbso:tpsinfo §7– Detaillierte TPS-Statistiken",
  help_clearnow:       "§f/mcbso:clearnow §7– ClearLag sofort ausfuehren",
  help_afklist:        "§f/mcbso:afklist §7– AFK-Spieler mit Dauer anzeigen",
  help_lodinfo:        "§f/mcbso:lodinfo §7– AI-LOD System Statistiken",
  help_settings:       "§f/mcbso:settings §7– Einstellungs-Menue oeffnen",
  help_lang:           "§f/mcbso:lang §7– Sprache aendern",

  // ── TPS ───────────────────────────────────────────────────
  tps_enabled:         "§aTPS-Anzeige aktiviert",
  tps_disabled:        "§cTPS-Anzeige deaktiviert",
  tps_info_header:     "§eTPS Info\n§7─────────────────",
  tps_info_status_good:     "Gut",
  tps_info_status_medium:   "Mittel",
  tps_info_status_critical: "Kritisch",
  tps_info_samples:    "§7Samples: §f",
  tps_info_afk:        "§7AFK-Spieler: §f",

  // ── ClearLag ──────────────────────────────────────────────
  clearlag_warn_1min:  "§6[ClearLag] §7Items werden in §f1 Minute §7geloescht",
  clearlag_warn_30s:   "§e[ClearLag] §7Items werden in §f30 Sekunden §7geloescht",
  clearlag_warn_10s:   "§c[ClearLag] §7Items werden in §f10 Sekunden §7geloescht",
  clearlag_removed:    "§7entfernt",
  clearlag_items:      "§6[ClearLag] §f{items} Items §7und §f{xp} XP-Kugeln §7entfernt",
  clearlag_next:       "§6[ClearLag] §7Naechster Clear in §f",
  clearlag_manual:     "§6[ClearLag] §fManuelle Ausfuehrung durch §e",

  // ── Entities ──────────────────────────────────────────────
  entities_header:     "§eEntity Counter (alle Dimensionen)\n§7─────────────────────",
  entities_total:      "§7Total: §f",
  entities_items:      "§7| Items: §f",
  entities_xp:         "§7| XP: §f",
  entities_mobs:       "§7| Mobs: §f",

  // ── AFK ───────────────────────────────────────────────────
  afk_none:            "§e[AFK] §7Keine AFK-Spieler aktuell",
  afk_list_header:     "§e[AFK] §7AFK-Spieler",

  // ── MobCap ────────────────────────────────────────────────
  mobcap_warning:      "§c[MobCap] §fOverworld hat §c{count} §fMobs geladen!",

  // ── SpawnLimiter ──────────────────────────────────────────
  spawn_warn:          "§e[SpawnWarn] §f{type} §7naehert sich Limit §f({count}/{limit})",

  // ── AI-LOD ────────────────────────────────────────────────
  lod_info_header:     "§eAI-LOD Info\n§7─────────────────",
  lod_total:           "§7Entities total: §f",
  lod_tier1:           "§aStufe 1 §7(volle AI):     §f",
  lod_tier2:           "§eStufe 2 §7(gedrosselt):   §f",
  lod_tier3:           "§cStufe 3 §7(eingefroren):  §f",
  lod_exempt:          "§7Exempt:                §f",
  lod_distances:       "§7Distanzen: §fStufe1 <{t1}b  §fStufe2 <{t2}b  §fStufe3 {t2}b+",

  // ── Settings UI ───────────────────────────────────────────
  ui_main_title:       "MCBSO Einstellungen",
  ui_main_body:        "Waehle eine Kategorie.",
  ui_btn_clearlag:     "ClearLag\nIntervall und Warnungen",
  ui_btn_afk:          "AFK Detection\nSchwellen und Timing",
  ui_btn_spawn:        "Spawn Limiter\nLimits und Benachrichtigungen",
  ui_btn_lod:          "AI-LOD System\nDistanzen und Toggle",
  ui_btn_tps:          "TPS Monitor\nSample-Groesse",
  ui_btn_reset:        "Alles zuruecksetzen\nAuf Standard-Werte",
  ui_btn_lang:         "Sprache\nAddon-Sprache aendern",

  ui_clearlag_title:   "ClearLag Einstellungen",
  ui_clearlag_iv:      "Intervall Ticks (Aktuell: {val})",
  ui_clearlag_cap:     "MobCap Warnschwelle (Aktuell: {val})",
  ui_clearlag_chk:     "MobCap Pruef-Intervall Ticks (Aktuell: {val})",
  ui_clearlag_cd:      "Benachrichtigungs-Cooldown Ticks (Aktuell: {val})",
  ui_clearlag_saved:   "[MCBSO] ClearLag gespeichert.",

  ui_afk_title:        "AFK Detection Einstellungen",
  ui_afk_thresh:       "AFK Schwelle Ticks (Aktuell: {val})",
  ui_afk_move:         "Bewegungsschwelle Bloecke (Aktuell: {val})",
  ui_afk_saved:        "[MCBSO] AFK gespeichert.",

  ui_spawn_title:      "Spawn Limiter",
  ui_spawn_body:       "Waehle eine Option.",
  ui_spawn_btn_gen:    "Allgemeine Einstellungen\nSchwellen und Benachrichtigungen",
  ui_spawn_btn_list:   "Mob-Limits anzeigen und aendern\nAktive Limits bearbeiten",
  ui_spawn_btn_add:    "Neues Mob-Limit hinzufuegen\nTyp und Limit eingeben",
  ui_spawn_btn_back:   "Zurueck",

  ui_spawn_settings_title:  "Spawn Limiter Einstellungen",
  ui_spawn_warn_thresh:     "Vorwarnung Schwelle 0.0-1.0 (Aktuell: {val})",
  ui_spawn_msg_dur:         "Meldungs-Dauer Ticks (Aktuell: {val})",
  ui_spawn_cooldown:        "Benachrichtigungs-Cooldown Ticks (Aktuell: {val})",
  ui_spawn_radius:          "Benachrichtigungs-Radius Bloecke (Aktuell: {val})",
  ui_spawn_settings_saved:  "[MCBSO] Spawn Limiter gespeichert.",

  ui_mob_list_title:   "Mob-Limits bearbeiten",
  ui_mob_list_body:    "Waehle einen Mob-Typ um das Limit zu aendern oder zu loeschen.",
  ui_mob_list_none_title: "Mob-Limits",
  ui_mob_list_none_body:  "Keine Mob-Limits konfiguriert.",
  ui_mob_list_none_btn:   "OK",
  ui_mob_list_back:    "Zurueck",
  ui_mob_limit_label:  "Limit: ",

  ui_mob_edit_title:   "Limit bearbeiten",
  ui_mob_edit_field:   "Mob-Typ: {type}\nNeues Limit (1 bis 1000)\nAktuell: {val}",
  ui_mob_edit_delete:  "Limit loeschen\nEntfernt diesen Mob-Typ aus der Limitierung",
  ui_mob_edit_deleted: "[MCBSO] Limit fuer {type} entfernt.",
  ui_mob_edit_saved:   "[MCBSO] Limit fuer {type} auf {val} gesetzt.",

  ui_mob_add_title:    "Neues Mob-Limit",
  ui_mob_add_type:     "Mob-Typ\nFormat: minecraft:zombie  oder nur  zombie",
  ui_mob_add_limit:    "Limit (1 bis 1000)\nMaximale Anzahl in 16-Block-Radius",
  ui_mob_add_saved:    "[MCBSO] Limit fuer {type} auf {val} gesetzt.",

  ui_lod_title:        "AI-LOD System Einstellungen",
  ui_lod_toggle:       "AI-LOD aktiviert\nDeaktiviert = volle Vanilla-AI fuer alle Entities",
  ui_lod_t1:           "Stufe 1 Distanz Bloecke (Aktuell: {val})",
  ui_lod_t2:           "Stufe 2 Distanz Bloecke (Aktuell: {val})",
  ui_lod_interval:     "Pruef-Intervall Ticks (Aktuell: {val})",
  ui_lod_nav:          "Stufe 2 Nav-Distanz Bloecke (Aktuell: {val})",
  ui_lod_saved_on:     "[MCBSO] AI-LOD gespeichert. LOD: AN",
  ui_lod_saved_off:    "[MCBSO] AI-LOD gespeichert. LOD: AUS",
  ui_lod_t1_lt_t2:     "Stufe 1 ({t1}) muss kleiner als Stufe 2 ({t2}) sein",

  ui_tps_title:        "TPS Monitor Einstellungen",
  ui_tps_sample:       "Sample-Groesse (Aktuell: {val})",
  ui_tps_saved:        "[MCBSO] TPS gespeichert.",

  ui_reset_title:      "Alles zuruecksetzen",
  ui_reset_body:       "Alle Einstellungen werden auf die Standard-Werte zurueckgesetzt.\n\nBist du sicher?",
  ui_reset_confirm:    "Ja, zuruecksetzen",
  ui_reset_cancel:     "Abbrechen",
  ui_reset_done:       "[MCBSO] Alle Einstellungen zurueckgesetzt.",

  ui_error_title:      "Eingabefehler",
  ui_error_body:       "Folgende Fehler:\n\n{errors}\n\nBitte korrigiere die Werte.",
  ui_error_back:       "Zurueck",
  ui_error_cancel:     "Abbrechen",

  ui_error_not_number:   "{label}: \"{val}\" keine gueltige Zahl",
  ui_error_out_of_range: "{label}: {val} ausserhalb [{min}-{max}]",
  ui_error_not_decimal:  "{label}: \"{val}\" keine gueltige Dezimalzahl",
  ui_error_mob_type:     "Bitte einen gueltigen Mob-Typ eingeben",
  ui_error_mob_limit:    "Limit muss eine Zahl zwischen 1 und 1000 sein",

  // ── Language UI ───────────────────────────────────────────
  ui_lang_title:       "Sprache",
  ui_lang_body:        "Waehle die Addon-Sprache.",
  ui_lang_current:     "Aktuell: {lang}",
  ui_lang_saved:       "[MCBSO] Sprache geaendert zu: {lang}",
};
