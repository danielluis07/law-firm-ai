import { TriagePreviewPanel } from "./triage-preview-panel";
import { TriageSidebar } from "./triage-sidebar";

export function TriageExperienceSection() {
  return (
    <section
      id="area-triagem"
      aria-label="Experiência de triagem"
      className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
      <TriagePreviewPanel />
      <TriageSidebar />
    </section>
  );
}
