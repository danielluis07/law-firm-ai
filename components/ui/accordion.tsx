"use client";

import * as React from "react";
import { Accordion as AccordionPrimitive } from "radix-ui";
import { CaretDownIcon } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-border/70", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 py-5 text-left text-sm leading-7 font-medium text-primary outline-none transition-all hover:text-primary/80 focus-visible:ring-3",
          className,
        )}
        {...props}>
        {children}
        <CaretDownIcon
          aria-hidden
          className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]/accordion-trigger:rotate-180"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-closed:animate-accordion-up data-open:animate-accordion-down overflow-hidden text-sm"
      {...props}>
      <div
        className={cn("pb-5 pr-9 leading-7 text-muted-foreground", className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
