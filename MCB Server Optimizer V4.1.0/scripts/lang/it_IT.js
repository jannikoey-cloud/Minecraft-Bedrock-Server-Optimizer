/*
 * ============================================================
 *  lang/it_IT.js – Italian (Italy)
 * ============================================================
 */

export default {
  // ── General ───────────────────────────────────────────────
  only_players:        "Disponibile solo per i giocatori",
  lang_changed:        "§a[MCBSO] Lingua impostata: Italiano",
  lang_invalid:        "§c[MCBSO] Lingua sconosciuta. Disponibili: de_DE, en_US, fr_FR, es_ES, tr_TR, pl_PL, pt_BR, ru_RU, zh_CN, ja_JP, it_IT, nl_NL",
  lang_current:        "§e[MCBSO] Lingua attuale: ",

  // ── Help ──────────────────────────────────────────────────
  help_header:         "§e§lMCBSO – Ottimizzatore Server §r§7(solo visibile a te)",
  help_separator:      "§7─────────────────────────────────",
  help_tps:            "§f/mcbso:tps §7– Attiva/Disattiva display TPS",
  help_cleartime:      "§f/mcbso:cleartime §7– Mostra prossimo ClearLag",
  help_entities:       "§f/mcbso:entities §7– Conta entità in tutte le dimensioni",
  help_help:           "§f/mcbso:help §7– Mostra questo aiuto",
  help_op_header:      "§c§lComandi OP:",
  help_tpsinfo:        "§f/mcbso:tpsinfo §7–Statistiche TPS dettagliate",
  help_clearnow:       "§f/mcbso:clearnow §7– Esegui ClearLag ora",
  help_afklist:        "§f/mcbso:afklist §7– Mostra giocatori AFK con durata",
  help_lodinfo:        "§f/mcbso:lodinfo §7– Statistiche sistema AI-LOD",
  help_settings:       "§f/mcbso:settings §7– Apri menu impostazioni",
  help_lang:           "§f/mcbso:lang §7– Cambia lingua",

  // ── TPS ───────────────────────────────────────────────────
  tps_enabled:         "§aDisplay TPS attivato",
  tps_disabled:        "§cDisplay TPS disattivato",
  tps_info_header:     "§eInfo TPS\n§7─────────────────",
  tps_info_status_good:     "Buono",
  tps_info_status_medium:   "Medio",
  tps_info_status_critical: "Critico",
  tps_info_samples:    "§7Campioni: §f",
  tps_info_afk:        "§7Giocatori AFK: §f",

  // ── ClearLag ──────────────────────────────────────────────
  clearlag_warn_1min:  "§6[ClearLag] §7Gli oggetti verranno eliminati tra §f1 minuto",
  clearlag_warn_30s:   "§e[ClearLag] §7Gli oggetti verranno eliminati tra §f30 secondi",
  clearlag_warn_10s:   "§c[ClearLag] §7Gli oggetti verranno eliminati tra §f10 secondi",
  clearlag_removed:    "§7rimossi",
  clearlag_items:      "§6[ClearLag] §f{items} Oggetti §7e §f{xp} Sfere XP §7rimossi",
  clearlag_next:       "§6[ClearLag] §7Prossima pulizia tra §f",
  clearlag_manual:     "§6[ClearLag] §fEsecuzione manuale da §e",

  // ── Entities ──────────────────────────────────────────────
  entities_header:     "§eContatore Entità (tutte le dimensioni)\n§7─────────────────────",
  entities_total:      "§7Totale: §f",
  entities_items:      "§7| Oggetti: §f",
  entities_xp:         "§7| XP: §f",
  entities_mobs:       "§7| Mob: §f",

  // ── AFK ───────────────────────────────────────────────────
  afk_none:            "§e[AFK] §7Nessun giocatore AFK al momento",
  afk_list_header:     "§e[AFK] §7Giocatori AFK",

  // ── MobCap ────────────────────────────────────────────────
  mobcap_warning:      "§c[MobCap] §fIl Overworld ha §c{count} §fMob caricati!",

  // ── SpawnLimiter ──────────────────────────────────────────
  spawn_warn:          "§e[SpawnWarn] §f{type} §7si avvicina al limite §f({count}/{limit})",

  // ── AI-LOD ─────────────────────────────────────────────────
  lod_info_header:     "§eInfo AI-LOD\n§7─────────────────",
  lod_total:           "§7Entità totali: §f",
  lod_tier1:           "§aTier 1 §7(AI completo):     §f",
  lod_tier2:           "§eTier 2 §7(limitato):       §f",
  lod_tier3:           "§cTier 3 §7(congelato):      §f",
  lod_exempt:          "§7Esenti:                   §f",
  lod_distances:       "§7Distanze: §fTier1 <{t1}b  §fTier2 <{t2}b  §fTier3 {t2}b+",

  // ── Settings UI ───────────────────────────────────────────
  ui_main_title:       "Impostazioni MCBSO",
  ui_main_body:        "Scegli una categoria.",
  ui_btn_clearlag:     "ClearLag\nIntervallo e avvisi",
  ui_btn_afk:          "Rilevamento AFK\nSoglie e tempistiche",
  ui_btn_spawn:        "Limitatore Spawn\nLimiti e notifiche",
  ui_btn_lod:          "Sistema AI-LOD\nDistanze e attiva/disattiva",
  ui_btn_tps:          "Monitor TPS\nDimensione campione",
  ui_btn_reset:        "Resetta Tutto\nRipristina valori predefiniti",
  ui_btn_lang:         "Lingua\nCambia lingua add-on",

  ui_clearlag_title:   "Impostazioni ClearLag",
  ui_clearlag_iv:      "Intervallo Tick (Attuale: {val})",
  ui_clearlag_cap:     "Soglia Avviso MobCap (Attuale: {val})",
  ui_clearlag_chk:     "Intervallo Controllo MobCap Tick (Attuale: {val})",
  ui_clearlag_cd:      "Cooldown Notifiche Tick (Attuale: {val})",
  ui_clearlag_saved:   "[MCBSO] ClearLag salvato.",

  ui_afk_title:        "Impostazioni Rilevamento AFK",
  ui_afk_thresh:       "Soglia AFK Tick (Attuale: {val})",
  ui_afk_move:         "Soglia Movimento Blocchi (Attuale: {val})",
  ui_afk_saved:        "[MCBSO] AFK salvato.",

  ui_spawn_title:      "Limitatore Spawn",
  ui_spawn_body:       "Scegli un'opzione.",
  ui_spawn_btn_gen:    "Impostazioni Generali\nSoglie e notifiche",
  ui_spawn_btn_list:   "Visualizza e Modifica Limiti Mob\nModifica limiti attivi",
  ui_spawn_btn_add:    "Aggiungi Nuovo Limite Mob\nInserisci tipo e limite",
  ui_spawn_btn_back:   "Indietro",

  ui_spawn_settings_title:  "Impostazioni Limitatore Spawn",
  ui_spawn_warn_thresh:     "Soglia Avviso 0.0-1.0 (Attuale: {val})",
  ui_spawn_msg_dur:         "Durata Messaggio Tick (Attuale: {val})",
  ui_spawn_cooldown:        "Cooldown Notifiche Tick (Attuale: {val})",
  ui_spawn_radius:          "Raggio Notifica Blocchi (Attuale: {val})",
  ui_spawn_settings_saved:  "[MCBSO] Limitatore Spawn salvato.",

  ui_mob_list_title:   "Modifica Limiti Mob",
  ui_mob_list_body:    "Seleziona un tipo di mob per modificare o eliminare il suo limite.",
  ui_mob_list_none_title: "Limiti Mob",
  ui_mob_list_none_body:  "Nessun limite mob configurato.",
  ui_mob_list_none_btn:   "OK",
  ui_mob_list_back:    "Indietro",
  ui_mob_limit_label:  "Limite: ",

  ui_mob_edit_title:   "Modifica Limite",
  ui_mob_edit_field:   "Tipo Mob: {type}\nNuovo limite (1 a 1000)\nAttuale: {val}",
  ui_mob_edit_delete:  "Elimina Limite\nRimuove questo tipo di mob dal limitatore",
  ui_mob_edit_deleted: "[MCBSO] Limite per {type} rimosso.",
  ui_mob_edit_saved:   "[MCBSO] Limite per {type} impostato a {val}.",

  ui_mob_add_title:    "Nuovo Limite Mob",
  ui_mob_add_type:     "Tipo Mob\nFormato: minecraft:zombie  oppure  zombie",
  ui_mob_add_limit:    "Limite (1 a 1000)\nMax in raggio 16 blocchi",
  ui_mob_add_saved:    "[MCBSO] Limite per {type} impostato a {val}.",

  ui_lod_title:        "Impostazioni Sistema AI-LOD",
  ui_lod_toggle:       "AI-LOD attivato\nDisattivato = AI vanilla completo per tutte le entità",
  ui_lod_t1:           "Distanza Tier 1 Blocchi (Attuale: {val})",
  ui_lod_t2:           "Distanza Tier 2 Blocchi (Attuale: {val})",
  ui_lod_interval:     "Intervallo Controllo Tick (Attuale: {val})",
  ui_lod_nav:          "Distanza Navigazione Tier 2 Blocchi (Attuale: {val})",
  ui_lod_saved_on:     "[MCBSO] AI-LOD salvato. LOD: ATTIVO",
  ui_lod_saved_off:    "[MCBSO] AI-LOD salvato. LOD: DISATTIVO",
  ui_lod_t1_lt_t2:     "Tier 1 ({t1}) deve essere minore di Tier 2 ({t2})",

  ui_tps_title:        "Impostazioni Monitor TPS",
  ui_tps_sample:       "Dimensione Campione (Attuale: {val})",
  ui_tps_saved:        "[MCBSO] TPS salvato.",

  ui_reset_title:      "Resetta Tutto",
  ui_reset_body:       "Tutte le impostazioni verranno ripristinate ai valori predefiniti.\n\nSei sicuro?",
  ui_reset_confirm:    "Sì, resetta",
  ui_reset_cancel:     "Annulla",
  ui_reset_done:       "[MCBSO] Tutte le impostazioni resettate.",

  ui_error_title:      "Errore Input",
  ui_error_body:       "Si sono verificati i seguenti errori:\n\n{errors}\n\nCorreggi i valori.",
  ui_error_back:       "Indietro",
  ui_error_cancel:     "Annulla",

  ui_error_not_number: "{label}: \"{val}\" non è un numero valido",
  ui_error_out_of_range: "{label}: {val} fuori range [{min}-{max}]",
  ui_error_not_decimal: "{label}: \"{val}\" non è un numero decimale valido",
  ui_error_mob_type:   "Inserisci un tipo di mob valido",
  ui_error_mob_limit:  "Il limite deve essere un numero tra 1 e 1000",

  // ── Language UI ───────────────────────────────────────────
  ui_lang_title:       "Impostazioni Lingua",
  ui_lang_body:        "Seleziona la lingua dell'add-on.",
  ui_lang_current:     "Attuale: {lang}",
  ui_lang_saved:       "[MCBSO] Lingua cambiata a: {lang}",
};
