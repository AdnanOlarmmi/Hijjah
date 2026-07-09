"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl mb-12 sm:mb-16",
        centered && "mx-auto text-center",
        className
      )}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold tracking-tight text-balance",
          light ? "text-off-white" : "text-foreground"
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "mt-4 text-lg sm:text-xl leading-relaxed",
            light
              ? "text-muted-foreground/80"
              : "text-muted-foreground"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
