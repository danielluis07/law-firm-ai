import type { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SectionCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="h-full border-border/80 bg-background/82 shadow-[0_24px_80px_-64px_oklch(0.22_0.08_240/0.45)] backdrop-blur-sm">
      <CardHeader className="gap-3">
        <span className="inline-flex w-fit rounded-full border border-border/70 bg-muted/80 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Credibilidade
        </span>
        <CardTitle className="font-display text-[1.2rem] leading-snug text-primary">
          {title}
        </CardTitle>
        <CardDescription className="text-sm leading-7 text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export function PanelCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Card className="border-border/80 bg-background/84 shadow-[0_24px_70px_-58px_oklch(0.22_0.08_240/0.42)] backdrop-blur-sm">
      <CardHeader className="gap-2">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <CardTitle className="font-display text-[1.45rem] leading-tight text-primary">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
