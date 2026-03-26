"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/public/layout/navbar";
import { Footer } from "@/components/public/layout/footer";

type PublicShellProps = {
  children: React.ReactNode;
};

export function PublicShell({ children }: PublicShellProps) {
  const pathname = usePathname();
  const isFocusedIntakeRoute =
    pathname === "/triagem" || pathname === "/contato-direto";

  return (
    <>
      {isFocusedIntakeRoute ? null : <Navbar />}
      <main className="flex-1">{children}</main>
      {isFocusedIntakeRoute ? null : <Footer />}
    </>
  );
}
