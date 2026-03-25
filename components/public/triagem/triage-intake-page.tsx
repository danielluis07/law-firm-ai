import { CredibilitySection } from "./sections/credibility-section";
import { HeroSection } from "./sections/hero-section";
import { TriageCtaSection } from "./sections/triage-cta-section";
import { TriageExperienceSection } from "./sections/triage-experience-section";
import { TriageHeader } from "./sections/triage-header";

export function TriageIntakePage() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="absolute inset-x-0 top-0 h-112 bg-[radial-gradient(circle_at_top,oklch(0.98_0.03_90),transparent_60%)]" />
      <div className="absolute left-1/2 top-40 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/6 blur-3xl" />
      <div className="absolute right-0 top-56 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <TriageHeader />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 pb-20 pt-10 sm:px-8 sm:pb-24 sm:pt-14 lg:gap-14 lg:px-10 lg:pb-28 lg:pt-16">
        <HeroSection />
        <CredibilitySection />
        <TriageExperienceSection />
        <TriageCtaSection />
      </div>
    </div>
  );
}
