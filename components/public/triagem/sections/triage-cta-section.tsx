import Link from "next/link";
import { Button } from "@/components/ui/button";

export function TriageCtaSection() {
  return (
    <section
      aria-labelledby="triagem-cta-title"
      className="overflow-hidden rounded-[1.5rem] border border-border/75 bg-[linear-gradient(135deg,oklch(0.22_0.09_240),oklch(0.3_0.08_230))] text-primary-foreground shadow-[0_30px_120px_-70px_oklch(0.22_0.08_240/0.7)]">
      <div className="grid gap-6 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:px-10">
        <div className="max-w-2xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-primary-foreground/75">
            Próxima etapa
          </p>
          <h2
            id="triagem-cta-title"
            className="mt-3 font-display text-3xl leading-tight sm:text-[2.4rem]">
            Pronto para iniciar sua triagem inicial?
          </h2>
          <p className="mt-4 text-sm leading-7 text-primary-foreground/78 sm:text-base">
            O fluxo conversacional será integrado em seguida. Esta página já
            está preparada para receber a experiência completa com a mesma
            organização apresentada acima.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="px-6 text-primary">
            <Link href="#area-triagem">Começar triagem</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/20 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link href="/">Retornar ao site principal</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
