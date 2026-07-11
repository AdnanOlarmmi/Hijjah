"use client";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { testimonials } from "@/lib/constants";

export function Testimonials() {
  return (
    <AnimatedSection className="bg-muted/30">
      <SectionHeading
        title="Why Pilgrims Choose Hijjah"
        subtitle="Real stories from pilgrims who trusted us with their sacred journey."
      />

      {testimonials.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} index={i} />
          ))}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto text-center p-8 rounded-2xl border border-dashed border-border bg-card/50">
          <p className="text-sm text-muted-foreground">
            Genuine customer testimonials coming soon.
          </p>
        </div>
      )}
    </AnimatedSection>
  );
}
