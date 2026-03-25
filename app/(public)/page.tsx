import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-8 md:p-16 space-y-12 max-w-4xl">
      {/* 1. Teste de Tipografia (Libre Baskerville vs Inter) */}
      <section className="space-y-4">
        <span className="text-accent font-semibold tracking-wider uppercase text-sm">
          Advocacia Trabalhista Especializada
        </span>
        <h1 className="text-5xl font-display text-primary leading-tight">
          Protegendo seus direitos com firmeza e transparência.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Este parágrafo utiliza a fonte <strong>Inter</strong>. Ela foi mantida
          como padrão para garantir que a leitura de textos técnicos e
          informativos seja fluida e moderna em qualquer tela.
        </p>
      </section>

      {/* 2. Teste de Cores e Botões (Primária vs Accent) */}
      <div className="flex flex-wrap gap-4">
        {/* Botão Primário: Azul Petróleo Profundo */}
        <Button size="lg" className="px-8 shadow-md">
          Consultar Especialista
        </Button>

        {/* Botão Accent: Terracota (Para ações de urgência ou destaque) */}
        <Button
          variant="secondary"
          className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
          Cálculo de Rescisão
        </Button>

        <Button variant="outline">Ver Serviços</Button>
      </div>

      {/* 3. Teste de Card e Bordas (--radius: 0.25rem) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
          <h2 className="text-xl font-display font-bold mb-3">
            Diferencial Jurídico
          </h2>
          <p className="text-sm text-muted-foreground">
            O raio de borda reduzido preserva a seriedade, enquanto o fundo
            levemente azulado (oklch 230) traz um ar de limpeza e modernidade ao
            site.
          </p>
        </div>

        <div className="p-6 rounded-lg border border-primary/20 bg-primary/5">
          <h3 className="text-lg font-display font-semibold text-primary mb-2">
            Dúvidas Frequentes
          </h3>
          <p className="text-sm opacity-80">
            Utilizando variações de transparência da cor primária para criar
            seções de destaque sutis.
          </p>
        </div>
      </div>
    </div>
  );
}
