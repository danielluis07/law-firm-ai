import type { FormEvent, RefObject } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { TriageChatMessage } from "@/lib/triage-chat";
import { leadStatusLabels, quickReplies } from "./data";
import { PanelCard } from "./shared";

function renderToolCard(message: TriageChatMessage, partIndex: number) {
  const part = message.parts[partIndex];

  if (message.role !== "assistant") {
    return null;
  }

  if (part.type === "tool-classifyLead" && part.state === "output-available") {
    return (
      <div
        key={`${message.id}-${partIndex}`}
        className="max-w-[92%] rounded-2xl border border-accent/20 bg-accent/8 px-4 py-3 text-sm leading-7 text-foreground/86">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent">
          Decisão atual
        </p>
        <p className="mt-2 font-medium text-foreground">
          {leadStatusLabels[part.output.status]}
        </p>
        <p className="mt-1 text-foreground/78">{part.output.reason}</p>
      </div>
    );
  }

  if (part.type === "tool-submitScreening" && part.state === "output-available") {
    return (
      <div
        key={`${message.id}-${partIndex}`}
        className="max-w-[92%] rounded-2xl border border-primary/12 bg-primary/8 px-4 py-3 text-sm leading-7 text-foreground/86">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-primary">
          Encaminhamento registrado
        </p>
        <p className="mt-2 font-medium text-foreground">
          Protocolo {part.output.protocol}
        </p>
        <p className="mt-1 text-foreground/78">
          A triagem foi preparada para continuidade com a equipe humana.
        </p>
      </div>
    );
  }

  if (
    (part.type === "tool-updateCaseDraft" ||
      part.type === "tool-classifyLead" ||
      part.type === "tool-submitScreening") &&
    part.state === "output-error"
  ) {
    return (
      <div
        key={`${message.id}-${partIndex}`}
        className="max-w-[92%] rounded-2xl border border-destructive/25 bg-destructive/8 px-4 py-3 text-sm leading-7 text-destructive">
        Não foi possível concluir uma etapa interna da triagem agora.
      </div>
    );
  }

  return null;
}

export function TriagePreviewPanel({
  messages,
  status,
  headerStatus,
  input,
  error,
  isBusy,
  messagesViewportRef,
  onInputChange,
  onSubmit,
  onQuickReply,
  onStop,
  onClearError,
}: {
  messages: TriageChatMessage[];
  status: "submitted" | "streaming" | "ready" | "error";
  headerStatus: string;
  input: string;
  error: Error | undefined;
  isBusy: boolean;
  messagesViewportRef: RefObject<HTMLDivElement | null>;
  onInputChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onQuickReply: (reply: string) => void;
  onStop: () => void;
  onClearError: () => void;
}) {
  const canSubmit = input.trim().length > 0 && !isBusy;

  return (
    <PanelCard
      eyebrow="Área principal"
      title="Triagem inicial com atendimento guiado">
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border/75 bg-card/78 px-4 py-3">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Chat de triagem ativo
            </p>
            <p className="mt-1 text-sm leading-7 text-foreground/84">
              O agente coleta os fatos do caso, organiza o resumo e indica o
              próximo passo.
            </p>
          </div>
          <span
            className={cn(
              "inline-flex rounded-full border px-3 py-1.5 text-xs font-medium",
              headerStatus === "Encaminhado"
                ? "border-primary/15 bg-primary/8 text-primary"
                : headerStatus === "Fora do escopo"
                  ? "border-accent/20 bg-accent/10 text-accent"
                  : "border-border/70 bg-background/85 text-muted-foreground",
            )}>
            {headerStatus}
          </span>
        </div>

        <div className="overflow-hidden rounded-[1.25rem] border border-border/75 bg-[linear-gradient(180deg,oklch(1_0_0/.9),oklch(0.97_0.01_230/.92))] shadow-[0_32px_110px_-80px_oklch(0.22_0.09_240/0.58)]">
          <div className="flex items-center justify-between border-b border-border/75 px-5 py-4">
            <div>
              <p className="font-display text-xl text-primary">
                Triagem inicial
              </p>
              <p className="text-sm text-muted-foreground">
                Atendimento guiado com perguntas objetivas e linguagem simples
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span
                className={cn(
                  "size-2 rounded-full",
                  isBusy ? "bg-accent" : "bg-primary/70",
                )}
              />
              {status === "streaming" || status === "submitted"
                ? "Respondendo"
                : "Disponível"}
            </div>
          </div>

          <div
            ref={messagesViewportRef}
            aria-live="polite"
            className="max-h-[34rem] space-y-4 overflow-y-auto px-5 py-6 sm:px-6">
            {messages.length === 0 ? (
              <div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-border/75 bg-card/86 px-4 py-3 shadow-sm">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Assistente de triagem
                </p>
                <p className="mt-2 text-sm leading-7 text-foreground/88 sm:text-[0.96rem]">
                  Olá, vou conduzir uma triagem inicial do seu caso trabalhista.
                  Conte o que aconteceu e eu sigo com perguntas objetivas.
                </p>
              </div>
            ) : null}

            {messages.map((message) => (
              <article
                key={message.id}
                className={cn(
                  "flex flex-col gap-2",
                  message.role === "user" ? "items-end" : "items-start",
                )}>
                {message.parts.map((part, index) => {
                  if (part.type === "text") {
                    if (!part.text.trim()) {
                      return null;
                    }

                    return (
                      <div
                        key={`${message.id}-${index}`}
                        className={cn(
                          "max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-7 shadow-sm sm:text-[0.96rem]",
                          message.role === "user"
                            ? "rounded-tr-sm border border-primary/10 bg-primary text-primary-foreground"
                            : "rounded-tl-sm border border-border/75 bg-card/86 text-foreground/88",
                        )}>
                        {part.text}
                      </div>
                    );
                  }

                  return renderToolCard(message, index);
                })}
              </article>
            ))}

            {isBusy ? (
              <div className="max-w-[92%] rounded-2xl rounded-tl-sm border border-dashed border-border/80 bg-background/75 px-4 py-3">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Assistente de triagem
                </p>
                <div className="mt-3 space-y-2">
                  <div className="h-2.5 w-4/5 rounded-full bg-muted" />
                  <div className="h-2.5 w-3/4 rounded-full bg-muted" />
                  <div className="h-2.5 w-2/5 rounded-full bg-muted" />
                </div>
              </div>
            ) : null}

            <div className="space-y-3">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Atalhos para começar
              </p>
              <div className="flex flex-wrap gap-2.5">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    type="button"
                    onClick={() => onQuickReply(reply)}
                    disabled={isBusy}
                    className="rounded-full border border-border/75 bg-background/82 px-3.5 py-2 text-left text-sm text-foreground/86 transition hover:border-primary/20 hover:bg-primary/6 disabled:cursor-not-allowed disabled:opacity-55">
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-border/75 bg-background/88 px-5 py-4 sm:px-6">
            <form onSubmit={onSubmit} className="space-y-3">
              <div className="rounded-xl border border-border/75 bg-card/75 px-3 py-3">
                <textarea
                  aria-label="Mensagem para a triagem"
                  rows={1}
                  value={input}
                  onChange={(event) => onInputChange(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      event.currentTarget.form?.requestSubmit();
                    }
                  }}
                  placeholder="Descreva o que aconteceu no trabalho ou responda à pergunta anterior"
                  className="min-h-20 w-full resize-none bg-transparent text-sm leading-7 text-foreground outline-none placeholder:text-muted-foreground"
                />

                <div className="mt-3 flex items-center justify-between gap-3 border-t border-border/70 pt-3">
                  <p className="text-xs leading-6 text-muted-foreground">
                    Enter envia. Shift + Enter quebra linha.
                  </p>

                  <div className="flex items-center gap-2">
                    {isBusy ? (
                      <Button type="button" size="sm" variant="outline" onClick={onStop}>
                        Parar
                      </Button>
                    ) : null}

                    <Button type="submit" size="sm" disabled={!canSubmit}>
                      Enviar
                    </Button>
                  </div>
                </div>
              </div>

              {error ? (
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-destructive/20 bg-destructive/6 px-4 py-3 text-sm text-destructive">
                  <p>Não foi possível concluir a resposta agora.</p>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    className="text-destructive"
                    onClick={onClearError}>
                    Fechar aviso
                  </Button>
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </PanelCard>
  );
}
