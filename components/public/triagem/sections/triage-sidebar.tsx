import type {
  TriageClassificationResult,
  TriageSubmissionResult,
} from "@/lib/triage-chat";
import type { CaseDraft } from "@/schemas";
import {
  caseStatusLabels,
  commonMatters,
  howItWorksSteps,
  importantItems,
  issueTypeLabels,
  leadStatusLabels,
  progressSteps,
} from "./data";
import { PanelCard } from "./shared";

function joinDefined(values: Array<string | undefined>) {
  return values.filter(Boolean).join(" • ");
}

function getEmploymentSummary(caseDraft: Partial<CaseDraft>) {
  const workCardStatus =
    caseDraft.hasSignedWorkCard === undefined
      ? undefined
      : caseDraft.hasSignedWorkCard
        ? "Carteira assinada"
        : "Sem registro formal";
  const currentEmployment =
    caseDraft.isStillEmployed === undefined
      ? undefined
      : caseDraft.isStillEmployed
        ? "Ainda trabalha na empresa"
        : "Não trabalha mais na empresa";

  return joinDefined([
    workCardStatus,
    currentEmployment,
    caseDraft.employmentDuration,
  ]);
}

function getDetailsSummary(caseDraft: Partial<CaseDraft>) {
  return joinDefined([
    caseDraft.issueDate,
    caseDraft.unpaidAmounts,
    caseDraft.hasEvidence,
  ]);
}

function getProgressItems(caseDraft: Partial<CaseDraft>) {
  const employmentSummary = getEmploymentSummary(caseDraft);
  const detailsSummary = getDetailsSummary(caseDraft);

  return progressSteps.map((step) => {
    switch (step.id) {
      case "situation":
        return {
          ...step,
          complete: Boolean(caseDraft.issueType || caseDraft.summary),
          detail:
            (caseDraft.issueType && issueTypeLabels[caseDraft.issueType]) ||
            caseDraft.summary ||
            step.description,
        };
      case "employment":
        return {
          ...step,
          complete: Boolean(
            caseDraft.hasSignedWorkCard !== undefined ||
              caseDraft.isStillEmployed !== undefined ||
              caseDraft.employmentDuration,
          ),
          detail: employmentSummary || step.description,
        };
      case "details":
        return {
          ...step,
          complete: Boolean(
            caseDraft.issueDate ||
              caseDraft.unpaidAmounts ||
              caseDraft.hasEvidence,
          ),
          detail: detailsSummary || step.description,
        };
      case "contact":
        return {
          ...step,
          complete: Boolean(caseDraft.userName || caseDraft.whatsapp),
          detail:
            joinDefined([caseDraft.userName, caseDraft.whatsapp]) ||
            step.description,
        };
    }
  });
}

function getNextStep(
  caseDraft: Partial<CaseDraft>,
  classification?: TriageClassificationResult,
  submission?: TriageSubmissionResult,
) {
  if (submission) {
    return {
      title: "Triagem encaminhada para revisão humana",
      description:
        "Os dados principais já foram organizados e o caso está pronto para continuidade com a equipe.",
    };
  }

  if (
    classification?.status === "out_of_scope" ||
    caseDraft.status === "out_of_scope"
  ) {
    return {
      title: "Caso possivelmente fora do escopo trabalhista",
      description:
        classification?.reason ||
        "O relato atual sugere uma situação que pode não seguir pela triagem trabalhista deste escritório.",
    };
  }

  if (
    classification?.status === "eligible" ||
    classification?.status === "needs_human_review"
  ) {
    return {
      title:
        caseDraft.userName && caseDraft.whatsapp
          ? "Pronto para revisão humana"
          : "Coletar contato para continuidade",
      description:
        classification?.reason ||
        "A triagem encontrou sinais suficientes para possível encaminhamento à equipe.",
    };
  }

  if (classification?.status === "incomplete" || caseDraft.status === "incomplete") {
    return {
      title: "Continuar a coleta de informações",
      description:
        classification?.reason ||
        "Ainda faltam fatos essenciais antes de definir o encaminhamento do caso.",
    };
  }

  return {
    title: "Organizar os fatos do caso",
    description:
      "O agente continua a triagem para entender situação, vínculo, detalhes e contato.",
  };
}

function formatSubmittedAt(value: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(value));
}

export function TriageSidebar({
  caseDraft,
  classification,
  submission,
}: {
  caseDraft: Partial<CaseDraft>;
  classification?: TriageClassificationResult;
  submission?: TriageSubmissionResult;
}) {
  const progressItems = getProgressItems(caseDraft);
  const completedSteps = progressItems.filter((item) => item.complete).length;
  const nextStep = getNextStep(caseDraft, classification, submission);
  const consolidatedStatus =
    classification?.status === "out_of_scope"
      ? "out_of_scope"
      : caseDraft.status;

  return (
    <aside className="flex flex-col gap-5">
      <PanelCard eyebrow="Processo" title="Etapas previstas da triagem">
        <div className="mb-4 flex items-center justify-between rounded-xl border border-border/75 bg-card/74 px-4 py-3 text-sm text-foreground/84">
          <span>
            {completedSteps} de {progressItems.length} etapas organizadas
          </span>
          <span className="text-muted-foreground">Fluxo em andamento</span>
        </div>

        <ol className="grid gap-3">
          {progressItems.map((step, index) => (
            <li
              key={step.id}
              className="flex items-center gap-3 rounded-xl border border-border/75 bg-card/74 px-4 py-3">
              <span
                className={`flex size-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${
                  step.complete
                    ? "border-primary/15 bg-primary text-primary-foreground"
                    : "border-border/75 bg-background text-primary"
                }`}>
                {index + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-foreground/88">
                  {step.label}
                </p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {step.detail}
                </p>
                <div className="mt-2 h-1.5 rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary/65"
                    style={{
                      width: step.complete ? "100%" : "34%",
                    }}
                  />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </PanelCard>

      <PanelCard eyebrow="Decisão atual" title={nextStep.title}>
        <div className="space-y-3">
          <div className="rounded-xl border border-border/75 bg-card/74 px-4 py-3">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Status consolidado
            </p>
            <p className="mt-2 text-sm font-medium text-foreground/88">
              {classification
                ? leadStatusLabels[classification.status]
                : consolidatedStatus
                  ? caseStatusLabels[consolidatedStatus]
                  : "Triagem em andamento"}
            </p>
            <p className="mt-1 text-sm leading-7 text-foreground/82">
              {nextStep.description}
            </p>
          </div>

          {classification ? (
            <div className="rounded-xl border border-border/75 bg-card/74 px-4 py-3">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Critério do agente
              </p>
              <p className="mt-2 text-sm leading-7 text-foreground/86">
                {classification.reason}
              </p>
            </div>
          ) : null}

          {submission ? (
            <div className="rounded-xl border border-primary/15 bg-primary/8 px-4 py-3">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
                Protocolo de encaminhamento
              </p>
              <p className="mt-2 text-sm font-medium text-primary">
                {submission.protocol}
              </p>
              <p className="mt-1 text-sm leading-7 text-foreground/82">
                Registrado em {formatSubmittedAt(submission.submittedAt)}.
              </p>
            </div>
          ) : null}
        </div>
      </PanelCard>

      <PanelCard eyebrow="Resumo do caso" title="Leitura estruturada da triagem">
        <div className="space-y-3">
          <div className="rounded-xl border border-border/75 bg-card/74 px-4 py-3">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Resumo objetivo
            </p>
            <p className="mt-2 text-sm leading-7 text-foreground/88">
              {caseDraft.summary ||
                "O agente ainda está coletando os fatos principais para montar um resumo claro do caso."}
            </p>
          </div>

          {[
            {
              label: "Problema relatado",
              value:
                (caseDraft.issueType && issueTypeLabels[caseDraft.issueType]) ||
                "Ainda não identificado",
            },
            {
              label: "Situação do vínculo",
              value: getEmploymentSummary(caseDraft) || "Ainda não confirmada",
            },
            {
              label: "Detalhes e indícios",
              value: getDetailsSummary(caseDraft) || "Ainda não organizados",
            },
            {
              label: "Contato",
              value:
                joinDefined([caseDraft.userName, caseDraft.whatsapp]) ||
                "Ainda não coletado",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border/75 bg-card/74 px-4 py-3">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-1 text-sm leading-7 text-foreground/88">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </PanelCard>

      <PanelCard eyebrow="Orientação" title="Como funciona">
        <ol className="grid gap-3">
          {howItWorksSteps.map((step, index) => (
            <li
              key={step}
              className="flex gap-3 rounded-xl border border-border/75 bg-card/74 px-4 py-3">
              <span className="text-sm font-semibold text-accent">
                {index + 1}.
              </span>
              <span className="text-sm leading-7 text-foreground/86">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </PanelCard>

      <PanelCard eyebrow="Transparência" title="Importante">
        <ul className="grid gap-3">
          {importantItems.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-border/75 bg-card/74 px-4 py-3 text-sm leading-7 text-foreground/86">
              {item}
            </li>
          ))}
        </ul>
      </PanelCard>

      <PanelCard eyebrow="Referência" title="Assuntos mais comuns">
        <ul className="grid gap-3">
          {commonMatters.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-border/75 bg-card/74 px-4 py-3 text-sm leading-7 text-foreground/86">
              {item}
            </li>
          ))}
        </ul>
      </PanelCard>
    </aside>
  );
}
