import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { microcopyItems } from "./sections/data";
import { TriageExperienceSection } from "./sections/triage-experience-section";
import { TriageHeader } from "./sections/triage-header";

const orientationSteps = [
  "Conte a situacao em linguagem simples, como falaria com a equipe.",
  "O chat organiza os fatos essenciais e aprofunda so o que importa.",
  "Se o caso se encaixar na nossa atuacao, a equipe juridica avalia os proximos passos.",
] as const;

const supportNotes = [
  "Triagem inicial confidencial",
  "Sem formulário longo",
  "Não substitui análise jurídica formal",
] as const;

export function TriageIntakePage() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-120 bg-[radial-gradient(78%_62%_at_50%_0%,oklch(0.96_0.03_236),transparent)]" />
      <div className="pointer-events-none absolute left-0 top-44 h-72 w-72 rounded-full bg-primary/6 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-56 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-[oklch(0.9_0.02_220/0.45)] blur-3xl" />

      <TriageHeader />

      <main className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 pb-20 pt-10 sm:px-8 sm:pb-24 sm:pt-12 lg:gap-10 lg:px-10 lg:pb-28 lg:pt-14">
        <section
          aria-labelledby="triagem-heading"
          className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] xl:items-start">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent sm:text-sm">
              Triagem trabalhista assistida
            </p>
            <h1
              id="triagem-heading"
              className="mt-4 max-w-4xl text-balance font-display text-4xl leading-[1.02] text-primary sm:text-5xl lg:text-[4.2rem]">
              Conte o que aconteceu. A triagem ajuda a organizar o seu caso com
              clareza.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
              Em vez de um formulario longo, voce descreve a situacao e o chat
              vai coletando vinculo, fatos, provas e contato no ritmo certo.
              Assim, a equipe recebe um panorama mais claro do seu caso.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {microcopyItems.map((item) => (
                <span
                  key={item}
                  className="inline-flex rounded-full border border-border/75 bg-background/82 px-3.5 py-2 text-sm text-foreground/86 shadow-[0_12px_34px_-28px_oklch(0.22_0.08_240/0.34)]">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="px-7 shadow-sm">
                <Link href="#area-triagem">Abrir chat de triagem</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-7">
                <Link href="/contato-direto">Prefiro contato humano direto</Link>
              </Button>
            </div>
          </div>

          <Card className="border-border/80 bg-card/88 shadow-[0_28px_100px_-72px_oklch(0.22_0.08_240/0.44)] backdrop-blur-sm">
            <CardHeader className="gap-3">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent">
                Como aproveitar melhor
              </p>
              <CardTitle className="font-display text-[1.65rem] leading-tight text-primary">
                Use a conversa para organizar os fatos antes da analise juridica
              </CardTitle>
              <CardDescription className="text-sm leading-7 text-muted-foreground">
                O foco aqui e chegar rapido ao ponto central do problema, sem
                perder contexto importante para a defesa dos seus direitos.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <ol className="grid gap-3">
                {orientationSteps.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 rounded-xl border border-border/75 bg-background/80 px-4 py-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                      {index + 1}
                    </span>
                    <span className="text-sm leading-7 text-foreground/86">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>

              <div className="rounded-xl border border-border/75 bg-muted/45 px-4 py-4">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Antes de começar
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {supportNotes.map((note) => (
                    <span
                      key={note}
                      className="inline-flex rounded-full border border-border/70 bg-background/82 px-3 py-1.5 text-xs font-medium text-foreground/82">
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <TriageExperienceSection />

        <section
          aria-label="Orientações complementares"
          className="grid gap-4 lg:grid-cols-2">
          <Card className="border-border/80 bg-card/84 shadow-[0_24px_80px_-64px_oklch(0.22_0.08_240/0.36)]">
            <CardHeader className="gap-2">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent">
                Fluxo alternativo
              </p>
              <CardTitle className="font-display text-[1.55rem] leading-tight text-primary">
                Se o caso exigir contato humano desde o início
              </CardTitle>
              <CardDescription className="text-sm leading-7 text-muted-foreground">
                Situações urgentes ou que já estejam bem definidas podem seguir
                direto para a equipe.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="text-sm leading-7 text-foreground/84">
                Voce pode pular a triagem por chat e enviar seu caso para uma
                analise inicial humana quando preferir contato direto desde o
                primeiro momento.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild variant="outline" size="lg" className="px-6">
                  <Link href="/contato-direto">Ir para contato direto</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/80 bg-card/84 shadow-[0_24px_80px_-64px_oklch(0.22_0.08_240/0.32)]">
            <CardHeader className="gap-2">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent">
                Transparência
              </p>
              <CardTitle className="font-display text-[1.55rem] leading-tight text-primary">
                O que esta etapa faz e o que ela não faz
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm leading-7 text-foreground/84">
              <div className="rounded-xl border border-border/75 bg-background/82 px-4 py-3">
                Esta triagem ajuda a estruturar os fatos e identificar sinais
                iniciais do caso.
              </div>
              <div className="rounded-xl border border-border/75 bg-background/82 px-4 py-3">
                O encaminhamento depende da aderência do assunto e de revisão
                humana quando necessário.
              </div>
              <div className="rounded-xl border border-border/75 bg-background/82 px-4 py-3">
                O uso do chat não substitui parecer jurídico, estratégia
                processual ou contratação do escritório.
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
