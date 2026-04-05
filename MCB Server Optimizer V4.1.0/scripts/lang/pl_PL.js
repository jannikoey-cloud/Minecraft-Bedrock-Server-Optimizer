/*
 * ============================================================
 *  lang/pl_PL.js – Polski (Polska)
 * ============================================================
 */

export default {
  // ── Ogólnie ───────────────────────────────────────────────
  only_players:        "Dostępne wyłącznie dla graczy",
  lang_changed:        "§a[MCBSO] Ustawiono język: Polski",
  lang_invalid:        "§c[MCBSO] Nieznany język. Dostępne: pl_PL, en_US, de_DE, fr_FR, es_ES, tr_TR",
  lang_current:        "§e[MCBSO] Obecny język : ",

  // ── Pomoc ──────────────────────────────────────────────────
  help_header:         "§e§lMCBSO – Optymalizator Serwera §r§7(widoczny tylko dla ciebie)",
  help_separator:      "§7─────────────────────────────────",
  help_tps:            "§f/mcbso:tps §7– Włącz/wyłącz wyświetlanie TPS",
  help_cleartime:      "§f/mcbso:cleartime §7– Pokaż następnego ClearLag",
  help_entities:       "§f/mcbso:entities §7– Policz jednostki we wszystkich wymiarach",
  help_help:           "§f/mcbso:help §7– Pokaż tę pomoc",
  help_op_header:      "§c§lPolecenia OP:",
  help_tpsinfo:        "§f/mcbso:tpsinfo §7– Szczegółowe statystyki TPS",
  help_clearnow:       "§f/mcbso:clearnow §7– Uruchom ClearLag natychmiast",
  help_afklist:        "§f/mcbso:afklist §7– Pokaż graczy w AFK z czasem",
  help_lodinfo:        "§f/mcbso:lodinfo §7– Statystyki systemu AI-LOD",
  help_settings:       "§f/mcbso:settings §7– Otwórz menu ustawień",
  help_lang:           "§f/mcbso:lang §7– Zmień język",

  // ── TPS ───────────────────────────────────────────────────
  tps_enabled:         "§aWyświetlanie TPS włączone",
  tps_disabled:        "§cWyświetlanie TPS wyłączone",
  tps_info_header:     "§eInformacje o TPS\n§7─────────────────",
  tps_info_status_good:     "Dobrze",
  tps_info_status_medium:   "Średnio",
  tps_info_status_critical: "Krytycznie",
  tps_info_samples:    "§aPróbek: §f",
  tps_info_afk:        "§aGracze w AFK: §f",

  // ── ClearLag ──────────────────────────────────────────────
  clearlag_warn_1min:  "§6[ClearLag] §7Przedmioty zostaną usunięte za §f1 minutę",
  clearlag_warn_30s:   "§e[ClearLag] §7Przedmioty zostaną usunięte za §f30 sekund",
  clearlag_warn_10s:   "§c[ClearLag] §7Przedmioty zostaną usunięte za §f10 sekund",
  clearlag_removed:    "§7usunięto",
  clearlag_items:      "§6[ClearLag] §f{items} przedmiotów §7i §f{xp} kulek XP §7usunięto",
  clearlag_next:       "§6[ClearLag] §7Następne czyszczenie za §f",
  clearlag_manual:     "§6[ClearLag] §7Ręczne uruchomienie przez §e",

  // ── Jednostki ──────────────────────────────────────────────
  entities_header:     "§aLicznik jednostek (wszystkie wymiary)\n§7─────────────────────",
  entities_total:      "§7Łącznie: §f",
  entities_items:      "§7| Przedmioty: §f",
  entities_xp:         "§7| XP: §f",
  entities_mobs:       "§7| Mob: §f",

  // ── AFK ───────────────────────────────────────────────────
  afk_none:            "§a[AFK] §7Obecnie brak graczy w AFK",
  afk_list_header:     "§a[AFK] §7Gracze w AFK",

  // ── MobCap ────────────────────────────────────────────────
  mobcap_warning:      "§c[MobCap] §7Overworld ma §c{count} §jmobów załadowanych !",

  // ── SpawnLimiter ──────────────────────────────────────────
  spawn_warn:          "§e[SpawnWarn] §f{type} §7bliska granicy §f({count}/{limit})",

  // ── AI-LOD ────────────────────────────────────────────────
  lod_info_header:     "§aInformacje o AI-LOD\n§7─────────────────",
  lod_total:           "§7Jednostki łącznie: §f",
  lod_tier1:           "§aPoziom 1 §7(pełny AI):    §f",
  lod_tier2:           "§ePoziom 2 §7(zmodyfikowany): §f",
  lod_tier3:           "§cPoziom 3 §7(zamrożony):   §f",
  lod_exempt:          "§7Wyłączone:                 §f",
  lod_distances:       "§7Odległości: §fPoziom1 <{t1}b  §fPoziom2 <{t2}b  §fPoziom3 {t2}b+",

  // ── Ustawienia UI ───────────────────────────────────────────
  ui_main_title:       "Ustawienia MCBSO",
  ui_main_body:        "Wybierz kategorię.",
  ui_btn_clearlag:     "ClearLag\nInterwały i ostrzeżenia",
  ui_btn_afk:          "Wykrywanie AFK\nPróg i timing",
  ui_btn_spawn:        "Limit Spawnu\nGranice i powiadomienia",
  ui_btn_lod:          "System AI-LOD\nOdległości i przełącznik",
  ui_btn_tps:          "Monitor TPS\nWielkość próbek",
  ui_btn_reset:        "Zresetuj wszystko\nPrzywróć wartości domyślne",
  ui_btn_lang:         "Język\nZmień język dodatku",

  ui_clearlag_title:   "Ustawienia ClearLag",
  ui_clearlag_iv:      "Interwał (Obecny: {val})",
  ui_clearlag_cap:     "Próg ostrzegania MobCap (Obecny: {val})",
  ui_clearlag_chk:     "Interwał sprawdzania MobCap (Obecny: {val})",
  ui_clearlag_cd:      "Cooldown powiadomień (ticks, Obecny: {val})",
  ui_clearlag_saved:   "[MCBSO] ClearLag zapisano.",

  ui_afk_title:        "Ustawienia Wykrywania AFK",
  ui_afk_thresh:       "Próg AFK (ticks, Obecny: {val})",
  ui_afk_move:         "Próg ruchu (bloki, Obecny: {val})",
  ui_afk_saved:        "[MCBSO] AFK zapisano.",

  ui_spawn_title:      "Limit Spawnu",
  ui_spawn_body:       "Wybierz opcję.",
  ui_spawn_btn_gen:    "Ustawienia ogólne\nPróg i powiadomienia",
  ui_spawn_btn_list:   "Zobacz i edytuj granice mobów\nEdytuj aktywne granice",
  ui_spawn_btn_add:    "Dodaj nową granicę mobu\nPodaj typ i limit",
  ui_spawn_btn_back:   "Powrót",

  ui_spawn_settings_title:  "Ustawienia Limitu Spawnu",
  ui_spawn_warn_thresh:     "Próg ostrzegania 0.0-1.0 (Obecny: {val})",
  ui_spawn_msg_dur:         "Czas wyświetlania powiadomienia (ticks, Obecny: {val})",
  ui_spawn_cooldown:        "Cooldown powiadomień (ticks, Obecny: {val})",
  ui_spawn_radius:         "Promień powiadomień (bloki, Obecny: {val})",
  ui_spawn_settings_saved: "[MCBSO] Limit Spawnu zapisano.",

  ui_mob_list_title:   "Edytuj granice mobów",
  ui_mob_list_body:    "Wybierz typ mobu, aby edytować lub usunąć jego granicę.",
  ui_mob_list_none_title: "Granice mobów",
  ui_mob_list_none_body:  "Nie skonfigurowano granic mobów.",
  ui_mob_list_none_btn:   "OK",
  ui_mob_list_back:    "Powrót",
  ui_mob_limit_label:  "Granica: ",

  ui_mob_edit_title:   "Edytuj granicę",
  ui_mob_edit_field:   "Typ mobu: {type}\nNowa granica (1 do 1000)\nObecny: {val}",
  ui_mob_edit_delete:  "Usuń granicę\nUsuwa ten typ mobu z limitowania",
  ui_mob_edit_deleted: "[MCBSO] Granica dla {type} usunięta.",
  ui_mob_edit_saved:   "[MCBSO] Granica dla {type} ustawiona na {val}.",

  ui_mob_add_title:    "Nowa granica mobu",
  ui_mob_add_type:     "Typ mobu\nFormat: minecraft:zombie  lub tylko  zombie",
  ui_mob_add_limit:    "Granica (1 do 1000)\nMaksymalna liczba w promieniu 16 bloków",
  ui_mob_add_saved:    "[MCBSO] Granica dla {type} ustawiona na {val}.",

  ui_lod_title:        "Ustawienia systemu AI-LOD",
  ui_lod_toggle:       "AI-LOD włączony\nWyłączony = pełna AI Vanilla dla wszystkich mobów",
  ui_lod_t1:           "Odległość Poziom 1 (Obecny: {val})",
  ui_lod_t2:           "Odległość Poziom 2 (Obecny: {val})",
  ui_lod_interval:     "Interwał sprawdzania (ticks, Obecny: {val})",
  ui_lod_nav:          "Odległość nawigacji Poziom 2 (Obecny: {val})",
  ui_lod_saved_on:     "[MCBSO] AI-LOD zapisano. LOD: WŁĄCZONE",
  ui_lod_saved_off:    "[MCBSO] AI-LOD zapisano. LOD: WYŁĄCZONE",
  ui_lod_t1_lt_t2:     "Poziom 1 ({t1}) musi być mniejszy niż Poziom 2 ({t2})",

  ui_tps_title:        "Ustawienia Monitora TPS",
  ui_tps_sample:       "Wielkość próbki (Obecny: {val})",
  ui_tps_saved:        "[MCBSO] TPS zapisano.",

  ui_reset_title:      "Zresetuj wszystko",
  ui_reset_body:       "Wszystkie ustawienia zostaną przywrócone do wartości domyślnych.\n\nJesteś pewien?",
  ui_reset_confirm:    "Tak, zresetuj",
  ui_reset_cancel:     "Anuluj",
  ui_reset_done:       "[MCBSO] Wszystkie ustawienia zresetowane.",

  ui_error_title:      "Błąd wejścia",
  ui_error_body:       "Wystąpiły następujące błędy:\n\n{errors}\n\nPopraw wartości.",
  ui_error_back:       "Powrót",
  ui_error_cancel:     "Anuluj",

  ui_error_not_number:   "{label} : \"{val}\" nie jest poprawną liczbą",
  ui_error_out_of_range: "{label} : {val} poza zakresem [{min}-{max}]",
  ui_error_not_decimal:  "{label} : \"{val}\" nie jest poprawną liczbą dziesiętną",
  ui_error_mob_type:    "Podaj poprawny typ mobu",
  ui_error_mob_limit:   "Granica musi być liczbą od 1 do 1000",

  // ── Language UI ───────────────────────────────────────────
  ui_lang_title:       "Ustawienia języka",
  ui_lang_body:        "Wybierz język dodatku.",
  ui_lang_current:     "Obecny: {lang}",
  ui_lang_saved:       "[MCBSO] Język zmieniono na : {lang}",
};
