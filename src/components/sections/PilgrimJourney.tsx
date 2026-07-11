"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

const journeySteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "Speak with our team to choose the package that best suits your needs.",
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
  },
  {
    step: "02",
    title: "Preparation",
    description:
      "We assist with documentation, visa processing, travel advice, and pre-departure guidance.",
    color: "from-gold/20 to-gold/5",
    border: "border-gold/20",
  },
  {
    step: "03",
    title: "Travel",
    description:
      "Travel confidently with coordinated flights, accommodation, and airport assistance.",
    color: "from-primary/20 to-primary/5",
    border: "border-primary/20",
  },
  {
    step: "04",
    title: "Pilgrimage",
    description:
      "Focus on your worship while we help coordinate your accommodation and logistics.",
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
  },
  {
    step: "05",
    title: "Return",
    description:
      "Return home with unforgettable memories and the satisfaction of completing your sacred journey.",
    color: "from-gold/20 to-gold/5",
    border: "border-gold/20",
  },
];

export function PilgrimJourney() {
  return (
    <AnimatedSection className="bg-muted/30">
      <SectionHeading
        title="Your Pilgrim Journey"
        subtitle="From dreaming of the Kaaba to returning home transformed — we walk with you every step of the way."
      />

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden sm:block" />

        <div className="space-y-8 sm:space-y-12">
          {journeySteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative pl-16 sm:pl-20"
            >
              <div
                className={cn(
                  "absolute left-4 sm:left-5 top-1 h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 bg-background flex items-center justify-center text-xs sm:text-sm font-bold text-foreground",
                  step.border
                )}
              >
                {step.step}
              </div>

              <div
                className={cn(
                  "rounded-2xl border p-6 sm:p-8 bg-gradient-to-br",
                  step.color,
                  step.border
                )}
              >
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
