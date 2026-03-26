"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const trustHighlights = [
  {
    title: "Atendimento humano desde o inicio",
    text: "Voce pode apresentar sua situacao diretamente para a equipe, sem depender do chat como primeira etapa.",
  },
  {
    title: "Atuacao focada na defesa do trabalhador",
    text: "Fluxo pensado para situacoes como demissao, verbas rescisorias, FGTS, assedio e outras violacoes trabalhistas.",
  },
  {
    title: "Tratamento confidencial das informacoes",
    text: "Os dados enviados sao tratados com sigilo e utilizados para avaliacao inicial do caso.",
  },
  {
    title: "Proximo passo com mais clareza",
    text: "Quando o caso se encaixa na nossa atuacao, a equipe organiza o encaminhamento inicial com mais objetividade.",
  },
];

const issueOptions = [
  "Demissão sem justa causa",
  "Verbas rescisórias não pagas",
  "Horas extras",
  "Trabalho sem registro",
  "Assédio no trabalho",
  "Problemas com FGTS",
  "Outra questão trabalhista",
];

function InputField({
  label,
  id,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  id: string;
  type?: "text" | "email" | "tel";
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 rounded-md border border-border/75 bg-background px-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/85 focus:border-primary/45 focus:ring-4 focus:ring-primary/10"
      />
    </div>
  );
}

export default function ContatoDiretoPage() {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasSubmitted(true);
  };

  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-108 bg-[radial-gradient(80%_60%_at_50%_0%,oklch(0.95_0.03_238),transparent)]" />
      <div className="pointer-events-none absolute left-0 top-36 h-64 w-64 rounded-full bg-[oklch(0.82_0.03_241/0.28)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-12 right-0 h-80 w-80 rounded-full bg-[oklch(0.64_0.09_35/0.13)] blur-3xl" />

      <header className="relative border-b border-border/70 bg-background/92">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
            aria-label="Tavares e Lima Advocacia Trabalhista, voltar ao inicio">
            <Image
              src={logo}
              alt="Logo do escritorio Tavares e Lima"
              className="h-12 w-auto shrink-0"
            />
            <div>
              <p className="font-display text-lg font-semibold text-primary">
                Tavares &amp; Lima
              </p>
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.19em] text-muted-foreground">
                Advocacia Trabalhista
              </p>
            </div>
          </Link>

          <Button
            asChild
            variant="ghost"
            className="text-sm text-muted-foreground hover:text-foreground">
            <Link href="/">
              <ArrowLeftIcon data-icon="inline-start" />
              Voltar ao site
            </Link>
          </Button>
        </div>
      </header>

      <main className="relative">
        <section className="px-5 pb-12 pt-14 sm:px-8 sm:pb-14 sm:pt-16 lg:px-10 lg:pb-16 lg:pt-18">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent sm:text-sm">
                Contato humano direto
              </p>
              <h1 className="mt-4 text-balance font-display text-4xl leading-tight text-primary sm:text-5xl lg:text-[3.2rem]">
                Fale diretamente com nossa equipe sobre a violacao dos seus
                direitos trabalhistas
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                Se voce prefere atendimento humano desde o inicio, envie seus
                dados e um breve resumo do caso. Nossa equipe fara a analise
                inicial e podera entrar em contato pelo canal informado.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="px-7 shadow-sm">
                  <Link href="#formulario-contato">
                    Enviar meu caso
                    <ArrowRightIcon data-icon="inline-end" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-7">
                  <Link href="/triagem">Quero comecar pela triagem</Link>
                </Button>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
              {trustHighlights.map((item) => (
                <Card
                  key={item.title}
                  className="border-border/80 bg-card/88 shadow-[0_26px_80px_-64px_oklch(0.2_0.09_240/0.42)]">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg leading-6 text-primary">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="formulario-contato"
          className="px-5 pb-12 sm:px-8 sm:pb-14 lg:px-10 lg:pb-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)] lg:items-start">
              <Card className="border-border/80 bg-card/90 shadow-[0_34px_110px_-72px_oklch(0.2_0.08_238/0.44)]">
                <CardHeader>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Envie seu caso
                  </p>
                  <CardTitle className="text-3xl text-primary">
                    Solicitação de contato direto
                  </CardTitle>
                  <CardDescription className="text-sm leading-7 text-muted-foreground">
                    Preencha os campos abaixo para avaliacao inicial do seu caso
                    pela equipe juridica.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {hasSubmitted ? (
                    <div className="rounded-lg border border-border/75 bg-background/70 p-6">
                      <div className="flex items-start gap-3">
                        <CheckCircleIcon
                          className="mt-1 text-primary"
                          size={24}
                          weight="fill"
                        />
                        <div>
                          <h2 className="text-2xl font-display text-primary">
                            Sua solicitação foi recebida
                          </h2>
                          <p className="mt-3 text-sm leading-7 text-muted-foreground">
                            Nossa equipe analisara as informacoes enviadas. Se o
                            seu caso estiver dentro da nossa atuacao em defesa
                            do trabalhador, poderemos entrar em contato pelo
                            canal informado.
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Button asChild size="lg" className="px-6">
                          <Link href="/">Voltar ao início</Link>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="lg"
                          className="px-6">
                          <Link href="/triagem">Iniciar triagem do caso</Link>
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form
                      className="flex flex-col gap-5"
                      onSubmit={handleSubmit}>
                      <InputField
                        id="fullName"
                        label="Nome completo"
                        placeholder="Seu nome completo"
                        required
                      />
                      <div className="grid gap-5 sm:grid-cols-2">
                        <InputField
                          id="whatsApp"
                          label="WhatsApp"
                          type="tel"
                          placeholder="(11) 90000-0000"
                          required
                        />
                        <InputField
                          id="email"
                          label="Email"
                          type="email"
                          placeholder="voce@exemplo.com.br"
                          required
                        />
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="flex flex-col gap-2">
                          <label
                            htmlFor="employmentStatus"
                            className="text-sm font-medium text-foreground">
                            Voce ainda trabalha nesse local?
                          </label>
                          <select
                            id="employmentStatus"
                            name="employmentStatus"
                            required
                            defaultValue=""
                            className="h-11 rounded-md border border-border/75 bg-background px-3 text-sm text-foreground outline-none transition-all focus:border-primary/45 focus:ring-4 focus:ring-primary/10">
                            <option value="" disabled>
                              Selecione uma opção
                            </option>
                            <option value="yes">
                              Sim, ainda trabalho no local
                            </option>
                            <option value="no">Não, não trabalho mais</option>
                          </select>
                        </div>

                        <div className="flex flex-col gap-2">
                          <label
                            htmlFor="mainIssue"
                            className="text-sm font-medium text-foreground">
                            Tema principal
                          </label>
                          <select
                            id="mainIssue"
                            name="mainIssue"
                            required
                            defaultValue=""
                            className="h-11 rounded-md border border-border/75 bg-background px-3 text-sm text-foreground outline-none transition-all focus:border-primary/45 focus:ring-4 focus:ring-primary/10">
                            <option value="" disabled>
                              Selecione o principal tema
                            </option>
                            {issueOptions.map((issue) => (
                              <option key={issue} value={issue}>
                                {issue}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="caseSummary"
                          className="text-sm font-medium text-foreground">
                          Breve descrição do caso
                        </label>
                        <textarea
                          id="caseSummary"
                          name="caseSummary"
                          required
                          rows={6}
                          placeholder="Descreva brevemente o que aconteceu, quando ocorreu e se você possui documentos, mensagens ou testemunhas."
                          className="min-h-36 rounded-md border border-border/75 bg-background px-3 py-3 text-sm leading-7 text-foreground outline-none transition-all placeholder:text-muted-foreground/85 focus:border-primary/45 focus:ring-4 focus:ring-primary/10"
                        />
                      </div>

                      <label className="flex items-start gap-3 rounded-md border border-border/80 bg-background/60 px-3 py-3">
                        <input
                          id="agreement"
                          name="agreement"
                          type="checkbox"
                          required
                          className="mt-1 size-4 rounded border-border text-primary focus:ring-primary"
                        />
                        <span className="text-sm leading-7 text-muted-foreground">
                          Concordo em compartilhar essas informações para
                          análise inicial do caso.
                        </span>
                      </label>

                      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
                        <Button
                          type="submit"
                          size="lg"
                          className="px-7 shadow-sm">
                          Enviar meu caso
                          <ArrowRightIcon data-icon="inline-end" />
                        </Button>
                        <Button
                          asChild
                          type="button"
                          variant="outline"
                          size="lg"
                          className="px-7">
                          <Link href="/triagem">Iniciar triagem do caso</Link>
                        </Button>
                      </div>

                      <p className="text-xs leading-6 text-muted-foreground/95">
                        Este envio é um contato inicial. O preenchimento do
                        formulário não garante representação jurídica.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>

              <div className="flex flex-col gap-5">
                <Card className="border-border/80 bg-card/88">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">
                      Quando esta opcao faz mais sentido
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="flex flex-col gap-3 text-sm leading-7 text-muted-foreground">
                      <li>Voce prefere contato humano direto</li>
                      <li>Sua situacao parece urgente</li>
                      <li>Voce ja entende o problema principal</li>
                      <li>Voce nao quer passar primeiro pela triagem</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border/80 bg-card/88">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">
                      O que acontece depois
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="flex flex-col gap-3 text-sm leading-7 text-muted-foreground">
                      <li>1. Voce envia suas informacoes</li>
                      <li>2. Nossa equipe faz a analise inicial</li>
                      <li>
                        3. A equipe pode entrar em contato se o caso estiver na
                        nossa area de atuacao
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                <Card className="border-border/80 bg-card/88">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">
                      Importante
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="flex flex-col gap-3 text-sm leading-7 text-muted-foreground">
                      <li>Este e um pedido de contato inicial</li>
                      <li>O envio nao garante representacao juridica</li>
                      <li>As informacoes sao tratadas de forma confidencial</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-12 sm:px-8 sm:pb-14 lg:px-10 lg:pb-16">
          <div className="mx-auto max-w-7xl">
            <Card className="border-border/80 bg-card/84 shadow-[0_26px_90px_-72px_oklch(0.24_0.09_241/0.4)]">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">
                  Precisa de orientação direta agora?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="max-w-4xl text-base leading-8 text-muted-foreground">
                  Se o seu caso envolve uma demissao recente, verbas
                  rescisorias em aberto, assedio no ambiente de trabalho ou
                  outra situacao trabalhista urgente, voce pode enviar sua
                  solicitacao para analise humana direta.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <Card className="border-border/80 bg-[linear-gradient(140deg,oklch(0.95_0.02_236),oklch(0.92_0.03_236))]">
              <CardHeader>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Fluxo alternativo
                </p>
                <CardTitle className="text-3xl text-primary">
                  Prefere comecar com uma triagem guiada?
                </CardTitle>
                <CardDescription className="max-w-3xl text-base leading-8 text-muted-foreground">
                  Se voce quiser organizar o caso etapa por etapa antes da
                  analise humana, pode iniciar pela nossa experiencia de
                  triagem assistida.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild size="lg" className="px-7">
                  <Link href="/triagem">Iniciar triagem do caso</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
