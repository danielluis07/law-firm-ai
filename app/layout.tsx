import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { inter } from "@/fonts";

export const metadata: Metadata = {
  title: "Tavares & Lima | Consultoria Trabalhista",
  description:
    "Consultoria trabalhista especializada em Direito do Trabalho, oferecendo soluções jurídicas personalizadas para empresas e trabalhadores. Nossa equipe de advogados experientes está pronta para ajudar com questões relacionadas a contratos, rescisões, acordos e muito mais. Conte conosco para proteger seus direitos e garantir o cumprimento das leis trabalhistas.",
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
