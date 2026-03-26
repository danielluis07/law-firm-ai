import type { Metadata } from "next";
import { TriageIntakePage } from "@/components/public/triagem/triage-intake-page";

export const metadata: Metadata = {
  title: "Triagem do Trabalhador | Tavares & Lima",
  description:
    "Inicie uma triagem inicial assistida para organizar os fatos do seu caso e entender, de forma estruturada e confidencial, se houve violação de direitos trabalhistas.",
};

export default function TriagemPage() {
  return <TriageIntakePage />;
}
