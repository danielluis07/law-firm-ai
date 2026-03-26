import type { FormEvent, RefObject } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { TriageChatMessage } from "@/lib/triage-chat";
import { leadStatusLabels, quickReplies } from "./data";

const panelHighlights = [
  {
    label: "Ritmo",
    value: "2 a 4 minutos",
    detail: "Fluxo direto, sem formulário extenso.",
  },
  {
    label: "Tom",
    value: "Perguntas objetivas",
    detail: "A conversa aprofunda só o necessário.",
  },
  {
    label: "Encaminhamento",
    value: "Com revisão humana",
    detail: "Casos aderentes podem seguir para a equipe.",
  },
] as const;

function renderToolCard(message: TriageChatMessage, partIndex: number) {
  const part = message.parts[partIndex];

  if (message.role !== "assistant") {
    return null;
  }

  if (part.type === "tool-classifyLead" && part.state === "output-available") {
    return (
      <div
        key={`${message.id}-${partIndex}`}
        className="max-w-[92%] rounded-[1.35rem] border border-accent/20 bg-accent/8 px-4 py-3 text-sm leading-7 text-foreground/86">
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

  if (
    part.type === "tool-submitScreening" &&
    part.state === "output-available"
  ) {
    return (
      <div
        key={`${message.id}-${partIndex}`}
        className="max-w-[92%] rounded-[1.35rem] border border-primary/12 bg-primary/8 px-4 py-3 text-sm leading-7 text-foreground/86">
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
        className="max-w-[92%] rounded-[1.35rem] border border-destructive/25 bg-destructive/8 px-4 py-3 text-sm leading-7 text-destructive">
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
  const hasMessages = messages.length > 0;

  return (
    <Card className="overflow-hidden border-border/80 bg-[linear-gradient(180deg,oklch(1_0_0/.95),oklch(0.968_0.012_230/.95))] shadow-[0_36px_140px_-88px_oklch(0.22_0.09_240/0.62)]">
      {/* ── Compact header: single row with title left, actions right ── */}
      <CardHeader className="gap-0 border-b border-border/70 bg-[linear-gradient(180deg,oklch(1_0_0/.72),oklch(1_0_0/.4))] py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0 flex-1">
            <CardTitle className="truncate font-display text-lg leading-tight text-primary sm:text-xl">
              Triagem do caso trabalhista
            </CardTitle>
            <CardDescription className="mt-0.5 text-sm text-muted-foreground">
              Conversa guiada para organizar fatos, vinculo e provas
            </CardDescription>
          </div>

          <CardAction className="col-start-auto row-span-1 row-start-auto shrink-0 self-auto justify-self-auto">
            <div className="flex items-center gap-2.5">
              <span
                className={cn(
                  "inline-flex rounded-full border px-3 py-1 text-xs font-medium",
                  headerStatus === "Encaminhado"
                    ? "border-primary/15 bg-primary/8 text-primary"
                    : headerStatus === "Fora do escopo"
                      ? "border-accent/20 bg-accent/10 text-accent"
                      : "border-border/70 bg-background/90 text-muted-foreground",
                )}>
                {headerStatus}
              </span>
              <Button asChild variant="outline" size="sm">
                <Link href="/contato-direto">
                  Contato direto
                  <ArrowRightIcon data-icon="inline-end" />
                </Link>
              </Button>
            </div>
          </CardAction>
        </div>
      </CardHeader>

      {/* ── Chat area: takes the full stage ── */}
      <CardContent className="px-0">
        <div
          ref={messagesViewportRef}
          aria-live="polite"
          className="relative flex max-h-168 min-h-144 flex-col gap-4 overflow-y-auto px-5 py-6 sm:px-6">
          {/* ── Empty state: stacked, single column, breathing room ── */}
          {!hasMessages ? (
            <div className="flex flex-col gap-5">
              <div className="rounded-[1.4rem] rounded-tl-sm border border-border/75 bg-card/88 px-5 py-5 shadow-[0_24px_80px_-66px_oklch(0.22_0.08_240/0.4)]">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Assistente de triagem
                </p>
                <p className="mt-3 text-sm leading-7 text-foreground/88 sm:text-[0.96rem]">
                  Ola. Conte o que aconteceu no trabalho, quando o problema
                  comecou e se voce ainda trabalha no local. Eu sigo com
                  perguntas curtas para organizar seu caso.
                </p>
              </div>

              {/* Highlights as inline chips below the greeting */}
              <div className="flex flex-wrap gap-2 px-1">
                {panelHighlights.map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-baseline gap-1.5 rounded-full border border-border/75 bg-background/82 px-3 py-1.5 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground/78">
                      {item.label}:
                    </span>
                    {item.value}
                  </span>
                ))}
              </div>

              {/* Quick replies as a row below */}
              <div className="flex flex-wrap gap-2 px-1">
                {quickReplies.map((reply) => (
                  <Button
                    key={reply}
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => onQuickReply(reply)}
                    disabled={isBusy}
                    className="h-auto rounded-full px-3.5 py-2 text-left whitespace-normal">
                    {reply}
                  </Button>
                ))}
              </div>
            </div>
          ) : null}

          {/* ── Message thread ── */}
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
                        "max-w-[90%] rounded-[1.35rem] px-4 py-3 text-sm leading-7 shadow-sm sm:text-[0.96rem]",
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

          {/* ── Typing indicator ── */}
          {isBusy ? (
            <div className="max-w-[92%] rounded-[1.35rem] rounded-tl-sm border border-dashed border-border/80 bg-background/75 px-4 py-3">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Assistente de triagem
              </p>
              <div className="mt-3 flex flex-col gap-2">
                <div className="h-2.5 w-4/5 rounded-full bg-muted" />
                <div className="h-2.5 w-3/4 rounded-full bg-muted" />
                <div className="h-2.5 w-2/5 rounded-full bg-muted" />
              </div>
            </div>
          ) : null}
        </div>

        {/* ── Input area ── */}
        <div className="border-t border-border/70 bg-background/88 px-5 py-4 sm:px-6">
          <form onSubmit={onSubmit} className="flex flex-col gap-3">
            {/* Quick replies only when conversation is active */}
            {hasMessages ? (
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <Button
                    key={reply}
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => onQuickReply(reply)}
                    disabled={isBusy}
                    className="h-auto rounded-full px-3.5 py-2 text-left whitespace-normal">
                    {reply}
                  </Button>
                ))}
              </div>
            ) : null}

            <div className="flex items-end gap-2">
              <div className="min-w-0 flex-1 rounded-[1.35rem] border border-border/75 bg-card/78 px-4 py-3 shadow-[0_20px_50px_-40px_oklch(0.22_0.08_240/0.42)]">
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
                  placeholder="Descreva o que aconteceu ou responda à pergunta"
                  className="min-h-16 w-full resize-none bg-transparent text-sm leading-7 text-foreground outline-none placeholder:text-muted-foreground sm:min-h-12"
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  {status === "streaming" || status === "submitted"
                    ? "Resposta sendo construída..."
                    : "Enter envia · Shift+Enter quebra linha"}
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-1.5 pb-1">
                {isBusy ? (
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={onStop}>
                    Parar
                  </Button>
                ) : null}
                <Button type="submit" size="sm" disabled={!canSubmit}>
                  Enviar
                </Button>
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
      </CardContent>

      <CardFooter className="border-t border-border/70 bg-muted/35 py-3 text-xs leading-6 text-muted-foreground">
        <p>
          Triagem inicial com foco em clareza e confidencialidade.
          Encaminhamento depende do conteúdo e da aderência do caso.
        </p>
      </CardFooter>
    </Card>
  );
}
