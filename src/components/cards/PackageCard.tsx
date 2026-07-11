"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PackageCardProps {
  slug: string;
  title: string;
  price: number;
  earlyBirdPrice?: number | null;
  earlyBirdDiscount?: number | null;
  duration: string;
  hotel: string;
  flight: string;
  meals: string;
  visa: boolean;
  transport: string;
  scholar: boolean;
  remainingSeats: number;
  popular?: boolean;
  index?: number;
  currency?: string;
  isDeposit?: boolean;
}

export function PackageCard({
  slug,
  title,
  price,
  earlyBirdPrice,
  earlyBirdDiscount,
  duration,
  hotel,
  flight,
  meals,
  visa,
  transport,
  scholar,
  remainingSeats,
  popular,
  index = 0,
  currency = "$",
  isDeposit,
}: PackageCardProps) {
  const features = [
    `${duration} Duration`,
    `${hotel} Hotel`,
    flight,
    meals,
    visa ? "Visa Included" : null,
    `${transport} Transport`,
    scholar ? "Scholar Guided" : null,
  ].filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
      className={cn(
        "relative rounded-2xl border p-6 sm:p-8 bg-card transition-shadow duration-300",
        popular
          ? "border-primary shadow-lg shadow-primary/5"
          : "border-border shadow-sm hover:shadow-lg"
      )}
    >
      {popular && (
        <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground px-4 py-1">
          Most Popular
        </Badge>
      )}

      <div className="mb-4">
        <div className="flex items-baseline gap-1">
          <span className="text-sm text-muted-foreground">
            {isDeposit ? "Deposit" : "from"}
          </span>
          <span className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
            {currency}{price.toLocaleString()}
          </span>
        </div>
        {earlyBirdPrice && (
          <p className="text-sm text-success mt-1">
            Early bird: {currency}{earlyBirdPrice.toLocaleString()}
            {earlyBirdDiscount && (
              <span className="text-muted-foreground ml-1">
                (save {currency}{earlyBirdDiscount.toLocaleString()})
              </span>
            )}
          </p>
        )}
      </div>

      <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
        {title}
      </h3>

      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature as string} className="flex items-center gap-3 text-sm">
            <Check className="h-4 w-4 text-primary shrink-0" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Users className="h-4 w-4" />
        <span>
          {remainingSeats > 0
            ? `${remainingSeats} seats remaining`
            : "Fully booked"}
        </span>
      </div>

      <div className="space-y-3">
        <Button
          render={<Link href={`/packages/${slug}`} />}
          className="w-full"
          variant={popular ? "default" : "outline"}
        >
          Book Now
        </Button>
        <Button render={<Link href="/packages" />} variant="ghost" className="w-full text-sm text-muted-foreground">
          Compare Packages
        </Button>
      </div>
    </motion.div>
  );
}
