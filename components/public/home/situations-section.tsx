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
    title: "Demissao sem justa causa e rescisao",
    description:
      "Voce foi desligado e saiu sem entender exatamente o que deveria receber ou quais passos tomar agora.",
    highlight:
      "E comum surgirem duvidas sobre aviso, saldo, multa de 40% e prazo de pagamento.",
  },
  {
    index: "02",
    title: "Rescisao paga com atraso ou incompleta",
    description:
      "A empresa encerrou o vinculo, mas os valores da rescisao nao foram pagos por completo ou dentro do prazo.",
    highlight:
      "Quando o acerto demora ou vem incompleto, vale revisar com atencao cada verba devida.",
  },
  {
    index: "03",
    title: "Horas extras, intervalos e jornada abusiva",
    description:
      "Voce trabalhava alem do horario, atendia mensagens fora do expediente ou fazia plantoes sem a compensacao correta.",
    highlight:
      "Muita gente convive com essa rotina sem saber que pode haver diferencas importantes a receber.",
  },
  {
    index: "04",
    title: "Trabalho sem carteira assinada",
    description:
      "Havia rotina, cobranca e vinculo de trabalho, mas o registro nunca foi feito ou foi adiado repetidamente.",
    highlight:
      "A falta de registro pode afetar ferias, FGTS, INSS e outras garantias basicas.",
  },
  {
    index: "05",
    title: "Assedio moral e humilhacoes no trabalho",
    description:
      "Voce enfrentou humilhacoes, pressao constante, exposicao indevida ou tratamento abusivo no dia a dia.",
    highlight:
      "Nem sempre o problema aparece em um unico episodio; as vezes ele se repete aos poucos e deixa marcas profundas.",
  },
  {
    index: "06",
    title: "FGTS, ferias ou outros direitos nao cumpridos",
    description:
      "Ao conferir seus documentos, voce percebeu ausencia de depositos ou falhas em direitos que deveriam estar sendo cumpridos.",
    highlight:
      "Essas diferencas costumam passar despercebidas por muito tempo e merecem revisao cuidadosa.",
  },
];

export function SituationsSection() {
  return (
    <section
      id="situacoes"
      aria-labelledby="situations-title"
      className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent sm:text-sm">
            Demandas frequentes
          </p>
          <h2
            id="situations-title"
            className="mt-4 font-display text-3xl leading-tight text-primary sm:text-4xl lg:text-[3rem]">
            Situacoes em que podemos ajudar
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Se algo parecido aconteceu com voce, este pode ser o momento de
            entender com mais clareza se seus direitos trabalhistas foram
            desrespeitados e quais fatos merecem analise juridica.
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
