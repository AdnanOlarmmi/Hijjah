"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { siteConfig } from "@/lib/constants";

export function About() {
  return (
    <AnimatedSection id="about">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <SectionHeading
            title="More Than a Journey. A Calling."
            subtitle={`For over 15 years, ${siteConfig.name} has been honored to serve pilgrims from around the world, providing premium Hajj and Umrah experiences rooted in care, dignity, and faith.`}
            centered={false}
            className="mb-0 text-left"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground leading-relaxed mt-6"
          >
            We believe that every pilgrim deserves to embark on this sacred
            journey with peace of mind. From the moment you reach out to us
            until your safe return home, our team handles every detail with
            meticulous care and profound respect for the spiritual nature of
            your pilgrimage.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground leading-relaxed mt-4"
          >
            Licensed by the Ministry of Hajj and Umrah, partnered with premier
            hotels and airlines, and guided by Islamic scholars — we exist to
            make your journey seamless, comfortable, and spiritually fulfilling.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(/images/about-haram.jpg)",
            }}
          />
          <div className="absolute inset-0 bg-primary/10" />
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
