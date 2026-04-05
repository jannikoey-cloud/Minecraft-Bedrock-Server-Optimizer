/*
 * ============================================================
 *  lang/pt_BR.js – Portuguese (Brazil)
 * ============================================================
 */

export default {
  // ── General ───────────────────────────────────────────────
  only_players:        "Apenas disponível para jogadores",
  lang_changed:        "§a[MCBSO] Idioma definido para: Português (Brasil)",
  lang_invalid:        "§c[MCBSO] Idioma desconhecido. Available: de_DE, en_US, fr_FR, es_ES, tr_TR, pl_PL, pt_BR, ru_RU, zh_CN, ja_JP, it_IT, nl_NL",
  lang_current:        "§e[MCBSO] Idioma atual: ",

  // ── Help ──────────────────────────────────────────────────
  help_header:         "§e§lMCBSO – Otimizador de Servidor §r§7(somente visível para você)",
  help_separator:      "§7─────────────────────────────────",
  help_tps:            "§f/mcbso:tps §7– Alternar tela de TPS",
  help_cleartime:      "§f/mcbso:cleartime §7– Mostrar próximo ClearLag",
  help_entities:       "§f/mcbso:entities §7– Contar entidades em todas as dimensões",
  help_help:           "§f/mcbso:help §7– Mostrar esta ajuda",
  help_op_header:      "§c§lComandos de OP:",
  help_tpsinfo:        "§f/mcbso:tpsinfo §7– Estatísticas detalhadas de TPS",
  help_clearnow:       "§f/mcbso:clearnow §7– Executar ClearLag agora",
  help_afklist:        "§f/mcbso:afklist §7– Mostrar jogadores AFK com duração",
  help_lodinfo:        "§f/mcbso:lodinfo §7– Estatísticas do sistema AI-LOD",
  help_settings:       "§f/mcbso:settings §7– Abrir menu de configurações",
  help_lang:           "§f/mcbso:lang §7– Mudar idioma",

  // ── TPS ───────────────────────────────────────────────────
  tps_enabled:         "§aTela de TPS ativada",
  tps_disabled:        "§cTela de TPS desativada",
  tps_info_header:     "§eInfo de TPS\n§7─────────────────",
  tps_info_status_good:     "Bom",
  tps_info_status_medium:   "Medio",
  tps_info_status_critical: "Critico",
  tps_info_samples:    "§7Amostras: §f",
  tps_info_afk:        "§7Jogadores AFK: §f",

  // ── ClearLag ──────────────────────────────────────────────
  clearlag_warn_1min:  "§6[ClearLag] §7Itens serão deletados em §f1 minuto",
  clearlag_warn_30s:   "§e[ClearLag] §7Itens serão deletados em §f30 segundos",
  clearlag_warn_10s:   "§c[ClearLag] §7Itens serão deletados em §f10 segundos",
  clearlag_removed:    "§7removidos",
  clearlag_items:      "§6[ClearLag] §f{items} Itens §7e §f{xp} Orbes de XP §7removidos",
  clearlag_next:       "§6[ClearLag] §7Próxima limpeza em §f",
  clearlag_manual:     "§6[ClearLag] §fExecução manual por §e",

  // ── Entities ──────────────────────────────────────────────
  entities_header:     "§eContador de Entidades (todas as dimensões)\n§7─────────────────────",
  entities_total:      "§7Total: §f",
  entities_items:      "§7| Itens: §f",
  entities_xp:         "§7| XP: §f",
  entities_mobs:       "§7| Mobs: §f",

  // ── AFK ───────────────────────────────────────────────────
  afk_none:            "§e[AFK] §7Nenhum jogador AFK no momento",
  afk_list_header:     "§e[AFK] §7Jogadores AFK",

  // ── MobCap ────────────────────────────────────────────────
  mobcap_warning:      "§c[MobCap] §fOverworld tem §c{count} §fMobs carregados!",

  // ── SpawnLimiter ──────────────────────────────────────────
  spawn_warn:          "§e[SpawnWarn] §f{type} §7se aproximando do limite §f({count}/{limit})",

  // ── AI-LOD ─────────────────────────────────────────────────
  lod_info_header:     "§eInfo AI-LOD\n§7─────────────────",
  lod_total:           "§7Entidades no total: §f",
  lod_tier1:           "§aTier 1 §7(IA completa):     §f",
  lod_tier2:           "§eTier 2 §7(limitada):         §f",
  lod_tier3:           "§cTier 3 §7(congelada):        §f",
  lod_exempt:          "§7Isentos:                   §f",
  lod_distances:       "§7Distancias: §fTier1 <{t1}b  §fTier2 <{t2}b  §fTier3 {t2}b+",

  // ── Settings UI ───────────────────────────────────────────
  ui_main_title:       "Configurações MCBSO",
  ui_main_body:        "Escolha uma categoria.",
  ui_btn_clearlag:     "ClearLag\nIntervalo e avisos",
  ui_btn_afk:          "Detecção AFK\nLimites e tempo",
  ui_btn_spawn:        "Limitador de Spawn\nLimites e notificações",
  ui_btn_lod:          "Sistema AI-LOD\nDistancias e alternar",
  ui_btn_tps:          "Monitor de TPS\nTamanho da amostra",
  ui_btn_reset:        "Resetar Tudo\nRestaurar valores padrão",
  ui_btn_lang:         "Idioma\nMudar idioma do addon",

  ui_clearlag_title:   "Configurações ClearLag",
  ui_clearlag_iv:      "Intervalo em Ticks (Atual: {val})",
  ui_clearlag_cap:     "Limite de Aviso de MobCap (Atual: {val})",
  ui_clearlag_chk:     "Intervalo de Verificação de MobCap (Atual: {val})",
  ui_clearlag_cd:      "Cooldown de Notificação em Ticks (Atual: {val})",
  ui_clearlag_saved:   "[MCBSO] ClearLag salvo.",

  ui_afk_title:        "Configurações de Detecção AFK",
  ui_afk_thresh:       "Limite de AFK em Ticks (Atual: {val})",
  ui_afk_move:         "Limite de Movimento em Blocos (Atual: {val})",
  ui_afk_saved:        "[MCBSO] AFK salvo.",

  ui_spawn_title:      "Limitador de Spawn",
  ui_spawn_body:       "Escolha uma opção.",
  ui_spawn_btn_gen:    "Configurações Gerais\nLimites e notificações",
  ui_spawn_btn_list:   "Ver e Editar Limites de Mobs\nEditar limites ativos",
  ui_spawn_btn_add:    "Adicionar Novo Limite de Mob\nDigite tipo e limite",
  ui_spawn_btn_back:   "Voltar",

  ui_spawn_settings_title:  "Configurações do Limitador de Spawn",
  ui_spawn_warn_thresh:     "Limite de Aviso 0.0-1.0 (Atual: {val})",
  ui_spawn_msg_dur:         "Duração da Mensagem em Ticks (Atual: {val})",
  ui_spawn_cooldown:        "Cooldown de Notificação em Ticks (Atual: {val})",
  ui_spawn_radius:          "Raio de Notificação em Blocos (Atual: {val})",
  ui_spawn_settings_saved:  "[MCBSO] Limitador de Spawn salvo.",

  ui_mob_list_title:   "Editar Limites de Mobs",
  ui_mob_list_body:    "Selecione um tipo de mob para editar ou deletar seu limite.",
  ui_mob_list_none_title: "Limites de Mobs",
  ui_mob_list_none_body:  "Nenhum limite de mob configurado.",
  ui_mob_list_none_btn:   "OK",
  ui_mob_list_back:    "Voltar",
  ui_mob_limit_label:  "Limite: ",

  ui_mob_edit_title:   "Editar Limite",
  ui_mob_edit_field:   "Tipo do Mob: {type}\nNovo limite (1 a 1000)\nAtual: {val}",
  ui_mob_edit_delete:  "Deletar Limite\nRemove este tipo de mob do limitador",
  ui_mob_edit_deleted: "[MCBSO] Limite para {type} removido.",
  ui_mob_edit_saved:   "[MCBSO] Limite para {type} definido para {val}.",

  ui_mob_add_title:    "Novo Limite de Mob",
  ui_mob_add_type:     "Tipo do Mob\nFormato: minecraft:zombie  ou apenas  zombie",
  ui_mob_add_limit:    "Limite (1 a 1000)\nMáximo em raio de 16 blocos",
  ui_mob_add_saved:    "[MCBSO] Limite para {type} definido para {val}.",

  ui_lod_title:        "Configurações do Sistema AI-LOD",
  ui_lod_toggle:       "AI-LOD ativado\nDesativado = IA vanilla completa para todas entidades",
  ui_lod_t1:           "Distância Tier 1 em Blocos (Atual: {val})",
  ui_lod_t2:           "Distância Tier 2 em Blocos (Atual: {val})",
  ui_lod_interval:     "Intervalo de Verificação em Ticks (Atual: {val})",
  ui_lod_nav:          "Distância de Navegação Tier 2 em Blocos (Atual: {val})",
  ui_lod_saved_on:     "[MCBSO] AI-LOD salvo. LOD: ATIVADO",
  ui_lod_saved_off:    "[MCBSO] AI-LOD salvo. LOD: DESATIVADO",
  ui_lod_t1_lt_t2:     "Tier 1 ({t1}) deve ser menor que Tier 2 ({t2})",

  ui_tps_title:        "Configurações do Monitor de TPS",
  ui_tps_sample:       "Tamanho da Amostra (Atual: {val})",
  ui_tps_saved:        "[MCBSO] TPS salvo.",

  ui_reset_title:      "Resetar Tudo",
  ui_reset_body:       "Todas as configurações serão resetadas para valores padrão.\n\nTem certeza?",
  ui_reset_confirm:    "Sim, resetar",
  ui_reset_cancel:     "Cancelar",
  ui_reset_done:       "[MCBSO] Todas as configurações foram resetadas.",

  ui_error_title:      "Erro de Entrada",
  ui_error_body:       "Os seguintes erros occurred:\n\n{errors}\n\nPor favor, corrija os valores.",
  ui_error_back:       "Voltar",
  ui_error_cancel:     "Cancelar",

  ui_error_not_number: "{label}: \"{val}\" não é um número válido",
  ui_error_out_of_range: "{label}: {val} fora do intervalo [{min}-{max}]",
  ui_error_not_decimal: "{label}: \"{val}\" não é um número decimal válido",
  ui_error_mob_type:   "Por favor, digite um tipo de mob válido",
  ui_error_mob_limit:  "O limite deve ser um número entre 1 e 1000",

  // ── Language UI ───────────────────────────────────────────
  ui_lang_title:       "Configurações de Idioma",
  ui_lang_body:        "Selecione o idioma do addon.",
  ui_lang_current:     "Atual: {lang}",
  ui_lang_saved:       "[MCBSO] Idioma mudado para: {lang}",
};
