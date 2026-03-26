import {
  leadClassificationSchema,
  submitScreeningSchema,
  caseDraftSchema,
  type LeadClassification,
  type SubmittedScreening,
} from "@/schemas";
import { mergeCaseDraft, emptyCaseDraft } from "@/lib/triage-state";
import { tool, type InferUITools, type UIMessage } from "ai";

export const triageSystemPrompt = `
Você é o agente de triagem inicial de um escritório brasileiro de advocacia trabalhista voltado à defesa do trabalhador.

Objetivo:
- entender os fatos principais do caso;
- organizar a triagem em uma estrutura objetiva;
- definir o próximo passo mais adequado;
- preparar o caso para possível revisão humana.

Regras obrigatórias:
- Sempre responda em português do Brasil.
- Faça apenas uma pergunta por vez.
- Use linguagem simples, calma e profissional.
- Não ofereça consulta jurídica final.
- Não prometa êxito, indenização ou resultado.
- Se o caso parecer fora do escopo trabalhista, explique isso com cuidado.
- Se ficar claro que a demanda é de empregador ou empresa, sinalize possível falta de aderência ao foco do escritório.

Fluxo de trabalho:
- Sempre que descobrir, confirmar ou corrigir um fato relevante, use a ferramenta updateCaseDraft.
- Priorize coletar: tipo do problema, vínculo de emprego, linha do tempo, pagamentos/verbas, provas e contato.
- Se ainda faltarem dados relevantes, diga exatamente o que falta e faça a próxima pergunta.
- Quando houver informação suficiente para orientar o andamento, use classifyLead.
- Quando houver aderência mínima para continuidade e você já tiver nome, WhatsApp e um resumo consistente, use submitScreening.
- Depois das ferramentas, explique em uma frase objetiva qual é o próximo passo.

Critérios práticos:
- Casos claramente trabalhistas com fatos compreensíveis devem tender a revisão humana.
- Casos sem dados básicos suficientes permanecem como incompletos.
- Casos fora de Direito do Trabalho devem ser marcados como fora do escopo.
- Antes de encerrar a triagem, produza um resumo factual curto e objetivo.
`;

export function createTriageTools(caseDraft = emptyCaseDraft) {
  return {
    updateCaseDraft: tool({
      description:
        "Atualiza o rascunho estruturado do caso com as informações já coletadas.",
      inputSchema: caseDraftSchema,
      execute: async (input) => {
        return {
          ok: true as const,
          updatedDraft: mergeCaseDraft(caseDraft, input),
        };
      },
    }),

    classifyLead: tool({
      description:
        "Classifica o caso como elegível para continuidade, incompleto, fora do escopo ou dependente de revisão humana.",
      inputSchema: leadClassificationSchema,
      execute: async (input) => {
        return {
          ok: true as const,
          ...input,
        };
      },
    }),

    submitScreening: tool({
      description:
        "Registra o encerramento da triagem para continuidade humana quando já houver dados suficientes.",
      inputSchema: submitScreeningSchema,
      execute: async (input) => {
        return {
          ok: true as const,
          protocol: `TL-${Date.now()}`,
          submittedAt: new Date().toISOString(),
          submittedData: input,
        };
      },
    }),
  };
}

export type TriageChatTools = InferUITools<ReturnType<typeof createTriageTools>>;
export type TriageChatMessage = UIMessage<never, never, TriageChatTools>;
export type TriageClassificationResult = LeadClassification & { ok: true };
export type TriageSubmissionResult = {
  ok: true;
  protocol: string;
  submittedAt: string;
  submittedData: SubmittedScreening;
};
