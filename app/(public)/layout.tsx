import { cn } from "@/lib/utils";
import { publicDisplay } from "@/fonts";
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn("public-theme min-h-screen", publicDisplay.variable)}>
      <main>{children}</main>
    </div>
  );
}
