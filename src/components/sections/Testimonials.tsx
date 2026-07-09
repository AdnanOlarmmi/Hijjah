"use client";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { testimonials } from "@/lib/constants";

export function Testimonials() {
  return (
    <AnimatedSection className="bg-muted/30">
      <SectionHeading
        title="What Our Pilgrims Say"
        subtitle="Real stories from real journeys. Hear from those who trusted us with their sacred experience."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.name} {...t} index={i} />
        ))}
      </div>
    </AnimatedSection>
  );
}
