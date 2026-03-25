import type { Metadata } from "next";
import { TriageIntakePage } from "@/components/public/triagem/triage-intake-page";

export const metadata: Metadata = {
  title: "Triagem Trabalhista | Tavares & Lima",
  description:
    "Inicie uma triagem inicial assistida por IA para entender, de forma estruturada e confidencial, se sua situação pode envolver direitos trabalhistas.",
};

export default function TriagemPage() {
  return <TriageIntakePage />;
}
