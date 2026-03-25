import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/images/hero.png";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[1.25rem] border border-border/80 bg-card/70 shadow-[0_30px_90px_-56px_oklch(0.22_0.09_240/0.42)]">
          <div className="grid items-stretch lg:grid-cols-[minmax(0,1.08fr)_minmax(25rem,0.92fr)]">
            <div className="relative min-h-88 border-b border-border/70 bg-secondary/20 sm:min-h-120 lg:min-h-168 lg:border-b-0">
              <Image
                src={heroImage}
                alt="Retrato profissional da consultora da Tavares e Lima Consultoria Trabalhista"
                fill
                priority
                placeholder="blur"
                sizes="(max-width: 1023px) 100vw, 55vw"
                className="object-cover object-[18%_center]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/10 via-transparent to-transparent" />
              <div className="absolute inset-y-0 right-0 hidden w-28 bg-linear-to-r from-transparent to-card/55 lg:block" />
            </div>

            <div className="relative flex items-center bg-card/88 px-6 py-10 sm:px-10 sm:py-12 lg:-ml-14 lg:border-l lg:border-border/70 lg:pl-12 xl:pl-16">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent sm:text-sm">
                  Consultoria Trabalhista para Empresas
                </p>

                <h1
                  id="hero-title"
                  className="mt-5 max-w-3xl font-display text-4xl leading-[1.02] text-primary sm:text-5xl lg:text-[3.6rem]">
                  Segurança jurídica trabalhista para empresas que precisam
                  decidir com firmeza.
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  A Tavares &amp; Lima Consultoria Trabalhista orienta empresas
                  na condução de decisões mais seguras, na redução de riscos
                  trabalhistas e na construção de rotinas com maior clareza
                  jurídica.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="px-6 shadow-sm">
                    <Link href="/#contato">Fale com um especialista</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="px-6">
                    <Link href="/#sobre">Conheça a consultoria</Link>
                  </Button>
                </div>

                <div className="mt-8 border-l-2 border-accent/70 pl-4">
                  <p className="text-sm leading-7 text-muted-foreground sm:text-[0.95rem]">
                    Atuação consultiva voltada à prevenção de passivos, revisão
                    de práticas internas e suporte estratégico à gestão de
                    pessoas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
