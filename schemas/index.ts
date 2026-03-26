import { z } from "zod";

export const maxDuration = 300;

export const caseDraftSchema = z.object({
  issueType: z
    .enum([
      "unfair_dismissal",
      "unpaid_severance",
      "overtime",
      "undeclared_employment",
      "harassment",
      "fgts",
      "other",
    ])
    .optional(),

  hasSignedWorkCard: z.boolean().optional(),
  isStillEmployed: z.boolean().optional(),
  employmentDuration: z.string().optional(),
  issueDate: z.string().optional(),
  unpaidAmounts: z.string().optional(),
  hasEvidence: z.string().optional(),

  userName: z.string().optional(),
  whatsapp: z.string().optional(),

  summary: z.string().optional(),
  status: z
    .enum(["collecting", "ready_for_review", "out_of_scope", "incomplete"])
    .optional(),
});

export const leadClassificationSchema = z.object({
  status: z.enum([
    "eligible",
    "needs_human_review",
    "out_of_scope",
    "incomplete",
  ]),
  reason: z.string(),
  summary: z.string(),
});

export const submitScreeningSchema = z.object({
  userName: z.string(),
  whatsapp: z.string(),
  summary: z.string(),
});

export type CaseDraft = z.infer<typeof caseDraftSchema>;
export type LeadClassification = z.infer<typeof leadClassificationSchema>;
export type SubmittedScreening = z.infer<typeof submitScreeningSchema>;
