/*
 * ============================================================
 *  lang/fr_FR.js – Français (France)
 * ============================================================
 */

export default {
  // ── Général ───────────────────────────────────────────────
  only_players:        "Uniquement disponible pour les joueurs",
  lang_changed:        "§a[MCBSO] Langue définie sur : Français",
  lang_invalid:        "§c[MCBSO] Langue inconnue. Disponibles : fr_FR, en_US, de_DE, es_ES, tr_TR, pl_PL",
  lang_current:        "§e[MCBSO] Langue actuelle : ",

  // ── Aide ──────────────────────────────────────────────────
  help_header:         "§e§lMCBSO – Optimiseur de Serveur §r§7(vu uniquement par vous)",
  help_separator:      "§7─────────────────────────────────",
  help_tps:            "§f/mcbso:tps §7– Activer/désactiver l'affichage TPS",
  help_cleartime:      "§f/mcbso:cleartime §7– Afficher le prochain ClearLag",
  help_entities:       "§f/mcbso:entities §7– Compter les entités dans toutes les dimensions",
  help_help:           "§f/mcbso:help §7– Afficher cette aide",
  help_op_header:      "§c§lCommandes OP :",
  help_tpsinfo:        "§f/mcbso:tpsinfo §7– Statistiques TPS détaillées",
  help_clearnow:       "§f/mcbso:clearnow §7– Exécuter ClearLag immédiatement",
  help_afklist:        "§f/mcbso:afklist §7– Afficher les joueurs en AFK avec la durée",
  help_lodinfo:        "§f/mcbso:lodinfo §7– Statistiques du système AI-LOD",
  help_settings:       "§f/mcbso:settings §7– Ouvrir le menu des paramètres",
  help_lang:           "§f/mcbso:lang §7– Changer la langue",

  // ── TPS ───────────────────────────────────────────────────
  tps_enabled:         "§aAffichage TPS activé",
  tps_disabled:        "§cAffichage TPS désactivé",
  tps_info_header:     "§eInfos TPS\n§7─────────────────",
  tps_info_status_good:     "Bon",
  tps_info_status_medium:   "Moyen",
  tps_info_status_critical: "Critique",
  tps_info_samples:    "§aEchantillons : §f",
  tps_info_afk:        "§aJoueurs en AFK : §f",

  // ── ClearLag ──────────────────────────────────────────────
  clearlag_warn_1min:  "§6[ClearLag] §7Les objets seront supprimés dans §f1 minute",
  clearlag_warn_30s:   "§e[ClearLag] §7Les objets seront supprimés dans §f30 secondes",
  clearlag_warn_10s:   "§c[ClearLag] §7Les objets seront supprimés dans §f10 secondes",
  clearlag_removed:    "§7supprimé",
  clearlag_items:      "§6[ClearLag] §f{items} objets §7et §f{xp} boules XP §7supprimés",
  clearlag_next:       "§6[ClearLag] §7Prochien nettoyage dans §f",
  clearlag_manual:     "§6[ClearLag] §7Exécution manuelle par §e",

  // ── Entités ──────────────────────────────────────────────
  entities_header:     "§aCompteur d'entités (toutes dimensions)\n§7─────────────────────",
  entities_total:      "§7Total : §f",
  entities_items:      "§7| Objets : §f",
  entities_xp:         "§7| XP : §f",
  entities_mobs:       "§7| Mob : §f",

  // ── AFK ───────────────────────────────────────────────────
  afk_none:            "§a[AFK] §7Aucun joueur en AFK actuellement",
  afk_list_header:     "§a[AFK] §7Joueurs en AFK",

  // ── MobCap ────────────────────────────────────────────────
  mobcap_warning:      "§c[MobCap] §fLa dimension Overworld contient §c{count} §fmobs chargés !",

  // ── SpawnLimiter ──────────────────────────────────────────
  spawn_warn:          "§e[SpawnWarn] §f{type} §7approche la limite §f({count}/{limit})",

  // ── AI-LOD ────────────────────────────────────────────────
  lod_info_header:     "§aInfos AI-LOD\n§7─────────────────",
  lod_total:           "§7Entités au total : §f",
  lod_tier1:           "§aNiveau 1 §7(AI complète) :     §f",
  lod_tier2:           "§eNiveau 2 §7(ralentie) :       §f",
  lod_tier3:           "§cNiveau 3 §7(figé) :          §f",
  lod_exempt:          "§7Exemptés :                 §f",
  lod_distances:       "§7Distances : §fN1 <{t1}b  §fN2 <{t2}b  §fN3 {t2}b+",

  // ── Paramètres UI ───────────────────────────────────────────
  ui_main_title:       "Paramètres MCBSO",
  ui_main_body:        "Choisissez une catégorie.",
  ui_btn_clearlag:     "ClearLag\nIntervalle et alertes",
  ui_btn_afk:          "Détection AFK\nSeuils et timing",
  ui_btn_spawn:        "Limiteur de spawn\nLimites et notifications",
  ui_btn_lod:          "Système AI-LOD\nDistances et toggle",
  ui_btn_tps:          "Moniteur TPS\nTaille des échantillons",
  ui_btn_reset:        "Tout réinitialiser\nRestaurer les valeurs par défaut",
  ui_btn_lang:         "Langue\nChanger la langue de l'addon",

  ui_clearlag_title:   "Paramètres ClearLag",
  ui_clearlag_iv:      "Intervalles (Actuel : {val})",
  ui_clearlag_cap:     "Seuil d'alerte MobCap (Actuel : {val})",
  ui_clearlag_chk:     "Intervalle de vérification MobCap (Actuel : {val})",
  ui_clearlag_cd:      "Cooldown des notifications (Actuel : {val})",
  ui_clearlag_saved:   "[MCBSO] ClearLag sauvegardé.",

  ui_afk_title:        "Paramètres Détection AFK",
  ui_afk_thresh:       "Seuil AFK (en ticks, Actuel : {val})",
  ui_afk_move:         "Seuil de mouvement (en blocs, Actuel : {val})",
  ui_afk_saved:        "[MCBSO] AFK sauvegardé.",

  ui_spawn_title:      "Limiteur de spawn",
  ui_spawn_body:       "Choisissez une option.",
  ui_spawn_btn_gen:    "Paramètres généraux\nSeuils et notifications",
  ui_spawn_btn_list:   "Voir et modifier les limites de mob\nModifier les limites actives",
  ui_spawn_btn_add:    "Ajouter une nouvelle limite de mob\nEntrer le type et la limite",
  ui_spawn_btn_back:   "Retour",

  ui_spawn_settings_title:  "Paramètres du limiteur de spawn",
  ui_spawn_warn_thresh:     "Seuil d'alerte 0.0-1.0 (Actuel : {val})",
  ui_spawn_msg_dur:         "Durée de la notification (en ticks, Actuel : {val})",
  ui_spawn_cooldown:        "Cooldown des notifications (en ticks, Actuel : {val})",
  ui_spawn_radius:          "Rayon des notifications (en blocs, Actuel : {val})",
  ui_spawn_settings_saved:  "[MCBSO] Limiteur de spawn sauvegardé.",

  ui_mob_list_title:   "Modifier les limites de mob",
  ui_mob_list_body:    "Sélectionnez un type de mob pour modifier ou supprimer sa limite.",
  ui_mob_list_none_title: "Limites de mob",
  ui_mob_list_none_body:  "Aucune limite de mob configurée.",
  ui_mob_list_none_btn:   "OK",
  ui_mob_list_back:    "Retour",
  ui_mob_limit_label:  "Limite : ",

  ui_mob_edit_title:   "Modifier la limite",
  ui_mob_edit_field:   "Type de mob : {type}\nNouvelle limite (1 à 1000)\nActuel : {val}",
  ui_mob_edit_delete:  "Supprimer la limite\nSupprime ce type de mob de la limitation",
  ui_mob_edit_deleted: "[MCBSO] Limite pour {type} supprimée.",
  ui_mob_edit_saved:   "[MCBSO] Limite pour {type} définie sur {val}.",

  ui_mob_add_title:    "Nouvelle limite de mob",
  ui_mob_add_type:     "Type de mob\nFormat : minecraft:zombie  ou simplement  zombie",
  ui_mob_add_limit:    "Limite (1 à 1000)\nNombre maximum dans un rayon de 16 blocs",
  ui_mob_add_saved:    "[MCBSO] Limite pour {type} définie sur {val}.",

  ui_lod_title:        "Paramètres du système AI-LOD",
  ui_lod_toggle:       "AI-LOD activé\nDésactivé = AI Vanilla complète pour tous les mobs",
  ui_lod_t1:           "Distance Niveau 1 (blocks, Actuel : {val})",
  ui_lod_t2:           "Distance Niveau 2 (blocks, Actuel : {val})",
  ui_lod_interval:     "Intervalle de vérification (ticks, Actuel : {val})",
  ui_lod_nav:          "Distance de nav N2 (blocks, Actuel : {val})",
  ui_lod_saved_on:     "[MCBSO] AI-LOD sauvegardé. LOD : ACTIVÉ",
  ui_lod_saved_off:    "[MCBSO] AI-LOD sauvegardé. LOD : DÉSVTIVÉ",
  ui_lod_t1_lt_t2:     "Le Niveau 1 ({t1}) doit être inférieur au Niveau 2 ({t2})",

  ui_tps_title:        "Paramètres du moniteur TPS",
  ui_tps_sample:       "Taille des échantillons (Actuel : {val})",
  ui_tps_saved:        "[MCBSO] TPS sauvegardé.",

  ui_reset_title:      "Tout réinitialiser",
  ui_reset_body:       "Tous les paramètres seront réinitialisés aux valeurs par défaut.\n\nÊtes-vous sûr ?",
  ui_reset_confirm:    "Oui, réinitialiser",
  ui_reset_cancel:     "Annuler",
  ui_reset_done:       "[MCBSO] Tous les paramètres réinitialisés.",

  ui_error_title:      "Erreur d'entrée",
  ui_error_body:       "Les erreurs suivantes se sont produites :\n\n{errors}\n\nVeuillez corriger les valeurs.",
  ui_error_back:       "Retour",
  ui_error_cancel:     "Annuler",

  ui_error_not_number:   "{label} : \"{val}\" n'est pas un nombre valide",
  ui_error_out_of_range: "{label} : {val} hors de la plage [{min}-{max}]",
  ui_error_not_decimal:  "{label} : \"{val}\" n'est pas un nombre décimal valide",
  ui_error_mob_type:     "Veuillez entrer un type de mob valide",
  ui_error_mob_limit:    "La limite doit être un nombre entre 1 et 1000",

  // ── Language UI ───────────────────────────────────────────
  ui_lang_title:       "Paramètres de langue",
  ui_lang_body:        "Sélectionnez la langue de l'addon.",
  ui_lang_current:     "Actuel : {lang}",
  ui_lang_saved:       "[MCBSO] Langue changée en : {lang}",
};
