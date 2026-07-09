"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { faqs } from "@/lib/constants";

export function FAQ() {
  return (
    <AnimatedSection id="faq">
      <SectionHeading
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about your pilgrimage journey."
      />

      <div className="max-w-3xl mx-auto">
        <Accordion className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card px-6"
            >
              <AccordionTrigger className="text-left text-sm sm:text-base font-medium text-foreground hover:text-primary transition-colors py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </AnimatedSection>
  );
}
