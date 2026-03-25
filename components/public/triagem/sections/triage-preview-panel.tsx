import { Button } from "@/components/ui/button";
import { quickReplies } from "./data";
import { PanelCard } from "./shared";

export function TriagePreviewPanel() {
  return (
    <PanelCard
      eyebrow="Área principal"
      title="Espaço reservado para a futura experiência de triagem">
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border/75 bg-card/78 px-4 py-3">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Experiência de triagem por IA em breve
            </p>
            <p className="mt-1 text-sm leading-7 text-foreground/84">
              Interface visual preparada para a próxima etapa da integração.
            </p>
          </div>
          <span className="inline-flex rounded-full border border-border/70 bg-background/85 px-3 py-1.5 text-xs font-medium text-muted-foreground">
            Placeholder estático
          </span>
        </div>

        <div className="overflow-hidden rounded-[1.25rem] border border-border/75 bg-[linear-gradient(180deg,oklch(1_0_0/.9),oklch(0.97_0.01_230/.92))] shadow-[0_32px_110px_-80px_oklch(0.22_0.09_240/0.58)]">
          <div className="flex items-center justify-between border-b border-border/75 px-5 py-4">
            <div>
              <p className="font-display text-xl text-primary">
                Triagem inicial
              </p>
              <p className="text-sm text-muted-foreground">
                Atendimento guiado com estrutura e linguagem simples
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="size-2 rounded-full bg-accent" />
              Em configuração
            </div>
          </div>

          <div className="space-y-5 px-5 py-6 sm:px-6">
            <div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-border/75 bg-card/86 px-4 py-3 shadow-sm">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Assistente de triagem
              </p>
              <p className="mt-2 text-sm leading-7 text-foreground/88 sm:text-[0.96rem]">
                Olá, vou conduzir uma triagem inicial do seu caso trabalhista.
                Isso costuma levar apenas alguns minutos.
              </p>
            </div>

            <div className="ml-auto max-w-[82%] rounded-2xl rounded-tr-sm border border-primary/10 bg-primary px-4 py-3 text-primary-foreground shadow-sm">
              <p className="text-sm leading-7 sm:text-[0.96rem]">
                Quero entender se meu desligamento e os valores pagos foram
                corretos.
              </p>
            </div>

            <div className="max-w-[92%] rounded-2xl rounded-tl-sm border border-dashed border-border/80 bg-background/75 px-4 py-3">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Próxima mensagem
              </p>
              <div className="mt-3 space-y-2">
                <div className="h-2.5 w-4/5 rounded-full bg-muted" />
                <div className="h-2.5 w-3/4 rounded-full bg-muted" />
                <div className="h-2.5 w-2/5 rounded-full bg-muted" />
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Respostas rápidas futuras
              </p>
              <div className="flex flex-wrap gap-2.5">
                {quickReplies.map((reply) => (
                  <span
                    key={reply}
                    className="rounded-full border border-border/75 bg-background/82 px-3.5 py-2 text-sm text-foreground/86">
                    {reply}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-border/75 bg-background/88 px-5 py-4 sm:px-6">
            <div className="flex items-center gap-3 rounded-xl border border-border/75 bg-card/75 px-3 py-3">
              <input
                aria-label="Campo de resposta desativado"
                disabled
                defaultValue=""
                placeholder="Campo de resposta ficará disponível na próxima etapa"
                className="h-11 flex-1 bg-transparent text-sm text-muted-foreground outline-none placeholder:text-muted-foreground"
              />
              <Button size="sm" disabled>
                Enviar
              </Button>
            </div>
            <p className="mt-3 text-xs leading-6 text-muted-foreground">
              Nenhuma informação é enviada nesta etapa. O fluxo acima é apenas
              uma prévia visual da futura triagem.
            </p>
          </div>
        </div>
      </div>
    </PanelCard>
  );
}
