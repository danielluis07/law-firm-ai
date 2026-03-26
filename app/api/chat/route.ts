import { caseDraftSchema, type CaseDraft } from "@/schemas";
import {
  createTriageTools,
  triageSystemPrompt,
  type TriageChatMessage,
} from "@/lib/triage-chat";
import { emptyCaseDraft } from "@/lib/triage-state";
import { openai } from "@ai-sdk/openai";
import { convertToModelMessages, stepCountIs, streamText } from "ai";

export const maxDuration = 300;

export async function POST(req: Request) {
  const payload = (await req.json()) as {
    messages?: TriageChatMessage[];
    caseDraft?: Partial<CaseDraft>;
  };

  if (!Array.isArray(payload.messages)) {
    return Response.json({ error: "Invalid chat payload." }, { status: 400 });
  }

  const caseDraft = caseDraftSchema.safeParse(payload.caseDraft ?? {});
  const tools = createTriageTools(
    caseDraft.success ? caseDraft.data : emptyCaseDraft,
  );

  const result = streamText({
    model: openai("gpt-5-mini"),

    providerOptions: {
      openai: {
        textVerbosity: "low",
      },
    },

    system: triageSystemPrompt,

    messages: await convertToModelMessages(payload.messages, { tools }),

    stopWhen: stepCountIs(8),

    tools,
  });

  return result.toUIMessageStreamResponse();
}
