import {
  commonMatters,
  howItWorksSteps,
  importantItems,
  progressSteps,
  summaryItems,
} from "./data";
import { PanelCard } from "./shared";

export function TriageSidebar() {
  return (
    <aside className="flex flex-col gap-5">
      <PanelCard eyebrow="Processo" title="Etapas previstas da triagem">
        <ol className="grid gap-3">
          {progressSteps.map((step, index) => (
            <li
              key={step}
              className="flex items-center gap-3 rounded-xl border border-border/75 bg-card/74 px-4 py-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border/75 bg-background text-sm font-semibold text-primary">
                {index + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-foreground/88">{step}</p>
                <div className="mt-2 h-1.5 rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary/65"
                    style={{
                      width: `${((index + 1) / progressSteps.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </PanelCard>

      <PanelCard eyebrow="Orientação" title="Como funciona">
        <ol className="grid gap-3">
          {howItWorksSteps.map((step, index) => (
            <li
              key={step}
              className="flex gap-3 rounded-xl border border-border/75 bg-card/74 px-4 py-3">
              <span className="text-sm font-semibold text-accent">
                {index + 1}.
              </span>
              <span className="text-sm leading-7 text-foreground/86">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </PanelCard>

      <PanelCard eyebrow="Transparência" title="Importante">
        <ul className="grid gap-3">
          {importantItems.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-border/75 bg-card/74 px-4 py-3 text-sm leading-7 text-foreground/86">
              {item}
            </li>
          ))}
        </ul>
      </PanelCard>

      <PanelCard eyebrow="Referência" title="Assuntos mais comuns">
        <ul className="grid gap-3">
          {commonMatters.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-border/75 bg-card/74 px-4 py-3 text-sm leading-7 text-foreground/86">
              {item}
            </li>
          ))}
        </ul>
      </PanelCard>

      <PanelCard eyebrow="Resumo previsto" title="Prévia do resumo do caso">
        <div className="space-y-3">
          {summaryItems.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border/75 bg-card/74 px-4 py-3">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-1 text-sm leading-7 text-foreground/88">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </PanelCard>
    </aside>
  );
}
