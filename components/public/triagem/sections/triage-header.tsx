import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import { Button } from "@/components/ui/button";

export function TriageHeader() {
  return (
    <header className="relative border-b border-border/70 bg-background/88 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 transition-opacity hover:opacity-90"
          aria-label="Tavares e Lima Advocacia Trabalhista, voltar ao inicio">
          <Image
            src={logo}
            alt="Logo do escritorio Tavares e Lima"
            className="h-12 w-auto shrink-0"
          />
          <div className="min-w-0">
            <p className="truncate font-display text-lg font-semibold text-primary">
              Tavares &amp; Lima
            </p>
            <p className="truncate text-[0.68rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Advocacia Trabalhista
            </p>
          </div>
        </Link>

        <Button asChild variant="outline" size="sm" className="px-4">
          <Link href="/">Voltar ao site</Link>
        </Button>
      </div>
    </header>
  );
}
