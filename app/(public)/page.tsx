import { Hero } from "@/components/public/home/hero";
import { SituationsSection } from "@/components/public/home/situations-section";
import { TriageSection } from "@/components/public/home/triage-section";
import { FaqSection } from "@/components/public/home/faq-section";
import { LegalTeamSection } from "../../components/public/home/legal-team-section";

export default function Home() {
  return (
    <>
      <Hero />
      <TriageSection />
      <SituationsSection />
      <FaqSection />
      <LegalTeamSection />
    </>
  );
}
