import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { microcopyItems } from "./data";

export function HeroSection() {
  return (
    <section
      aria-labelledby="triagem-heading"
      className="grid gap-8 xl:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] xl:items-end">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent sm:text-sm">
          Triagem inicial assistida por IA
        </p>
        <h1
          id="triagem-heading"
          className="mt-4 max-w-3xl font-display text-4xl leading-tight text-primary sm:text-5xl lg:text-[4rem]">
          Inicie uma triagem rápida para o seu caso trabalhista
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          Esta etapa foi pensada para organizar seu primeiro atendimento. Em
          poucos minutos, você passará por uma coleta inicial de informações
          para identificar sinais relevantes do seu caso com clareza, linguagem
          acessível e estrutura.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          {microcopyItems.map((item) => (
            <span
              key={item}
              className="inline-flex rounded-full border border-border/75 bg-background/78 px-3.5 py-2 text-sm text-foreground/86 shadow-[0_10px_30px_-24px_oklch(0.22_0.08_240/0.38)]">
              {item}
            </span>
          ))}
        </div>
      </div>

      <Card className="border-border/80 bg-card/88 shadow-[0_24px_90px_-60px_oklch(0.22_0.08_240/0.48)] backdrop-blur-sm">
        <CardHeader className="gap-3">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent">
            Aviso importante
          </p>
          <CardTitle className="font-display text-[1.55rem] leading-tight text-primary">
            Primeira análise organizada, sem promessas indevidas
          </CardTitle>
          <CardDescription className="text-sm leading-7 text-muted-foreground">
            Esta triagem inicial não substitui orientação jurídica formal. Ela
            serve como um primeiro filtro para encaminhamento mais cuidadoso do
            atendimento.
          </CardDescription>
        </CardHeader>
      </Card>
    </section>
  );
}
