import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#situacoes", label: "Como ajudamos" },
  { href: "/#triagem", label: "Triagem" },
  { href: "/#equipe", label: "Equipe" },
  { href: "/#duvidas", label: "Duvidas" },
  { href: "/contato-direto", label: "Contato direto" },
];

const serviceChannels = [
  { label: "Telefone", value: "(00) 0000-0000" },
  { label: "WhatsApp", value: "(00) 00000-0000" },
  { label: "E-mail", value: "contato@tavareselima.adv.br" },
  {
    label: "Endereco",
    value: "Rua Exemplo, 000 - Centro, Cidade/UF",
  },
];

const complianceLinks = [
  { href: "/politica-de-privacidade", label: "Politica de Privacidade" },
  { href: "/termos-de-uso", label: "Termos de Uso" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border/75 bg-card/85">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,0.9fr)] lg:gap-10 lg:px-10 lg:py-16">
        <section aria-labelledby="footer-brand-title" className="max-w-2xl">
          <Link
            href="/"
            className="inline-flex items-center gap-3 transition-opacity hover:opacity-90"
            aria-label="Tavares e Lima Advocacia Trabalhista, voltar ao inicio">
            <Image
              src={logo}
              alt="Logo do escritorio Tavares e Lima"
              className="h-14 w-auto"
            />
            <div>
              <p
                id="footer-brand-title"
                className="font-display text-xl font-semibold text-primary">
                Tavares &amp; Lima
              </p>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Advocacia Trabalhista
              </p>
            </div>
          </Link>

          <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground sm:text-[0.97rem]">
            Atuacao juridica voltada a defesa do trabalhador, com analise
            cuidadosa dos fatos, clareza sobre direitos e encaminhamento
            responsavel para cada caso.
          </p>

          <div className="mt-7 rounded-md border border-border/75 bg-background/70 p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Atendimento especializado
            </p>
            <p className="mt-2 text-sm leading-7 text-foreground/85 sm:text-[0.96rem]">
              Fale com nossa equipe para uma orientacao inicial e entenda qual
              pode ser o melhor caminho para o seu caso trabalhista.
            </p>
            <div className="mt-4">
              <Button asChild size="sm" className="px-5">
                <Link href="/triagem">Iniciar atendimento</Link>
              </Button>
            </div>
          </div>
        </section>

        <nav aria-label="Links uteis do rodape">
          <h2 className="font-display text-2xl text-primary">Navegacao</h2>
          <ul className="mt-5 flex flex-col gap-2.5">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm leading-7 text-muted-foreground transition-colors hover:text-foreground sm:text-[0.96rem]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section aria-labelledby="footer-contact-title">
          <h2
            id="footer-contact-title"
            className="font-display text-2xl text-primary">
            Contato
          </h2>

          <dl className="mt-5 grid gap-3">
            {serviceChannels.map((item) => (
              <div key={item.label} className="px-4 py-3">
                <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm leading-7 text-foreground/86 sm:text-[0.95rem]">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>

      <div className="border-t border-border/70 bg-background/75">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-4 sm:px-8 sm:py-5 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p className="text-xs leading-6 text-muted-foreground sm:text-sm">
            © {currentYear} Tavares &amp; Lima Advocacia Trabalhista. Todos os
            direitos reservados.
          </p>

          <nav
            aria-label="Documentos institucionais"
            className="flex items-center gap-5">
            {complianceLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs leading-6 text-muted-foreground transition-colors hover:text-foreground sm:text-sm">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
