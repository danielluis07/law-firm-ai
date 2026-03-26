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
    title: "Revisão humana desde o início",
    text: "Sua solicitação pode ser analisada por uma pessoa da equipe, sem etapa inicial de chatbot.",
  },
  {
    title: "Atuação focada em direito do trabalho",
    text: "Fluxo pensado para situações como demissão, verbas rescisórias, FGTS e assédio.",
  },
  {
    title: "Tratamento confidencial das informações",
    text: "Os dados enviados são tratados com sigilo e utilizados para avaliação inicial do caso.",
  },
  {
    title: "Contato estruturado quando aplicável",
    text: "Quando o caso se encaixa na atuação da equipe, o próximo passo pode ser organizado por um especialista.",
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
            aria-label="Tavares e Lima Consultoria Trabalhista, voltar ao início">
            <Image
              src={logo}
              alt="Logo da Tavares e Lima Consultoria Trabalhista"
              className="h-12 w-auto shrink-0"
            />
            <div>
              <p className="font-display text-lg font-semibold text-primary">
                Tavares &amp; Lima
              </p>
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.19em] text-muted-foreground">
                Consultoria Trabalhista
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
                Fale diretamente com um especialista sobre seu caso trabalhista
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                Se você prefere atendimento humano desde o início, envie seus
                dados e um breve resumo do caso. Nossa equipe fará a análise
                inicial e poderá entrar em contato pelo canal informado.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="px-7 shadow-sm">
                  <Link href="#formulario-contato">
                    Enviar meu caso
                    <ArrowRightIcon data-icon="inline-end" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-7">
                  <Link href="/triagem">Iniciar triagem com IA</Link>
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
                    Preencha os campos abaixo para avaliação inicial do seu caso
                    pela equipe.
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
                            Nossa equipe analisará as informações enviadas. Se o
                            seu caso estiver dentro da nossa área de atuação
                            trabalhista, poderemos entrar em contato pelo canal
                            informado.
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
                          <Link href="/triagem">Iniciar triagem com IA</Link>
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
                            Você ainda trabalha na empresa?
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
                              Sim, ainda trabalho na empresa
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
                          <Link href="/triagem">Iniciar triagem com IA</Link>
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
                      Quando esta opção é melhor
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="flex flex-col gap-3 text-sm leading-7 text-muted-foreground">
                      <li>Você prefere contato humano direto</li>
                      <li>Sua situação parece urgente</li>
                      <li>Você já entende o problema principal</li>
                      <li>Você não quer passar primeiro pela triagem com IA</li>
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
                      <li>1. Você envia suas informações</li>
                      <li>2. Nossa equipe faz a análise inicial</li>
                      <li>
                        3. Um especialista pode entrar em contato se o caso
                        estiver na nossa área de atuação
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
                      <li>Este é um pedido de contato inicial</li>
                      <li>O envio não garante representação jurídica</li>
                      <li>As informações são tratadas de forma confidencial</li>
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
                  Se o seu caso envolve uma demissão recente, verbas rescisórias
                  em aberto, assédio no ambiente de trabalho ou outra situação
                  trabalhista urgente, você pode enviar sua solicitação para
                  análise humana direta.
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
                  Prefere começar com uma triagem guiada?
                </CardTitle>
                <CardDescription className="max-w-3xl text-base leading-8 text-muted-foreground">
                  Se você quiser organizar seu caso etapa por etapa antes da
                  análise humana, pode iniciar pela nossa experiência de triagem
                  assistida por IA.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild size="lg" className="px-7">
                  <Link href="/triagem">Iniciar triagem com IA</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
