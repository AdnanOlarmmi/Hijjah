"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Headphones,
  Star,
  BookOpen,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { whyChooseUs, siteConfig } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="h-6 w-6" />,
  Headphones: <Headphones className="h-6 w-6" />,
  Star: <Star className="h-6 w-6" />,
  BookOpen: <BookOpen className="h-6 w-6" />,
};

export function WhyChooseUs() {
  return (
    <AnimatedSection className="bg-muted/30">
      <SectionHeading
        title={`Why Choose ${siteConfig.name}?`}
        subtitle=""
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {whyChooseUs.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-center p-6 sm:p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow duration-300"
          >
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 text-primary mb-5">
              {iconMap[item.icon]}
            </div>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
