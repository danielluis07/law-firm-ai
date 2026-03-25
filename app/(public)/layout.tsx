import { cn } from "@/lib/utils";
import { publicDisplay } from "@/fonts";
import { PublicShell } from "@/components/public/layout/public-shell";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "public-theme flex min-h-screen flex-col",
        publicDisplay.variable,
      )}>
      <PublicShell>{children}</PublicShell>
    </div>
  );
}
