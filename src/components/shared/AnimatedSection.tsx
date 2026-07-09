"use client";

import { motion } from "framer-motion";
import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { sectionReveal } from "@/lib/animations";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(
  ({ children, className, id }, ref) => {
    return (
      <motion.section
        id={id}
        ref={ref}
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={cn("section-padding", className)}
      >
        <div className="content-max-w">{children}</div>
      </motion.section>
    );
  }
);

AnimatedSection.displayName = "AnimatedSection";
