import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const triageSteps = [
  "Você responde algumas perguntas",
  "Entendemos sua situação",
  "Direcionamos o próximo passo",
];

export function TriageSection() {
  return (
    <section
      aria-labelledby="triage-title"
      className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[1.1rem] border border-border/80 bg-card/86 shadow-[0_28px_90px_-62px_oklch(0.22_0.09_240/0.44)]">
          <div className="grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-10 lg:px-10 lg:py-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent sm:text-sm">
                Seção de triagem
              </p>
              <h2
                id="triage-title"
                className="mt-4 max-w-xl font-display text-3xl leading-tight text-primary sm:text-4xl lg:text-[2.85rem]">
                Entenda seu caso em poucos minutos, com clareza e organização.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                Antes de falar com nossa equipe, você pode responder algumas
                perguntas objetivas. Isso ajuda a compreender sua situação com
                mais precisão e indicar o próximo passo adequado para o seu
                atendimento.
              </p>

              <ol className="mt-7 grid gap-3">
                {triageSteps.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 rounded-md border border-border/70 bg-background/70 px-4 py-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                      {index + 1}
                    </span>
                    <span className="text-sm leading-7 text-foreground/88 sm:text-[0.96rem]">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="px-7 shadow-sm">
                  <Link href="/#contato">Iniciar triagem</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-7">
                  <Link href="/#contato">Prefiro falar com a equipe</Link>
                </Button>
              </div>

              <p className="mt-5 border-l-2 border-accent/65 pl-4 text-sm leading-7 text-muted-foreground">
                Triagem inicial rápida, clara e confidencial para facilitar seu
                primeiro passo.
              </p>

              <p className="mt-3 text-xs leading-6 text-muted-foreground/90 sm:text-sm">
                Esta triagem tem caráter inicial e não substitui análise
                jurídica formal do caso.
              </p>
            </div>

            <Card className="relative border-border/80 bg-background/88 shadow-[0_28px_90px_-60px_oklch(0.22_0.09_240/0.38)]">
              <CardHeader className="gap-2">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent">
                  Pré-atendimento guiado
                </p>
                <CardTitle className="font-display text-2xl leading-tight text-primary sm:text-[1.75rem]">
                  Prévia da triagem
                </CardTitle>
                <CardDescription className="text-sm leading-7 text-muted-foreground sm:text-[0.95rem]">
                  Um fluxo simples para reunir informações importantes antes do
                  contato com a equipe.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="rounded-md border border-border/70 bg-card/70 px-4 py-3">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Etapa 1 de 3
                  </p>
                  <p className="mt-2 text-sm leading-7 text-foreground/88">
                    &ldquo;Seu vínculo foi encerrado recentemente ou os
                    pagamentos esperados não foram concluídos?&rdquo;
                  </p>
                </div>

                <div className="ml-auto max-w-[88%] rounded-md border border-border/70 bg-secondary/70 px-4 py-3">
                  <p className="text-sm leading-7 text-foreground/88">
                    Sim. Fui desligado(a) e ainda tenho dúvidas sobre o que
                    deveria ter recebido.
                  </p>
                </div>

                <div className="rounded-md border border-border/70 bg-card/70 px-4 py-3">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Direcionamento inicial
                  </p>
                  <p className="mt-2 text-sm leading-7 text-foreground/88">
                    Obrigado. Com base nas suas respostas, vamos priorizar os
                    pontos essenciais e orientar o próximo passo com clareza.
                  </p>
                </div>

                <div className="mt-1 rounded-md border border-border/70 bg-background px-4 py-3">
                  <p className="text-xs leading-6 text-muted-foreground">
                    Tempo médio para concluir: 2 a 4 minutos
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
