"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
  index?: number;
}

export function TestimonialCard({
  name,
  location,
  rating,
  text,
  image,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8 relative"
    >
      <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />

      <div className="flex items-center gap-4 mb-4">
        <div className="h-12 w-12 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            role="img"
            aria-label={name}
          />
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </div>

      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < rating
                ? "fill-gold text-gold"
                : "fill-muted text-muted"
            )}
          />
        ))}
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">
        &ldquo;{text}&rdquo;
      </p>
    </motion.div>
  );
}
