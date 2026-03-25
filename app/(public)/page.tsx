import { Hero } from "@/components/public/home/hero";
import { SituationsSection } from "@/components/public/home/situations-section";
import { TriageSection } from "@/components/public/home/triage-section";

export default function Home() {
  return (
    <>
      <Hero />
      <TriageSection />
      <SituationsSection />
    </>
  );
}
