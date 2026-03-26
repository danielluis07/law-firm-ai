"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import { ListIcon } from "@phosphor-icons/react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", label: "Início" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#areas-de-atuacao", label: "Áreas de Atuação" },
  { href: "/#diferenciais", label: "Diferenciais" },
  { href: "/#contato", label: "Contato" },
];

const desktopLinkClassName =
  "text-sm font-medium tracking-[0.01em] text-muted-foreground transition-colors hover:text-foreground";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/92 supports-backdrop-filter:backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center gap-6 px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 transition-opacity hover:opacity-90"
          aria-label="Tavares e Lima Consultoria Trabalhista, voltar ao início">
          <Image
            src={logo}
            alt="Logo da Tavares e Lima Consultoria Trabalhista"
            className="h-18 w-auto shrink-0"
          />
          <div className="min-w-0">
            <p className="truncate font-display text-lg font-semibold text-primary">
              Tavares &amp; Lima
            </p>
            <p className="truncate text-[0.72rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Consultoria Trabalhista
            </p>
          </div>
        </Link>

        <nav
          aria-label="Navegação principal"
          className="ml-auto hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={desktopLinkClassName}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="lg" className="px-5 shadow-sm">
            <Link href="/contato-direto">Fale com um especialista</Link>
          </Button>
        </div>

        <div className="ml-auto lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-border/80 bg-background/90 shadow-xs"
                aria-label="Abrir menu principal">
                <ListIcon />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[min(88vw,24rem)] border-border/80 bg-background p-0"
              showCloseButton>
              <SheetHeader className="sr-only">
                <SheetTitle>Navegação principal</SheetTitle>
                <SheetDescription>
                  Acesse as principais seções do site.
                </SheetDescription>
              </SheetHeader>

              <div className="flex h-full flex-col">
                <div className="border-b border-border/70 px-6 py-6 pr-14">
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className="flex items-center gap-3"
                      aria-label="Tavares e Lima Consultoria Trabalhista, voltar ao início">
                      <Image
                        src={logo}
                        alt="Logo da Tavares e Lima Consultoria Trabalhista"
                        className="h-10 w-auto shrink-0"
                      />
                      <div>
                        <p className="font-display text-base font-semibold text-primary">
                          Tavares &amp; Lima
                        </p>
                        <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                          Consultoria Trabalhista
                        </p>
                      </div>
                    </Link>
                  </SheetClose>
                </div>

                <nav
                  aria-label="Navegação mobile"
                  className="flex flex-1 flex-col px-3 py-4">
                  {navigation.map((item) => (
                    <SheetClose key={item.href} asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground",
                        )}>
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                <div className="border-t border-border/70 p-4">
                  <SheetClose asChild>
                    <Link
                      href="/contato-direto"
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "w-full shadow-sm",
                      )}>
                      Fale com um especialista
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
