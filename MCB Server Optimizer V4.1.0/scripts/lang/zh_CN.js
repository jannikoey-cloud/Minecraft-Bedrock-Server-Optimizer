/*
 * ============================================================
 *  lang/zh_CN.js – Chinese (Simplified)
 * ============================================================
 */

export default {
  // ── General ───────────────────────────────────────────────
  only_players:        "仅玩家可用",
  lang_changed:        "§a[MCBSO] 语言已设置为: 简体中文",
  lang_invalid:        "§c[MCBSO] 未知语言. 可用: de_DE, en_US, fr_FR, es_ES, tr_TR, pl_PL, pt_BR, ru_RU, zh_CN, ja_JP, it_IT, nl_NL",
  lang_current:        "§e[MCBSO] 当前语言: ",

  // ── Help ──────────────────────────────────────────────────
  help_header:         "§e§lMCBSO – 服务器优化器 §r§7(仅您可见)",
  help_separator:      "§7─────────────────────────────────",
  help_tps:            "§f/mcbso:tps §7– 切换TPS显示",
  help_cleartime:      "§f/mcbso:cleartime §7– 显示下次清理时间",
  help_entities:       "§f/mcbso:entities §7– 统计所有维度的实体",
  help_help:           "§f/mcbso:help §7– 显示此帮助",
  help_op_header:      "§c§l管理员命令:",
  help_tpsinfo:        "§f/mcbso:tpsinfo §7– 详细TPS统计",
  help_clearnow:       "§f/mcbso:clearnow §7– 立即执行清理",
  help_afklist:        "§f/mcbso:afklist §7– 显示AFK玩家及持续时间",
  help_lodinfo:        "§f/mcbso:lodinfo §7– AI-LOD系统统计",
  help_settings:       "§f/mcbso:settings §7– 打开设置菜单",
  help_lang:           "§f/mcbso:lang §7– 更改语言",

  // ── TPS ───────────────────────────────────────────────────
  tps_enabled:         "§aTPS显示已启用",
  tps_disabled:        "§cTPS显示已禁用",
  tps_info_header:     "§eTPS信息\n§7─────────────────",
  tps_info_status_good:     "良好",
  tps_info_status_medium:   "中等",
  tps_info_status_critical: "严重",
  tps_info_samples:    "§7样本数: §f",
  tps_info_afk:        "§7AFK玩家: §f",

  // ── ClearLag ──────────────────────────────────────────────
  clearlag_warn_1min:  "§6[ClearLag] §7物品将在§f1分钟后§7被删除",
  clearlag_warn_30s:   "§e[ClearLag] §7物品将在§f30秒后§7被删除",
  clearlag_warn_10s:   "§c[ClearLag] §7物品将在§f10秒后§7被删除",
  clearlag_removed:    "§7已移除",
  clearlag_items:      "§6[ClearLag] §f{items} 个物品 §7和 §f{xp} 个经验球 §7已移除",
  clearlag_next:       "§6[ClearLag] §7下次清理于 §f",
  clearlag_manual:     "§6[ClearLag] §f手动执行者 §e",

  // ── Entities ──────────────────────────────────────────────
  entities_header:     "§e实体计数器 (所有维度)\n§7─────────────────────",
  entities_total:      "§7总计: §f",
  entities_items:      "§7| 物品: §f",
  entities_xp:         "§7| 经验: §f",
  entities_mobs:       "§7| 生物: §f",

  // ── AFK ───────────────────────────────────────────────────
  afk_none:            "§e[AFK] §7当前没有AFK玩家",
  afk_list_header:     "§e[AFK] §7AFK玩家列表",

  // ── MobCap ────────────────────────────────────────────────
  mobcap_warning:      "§c[MobCap] §f主世界已加载 §c{count} §f个生物!",

  // ── SpawnLimiter ──────────────────────────────────────────
  spawn_warn:          "§e[SpawnWarn] §f{type} §7接近上限 §f({count}/{limit})",

  // ── AI-LOD ─────────────────────────────────────────────────
  lod_info_header:     "§eAI-LOD信息\n§7─────────────────",
  lod_total:           "§7实体总数: §f",
  lod_tier1:           "§aTier 1 §7(完整AI):     §f",
  lod_tier2:           "§eTier 2 §7(节流):       §f",
  lod_tier3:           "§cTier 3 §7(冻结):       §f",
  lod_exempt:          "§7 exempt:              §f",
  lod_distances:       "§7距离: §fTier1 <{t1}b  §fTier2 <{t2}b  §fTier3 {t2}b+",

  // ── Settings UI ───────────────────────────────────────────
  ui_main_title:       "MCBSO 设置",
  ui_main_body:        "选择一个类别.",
  ui_btn_clearlag:     "ClearLag\n间隔和警告",
  ui_btn_afk:          "AFK检测\n阈值和时间",
  ui_btn_spawn:        "刷怪限制\n限制和通知",
  ui_btn_lod:          "AI-LOD系统\n距离和开关",
  ui_btn_tps:          "TPS监视器\n样本大小",
  ui_btn_reset:        "重置所有\n恢复默认设置",
  ui_btn_lang:         "语言\n更改插件语言",

  ui_clearlag_title:   "ClearLag 设置",
  ui_clearlag_iv:      "间隔tick数 (当前: {val})",
  ui_clearlag_cap:     "生物上限警告阈值 (当前: {val})",
  ui_clearlag_chk:     "生物上限检查间隔tick数 (当前: {val})",
  ui_clearlag_cd:      "通知冷却tick数 (当前: {val})",
  ui_clearlag_saved:   "[MCBSO] ClearLag已保存.",

  ui_afk_title:        "AFK检测设置",
  ui_afk_thresh:       "AFK阈值tick数 (当前: {val})",
  ui_afk_move:         "移动阈值方块数 (当前: {val})",
  ui_afk_saved:        "[MCBSO] AFK已保存.",

  ui_spawn_title:      "刷怪限制器",
  ui_spawn_body:       "选择一个选项.",
  ui_spawn_btn_gen:    "常规设置\n阈值和通知",
  ui_spawn_btn_list:   "查看和编辑生物限制\n编辑活跃限制",
  ui_spawn_btn_add:    "添加新生物限制\n输入类型和限制",
  ui_spawn_btn_back:   "返回",

  ui_spawn_settings_title:  "刷怪限制器设置",
  ui_spawn_warn_thresh:     "警告阈值 0.0-1.0 (当前: {val})",
  ui_spawn_msg_dur:         "消息持续tick数 (当前: {val})",
  ui_spawn_cooldown:        "通知冷却tick数 (当前: {val})",
  ui_spawn_radius:          "通知半径方块数 (当前: {val})",
  ui_spawn_settings_saved:  "[MCBSO] 刷怪限制器已保存.",

  ui_mob_list_title:   "编辑生物限制",
  ui_mob_list_body:    "选择一个生物类型来编辑或删除其限制.",
  ui_mob_list_none_title: "生物限制",
  ui_mob_list_none_body:  "未配置生物限制.",
  ui_mob_list_none_btn:   "确定",
  ui_mob_list_back:    "返回",
  ui_mob_limit_label:  "限制: ",

  ui_mob_edit_title:   "编辑限制",
  ui_mob_edit_field:   "生物类型: {type}\n新限制 (1-1000)\n当前: {val}",
  ui_mob_edit_delete:  "删除限制\n从限制器中移除此生物类型",
  ui_mob_edit_deleted: "[MCBSO] {type}的限制已移除.",
  ui_mob_edit_saved:   "[MCBSO] {type}的限制已设置为{val}.",

  ui_mob_add_title:    "新生物限制",
  ui_mob_add_type:     "生物类型\n格式: minecraft:zombie  或  zombie",
  ui_mob_add_limit:    "限制 (1-1000)\n16方块半径内的最大数量",
  ui_mob_add_saved:    "[MCBSO] {type}的限制已设置为{val}.",

  ui_lod_title:        "AI-LOD系统设置",
  ui_lod_toggle:       "AI-LOD已启用\n禁用 = 所有实体使用完整原版AI",
  ui_lod_t1:           "Tier 1距离方块数 (当前: {val})",
  ui_lod_t2:           "Tier 2距离方块数 (当前: {val})",
  ui_lod_interval:     "检查间隔tick数 (当前: {val})",
  ui_lod_nav:          "Tier 2导航距离方块数 (当前: {val})",
  ui_lod_saved_on:     "[MCBSO] AI-LOD已保存. LOD: 开启",
  ui_lod_saved_off:    "[MCBSO] AI-LOD已保存. LOD: 关闭",
  ui_lod_t1_lt_t2:     "Tier 1 ({t1}) 必须小于 Tier 2 ({t2})",

  ui_tps_title:        "TPS监视器设置",
  ui_tps_sample:       "样本大小 (当前: {val})",
  ui_tps_saved:        "[MCBSO] TPS已保存.",

  ui_reset_title:      "重置所有",
  ui_reset_body:       "所有设置将重置为默认值.\n\n确定吗?",
  ui_reset_confirm:    "是的,重置",
  ui_reset_cancel:     "取消",
  ui_reset_done:       "[MCBSO] 所有设置已重置.",

  ui_error_title:      "输入错误",
  ui_error_body:       "发生以下错误:\n\n{errors}\n\n请更正值.",
  ui_error_back:       "返回",
  ui_error_cancel:     "取消",

  ui_error_not_number: "{label}: \"{val}\" 不是有效数字",
  ui_error_out_of_range: "{label}: {val} 超出范围 [{min}-{max}]",
  ui_error_not_decimal: "{label}: \"{val}\" 不是有效小数",
  ui_error_mob_type:   "请输入有效的生物类型",
  ui_error_mob_limit:  "限制必须是1到1000之间的数字",

  // ── Language UI ───────────────────────────────────────────
  ui_lang_title:       "语言设置",
  ui_lang_body:        "选择插件语言.",
  ui_lang_current:     "当前: {lang}",
  ui_lang_saved:       "[MCBSO] 语言已更改为: {lang}",
};
