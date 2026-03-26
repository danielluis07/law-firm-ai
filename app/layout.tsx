import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { inter } from "@/fonts";

export const metadata: Metadata = {
  title: "Tavares & Lima | Advocacia Trabalhista",
  description:
    "Advocacia trabalhista voltada à defesa do trabalhador, com atuação em casos de demissão sem justa causa, verbas rescisórias, horas extras, FGTS, assédio e outras violações de direitos no trabalho.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn("h-full antialiased font-sans", inter.variable)}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
