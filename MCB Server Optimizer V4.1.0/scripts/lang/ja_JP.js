/*
 * ============================================================
 *  lang/ja_JP.js – Japanese (Japan)
 * ============================================================
 */

export default {
  // ── General ───────────────────────────────────────────────
  only_players:        "プレイヤーのみ利用可能",
  lang_changed:        "§a[MCBSO] 言語を設定: 日本語",
  lang_invalid:        "§c[MCBSO] 不明な言語. 利用可能: de_DE, en_US, fr_FR, es_ES, tr_TR, pl_PL, pt_BR, ru_RU, zh_CN, ja_JP, it_IT, nl_NL",
  lang_current:        "§e[MCBSO] 現在の言語: ",

  // ── Help ──────────────────────────────────────────────────
  help_header:         "§e§lMCBSO – サーバーオプティマイザー §r§7(あなたのみに表示)",
  help_separator:      "§7─────────────────────────────────",
  help_tps:            "§f/mcbso:tps §7– TPS表示切替",
  help_cleartime:      "§f/mcbso:cleartime §7– 次回のClearLagを表示",
  help_entities:       "§f/mcbso:entities §7– 全ディメンションの实体をカウント",
  help_help:           "§f/mcbso:help §7– このヘルプを表示",
  help_op_header:      "§c§lOPコマンド:",
  help_tpsinfo:        "§f/mcbso:tpsinfo §7– 詳細なTPS統計",
  help_clearnow:       "§f/mcbso:clearnow §7– 今すぐClearLagを実行",
  help_afklist:        "§f/mcbso:afklist §7– AFKプレイヤーを時間とで表示",
  help_lodinfo:        "§f/mcbso:lodinfo §7– AI-LODシステム統計",
  help_settings:       "§f/mcbso:settings §7– 設定メニューを開く",
  help_lang:           "§f/mcbso:lang §7– 言語を変更",

  // ── TPS ───────────────────────────────────────────────────
  tps_enabled:         "§aTPS表示が有効になりました",
  tps_disabled:        "§cTPS表示が無効になりました",
  tps_info_header:     "§eTPS情報\n§7─────────────────",
  tps_info_status_good:     "良好",
  tps_info_status_medium:   "中程度",
  tps_info_status_critical: "危険",
  tps_info_samples:    "§7サンプル数: §f",
  tps_info_afk:        "§7AFKプレイヤー: §f",

  // ── ClearLag ──────────────────────────────────────────────
  clearlag_warn_1min:  "§6[ClearLag] §7アイテムは§f1分後§7に削除されます",
  clearlag_warn_30s:   "§e[ClearLag] §7アイテムは§f30秒後§7に削除されます",
  clearlag_warn_10s:   "§c[ClearLag] §7アイテムは§f10秒後§7に削除されます",
  clearlag_removed:    "§7削除済み",
  clearlag_items:      "§6[ClearLag] §f{items} アイテム §7と §f{xp} XPオーブ §7を削除",
  clearlag_next:       "§6[ClearLag] §7次のクリアまで §f",
  clearlag_manual:     "§6[ClearLag] §f手動実行者 §e",

  // ── Entities ──────────────────────────────────────────────
  entities_header:     "§eエンティティカウンター (全ディメンション)\n§7─────────────────────",
  entities_total:      "§7合計: §f",
  entities_items:      "§7| アイテム: §f",
  entities_xp:         "§7| XP: §f",
  entities_mobs:       "§7| モブ: §f",

  // ── AFK ───────────────────────────────────────────────────
  afk_none:            "§e[AFK] §7現在AFKプレイヤーはいません",
  afk_list_header:     "§e[AFK] §7AFKプレイヤー一覧",

  // ── MobCap ────────────────────────────────────────────────
  mobcap_warning:      "§c[MobCap] §fオーバーワールドに §c{count} §f体のモブが読み込まれています!",

  // ── SpawnLimiter ──────────────────────────────────────────
  spawn_warn:          "§e[SpawnWarn] §f{type} §7が上限に近づいています §f({count}/{limit})",

  // ── AI-LOD ─────────────────────────────────────────────────
  lod_info_header:     "§eAI-LOD情報\n§7─────────────────",
  lod_total:           "§7エンティティ合計: §f",
  lod_tier1:           "§aTier 1 §7(完全AI):     §f",
  lod_tier2:           "§eTier 2 §7(スロットル): §f",
  lod_tier3:           "§cTier 3 §7(停止):      §f",
  lod_exempt:          "§7除外:                 §f",
  lod_distances:       "§7距離: §fTier1 <{t1}b  §fTier2 <{t2}b  §fTier3 {t2}b+",

  // ── Settings UI ───────────────────────────────────────────
  ui_main_title:       "MCBSO 設定",
  ui_main_body:        "カテゴリを選択してください.",
  ui_btn_clearlag:     "ClearLag\n間隔と警告",
  ui_btn_afk:          "AFK検出\nしきい値と時間",
  ui_btn_spawn:        "スポーンリミッター\n制限と通知",
  ui_btn_lod:          "AI-LODシステム\n距離と切替",
  ui_btn_tps:          "TPSモニター\nサンプルサイズ",
  ui_btn_reset:        "全てリセット\nデフォルト値を復元",
  ui_btn_lang:         "言語\nアドオンの言語を変更",

  ui_clearlag_title:   "ClearLag 設定",
  ui_clearlag_iv:      "間隔_tick (現在: {val})",
  ui_clearlag_cap:     "MobCap警告しきい値 (現在: {val})",
  ui_clearlag_chk:     "MobCap確認間隔_tick (現在: {val})",
  ui_clearlag_cd:      "通知クールダウン_tick (現在: {val})",
  ui_clearlag_saved:   "[MCBSO] ClearLagを保存しました.",

  ui_afk_title:        "AFK検出設定",
  ui_afk_thresh:       "AFKしきい値_tick (現在: {val})",
  ui_afk_move:         "移動しきい値_ブロック (現在: {val})",
  ui_afk_saved:        "[MCBSO] AFKを保存しました.",

  ui_spawn_title:      "スポーンリミッター",
  ui_spawn_body:       "オプションを選択してください.",
  ui_spawn_btn_gen:    "一般設定\nしきい値と通知",
  ui_spawn_btn_list:   "モブレimitsを表示・編集\nアクティブな制限を編集",
  ui_spawn_btn_add:    "新しいモブレimitを追加\nタイプと制限を入力",
  ui_spawn_btn_back:   "戻る",

  ui_spawn_settings_title:  "スポーンリミッター設定",
  ui_spawn_warn_thresh:     "警告しきい値 0.0-1.0 (現在: {val})",
  ui_spawn_msg_dur:         "メッセージ表示時間_tick (現在: {val})",
  ui_spawn_cooldown:        "通知クールダウン_tick (現在: {val})",
  ui_spawn_radius:          "通知半径_ブロック (現在: {val})",
  ui_spawn_settings_saved:  "[MCBSO] スポーンリミッターを保存しました.",

  ui_mob_list_title:   "モブレimitsを編集",
  ui_mob_list_body:    "編集または削除するモブタイプを選択してください.",
  ui_mob_list_none_title: "モブレimits",
  ui_mob_list_none_body:  "モブレimitsが設定されていません.",
  ui_mob_list_none_btn:   "OK",
  ui_mob_list_back:    "戻る",
  ui_mob_limit_label:  "制限: ",

  ui_mob_edit_title:   "制限を編集",
  ui_mob_edit_field:   "モブタイプ: {type}\n新しい制限 (1-1000)\n現在: {val}",
  ui_mob_edit_delete:  "制限を削除\nこのモブタイプをリミッターから削除",
  ui_mob_edit_deleted: "[MCBSO] {type}の制限を削除しました.",
  ui_mob_edit_saved:   "[MCBSO] {type}の制限を{val}に設定しました.",

  ui_mob_add_title:    "新しいモブレimit",
  ui_mob_add_type:     "モブタイプ\n形式: minecraft:zombie  または  zombie",
  ui_mob_add_limit:    "制限 (1-1000)\n16ブロック半径内の最大数",
  ui_mob_add_saved:    "[MCBSO] {type}の制限を{val}に設定しました.",

  ui_lod_title:        "AI-LODシステム設定",
  ui_lod_toggle:       "AI-LOD有効\n無効 = 全エンティティに完全なバニラAI",
  ui_lod_t1:           "Tier 1距離_ブロック (現在: {val})",
  ui_lod_t2:           "Tier 2距離_ブロック (現在: {val})",
  ui_lod_interval:     "確認間隔_tick (現在: {val})",
  ui_lod_nav:          "Tier 2航法距離_ブロック (現在: {val})",
  ui_lod_saved_on:     "[MCBSO] AI-LODを保存しました. LOD: オン",
  ui_lod_saved_off:    "[MCBSO] AI-LODを保存しました. LOD: オフ",
  ui_lod_t1_lt_t2:     "Tier 1 ({t1}) は Tier 2 ({t2}) より小さくする必要があります",

  ui_tps_title:        "TPSモニター設定",
  ui_tps_sample:       "サンプルサイズ (現在: {val})",
  ui_tps_saved:        "[MCBSO] TPSを保存しました.",

  ui_reset_title:      "全てリセット",
  ui_reset_body:       "全設定がデフォルト値にリセットされます.\n\nよろしいですか?",
  ui_reset_confirm:    "はい,リセット",
  ui_reset_cancel:     "キャンセル",
  ui_reset_done:       "[MCBSO] 全設定をリセットしました.",

  ui_error_title:      "入力エラー",
  ui_error_body:       "以下のエラーが発生しました:\n\n{errors}\n\n値を確認してください.",
  ui_error_back:       "戻る",
  ui_error_cancel:     "キャンセル",

  ui_error_not_number: "{label}: \"{val}\" は有効な数値ではありません",
  ui_error_out_of_range: "{label}: {val} は範囲外 [{min}-{max}]",
  ui_error_not_decimal: "{label}: \"{val}\" は有効な小数ではありません",
  ui_error_mob_type:   "有効なモブタイプを入力してください",
  ui_error_mob_limit:  "制限は1から1000の間の数値である必要があります",

  // ── Language UI ───────────────────────────────────────────
  ui_lang_title:       "言語設定",
  ui_lang_body:        "アドオンの言語を選択してください.",
  ui_lang_current:     "現在: {lang}",
  ui_lang_saved:       "[MCBSO] 言語を変更しました: {lang}",
};
