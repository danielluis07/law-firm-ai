import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Como funciona a triagem inicial?",
    answer:
      "A triagem e o primeiro passo do atendimento. Voce responde perguntas objetivas sobre sua situacao, e nossa equipe recebe um resumo mais organizado para orientar o proximo caminho com clareza.",
  },
  {
    question: "Vou falar com um advogado ou com um assistente primeiro?",
    answer:
      "O primeiro contato pode comecar pela triagem ou por um atendimento inicial da equipe. Quando necessario, o caso segue para analise com advogado trabalhista.",
  },
  {
    question: "A triagem substitui a analise juridica?",
    answer:
      "Nao. A triagem tem funcao inicial de organizacao e direcionamento. A avaliacao juridica completa acontece em etapa propria, com analise tecnica do caso.",
  },
  {
    question: "Quais tipos de situacao voces atendem?",
    answer:
      "Atuamos em favor do trabalhador em demandas como verbas rescisorias, horas extras, ausencia de registro, FGTS, assedio e outras situacoes relacionadas ao vinculo de trabalho. Na triagem, avaliamos se o seu contexto esta dentro da nossa atuacao.",
  },
  {
    question: "Preciso ter todos os documentos antes de comecar?",
    answer:
      "Nao e necessario reunir tudo antes do primeiro contato. Se houver documentos disponiveis, eles ajudam. Caso ainda nao tenha tudo em maos, orientamos o que sera importante separar nas proximas etapas.",
  },
  {
    question: "O atendimento e sigiloso?",
    answer:
      "Sim. As informacoes compartilhadas no atendimento sao tratadas com confidencialidade e responsabilidade profissional, de acordo com as boas praticas de protecao de dados e sigilo.",
  },
  {
    question: "Quanto tempo leva para iniciar o atendimento?",
    answer:
      "Em geral, o inicio e rapido apos o envio da triagem. O prazo pode variar conforme a demanda do periodo e a complexidade do caso, mas nossa equipe busca manter um fluxo agil e transparente.",
  },
];

export function FaqSection() {
  return (
    <section
      id="duvidas"
      aria-labelledby="faq-title"
      className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[1.1rem] border border-border/80 bg-card/88 shadow-[0_26px_80px_-60px_oklch(0.22_0.09_240/0.38)]">
          <div className="grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-12 lg:px-10 lg:py-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent sm:text-sm">
                Duvidas frequentes
              </p>
              <h2
                id="faq-title"
                className="mt-4 max-w-xl font-display text-3xl leading-tight text-primary sm:text-4xl lg:text-[2.85rem]">
                Perguntas frequentes
              </h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-muted-foreground sm:text-lg">
                Esclareca as duvidas mais comuns antes de iniciar sua triagem ou
                falar com nossa equipe juridica.
              </p>

              <p className="mt-5 border-l-2 border-accent/65 pl-4 text-sm leading-7 text-muted-foreground">
                Respostas objetivas para voce entender melhor seus direitos e
                avancar com mais seguranca no proximo passo.
              </p>
            </div>

            <div className="rounded-md border border-border/70 bg-background/80 px-5 sm:px-6">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item) => (
                  <AccordionItem key={item.question} value={item.question}>
                    <AccordionTrigger className="text-[0.96rem] sm:text-base">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-[0.95rem]">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
