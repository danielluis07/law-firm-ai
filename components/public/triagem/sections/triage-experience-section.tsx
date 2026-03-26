"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import type {
  TriageChatMessage,
  TriageClassificationResult,
  TriageSubmissionResult,
} from "@/lib/triage-chat";
import { emptyCaseDraft, mergeCaseDraft } from "@/lib/triage-state";
import type { CaseDraft } from "@/schemas";
import { TriagePreviewPanel } from "./triage-preview-panel";

function getTriageState(messages: TriageChatMessage[]) {
  let caseDraft: Partial<CaseDraft> = emptyCaseDraft;
  let classification: TriageClassificationResult | undefined;
  let submission: TriageSubmissionResult | undefined;

  for (const message of messages) {
    for (const part of message.parts) {
      if (
        part.type === "tool-updateCaseDraft" &&
        part.state === "output-available"
      ) {
        caseDraft = mergeCaseDraft(caseDraft, part.output.updatedDraft);
      }

      if (
        part.type === "tool-classifyLead" &&
        part.state === "output-available"
      ) {
        classification = part.output;
      }

      if (
        part.type === "tool-submitScreening" &&
        part.state === "output-available"
      ) {
        submission = part.output;
      }
    }
  }

  return { caseDraft, classification, submission };
}

export function TriageExperienceSection() {
  const [input, setInput] = useState("");
  const messagesViewportRef = useRef<HTMLDivElement | null>(null);
  const [transport] = useState(
    () =>
      new DefaultChatTransport<TriageChatMessage>({
        api: "/api/chat",
        prepareSendMessagesRequest: ({
          id,
          messages,
          body,
          trigger,
          messageId,
        }) => ({
          body: {
            ...(body ?? {}),
            id,
            messages,
            trigger,
            messageId,
            caseDraft: getTriageState(messages).caseDraft,
          },
        }),
      }),
  );
  const { messages, status, error, clearError, sendMessage, stop } =
    useChat<TriageChatMessage>({
      transport,
    });
  const { caseDraft, classification, submission } = getTriageState(messages);

  const isBusy = status === "submitted" || status === "streaming";
  const headerStatus = submission
    ? "Encaminhado"
    : classification?.status === "out_of_scope" ||
        caseDraft.status === "out_of_scope"
      ? "Fora do escopo"
      : isBusy
        ? "Analisando"
        : messages.length > 0
          ? "Em triagem"
          : "Pronto para iniciar";

  useEffect(() => {
    const viewport = messagesViewportRef.current;

    if (!viewport) {
      return;
    }

    viewport.scrollTo({
      top: viewport.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, status]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = input.trim();

    if (!text || isBusy) {
      return;
    }

    if (error) {
      clearError();
    }

    setInput("");
    void sendMessage({ text });
  }

  function handleQuickReply(reply: string) {
    if (isBusy) {
      return;
    }

    if (error) {
      clearError();
    }

    void sendMessage({ text: reply });
  }

  return (
    <section
      id="area-triagem"
      aria-label="Experiência de triagem"
      className="mx-auto w-full max-w-6xl">
      <TriagePreviewPanel
        messages={messages}
        status={status}
        headerStatus={headerStatus}
        input={input}
        error={error}
        isBusy={isBusy}
        messagesViewportRef={messagesViewportRef}
        onInputChange={setInput}
        onSubmit={handleSubmit}
        onQuickReply={handleQuickReply}
        onStop={() => {
          void stop();
        }}
        onClearError={clearError}
      />
    </section>
  );
}
