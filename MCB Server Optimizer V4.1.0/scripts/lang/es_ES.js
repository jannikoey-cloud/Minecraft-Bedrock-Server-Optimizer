/*
 * ============================================================
 *  lang/es_ES.js – Español (España)
 * ============================================================
 */

export default {
  // ── General ───────────────────────────────────────────────
  only_players:        "Solo disponible para jugadores",
  lang_changed:        "§a[MCBSO] Idioma configurado en : Español",
  lang_invalid:        "§c[MCBSO] Idioma desconocido. Disponibles : es_ES, en_US, de_DE, fr_FR, tr_TR, pl_PL",
  lang_current:        "§e[MCBSO] Idioma actual : ",

  // ── Ayuda ──────────────────────────────────────────────────
  help_header:         "§e§lMCBSO – Optimizador de Servidor §r§7(visible solo para ti)",
  help_separator:      "§7─────────────────────────────────",
  help_tps:            "§f/mcbso:tps §7– Activar/desactivar la pantalla de TPS",
  help_cleartime:      "§f/mcbso:cleartime §7– Mostrar el próximo ClearLag",
  help_entities:       "§f/mcbso:entities §7– Contar entidades en todas las dimensiones",
  help_help:           "§f/mcbso:help §7– Mostrar esta ayuda",
  help_op_header:      "§c§lComandos OP:",
  help_tpsinfo:        "§f/mcbso:tpsinfo §7– Estadísticas detalladas de TPS",
  help_clearnow:       "§f/mcbso:clearnow §7– Ejecutar ClearLag inmediatamente",
  help_afklist:        "§f/mcbso:afklist §7– Mostrar jugadores en AFK con duración",
  help_lodinfo:        "§f/mcbso:lodinfo §7– Estadísticas del sistema AI-LOD",
  help_settings:       "§f/mcbso:settings §7– Abrir menú de configuración",
  help_lang:           "§f/mcbso:lang §7– Cambiar idioma",

  // ── TPS ───────────────────────────────────────────────────
  tps_enabled:         "§aPantalla de TPS activada",
  tps_disabled:        "§cPantalla de TPS desactivada",
  tps_info_header:     "§eInfo TPS\n§7─────────────────",
  tps_info_status_good:     "Bien",
  tps_info_status_medium:   "Medio",
  tps_info_status_critical: "Crítico",
  tps_info_samples:    "§aMuestras : §f",
  tps_info_afk:        "§aJugadores en AFK : §f",

  // ── ClearLag ──────────────────────────────────────────────
  clearlag_warn_1min:  "§6[ClearLag] §7Los objetos serán eliminados en §f1 minuto",
  clearlag_warn_30s:   "§e[ClearLag] §7Los objetos serán eliminados en §f30 segundos",
  clearlag_warn_10s:   "§c[ClearLag] §7Los objetos serán eliminados en §f10 segundos",
  clearlag_removed:    "§7eliminado",
  clearlag_items:      "§6[ClearLag] §f{items} objetos §7y §f{xp} esferas XP §7eliminados",
  clearlag_next:       "§6[ClearLag] §7Próxima limpieza en §f",
  clearlag_manual:     "§6[ClearLag] §7Ejecución manual por §e",

  // ── Entidades ──────────────────────────────────────────────
  entities_header:     "§aContador de entidades (todas dimensiones)\n§7─────────────────────",
  entities_total:      "§7Total : §f",
  entities_items:      "§7| Objetos : §f",
  entities_xp:         "§7| XP : §f",
  entities_mobs:       "§7| Mob : §f",

  // ── AFK ───────────────────────────────────────────────────
  afk_none:            "§a[AFK] §7Actualmente no hay jugadores en AFK",
  afk_list_header:     "§a[AFK] §7Jugadores en AFK",

  // ── MobCap ────────────────────────────────────────────────
  mobcap_warning:      "§c[MobCap] §7La Overworld tiene §c{count} §fmobs cargados !",

  // ── SpawnLimiter ──────────────────────────────────────────
  spawn_warn:          "§e[SpawnWarn] §f{type} §7acercándose al límite §f({count}/{limit})",

  // ── AI-LOD ────────────────────────────────────────────────
  lod_info_header:     "§aInfo AI-LOD\n§7─────────────────",
  lod_total:           "§aEntidades totales : §f",
  lod_tier1:           "§aNivel 1 §7(AI completa):     §f",
  lod_tier2:           "§eNivel 2 §7(frenada):       §f",
  lod_tier3:           "§cNivel 3 §7(congelada):     §f",
  lod_exempt:          "§7Exentos :                    §f",
  lod_distances:       "§aDistancias : §fN1 <{t1}b  §fN2 <{t2}b  §fN3 {t2}b+",

  // ── Configuración UI ───────────────────────────────────────────
  ui_main_title:       "Configuración MCBSO",
  ui_main_body:        "Elige una categoría.",
  ui_btn_clearlag:     "ClearLag\nIntervalo y alertas",
  ui_btn_afk:          "Detección de AFK\nUmbrales y temporización",
  ui_btn_spawn:        "Limitador de spawn\nLímites y notificaciones",
  ui_btn_lod:          "Sistema AI-LOD\nDistancias y toggle",
  ui_btn_tps:          "Monitor de TPS\nTamaño de muestra",
  ui_btn_reset:        "Restablecer todo\nRestaurar valores predeterminados",
  ui_btn_lang:         "Idioma\nCambiar idioma del addon",

  ui_clearlag_title:   "Configuración de ClearLag",
  ui_clearlag_iv:      "Intervalo (Actual: {val})",
  ui_clearlag_cap:     "Umbral de alerta MobCap (Actual: {val})",
  ui_clearlag_chk:     "Intervalo de verificación MobCap (Actual: {val})",
  ui_clearlag_cd:      "Cooldown de notificaciones (Actual: {val})",
  ui_clearlag_saved:   "[MCBSO] ClearLag guardado.",

  ui_afk_title:        "Configuración de Detección AFK",
  ui_afk_thresh:       "Umbral AFK (ticks, Actual: {val})",
  ui_afk_move:         "Umbral de movimiento (bloques, Actual: {val})",
  ui_afk_saved:        "[MCBSO] AFK guardado.",

  ui_spawn_title:      "Limitador de spawn",
  ui_spawn_body:       "Elige una opción.",
  ui_spawn_btn_gen:    "Configuración general\nUmbrales y notificaciones",
  ui_spawn_btn_list:   "Ver y editar límites de mob\nEditar límites activos",
  ui_spawn_btn_add:    "Añadir nuevo límite de mob\nIntroduce tipo y límite",
  ui_spawn_btn_back:   "Volver",

  ui_spawn_settings_title:  "Configuración del limitador de spawn",
  ui_spawn_warn_thresh:     "Umbral de alerta 0.0-1.0 (Actual: {val})",
  ui_spawn_msg_dur:         "Duración del mensaje (ticks, Actual: {val})",
  ui_spawn_cooldown:        "Cooldown de notificaciones (ticks, Actual: {val})",
  ui_spawn_radius:          "Radio de notificaciones (bloques, Actual: {val})",
  ui_spawn_settings_saved:  "[MCBSO] Limitador de spawn guardado.",

  ui_mob_list_title:   "Editar límites de mob",
  ui_mob_list_body:    "Selecciona un tipo de mob para editar o borrar su límite.",
  ui_mob_list_none_title: "Límites de mob",
  ui_mob_list_none_body:  "No hay límites de mob configurados.",
  ui_mob_list_none_btn:   "OK",
  ui_mob_list_back:    "Volver",
  ui_mob_limit_label:  "Límite : ",

  ui_mob_edit_title:   "Editar límite",
  ui_mob_edit_field:   "Tipo de mob : {type}\nNuevo límite (1 a 1000)\nActual: {val}",
  ui_mob_edit_delete:  "Borrar límite\nElimina este tipo de mob de la limitación",
  ui_mob_edit_deleted: "[MCBSO] Límite para {type} eliminado.",
  ui_mob_edit_saved:   "[MCBSO] Límite para {type} establecido en {val}.",

  ui_mob_add_title:    "Nuevo límite de mob",
  ui_mob_add_type:     "Tipo de mob\nFormato : minecraft:zombie  o solo  zombie",
  ui_mob_add_limit:    "Límite (1 a 1000)\nMáximo de entidades en radio de 16 bloques",
  ui_mob_add_saved:    "[MCBSO] Límite para {type} establecido en {val}.",

  ui_lod_title:        "Configuración del sistema AI-LOD",
  ui_lod_toggle:       "AI-LOD activada\nDesactivada = AI Vanilla completa para todos los mobs",
  ui_lod_t1:           "Distancia Nivel 1 (Actual: {val})",
  ui_lod_t2:           "Distancia Nivel 2 (Actual: {val})",
  ui_lod_interval:     "Intervalo de verificación (ticks, Actual: {val})",
  ui_lod_nav:          "Distancia de navegación Nivel 2 (Actual: {val})",
  ui_lod_saved_on:     "[MCBSO] AI-LOD guardado. LOD : ACTIVADO",
  ui_lod_saved_off:    "[MCBSO] AI-LOD guardado. LOD : DESACTIVADO",
  ui_lod_t1_lt_t2:     "El Nivel 1 ({t1}) debe ser menor que el Nivel 2 ({t2})",

  ui_tps_title:        "Configuración del monitor de TPS",
  ui_tps_sample:       "Tamaño de muestra (Actual: {val})",
  ui_tps_saved:        "[MCBSO] TPS guardado.",

  ui_reset_title:      "Restablecer todo",
  ui_reset_body:       "Todos los parámetros se reiniciarán a los valores predeterminados.\n\n¿Estás seguro?",
  ui_reset_confirm:    "Sí, reiniciar",
  ui_reset_cancel:     "Cancelar",
  ui_reset_done:       "[MCBSO] Todos los parámetros reiniciados.",

  ui_error_title:      "Error de entrada",
  ui_error_body:       "Se han producido los siguientes errores:\n\n{errors}\n\nPor favor, corrige los valores.",
  ui_error_back:       "Volver",
  ui_error_cancel:     "Cancelar",

  ui_error_not_number:   "{label} : \"{val}\" no es un número válido",
  ui_error_out_of_range: "{label} : {val} fuera de rango [{min}-{max}]",
  ui_error_not_decimal:  "{label} : \"{val}\" no es un número decimal válido",
  ui_error_mob_type:     "Introduce un tipo de mob válido",
  ui_error_mob_limit:    "El límite debe ser un número entre 1 y 1000",

  // ── Language UI ───────────────────────────────────────────
  ui_lang_title:       "Configuración de idioma",
  ui_lang_body:        "Selecciona el idioma del addon.",
  ui_lang_current:     "Actual: {lang}",
  ui_lang_saved:       "[MCBSO] Idioma cambiado a : {lang}",
};
