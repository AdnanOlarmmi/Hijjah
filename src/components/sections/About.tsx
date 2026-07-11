"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function About() {
  return (
    <AnimatedSection id="about">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <SectionHeading
            title="More Than a Trip — A Sacred Responsibility"
            subtitle=""
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
            At Hijjah Hajj & Umrah Services, we believe that performing Hajj or
            Umrah is one of the most important journeys in a Muslim's life. Our
            mission is to make that journey as smooth, comfortable, and
            spiritually fulfilling as possible.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground leading-relaxed mt-4"
          >
            For over 2 years, we have been assisting pilgrims with every stage
            of their journey — from visa assistance and flight bookings to
            accommodation, transportation, and travel coordination.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground leading-relaxed mt-4"
          >
            Having successfully assisted over 20 pilgrims, we remain committed
            to serving every client with honesty, professionalism, and genuine
            care.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground leading-relaxed mt-4"
          >
            Whether you are embarking on your first Umrah or preparing for Hajj,
            our dedicated team is here to help you travel with confidence and
            peace of mind.
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
