/*
 * ============================================================
 *  lang/ru_RU.js – Russian (Russia)
 * ============================================================
 */

export default {
  // ── General ───────────────────────────────────────────────
  only_players:        "Доступно только для игроков",
  lang_changed:        "§a[MCBSO] Язык установлен: Русский",
  lang_invalid:        "§c[MCBSO] Неизвестный язык. Доступны: de_DE, en_US, fr_FR, es_ES, tr_TR, pl_PL, pt_BR, ru_RU, zh_CN, ja_JP, it_IT, nl_NL",
  lang_current:        "§e[MCBSO] Текущий язык: ",

  // ── Help ──────────────────────────────────────────────────
  help_header:         "§e§lMCBSO – Оптимизатор Сервера §r§7(только для вас)",
  help_separator:      "§7─────────────────────────────────",
  help_tps:            "§f/mcbso:tps §7– Переключить отображение TPS",
  help_cleartime:      "§f/mcbso:cleartime §7– Показать следующий ClearLag",
  help_entities:       "§f/mcbso:entities §7– Подсчитать сущности во всех измерениях",
  help_help:           "§f/mcbso:help §7– Показать эту справку",
  help_op_header:      "§c§lКоманды OP:",
  help_tpsinfo:        "§f/mcbso:tpsinfo §7– Подробная статистика TPS",
  help_clearnow:       "§f/mcbso:clearnow §7– Запустить ClearLag сейчас",
  help_afklist:        "§f/mcbso:afklist §7– Показать AFK игроков с временем",
  help_lodinfo:        "§f/mcbso:lodinfo §7– Статистика системы AI-LOD",
  help_settings:       "§f/mcbso:settings §7– Открыть меню настроек",
  help_lang:           "§f/mcbso:lang §7– Сменить язык",

  // ── TPS ───────────────────────────────────────────────────
  tps_enabled:         "§aОтображение TPS включено",
  tps_disabled:        "§cОтображение TPS выключено",
  tps_info_header:     "§eИнформация о TPS\n§7─────────────────",
  tps_info_status_good:     "Хороший",
  tps_info_status_medium:   "Средний",
  tps_info_status_critical: "Критический",
  tps_info_samples:    "§7Образцы: §f",
  tps_info_afk:        "§7AFK игроки: §f",

  // ── ClearLag ──────────────────────────────────────────────
  clearlag_warn_1min:  "§6[ClearLag] §7Предметы будут удалены через §f1 минуту",
  clearlag_warn_30s:   "§e[ClearLag] §7Предметы будут удалены через §f30 секунд",
  clearlag_warn_10s:   "§c[ClearLag] §7Предметы будут удалены через §f10 секунд",
  clearlag_removed:    "§7удалено",
  clearlag_items:      "§6[ClearLag] §f{items} Предметов §7и §f{xp} Сфер опыта §7удалено",
  clearlag_next:       "§6[ClearLag] §7Следующая очистка через §f",
  clearlag_manual:     "§6[ClearLag] §fРучной запуск от §e",

  // ── Entities ──────────────────────────────────────────────
  entities_header:     "§eСчетчик сущностей (все измерения)\n§7─────────────────────",
  entities_total:      "§7Всего: §f",
  entities_items:      "§7| Предметы: §f",
  entities_xp:         "§7| Опыт: §f",
  entities_mobs:       "§7| Мобы: §f",

  // ── AFK ───────────────────────────────────────────────────
  afk_none:            "§e[AFK] §7Нет AFK игроков",
  afk_list_header:     "§e[AFK] §7AFK игроки",

  // ── MobCap ────────────────────────────────────────────────
  mobcap_warning:      "§c[MobCap] §fВерхний мир имеет §c{count} §fЗагруженных мобов!",

  // ── SpawnLimiter ──────────────────────────────────────────
  spawn_warn:          "§e[SpawnWarn] §f{type} §7приближается к лимиту §f({count}/{limit})",

  // ── AI-LOD ─────────────────────────────────────────────────
  lod_info_header:     "§eИнформация об AI-LOD\n§7─────────────────",
  lod_total:           "§7Всего сущностей: §f",
  lod_tier1:           "§aTier 1 §7(полный AI):     §f",
  lod_tier2:           "§eTier 2 §7(ограниченный):  §f",
  lod_tier3:           "§cTier 3 §7(замороженный): §f",
  lod_exempt:          "§7Исключения:              §f",
  lod_distances:       "§7Дистанции: §fTier1 <{t1}b  §fTier2 <{t2}b  §fTier3 {t2}b+",

  // ── Settings UI ───────────────────────────────────────────
  ui_main_title:       "Настройки MCBSO",
  ui_main_body:        "Выберите категорию.",
  ui_btn_clearlag:     "ClearLag\nИнтервал и предупреждения",
  ui_btn_afk:          "AFK Определение\nПороги и таймер",
  ui_btn_spawn:        "Лимитер спавна\nЛимиты и уведомления",
  ui_btn_lod:          "Система AI-LOD\nДистанции и переключатель",
  ui_btn_tps:          "Монитор TPS\nРазмер выборки",
  ui_btn_reset:        "Сбросить Всё\nВосстановить значения по умолчанию",
  ui_btn_lang:         "Язык\nСменить язык аддона",

  ui_clearlag_title:   "Настройки ClearLag",
  ui_clearlag_iv:      "Интервал в тиках (Текущее: {val})",
  ui_clearlag_cap:     "Порог предупреждения MobCap (Текущее: {val})",
  ui_clearlag_chk:     "Интервал проверки MobCap (Текущее: {val})",
  ui_clearlag_cd:      "Перезарядка уведомлений в тиках (Текущее: {val})",
  ui_clearlag_saved:   "[MCBSO] ClearLag сохранён.",

  ui_afk_title:        "Настройки определения AFK",
  ui_afk_thresh:       "Порог AFK в тиках (Текущее: {val})",
  ui_afk_move:         "Порог движения в блоках (Текущее: {val})",
  ui_afk_saved:        "[MCBSO] AFK сохранён.",

  ui_spawn_title:      "Лимитер спавна",
  ui_spawn_body:       "Выберите опцию.",
  ui_spawn_btn_gen:    "Общие настройки\nПороги и уведомления",
  ui_spawn_btn_list:   "Просмотр и редактирование лимитов мобов\nРедактировать активные лимиты",
  ui_spawn_btn_add:    "Добавить новый лимит моба\nВведите тип и лимит",
  ui_spawn_btn_back:   "Назад",

  ui_spawn_settings_title:  "Настройки лимитера спавна",
  ui_spawn_warn_thresh:     "Порог предупреждения 0.0-1.0 (Текущее: {val})",
  ui_spawn_msg_dur:         "Длительность сообщения в тиках (Текущее: {val})",
  ui_spawn_cooldown:        "Перезарядка уведомлений в тиках (Текущее: {val})",
  ui_spawn_radius:          "Радиус уведомлений в блоках (Текущее: {val})",
  ui_spawn_settings_saved:  "[MCBSO] Лимитер спавна сохранён.",

  ui_mob_list_title:   "Редактировать лимиты мобов",
  ui_mob_list_body:    "Выберите тип моба для редактирования или удаления лимита.",
  ui_mob_list_none_title: "Лимиты мобов",
  ui_mob_list_none_body:  "Лимиты мобов не настроены.",
  ui_mob_list_none_btn:   "OK",
  ui_mob_list_back:    "Назад",
  ui_mob_limit_label:  "Лимит: ",

  ui_mob_edit_title:   "Редактировать лимит",
  ui_mob_edit_field:   "Тип моба: {type}\nНовый лимит (1 до 1000)\nТекущее: {val}",
  ui_mob_edit_delete:  "Удалить лимит\nУдаляет этот тип моба из лимитера",
  ui_mob_edit_deleted: "[MCBSO] Лимит для {type} удалён.",
  ui_mob_edit_saved:   "[MCBSO] Лимит для {type} установлен на {val}.",

  ui_mob_add_title:    "Новый лимит моба",
  ui_mob_add_type:     "Тип моба\nФормат: minecraft:zombie  или просто  zombie",
  ui_mob_add_limit:    "Лимит (1 до 1000)\nМакс. количество в радиусе 16 блоков",
  ui_mob_add_saved:    "[MCBSO] Лимит для {type} установлен на {val}.",

  ui_lod_title:        "Настройки системы AI-LOD",
  ui_lod_toggle:       "AI-LOD включён\nВыключен = полный ванильный AI для всех сущностей",
  ui_lod_t1:           "Дистанция Tier 1 в блоках (Текущее: {val})",
  ui_lod_t2:           "Дистанция Tier 2 в блоках (Текущее: {val})",
  ui_lod_interval:     "Интервал проверки в тиках (Текущее: {val})",
  ui_lod_nav:          "Дистанция навигации Tier 2 в блоках (Текущее: {val})",
  ui_lod_saved_on:     "[MCBSO] AI-LOD сохранён. LOD: ВКЛ",
  ui_lod_saved_off:    "[MCBSO] AI-LOD сохранён. LOD: ВЫКЛ",
  ui_lod_t1_lt_t2:     "Tier 1 ({t1}) должен быть меньше Tier 2 ({t2})",

  ui_tps_title:        "Настройки монитора TPS",
  ui_tps_sample:       "Размер выборки (Текущее: {val})",
  ui_tps_saved:        "[MCBSO] TPS сохранён.",

  ui_reset_title:      "Сбросить Всё",
  ui_reset_body:       "Все настройки будут сброшены на значения по умолчанию.\n\nВы уверены?",
  ui_reset_confirm:    "Да, сбросить",
  ui_reset_cancel:     "Отмена",
  ui_reset_done:       "[MCBSO] Все настройки сброшены.",

  ui_error_title:      "Ошибка ввода",
  ui_error_body:       "Произошли следующие ошибки:\n\n{errors}\n\nПожалуйста, исправьте значения.",
  ui_error_back:       "Назад",
  ui_error_cancel:     "Отмена",

  ui_error_not_number: "{label}: \"{val}\" не является допустимым числом",
  ui_error_out_of_range: "{label}: {val} вне диапазона [{min}-{max}]",
  ui_error_not_decimal: "{label}: \"{val}\" не является допустимым десятичным числом",
  ui_error_mob_type:   "Пожалуйста, введите допустимый тип моба",
  ui_error_mob_limit:  "Лимит должен быть числом от 1 до 1000",

  // ── Language UI ───────────────────────────────────────────
  ui_lang_title:       "Настройки языка",
  ui_lang_body:        "Выберите язык аддона.",
  ui_lang_current:     "Текущий: {lang}",
  ui_lang_saved:       "[MCBSO] Язык изменён на: {lang}",
};
