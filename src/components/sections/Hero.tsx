"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(/images/hero-makkah.jpg)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/50 to-charcoal/30" />

      <div className="absolute inset-0 animate-gentle-zoom" />

      <div className="relative z-10 content-max-w px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-gold text-sm sm:text-base font-medium mb-4 tracking-wider uppercase"
          >
            {siteConfig.name} Hajj &amp; Umrah Services
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-off-white leading-tight tracking-tight"
          >
            Your Journey to the
            <br />
            <span className="text-gold">House of Allah</span>
            <br />
            Begins Here.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-6 text-base sm:text-lg text-off-white/80 max-w-xl leading-relaxed"
          >
            Let us care for every detail of your sacred journey — from visa to
            return — so you can focus on what truly matters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start gap-4"
          >
            <Button render={<Link href="/packages" />} className="bg-gold text-charcoal hover:bg-gold/90 px-8 text-base" size="lg">
              Book Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button render={<Link href="/packages" />} variant="outline" className="border-white/60 bg-white/10 text-white hover:bg-white/20 hover:text-white px-8 text-base backdrop-blur-sm" size="lg">
              Explore Packages
            </Button>
            <Button render={<Link href="/gallery" />} variant="ghost" className="text-white/90 hover:text-white hover:bg-white/15 px-8 text-base backdrop-blur-xs" size="lg">
              <Play className="mr-2 h-4 w-4" />
              Watch Pilgrim Stories
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
