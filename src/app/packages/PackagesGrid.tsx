"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PackageCard } from "@/components/cards/PackageCard";
import { packages } from "@/lib/constants";

export function PackagesGrid() {
  return (
    <div className="content-max-w px-4 sm:px-6 lg:px-8">
      <SectionHeading
        title="Our Packages"
        subtitle="Choose the package that best suits your needs. Every detail is taken care of."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {packages.map((pkg, i) => (
          <PackageCard key={pkg.id} {...pkg} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 text-center"
      >
        <p className="text-muted-foreground mb-2">
          Need a custom package? We offer tailored journeys for groups and families.
        </p>
        <a
          href="/contact"
          className="text-primary font-medium hover:text-primary/80 transition-colors underline underline-offset-4"
        >
          Contact us for a personalized quote
        </a>
      </motion.div>
    </div>
  );
}
