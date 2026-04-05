/*
 * ============================================================
 *  lang/nl_NL.js – Dutch (Netherlands)
 * ============================================================
 */

export default {
  // ── General ───────────────────────────────────────────────
  only_players:        "Alleen beschikbaar voor spelers",
  lang_changed:        "§a[MCBSO] Taal ingesteld: Nederlands",
  lang_invalid:        "§c[MCBSO] Onbekende taal. Beschikbaar: de_DE, en_US, fr_FR, es_ES, tr_TR, pl_PL, pt_BR, ru_RU, zh_CN, ja_JP, it_IT, nl_NL",
  lang_current:        "§e[MCBSO] Huidige taal: ",

  // ── Help ──────────────────────────────────────────────────
  help_header:         "§e§lMCBSO – Server Optimalisatie §r§7(alleen zichtbaar voor jou)",
  help_separator:      "§7─────────────────────────────────",
  help_tps:            "§f/mcbso:tps §7– TPS-weergave in-/uitschakelen",
  help_cleartime:      "§f/mcbso:cleartime §7– Volgende ClearLag tonen",
  help_entities:       "§f/mcbso:entities §7– Entiteiten tellen in alle dimensies",
  help_help:           "§f/mcbso:help §7– Deze help tonen",
  help_op_header:      "§c§lOP Commando's:",
  help_tpsinfo:        "§f/mcbso:tpsinfo §7– Gedetailleerde TPS-statistieken",
  help_clearnow:       "§f/mcbso:clearnow §7– ClearLag nu uitvoeren",
  help_afklist:        "§f/mcbso:afklist §7– AFK-spelers met duur tonen",
  help_lodinfo:        "§f/mcbso:lodinfo §7– AI-LOD systeemstatistieken",
  help_settings:       "§f/mcbso:settings §7– Instellingenmenu openen",
  help_lang:           "§f/mcbso:lang §7– Taal wijzigen",

  // ── TPS ───────────────────────────────────────────────────
  tps_enabled:         "§aTPS-weergave ingeschakeld",
  tps_disabled:        "§cTPS-weergave uitgeschakeld",
  tps_info_header:     "§eTPS Info\n§7─────────────────",
  tps_info_status_good:     "Goed",
  tps_info_status_medium:   "Matig",
  tps_info_status_critical: "Kritiek",
  tps_info_samples:    "§7Samples: §f",
  tps_info_afk:        "§7AFK-spelers: §f",

  // ── ClearLag ──────────────────────────────────────────────
  clearlag_warn_1min:  "§6[ClearLag] §7Items worden verwijderd over §f1 minuut",
  clearlag_warn_30s:   "§e[ClearLag] §7Items worden verwijderd over §f30 seconden",
  clearlag_warn_10s:   "§c[ClearLag] §7Items worden verwijderd over §f10 seconden",
  clearlag_removed:    "§7verwijderd",
  clearlag_items:      "§6[ClearLag] §f{items} Items §7en §f{xp} XP-orbs §7verwijderd",
  clearlag_next:       "§6[ClearLag] §7Volgende清除 in §f",
  clearlag_manual:     "§6[ClearLag] §fHandmatige uitvoering door §e",

  // ── Entities ──────────────────────────────────────────────
  entities_header:     "§eEntiteitteller (alle dimensies)\n§7─────────────────────",
  entities_total:      "§7Totaal: §f",
  entities_items:      "§7| Items: §f",
  entities_xp:         "§7| XP: §f",
  entities_mobs:       "§7| Mobs: §f",

  // ── AFK ───────────────────────────────────────────────────
  afk_none:            "§e[AFK] §7Geen AFK-spelers momenteel",
  afk_list_header:     "§e[AFK] §7AFK-spelers",

  // ── MobCap ────────────────────────────────────────────────
  mobcap_warning:      "§c[MobCap] §fOverworld heeft §c{count} §fMobs geladen!",

  // ── SpawnLimiter ──────────────────────────────────────────
  spawn_warn:          "§e[SpawnWarn] §f{type} nadert limiet §f({count}/{limit})",

  // ── AI-LOD ─────────────────────────────────────────────────
  lod_info_header:     "§eAI-LOD Info\n§7─────────────────",
  lod_total:           "§7Entiteiten totaal: §f",
  lod_tier1:           "§aTier 1 §7(volledige AI):     §f",
  lod_tier2:           "§eTier 2 §7(beperkt):          §f",
  lod_tier3:           "§cTier 3 §7(bevroren):        §f",
  lod_exempt:          "§7Vrijgesteld:                §f",
  lod_distances:       "§7Afstanden: §fTier1 <{t1}b  §fTier2 <{t2}b  §fTier3 {t2}b+",

  // ── Settings UI ───────────────────────────────────────────
  ui_main_title:       "MCBSO Instellingen",
  ui_main_body:        "Kies een categorie.",
  ui_btn_clearlag:     "ClearLag\nInterval en waarschuwingen",
  ui_btn_afk:          "AFK-detectie\nDrempels en timing",
  ui_btn_spawn:        "Spawn Limiter\nLimieten en meldingen",
  ui_btn_lod:          "AI-LOD Systeem\nAfstanden en toggle",
  ui_btn_tps:          "TPS Monitor\nSteekproefgrootte",
  ui_btn_reset:        "Alles Resetten\nStandaardwaarden herstellen",
  ui_btn_lang:         "Taal\nAddon-taal wijzigen",

  ui_clearlag_title:   "ClearLag Instellingen",
  ui_clearlag_iv:      "Interval Ticks (Huidig: {val})",
  ui_clearlag_cap:     "MobCap Waarschuwingsdrempel (Huidig: {val})",
  ui_clearlag_chk:     "MobCap Controle Interval Ticks (Huidig: {val})",
  ui_clearlag_cd:      "Melding Cooldown Ticks (Huidig: {val})",
  ui_clearlag_saved:   "[MCBSO] ClearLag opgeslagen.",

  ui_afk_title:        "AFK-detectie Instellingen",
  ui_afk_thresh:       "AFK-drempel Ticks (Huidig: {val})",
  ui_afk_move:         "Bewegingsdrempel Blokken (Huidig: {val})",
  ui_afk_saved:        "[MCBSO] AFK opgeslagen.",

  ui_spawn_title:      "Spawn Limiter",
  ui_spawn_body:       "Kies een optie.",
  ui_spawn_btn_gen:    "Algemene Instellingen\nDrempels en meldingen",
  ui_spawn_btn_list:   "Mob Limieten Bekijken en Bewerken\nActieve limieten bewerken",
  ui_spawn_btn_add:    "Nieuwe Mob Limiet Toevoegen\nTyp en limiet invoeren",
  ui_spawn_btn_back:   "Terug",

  ui_spawn_settings_title:  "Spawn Limiter Instellingen",
  ui_spawn_warn_thresh:     "Waarschuwingsdrempel 0.0-1.0 (Huidig: {val})",
  ui_spawn_msg_dur:         "Berichtduur Ticks (Huidig: {val})",
  ui_spawn_cooldown:        "Melding Cooldown Ticks (Huidig: {val})",
  ui_spawn_radius:          "Melding Radius Blokken (Huidig: {val})",
  ui_spawn_settings_saved:  "[MCBSO] Spawn Limiter opgeslagen.",

  ui_mob_list_title:   "Mob Limieten Bewerken",
  ui_mob_list_body:    "Selecteer een mobtype om de limiet te bewerken of te verwijderen.",
  ui_mob_list_none_title: "Mob Limieten",
  ui_mob_list_none_body:  "Geen mob limieten geconfigureerd.",
  ui_mob_list_none_btn:   "OK",
  ui_mob_list_back:    "Terug",
  ui_mob_limit_label:  "Limiet: ",

  ui_mob_edit_title:   "Limiet Bewerken",
  ui_mob_edit_field:   "Mob Type: {type}\nNieuwe limiet (1 tot 1000)\nHuidig: {val}",
  ui_mob_edit_delete:  "Limiet Verwijderen\nVerwijdert dit mobtype van de limiter",
  ui_mob_edit_deleted: "[MCBSO] Limiet voor {type} verwijderd.",
  ui_mob_edit_saved:   "[MCBSO] Limiet voor {type} ingesteld op {val}.",

  ui_mob_add_title:    "Nieuwe Mob Limiet",
  ui_mob_add_type:     "Mob Type\nFormaat: minecraft:zombie  of  zombie",
  ui_mob_add_limit:    "Limiet (1 tot 1000)\nMax aantal in 16-blok straal",
  ui_mob_add_saved:    "[MCBSO] Limiet voor {type} ingesteld op {val}.",

  ui_lod_title:        "AI-LOD Systeem Instellingen",
  ui_lod_toggle:       "AI-LOD ingeschakeld\nUitgeschakeld = volledige vanilla AI voor alle entiteiten",
  ui_lod_t1:           "Tier 1 Afstand Blokken (Huidig: {val})",
  ui_lod_t2:           "Tier 2 Afstand Blokken (Huidig: {val})",
  ui_lod_interval:     "Controle Interval Ticks (Huidig: {val})",
  ui_lod_nav:          "Tier 2 Navigatie Afstand Blokken (Huidig: {val})",
  ui_lod_saved_on:     "[MCBSO] AI-LOD opgeslagen. LOD: AAN",
  ui_lod_saved_off:    "[MCBSO] AI-LOD opgeslagen. LOD: UIT",
  ui_lod_t1_lt_t2:     "Tier 1 ({t1}) moet kleiner zijn dan Tier 2 ({t2})",

  ui_tps_title:        "TPS Monitor Instellingen",
  ui_tps_sample:       "Steekproefgrootte (Huidig: {val})",
  ui_tps_saved:        "[MCBSO] TPS opgeslagen.",

  ui_reset_title:      "Alles Resetten",
  ui_reset_body:       "Alle instellingen worden gereset naar standaardwaarden.\n\nWeet je het zeker?",
  ui_reset_confirm:    "Ja, reset",
  ui_reset_cancel:     "Annuleren",
  ui_reset_done:       "[MCBSO] Alle instellingen gereset.",

  ui_error_title:      "Invoerfout",
  ui_error_body:       "De volgende fouten zijn opgetreden:\n\n{errors}\n\nCorrigeer de waarden.",
  ui_error_back:       "Terug",
  ui_error_cancel:     "Annuleren",

  ui_error_not_number: "{label}: \"{val}\" is geen geldig getal",
  ui_error_out_of_range: "{label}: {val} buiten bereik [{min}-{max}]",
  ui_error_not_decimal: "{label}: \"{val}\" is geen geldig decimaal getal",
  ui_error_mob_type:   "Voer een geldig mobtype in",
  ui_error_mob_limit:  "Limiet moet een getal zijn tussen 1 en 1000",

  // ── Language UI ───────────────────────────────────────────
  ui_lang_title:       "Taal Instellingen",
  ui_lang_body:        "Selecteer de add-on taal.",
  ui_lang_current:     "Huidig: {lang}",
  ui_lang_saved:       "[MCBSO] Taal gewijzigd naar: {lang}",
};
