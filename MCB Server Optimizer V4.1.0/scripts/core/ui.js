/*
 * ============================================================
 *  ui.js - Settings UI  (@minecraft/server-ui 2.0.0)
 *
 *  Called via /mcbso:settings (GameDirectors).
 *
 *  Note: No Unicode special characters (no em-dashes, no umlauts)
 *  in titles and labels – Bedrock Forms do not render them
 *  reliably and the form silently closes.
 *
 *  All user-facing strings are sourced from lang/i18n.js
 *  so that the UI automatically reflects the active language.
 * ============================================================
 */

import { system, world, Player, CommandPermissionLevel } from "@minecraft/server";
import { ActionFormData, ModalFormData, MessageFormData } from "@minecraft/server-ui";
import { get, set, resetAll } from "./settings.js";
import { fail, success } from "./util.js";
import { CONFIG_META, ENTITY_LIMITS } from "../config.js";
import { t, setLang, getLang } from "../lang/i18n.js";

// Runtime mob limits (starts with values from config.js, editable via UI)
// Map<typeId, limit>
const runtimeLimits = new Map(Object.entries(ENTITY_LIMITS));

/**
 * Returns the current mob limits (used by spawnlimiter.js).
 * @returns {Map<string, number>}
 */
export function getRuntimeLimits() { return runtimeLimits; }

// ── Helper ────────────────────────────────────────────────────
function meta(key) { return CONFIG_META.find(m => m.key === key); }

// ── Main menu ─────────────────────────────────────────────────

function showMainMenu(player) {
  new ActionFormData()
    .title(t("ui_main_title"))
    .body(t("ui_main_body"))
    .button(t("ui_btn_clearlag"))
    .button(t("ui_btn_afk"))
    .button(t("ui_btn_spawn"))
    .button(t("ui_btn_lod"))
    .button(t("ui_btn_tps"))
    .button(t("ui_btn_lang"))
    .button(t("ui_btn_reset"))
    .show(player)
    .then(res => {
      if (res.canceled || res.selection === undefined) return;
      switch (res.selection) {
        case 0: showClearLagMenu(player); break;
        case 1: showAfkMenu(player); break;
        case 2: showSpawnLimiterMenu(player); break;
        case 3: showLodMenu(player); break;
        case 4: showTpsMenu(player); break;
        case 5: showLangMenu(player); break;
        case 6: showResetConfirm(player); break;
      }
    }).catch(() => { });
}

// ── ClearLag ──────────────────────────────────────────────────

function showClearLagMenu(player) {
  new ModalFormData()
    .title(t("ui_clearlag_title"))
    .textField(t("ui_clearlag_iv", { val: get("CLEAR_INTERVAL") }), "2400-144000", { defaultValue: String(get("CLEAR_INTERVAL")) })
    .textField(t("ui_clearlag_cap", { val: get("MOB_CAP_WARNING") }), "50-5000", { defaultValue: String(get("MOB_CAP_WARNING")) })
    .textField(t("ui_clearlag_chk", { val: get("MOB_CAP_CHECK_INTERVAL") }), "20-2000", { defaultValue: String(get("MOB_CAP_CHECK_INTERVAL")) })
    .textField(t("ui_clearlag_cd", { val: get("NOTIFY_COOLDOWN_TICKS") }), "20-400", { defaultValue: String(get("NOTIFY_COOLDOWN_TICKS")) })
    .show(player)
    .then(res => {
      if (res.canceled || !res.formValues) { showMainMenu(player); return; }
      const [rawIv, rawCap, rawChk, rawCd] = res.formValues;
      const errors = [];
      const iv = _intRaw(rawIv, 2400, 144000, errors, "Interval");
      const cap = _intRaw(rawCap, 50, 5000, errors, "MobCap");
      const chk = _intRaw(rawChk, 20, 2000, errors, "Check-Interval");
      const cd = _intRaw(rawCd, 20, 400, errors, "Cooldown");
      if (errors.length > 0) { showError(player, errors, () => showClearLagMenu(player)); return; }
      set("CLEAR_INTERVAL", iv);
      set("MOB_CAP_WARNING", cap);
      set("MOB_CAP_CHECK_INTERVAL", chk);
      set("NOTIFY_COOLDOWN_TICKS", cd);
      player.sendMessage(t("ui_clearlag_saved"));
      showMainMenu(player);
    }).catch(e => { player.sendMessage("[MCBSO] Error: " + String(e)); });
}

// ── AFK Detection ─────────────────────────────────────────────

function showAfkMenu(player) {
  const m_t = meta("AFK_THRESHOLD");
  const m_m = meta("AFK_MOVE_THRESHOLD");

  new ModalFormData()
    .title(t("ui_afk_title"))
    .textField(t("ui_afk_thresh", { val: get("AFK_THRESHOLD") }), "100-12000", { defaultValue: String(get("AFK_THRESHOLD")) })
    .textField(t("ui_afk_move", { val: get("AFK_MOVE_THRESHOLD") }), "0.1-5.0", { defaultValue: String(get("AFK_MOVE_THRESHOLD")) })
    .show(player)
    .then(res => {
      if (res.canceled || !res.formValues) { showMainMenu(player); return; }
      const [rawT, rawM] = res.formValues;
      const errors = [];
      const tv = _int(rawT, m_t, errors, "AFK Threshold");
      const mv = _flt(rawM, m_m, errors, "Move Threshold");
      if (errors.length > 0) { showError(player, errors, () => showAfkMenu(player)); return; }
      set("AFK_THRESHOLD", tv);
      set("AFK_MOVE_THRESHOLD", mv);
      player.sendMessage(t("ui_afk_saved"));
      showMainMenu(player);
    }).catch(() => { });
}

// ── Spawn Limiter main menu ────────────────────────────────────

function showSpawnLimiterMenu(player) {
  new ActionFormData()
    .title(t("ui_spawn_title"))
    .body(t("ui_spawn_body"))
    .button(t("ui_spawn_btn_gen"))
    .button(t("ui_spawn_btn_list"))
    .button(t("ui_spawn_btn_add"))
    .button(t("ui_spawn_btn_back"))
    .show(player)
    .then(res => {
      if (res.canceled || res.selection === undefined) { showMainMenu(player); return; }
      switch (res.selection) {
        case 0: showSpawnLimiterSettings(player); break;
        case 1: showMobLimitList(player); break;
        case 2: showAddMobLimit(player); break;
        case 3: showMainMenu(player); break;
      }
    }).catch(() => { });
}

// ── Spawn Limiter: general settings ───────────────────────────

function showSpawnLimiterSettings(player) {
  const m_w = meta("SPAWN_WARN_THRESHOLD");
  const m_d = meta("SPAWN_MSG_DURATION");
  const m_c = meta("NOTIFY_COOLDOWN_TICKS");
  const m_r = meta("SPAWN_NOTIFY_RADIUS");

  new ModalFormData()
    .title(t("ui_spawn_settings_title"))
    .textField(t("ui_spawn_warn_thresh", { val: get("SPAWN_WARN_THRESHOLD") }), "0.5-0.95", { defaultValue: String(get("SPAWN_WARN_THRESHOLD")) })
    .textField(t("ui_spawn_msg_dur", { val: get("SPAWN_MSG_DURATION") }), "20-400", { defaultValue: String(get("SPAWN_MSG_DURATION")) })
    .textField(t("ui_spawn_cooldown", { val: get("NOTIFY_COOLDOWN_TICKS") }), "20-400", { defaultValue: String(get("NOTIFY_COOLDOWN_TICKS")) })
    .textField(t("ui_spawn_radius", { val: get("SPAWN_NOTIFY_RADIUS") }), "16-256", { defaultValue: String(get("SPAWN_NOTIFY_RADIUS")) })
    .show(player)
    .then(res => {
      if (res.canceled || !res.formValues) { showSpawnLimiterMenu(player); return; }
      const [rawW, rawD, rawC, rawR] = res.formValues;
      const errors = [];
      const w = _flt(rawW, m_w, errors, "Warn Threshold");
      const d = _int(rawD, m_d, errors, "Message Duration");
      const c = _int(rawC, m_c, errors, "Cooldown");
      const r = _int(rawR, m_r, errors, "Radius");
      if (errors.length > 0) { showError(player, errors, () => showSpawnLimiterSettings(player)); return; }
      set("SPAWN_WARN_THRESHOLD", w);
      set("SPAWN_MSG_DURATION", d);
      set("NOTIFY_COOLDOWN_TICKS", c);
      set("SPAWN_NOTIFY_RADIUS", r);
      player.sendMessage(t("ui_spawn_settings_saved"));
      showSpawnLimiterMenu(player);
    }).catch(() => { });
}

// ── Spawn Limiter: mob limit list ─────────────────────────────

function showMobLimitList(player) {
  if (runtimeLimits.size === 0) {
    new MessageFormData()
      .title(t("ui_mob_list_none_title"))
      .body(t("ui_mob_list_none_body"))
      .button1(t("ui_mob_list_none_btn"))
      .button2(t("ui_spawn_btn_back"))
      .show(player)
      .then(() => showSpawnLimiterMenu(player))
      .catch(() => { });
    return;
  }

  const entries = [...runtimeLimits.entries()];
  const form = new ActionFormData()
    .title(t("ui_mob_list_title"))
    .body(t("ui_mob_list_body"));

  for (const [type, limit] of entries) {
    const shortType = type.replace("minecraft:", "");
    form.button(`${shortType}\n${t("ui_mob_limit_label")}${limit}`);
  }
  form.button(t("ui_mob_list_back"));

  form.show(player).then(res => {
    if (res.canceled || res.selection === undefined) { showSpawnLimiterMenu(player); return; }
    if (res.selection === entries.length) { showSpawnLimiterMenu(player); return; }
    const [selectedType, selectedLimit] = entries[res.selection];
    showEditMobLimit(player, selectedType, selectedLimit);
  }).catch(() => { });
}

// ── Spawn Limiter: edit single limit ──────────────────────────

function showEditMobLimit(player, typeId, currentLimit) {
  const shortType = typeId.replace("minecraft:", "");

  new ModalFormData()
    .title(t("ui_mob_edit_title"))
    .textField(t("ui_mob_edit_field", { type: shortType, val: currentLimit }), "1-1000", { defaultValue: String(currentLimit) })
    .toggle(t("ui_mob_edit_delete"), { defaultValue: false })
    .show(player)
    .then(res => {
      if (res.canceled || !res.formValues) { showMobLimitList(player); return; }
      const [rawLimit, shouldDelete] = res.formValues;

      if (shouldDelete) {
        runtimeLimits.delete(typeId);
        _saveLimits();
        player.sendMessage("[MCBSO] " + t("ui_mob_edit_deleted", { type: shortType }));
        showMobLimitList(player);
        return;
      }

      const newLimit = parseInt(String(rawLimit).trim(), 10);
      if (isNaN(newLimit) || newLimit < 1 || newLimit > 1000) {
        showError(player, [t("ui_error_mob_limit")], () => showEditMobLimit(player, typeId, currentLimit));
        return;
      }

      runtimeLimits.set(typeId, newLimit);
      _saveLimits();
      player.sendMessage(t("ui_mob_edit_saved", { type: shortType, val: newLimit }));
      showMobLimitList(player);
    }).catch(() => { });
}

// ── Spawn Limiter: add new limit ──────────────────────────────

function showAddMobLimit(player) {
  new ModalFormData()
    .title(t("ui_mob_add_title"))
    .textField(t("ui_mob_add_type"), "minecraft:zombie", { defaultValue: "minecraft:" })
    .textField(t("ui_mob_add_limit"), "1-1000", { defaultValue: "30" })
    .show(player)
    .then(res => {
      if (res.canceled || !res.formValues) { showSpawnLimiterMenu(player); return; }
      const [rawType, rawLimit] = res.formValues;

      let typeId = String(rawType).trim().toLowerCase();
      if (!typeId.startsWith("minecraft:")) typeId = "minecraft:" + typeId;

      const limit = parseInt(String(rawLimit).trim(), 10);
      const errors = [];

      if (typeId === "minecraft:" || typeId.length < 12)
        errors.push(t("ui_error_mob_type"));
      if (isNaN(limit) || limit < 1 || limit > 1000)
        errors.push(t("ui_error_mob_limit"));

      if (errors.length > 0) { showError(player, errors, () => showAddMobLimit(player)); return; }

      runtimeLimits.set(typeId, limit);
      _saveLimits();
      player.sendMessage(t("ui_mob_add_saved", { type: typeId, val: limit }));
      showSpawnLimiterMenu(player);
    }).catch(() => { });
}

// ── Persist mob limits ────────────────────────────────────────

function _saveLimits() {
  try {
    const data = JSON.stringify([...runtimeLimits.entries()]);
    world.setDynamicProperty("sal_mob_limits", data);
  } catch { }
}

export function loadRuntimeLimits() {
  try {
    const raw = world.getDynamicProperty("sal_mob_limits");
    if (typeof raw === "string" && raw.length > 0) {
      const entries = JSON.parse(raw);
      if (Array.isArray(entries)) {
        runtimeLimits.clear();
        for (const [k, v] of entries) runtimeLimits.set(k, v);
      }
    }
  } catch { }
}

// ── AI-LOD System ─────────────────────────────────────────────

function showLodMenu(player) {
  const m_t1 = meta("LOD_TIER1_DIST");
  const m_t2 = meta("LOD_TIER2_DIST");
  const m_int = meta("LOD_CHECK_INTERVAL");
  const m_nav = meta("LOD_TIER2_NAV_DIST");

  new ModalFormData()
    .title(t("ui_lod_title"))
    .toggle(t("ui_lod_toggle"), { defaultValue: get("LOD_ENABLED") })
    .textField(t("ui_lod_t1", { val: get("LOD_TIER1_DIST") }), "8-32", { defaultValue: String(get("LOD_TIER1_DIST")) })
    .textField(t("ui_lod_t2", { val: get("LOD_TIER2_DIST") }), "24-96", { defaultValue: String(get("LOD_TIER2_DIST")) })
    .textField(t("ui_lod_interval", { val: get("LOD_CHECK_INTERVAL") }), "10-100", { defaultValue: String(get("LOD_CHECK_INTERVAL")) })
    .textField(t("ui_lod_nav", { val: get("LOD_TIER2_NAV_DIST") }), "2-16", { defaultValue: String(get("LOD_TIER2_NAV_DIST")) })
    .show(player)
    .then(res => {
      if (res.canceled || !res.formValues) { showMainMenu(player); return; }
      const [enabled, rawT1, rawT2, rawInt, rawNav] = res.formValues;
      const errors = [];
      const t1 = _int(rawT1, m_t1, errors, "Tier 1");
      const t2 = _int(rawT2, m_t2, errors, "Tier 2");
      const iv = _int(rawInt, m_int, errors, "Interval");
      const nav = _int(rawNav, m_nav, errors, "Nav Distance");
      if (t1 !== null && t2 !== null && t1 >= t2)
        errors.push(t("ui_lod_t1_lt_t2", { t1, t2 }));
      if (errors.length > 0) { showError(player, errors, () => showLodMenu(player)); return; }
      set("LOD_ENABLED", Boolean(enabled));
      set("LOD_TIER1_DIST", t1);
      set("LOD_TIER2_DIST", t2);
      set("LOD_CHECK_INTERVAL", iv);
      set("LOD_TIER2_NAV_DIST", nav);
      player.sendMessage(t(enabled ? "ui_lod_saved_on" : "ui_lod_saved_off"));
      showMainMenu(player);
    }).catch(() => { });
}

// ── TPS Monitor ───────────────────────────────────────────────

function showTpsMenu(player) {
  const m_s = meta("TPS_SAMPLE_SIZE");

  new ModalFormData()
    .title(t("ui_tps_title"))
    .textField(t("ui_tps_sample", { val: get("TPS_SAMPLE_SIZE") }), "5-100", { defaultValue: String(get("TPS_SAMPLE_SIZE")) })
    .show(player)
    .then(res => {
      if (res.canceled || !res.formValues) { showMainMenu(player); return; }
      const [rawS] = res.formValues;
      const errors = [];
      const s = _int(rawS, m_s, errors, "Sample Size");
      if (errors.length > 0) { showError(player, errors, () => showTpsMenu(player)); return; }
      set("TPS_SAMPLE_SIZE", s);
      player.sendMessage(t("ui_tps_saved"));
      showMainMenu(player);
    }).catch(() => { });
}

// ── Language ──────────────────────────────────────────────────

function showLangMenu(player) {
  new ActionFormData()
    .title(t("ui_lang_title"))
    .body(t("ui_lang_body") + "\n" + t("ui_lang_current", { lang: getLang() }))
    .button("English (en_US)")
    .button("Deutsch (de_DE)")
    .button("Français (fr_FR)")
    .button("Español (es_ES)")
    .button("Türkçe (tr_TR)")
    .button("Polski (pl_PL)")
    .button("Português (pt_BR)")
    .button("Русский (ru_RU)")
    .button("简体中文 (zh_CN)")
    .button("日本語 (ja_JP)")
    .button("Italiano (it_IT)")
    .button("Nederlands (nl_NL)")
    .button(t("ui_spawn_btn_back"))
    .show(player)
    .then(res => {
      if (res.canceled || res.selection === undefined || res.selection === 12) {
        showMainMenu(player); return;
      }
      const codes = ["en_US", "de_DE", "fr_FR", "es_ES", "tr_TR", "pl_PL", "pt_BR", "ru_RU", "zh_CN", "ja_JP", "it_IT", "nl_NL"];
      const code = codes[res.selection];
      setLang(code);
      player.sendMessage(t("ui_lang_saved", { lang: code }));
      showMainMenu(player);
    }).catch(() => { });
}

// ── Reset confirmation ────────────────────────────────────────

function showResetConfirm(player) {
  new MessageFormData()
    .title(t("ui_reset_title"))
    .body(t("ui_reset_body"))
    .button1(t("ui_reset_confirm"))
    .button2(t("ui_reset_cancel"))
    .show(player)
    .then(res => {
      if (res.canceled || res.selection === undefined || res.selection === 1) {
        showMainMenu(player);
        return;
      }
      resetAll();
      player.sendMessage(t("ui_reset_done"));
      showMainMenu(player);
    }).catch(() => { });
}

// ── Error display ─────────────────────────────────────────────

function showError(player, errors, retry) {
  new MessageFormData()
    .title(t("ui_error_title"))
    .body(t("ui_error_body", { errors: errors.map(e => `- ${e}`).join("\n") }))
    .button1(t("ui_error_back"))
    .button2(t("ui_error_cancel"))
    .show(player)
    .then(res => { if (!res.canceled && res.selection === 0) retry(); })
    .catch(() => { });
}

// ── Input validation ──────────────────────────────────────────

function _int(raw, m, errors, label) {
  return _intRaw(raw, m.min, m.max, errors, label);
}
function _flt(raw, m, errors, label) {
  return _fltRaw(raw, m.min, m.max, errors, label);
}

function _intRaw(raw, min, max, errors, label) {
  const v = parseInt(String(raw).trim(), 10);
  if (isNaN(v)) { errors.push(t("ui_error_not_number", { label, val: raw })); return null; }
  if (v < min || v > max) { errors.push(t("ui_error_out_of_range", { label, val: v, min, max })); return null; }
  return v;
}
function _fltRaw(raw, min, max, errors, label) {
  const v = parseFloat(String(raw).trim().replace(",", "."));
  if (isNaN(v)) { errors.push(t("ui_error_not_decimal", { label, val: raw })); return null; }
  if (v < min || v > max) { errors.push(t("ui_error_out_of_range", { label, val: v, min, max })); return null; }
  return Math.round(v * 1000) / 1000;
}

// ── Command ───────────────────────────────────────────────────

export function registerSettingsCommand(registry) {
  registry.registerCommand(
    {
      name: "mcbso:settings",
      description: "Open MCBSO settings menu",
      permissionLevel: CommandPermissionLevel.GameDirectors,
      cheatsRequired: false,
    },
    (origin) => {
      const player = origin.initiator ?? origin.sourceEntity;
      if (!(player instanceof Player)) return fail(t("only_players"));
      system.run(() => showMainMenu(player));
      return success();
    }
  );
}
