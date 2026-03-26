import type { CaseDraft } from "@/schemas";

export const emptyCaseDraft: Partial<CaseDraft> = {
  status: "collecting",
};

function omitUndefinedFields<T extends object>(value: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(value).filter(([, fieldValue]) => fieldValue !== undefined),
  ) as Partial<T>;
}

export function mergeCaseDraft(
  currentDraft: Partial<CaseDraft>,
  nextValues: Partial<CaseDraft>,
): Partial<CaseDraft> {
  return {
    ...emptyCaseDraft,
    ...omitUndefinedFields(currentDraft),
    ...omitUndefinedFields(nextValues),
  };
}
