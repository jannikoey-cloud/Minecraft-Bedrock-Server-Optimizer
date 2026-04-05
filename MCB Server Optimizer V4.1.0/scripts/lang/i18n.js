/*
 * ============================================================
 *  lang/i18n.js – Language Manager
 *
 *  Manages the active language for the addon.
 *  Language is stored persistently via DynamicProperty.
 *
 *  Usage:
 *    import { t, setLang, getLang } from "../lang/i18n.js";
 *    player.sendMessage(t("tps_enabled"));
 *    player.sendMessage(t("clearlag_items", { items: 5, xp: 3 }));
 *
 *  Available languages: de_DE, en_US, fr_FR, es_ES, tr_TR, pl_PL, pt_BR, ru_RU, zh_CN, ja_JP, it_IT, nl_NL
 *  Default: en_US
 *
 *  Template syntax: {key} is replaced with the value from vars.
 *    t("lod_distances", { t1: 16, t2: 48 })
 *    → "Distances: Tier1 <16b  Tier2 <48b  Tier3 48b+"
 * ============================================================
 */

import { world } from "@minecraft/server";
import de_DE from "./de_DE.js";
import en_US from "./en_US.js";
import fr_FR from "./fr_FR.js";
import es_ES from "./es_ES.js";
import tr_TR from "./tr_TR.js";
import pl_PL from "./pl_PL.js";
import pt_BR from "./pt_BR.js";
import ru_RU from "./ru_RU.js";
import zh_CN from "./zh_CN.js";
import ja_JP from "./ja_JP.js";
import it_IT from "./it_IT.js";
import nl_NL from "./nl_NL.js";

const PROP_KEY = "sal_lang";
const DEFAULT_LANG = "en_US";

const LANGUAGES = {
  de_DE,
  en_US,
  fr_FR,
  es_ES,
  tr_TR,
  pl_PL,
  pt_BR,
  ru_RU,
  zh_CN,
  ja_JP,
  it_IT,
  nl_NL,
};

export const AVAILABLE_LANGS = Object.keys(LANGUAGES);

// Active language strings – loaded once, updated on setLang()
let _strings = LANGUAGES[DEFAULT_LANG];
let _langCode = DEFAULT_LANG;

/**
 * Initializes the language from the persisted DynamicProperty.
 * Must be called after worldLoad (inside initSettings or main.js worldLoad block).
 */
export function initLang() {
  const stored = world.getDynamicProperty(PROP_KEY);
  if (typeof stored === "string" && LANGUAGES[stored]) {
    _strings  = LANGUAGES[stored];
    _langCode = stored;
  }
}

/**
 * Returns the current language code.
 * @returns {string}  e.g. "en_US"
 */
export function getLang() {
  return _langCode;
}

/**
 * Sets and persists the active language.
 * @param {string} code  – e.g. "en_US" or "de_DE"
 * @returns {boolean}  true if the language was found and applied
 */
export function setLang(code) {
  if (!LANGUAGES[code]) return false;
  _strings  = LANGUAGES[code];
  _langCode = code;
  try { world.setDynamicProperty(PROP_KEY, code); } catch {}
  return true;
}

/**
 * Returns a translated string, with optional template substitution.
 * Falls back to en_US, then the key itself if the string is missing.
 *
 * @param {string} key   – Translation key, e.g. "tps_enabled"
 * @param {Object} [vars] – Optional substitution map, e.g. { items: 5, xp: 3 }
 * @returns {string}
 */
export function t(key, vars) {
  let str = _strings[key] ?? LANGUAGES[DEFAULT_LANG][key] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      str = str.replaceAll(`{${k}}`, String(v));
    }
  }
  return str;
}
