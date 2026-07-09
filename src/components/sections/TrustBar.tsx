"use client";

import { StatCard } from "@/components/cards/StatCard";
import { trustStats } from "@/lib/constants";

export function TrustBar() {
  return (
    <section className="section-padding -mt-20 relative z-20">
      <div className="content-max-w px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustStats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
