"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatCard({ value, suffix, label, className }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50",
        className
      )}
    >
      <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary">
        <AnimatedCounter value={value} suffix={suffix} />
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </motion.div>
  );
}
