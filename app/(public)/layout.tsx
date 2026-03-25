import { cn } from "@/lib/utils";
import { publicDisplay } from "@/fonts";
import { Navbar } from "@/components/public/layout/navbar";
import { Footer } from "@/components/public/layout/footer";

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
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
