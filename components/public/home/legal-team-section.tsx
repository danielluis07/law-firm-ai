import Image from "next/image";
import teamImage from "@/public/images/team.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const credibilityPoints = [
  "Atendimento proximo e respeitoso",
  "Analise tecnica do historico de trabalho",
  "Estrategia juridica para defesa do trabalhador",
  "Clareza sobre direitos e proximos passos",
];

export function LegalTeamSection() {
  return (
    <section
      id="equipe"
      aria-labelledby="legal-team-title"
      className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[1.2rem] border border-border/80 bg-card/88 shadow-[0_30px_90px_-62px_oklch(0.22_0.09_240/0.42)]">
          <div className="grid lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
            <div className="relative min-h-72 bg-secondary/25 sm:min-h-96 lg:min-h-120">
              <Image
                src={teamImage}
                alt="Equipe juridica reunida para analise tecnica e orientacao de casos"
                fill
                placeholder="blur"
                sizes="(max-width: 1023px) 100vw, 56vw"
                className="object-contain object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/12 via-transparent to-transparent" />
              <div className="absolute inset-y-0 right-0 hidden w-24 bg-linear-to-r from-transparent to-card/50 lg:block" />
            </div>

            <div className="flex items-center bg-card/82 px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
              <Card className="w-full border-border/70 bg-background/72 shadow-[0_22px_70px_-54px_oklch(0.22_0.09_240/0.3)]">
                <CardHeader className="gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent sm:text-sm">
                    Equipe juridica
                  </p>
                  <CardTitle
                    id="legal-team-title"
                    className="font-display text-3xl leading-tight text-primary sm:text-4xl lg:text-[2.7rem]">
                    Advocacia trabalhista com atencao ao seu caso e firmeza na
                    defesa dos seus direitos.
                  </CardTitle>
                  <CardDescription className="text-sm leading-7 text-muted-foreground sm:text-[0.97rem]">
                    Unimos leitura tecnica do caso, escuta atenta e estrategia
                    juridica para orientar cada trabalhador com responsabilidade,
                    transparencia e compromisso real com a defesa dos seus
                    direitos.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {credibilityPoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 rounded-md border border-border/70 bg-card/72 px-4 py-3">
                        <span
                          aria-hidden
                          className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-accent"
                        />
                        <span className="text-sm leading-7 text-foreground/86">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
