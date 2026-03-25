import { credibilityCards } from "./data";
import { SectionCard } from "./shared";

export function CredibilitySection() {
  return (
    <section
      aria-label="Pontos de credibilidade"
      className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-4">
      {credibilityCards.map((card) => (
        <SectionCard
          key={card.title}
          title={card.title}
          description={card.description}
        />
      ))}
    </section>
  );
}
