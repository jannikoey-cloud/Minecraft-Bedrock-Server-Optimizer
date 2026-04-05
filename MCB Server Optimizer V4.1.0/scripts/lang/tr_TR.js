/*
 * ============================================================
 *  lang/tr_TR.js – Türkçe (Türkiye)
 * ============================================================
 */

export default {
  // ── Genel ───────────────────────────────────────────────
  only_players:        "Sadece oyuncular için kullanılabilir",
  lang_changed:        "§a[MCBSO] Dil ayarlandı: Türkçe",
  lang_invalid:        "§c[MCBSO] Bilinmeyen dil. Mevcut: tr_TR, en_US, de_DE, pl_PL, es_ES, fr_FR",
  lang_current:        "§e[MCBSO] Güncel dil : ",

  // ── Yardım ──────────────────────────────────────────────────
  help_header:         "§e§lMCBSO – Sunucu Optimizasyonu §r§7(sadece senin için görünür)",
  help_separator:      "§7─────────────────────────────────",
  help_tps:            "§f/mcbso:tps §7– TPS görüntülemesini açıp/kapat",
  help_cleartime:      "§f/mcbso:cleartime §7– Bir sonraki ClearLag'ı göster",
  help_entities:       "§f/mcbso:entities §7– Tüm boyutlardaki varlıkları say",
  help_help:           "§f/mcbso:help §7– Bu yardımı göster",
  help_op_header:      "§c§lOP Komutları:",
  help_tpsinfo:        "§f/mcbso:tpsinfo §7– Detaylı TPS İstatistikleri",
  help_clearnow:       "§f/mcbso:clearnow §7– ClearLag'ı hemen çalıştır",
  help_afklist:        "§f/mcbso:afklist §7– Süre ile AFK oyuncuları göster",
  help_lodinfo:        "§f/mcbso:lodinfo §7– AI-LOD sistemi İstatistikleri",
  help_settings:       "§f/mcbso:settings §7– Ayarlar menüsünü aç",
  help_lang:           "§f/mcbso:lang §7– Dili değiştir",

  // ── TPS ───────────────────────────────────────────────────
  tps_enabled:         "§aTPS gösterimi aktif",
  tps_disabled:        "§cTPS gösterimi devre dışı",
  ts_info_header:     "§eTPS Bilgisi\n§7─────────────────",
  tps_info_status_good:     "İyi",
  tps_info_status_medium:   "Orta",
  tps_info_status_critical: "Kritik",
  tps_info_samples:    "§aÖrnekleme: §f",
  tps_info_afk:        "§aAFK Oyuncular: §f",

  // ── ClearLag ──────────────────────────────────────────────
  clearlag_warn_1min:  "§6[ClearLag] §7Varlıklar §f1 dakika içinde silinecek",
  clearlag_warn_30s:   "§e[ClearLag] §7Varlıklar §f30 saniye içinde silinecek",
  clearlag_warn_10s:   "§c[ClearLag] §7Varlıklar §f10 saniye içinde silinecek",
  clearlag_removed:    "§7silindi",
  clearlag_items:      "§6[ClearLag] §f{items} varlık §7ve §f{xp} XP topları §7silindi",
  clearlag_next:       "§6[ClearLag] §7Bir sonraki temizleme §f",
  clearlag_manual:     "§6[ClearLag] §7Manuel çalıştırma: §e",

  // ── Varlıklar ──────────────────────────────────────────────
  entities_header:     "§aVarlık Sayacı (tüm boyutlar)\n§7─────────────────────",
  entities_total:      "§7Toplam : §f",
  entities_items:      "§7| Varlıklar : §f",
  entities_xp:         "§7| XP : §f",
  entities_mobs:       "§7| Mob: §f",

  // ── AFK ───────────────────────────────────────────────────
  afk_none:            "§a[AFK] §7Şu anda AFK oyuncu yok",
  afk_list_header:     "§a[AFK] §7AFK Oyuncular",

  // ── MobCap ────────────────────────────────────────────────
  mobcap_warning:      "§c[MobCap] §7Overworld'de §c{count} §fvarlık yüklendi !",

  // ── SpawnLimiter ──────────────────────────────────────────
  spawn_warn:          "§e[SpawnWarn] §f{type} §7sınıra yaklaşıyor §f({count}/{limit})",

  // ── AI-LOD ────────────────────────────────────────────────
  lod_info_header:     "§aAI-LOD Bilgisi\n§7─────────────────",
  lod_total:           "§7Toplam varlık : §f",
  lod_tier1:           "§aSeviye 1 §7(tam AI):       §f",
  lod_tier2:           "§eSeviye 2 §7(yavaşlatıldı): §f",
  lod_tier3:           "§cSeviye 3 §7(donduruldu):  §f",
  lod_exempt:          "§7Muaf:                      §f",
  lod_distances:       "§7Mesafeler: §fSeviye1 <{t1}b  §fSeviye2 <{t2}b  §fSeviye3 {t2}b+",

  // ── Ayarlar UI ───────────────────────────────────────────
  ui_main_title:       "MCBSO Ayarları",
  ui_main_body:        "Bir kategori seçin.",
  ui_btn_clearlag:     "ClearLag\nAralık ve uyarılar",
  ui_btn_afk:          "AFK Tespiti\nEşikler ve zamanlama",
  ui_btn_spawn:        "Spawn Sınrlayıcı\nSınırlar ve bildirimler",
  ui_btn_lod:          "AI-LOD Sistemi\nMesafeler ve toggle",
  ui_btn_tps:          "TPS İzleyici\nÖrneklem boyutu",
  ui_btn_reset:        "Tümünü sıfırla\nVarsayılan değerleri geri yükle",
  ui_btn_lang:         "Dil\nEklamanın dilini değiştir",

  ui_clearlag_title:   "ClearLag Ayarları",
  ui_clearlag_iv:      "Aralık Döngüsü (Mevcut: {val})",
  ui_clearlag_cap:     "MobCap Uyarı Eşiği (Mevcut: {val})",
  ui_clearlag_chk:     "MobCap Kontrol Aralığı (Mevcut: {val})",
  ui_clearlag_cd:      "Bildirim Soğuma Süresi Döngüleri (Mevcut: {val})",
  ui_clearlag_saved:   "[MCBSO] ClearLag kaydedildi.",

  ui_afk_title:        "AFK Tespit Ayarları",
  ui_afk_thresh:       "AFK Eşiği Döngüleri (Mevcut: {val})",
  ui_afk_move:         "Hareket Eşiği Blokları (Mevcut: {val})",
  ui_afk_saved:        "[MCBSO] AFK kaydedildi.",

  ui_spawn_title:      "Spawn Sınrlayıcı",
  ui_spawn_body:       "Bir seçenek seçin.",
  ui_spawn_btn_gen:    "Genel Ayarlar\nEşikler ve bildirimler",
  ui_spawn_btn_list:   "Mob Sınırlarını Görüntüle ve Düzenle\nAktif sınırları düzenle",
  ui_spawn_btn_add:    "Yeni Mob Limiti Ekle\nTip ve limiti gir",
  ui_spawn_btn_back:   "Geri",

  ui_spawn_settings_title:  "Spawn Sınrlayıcı Ayarları",
  ui_spawn_warn_thresh:     "Uyarı Eşiği 0.0-1.0 (Mevcut: {val})",
  ui_spawn_msg_dur:         "Mesaj Süresi Döngüleri (Mevcut: {val})",
  ui_spawn_cooldown:        "Bildirim Soğuma Süresi Döngüleri (Mevcut: {val})",
  ui_spawn_radius:         "Bildirim Yarıçapı Blokları (Mevcut: {val})",
  ui_spawn_settings_saved: "[MCBSO] Spawn Sınrlayıcı kaydedildi.",

  ui_mob_list_title:   "Mob Sınırlarını Düzenle",
  ui_mob_list_body:    "Sınırını düzenlemek veya silmek için bir mob tipini seçin.",
  ui_mob_list_none_title: "Mob Sınırları",
  ui_mob_list_none_body:  "Mob sınırı yapılandırılmadı.",
  ui_mob_list_none_btn:   "Tamam",
  ui_mob_list_back:    "Geri",
  ui_mob_limit_label:  "Limit: ",

  ui_mob_edit_title:   "Limiti Düzenle",
  ui_mob_edit_field:   "Mob Tipi: {type}\nYeni limit (1-1000)\nMevcut: {val}",
  ui_mob_edit_delete:  "Limiti Sil\nBu mob tipini kısıtlamadan kaldırır",
  ui_mob_edit_deleted: "[MCBSO] {type} için limit silindi.",
  ui_mob_edit_saved:   "[MCBSO] {type} için limit {val} olarak ayarlandı.",

  ui_mob_add_title:    "Yeni Mob Limiti",
  ui_mob_add_type:     "Mob Tipi\nFormat: minecraft:zombie  veya sadece  zombie",
  ui_mob_add_limit:    "Limit (1-1000)\n16 blok yarıçapındaki maksimum sayısı",
  ui_mob_add_saved:    "[MCBSO] {type} için limit {val} olarak ayarlandı.",

  ui_lod_title:        "AI-LOD Sistemi Ayarları",
  ui_lod_toggle:       "AI-LOD aktif\nDevre dışı = tüm varlıklar için tam vanilla AI",
  ui_lod_t1:           "Seviye 1 Mesafesi Blokları (Mevcut: {val})",
  ui_lod_t2:           "Seviye 2 Mesafesi Blokları (Mevcut: {val})",
  ui_lod_interval:     "Kontrol Aralığı Döngüleri (Mevcut: {val})",
  ui_lod_nav:          "Seviye 2 Navigasyon Mesafesi (Mevcut: {val})",
  ui_lod_saved_on:     "[MCBSO] AI-LOD kaydedildi. LOD: AÇIK",
  ui_lod_saved_off:    "[MCBSO] AI-LOD kaydedildi. LOD: KAPALI",
  ui_lod_t1_lt_t2:     "Seviye 1 ({t1}) Seviye 2'den ({t2}) küçük olmalıdır",

  ui_tps_title:        "TPS İzleyici Ayarları",
  ui_tps_sample:       "Örneklem Boyutu (Mevcut: {val})",
  ui_tps_saved:        "[MCBSO] TPS kaydedildi.",

  ui_reset_title:      "Tümünü Sıfırla",
  ui_reset_body:       "Tüm ayarlar varsayılan değerlere sıfırlanacak.\n\n Emin misiniz?",
  ui_reset_confirm:    "Evet, sıfırla",
  ui_reset_cancel:     "İptal",
  ui_reset_done:       "[MCBSO] Tüm ayarlar sıfırlandı.",

  ui_error_title:      "Giriş Hatası",
  ui_error_body:       "Aşağıdaki hatalar oluştu:\n\n{errors}\n\nLütfen değerleri düzeltin.",
  ui_error_back:       "Geri",
  ui_error_cancel:     "İptal",

  ui_error_not_number:   "{label} : \"{val}\" geçerli bir sayı değil",
  ui_error_out_of_range: "{label} : {val} [{min}-{max}] dışında",
  ui_error_not_decimal:  "{label} : \"{val}\" geçerli ondalık sayı değil",
  ui_error_mob_type:     "Lütfen geçerli bir mob tipi girin",
  ui_error_mob_limit:   "Limit 1 ile 1000 arası bir sayı olmalıdır",

  // ── Language UI ───────────────────────────────────────────
  ui_lang_title:       "Dil Ayarları",
  ui_lang_body:        "Eklamanın dilini seçin.",
  ui_lang_current:     "Mevcut: {lang}",
  ui_lang_saved:       "[MCBSO] Dil {lang} olarak değiştirildi",
};
