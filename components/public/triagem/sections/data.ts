import type { CaseDraft, LeadClassification } from "@/schemas";

export const microcopyItems = [
  "Leva apenas alguns minutos",
  "Linguagem simples e objetiva",
  "Triagem inicial assistida",
  "Casos aderentes podem seguir para avaliacao humana",
];

export const credibilityCards = [
  {
    title: "Triagem inicial imediata",
    description:
      "Uma primeira leitura estruturada do seu relato para organizar o atendimento com mais clareza.",
  },
  {
    title: "Foco na defesa do trabalhador",
    description:
      "Fluxo pensado para situacoes comuns da rotina trabalhista e do encerramento do vinculo.",
  },
  {
    title: "Encaminhamento qualificado",
    description:
      "Quando houver aderencia, as proximas etapas podem seguir para avaliacao da equipe juridica.",
  },
  {
    title: "Tratamento confidencial",
    description:
      "As informacoes prestadas sao apresentadas em ambiente reservado e com comunicacao cuidadosa.",
  },
] as const;

export const progressSteps = [
  {
    id: "situation",
    label: "Situação",
    description: "Entender qual problema trabalhista motivou o contato.",
  },
  {
    id: "employment",
    label: "Relação de emprego",
    description: "Confirmar vínculo, registro e contexto atual do trabalho.",
  },
  {
    id: "details",
    label: "Detalhes",
    description: "Organizar datas, pagamentos, valores e provas disponíveis.",
  },
  {
    id: "contact",
    label: "Contato",
    description: "Registrar nome e WhatsApp para continuidade do atendimento.",
  },
] as const;

export const quickReplies = [
  "Fui dispensado sem receber tudo",
  "Tenho horas extras não pagas",
  "Nunca fui registrado",
] as const;

export const howItWorksSteps = [
  "Voce responde algumas perguntas iniciais",
  "O sistema identifica sinais relacionados ao seu caso",
  "Nossa equipe pode avaliar os proximos passos",
] as const;

export const importantItems = [
  "Triagem inicial assistida",
  "Revisao humana para casos elegiveis",
  "Informacoes tratadas de forma confidencial",
] as const;

export const commonMatters = [
  "Verbas rescisórias",
  "FGTS",
  "Horas extras",
  "Trabalho sem registro",
  "Assédio no ambiente de trabalho",
] as const;

export const issueTypeLabels = {
  unfair_dismissal: "Dispensa e verbas rescisórias",
  unpaid_severance: "Verbas rescisórias não pagas",
  overtime: "Horas extras não pagas",
  undeclared_employment: "Trabalho sem registro",
  harassment: "Assédio no ambiente de trabalho",
  fgts: "FGTS e depósitos irregulares",
  other: "Outra situação trabalhista",
} satisfies Record<NonNullable<CaseDraft["issueType"]>, string>;

export const caseStatusLabels = {
  collecting: "Coletando informações",
  ready_for_review: "Pronto para revisão humana",
  out_of_scope: "Fora da nossa atuacao trabalhista",
  incomplete: "Ainda faltam informações",
} satisfies Record<NonNullable<CaseDraft["status"]>, string>;

export const leadStatusLabels = {
  eligible: "Caso com potencial de atendimento",
  needs_human_review: "Analise humana recomendada",
  out_of_scope: "Fora da nossa atuacao trabalhista",
  incomplete: "Triagem ainda incompleta",
} satisfies Record<LeadClassification["status"], string>;
