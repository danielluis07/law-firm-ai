import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const situations = [
  {
    index: "01",
    title: "Demissão sem justa causa",
    description:
      "Você foi desligado e saiu sem entender exatamente o que deveria receber ou quais passos tomar agora.",
    highlight:
      "É comum surgirem dúvidas sobre aviso, saldo, multa e prazo de pagamento.",
  },
  {
    index: "02",
    title: "Verbas rescisórias não pagas",
    description:
      "A empresa encerrou o vínculo, mas os valores da rescisão não foram pagos por completo ou dentro do prazo.",
    highlight:
      "Quando o acerto demora ou vem incompleto, vale revisar com atenção.",
  },
  {
    index: "03",
    title: "Horas extras não reconhecidas",
    description:
      "Você trabalhava além do horário, atendia mensagens fora do expediente ou fazia plantões sem a compensação correta.",
    highlight:
      "Muita gente convive com essa rotina sem saber que pode haver diferenças a receber.",
  },
  {
    index: "04",
    title: "Trabalho sem carteira assinada",
    description:
      "Havia rotina, cobrança e vínculo de trabalho, mas o registro nunca foi feito ou foi adiado repetidamente.",
    highlight:
      "A falta de registro pode afetar férias, FGTS, INSS e outras garantias básicas.",
  },
  {
    index: "05",
    title: "Assédio moral no ambiente de trabalho",
    description:
      "Você enfrentou humilhações, pressão constante, exposição indevida ou tratamento abusivo no dia a dia.",
    highlight:
      "Nem sempre o problema aparece em um único episódio; às vezes ele se repete aos poucos.",
  },
  {
    index: "06",
    title: "FGTS ou direitos não depositados",
    description:
      "Ao conferir seus documentos, você percebeu ausência de depósitos ou falhas em direitos que deveriam estar sendo cumpridos.",
    highlight:
      "Essas diferenças costumam passar despercebidas por muito tempo e merecem revisão cuidadosa.",
  },
];

export function SituationsSection() {
  return (
    <section
      aria-labelledby="situations-title"
      className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent sm:text-sm">
            Reconhecimento do problema
          </p>
          <h2
            id="situations-title"
            className="mt-4 font-display text-3xl leading-tight text-primary sm:text-4xl lg:text-[3rem]">
            Situações que atendemos
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Se algo parecido aconteceu com você, este pode ser o momento de
            entender com mais clareza se seus direitos trabalhistas foram
            desrespeitados.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {situations.map((situation) => (
            <Card
              key={situation.title}
              className="h-full border-border/80 bg-card/88 shadow-[0_24px_70px_-54px_oklch(0.22_0.09_240/0.34)]">
              <CardHeader className="flex h-full flex-col gap-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-accent">
                  Caso {situation.index}
                </p>
                <div className="flex flex-1 flex-col gap-3">
                  <CardTitle className="font-display text-2xl leading-tight text-primary">
                    {situation.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-7 text-muted-foreground sm:text-[0.95rem]">
                    {situation.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="border-t border-border/70 pt-4">
                  <p className="text-sm leading-7 text-foreground/80">
                    {situation.highlight}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
