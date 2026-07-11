"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PackageCard } from "@/components/cards/PackageCard";
import { packages } from "@/lib/constants";
const umrahPkgs = packages.filter((p) => p.category === "umrah");
const hajjPkgs = packages.filter((p) => p.category === "hajj");

const tabs = [
  { id: "umrah", label: "Umrah", count: umrahPkgs.length },
  { id: "hajj", label: "Hajj", count: hajjPkgs.length },
] as const;

type TabId = (typeof tabs)[number]["id"];

function PackageCarousel({ items }: { items: (typeof umrahPkgs) }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  const updateScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setScrollPos(el.scrollLeft);
    setMaxScroll(el.scrollWidth - el.clientWidth);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardW = el.querySelector(":scope > *")?.clientWidth ?? 320;
    const gap = 24;
    const scrollAmt = cardW + gap;
    el.scrollBy({ left: dir === "left" ? -scrollAmt : scrollAmt, behavior: "smooth" });
    setTimeout(updateScroll, 350);
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        onScroll={updateScroll}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((pkg, i) => (
          <div key={pkg.id} className="snap-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
            <PackageCard {...pkg} index={i} />
          </div>
        ))}
      </div>

      {items.length > 3 && (
        <>
          <button
            onClick={() => scroll("left")}
            disabled={scrollPos <= 0}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center transition-opacity",
              scrollPos <= 0 ? "opacity-0 pointer-events-none" : "opacity-100 hover:bg-muted"
            )}
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={scrollPos >= maxScroll - 1}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center transition-opacity",
              scrollPos >= maxScroll - 1 ? "opacity-0 pointer-events-none" : "opacity-100 hover:bg-muted"
            )}
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}
    </div>
  );
}

export function PackagesGrid() {
  const [activeTab, setActiveTab] = useState<TabId>("umrah");

  return (
    <div className="content-max-w px-4 sm:px-6 lg:px-8">
      <SectionHeading
        title="Our Packages"
        subtitle="Choose the package that best suits your needs. Every detail is taken care of."
      />

      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-xl border border-border bg-card p-1.5 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
              <span
                className={cn(
                  "ml-2 inline-flex items-center justify-center h-5 min-w-5 px-1.5 text-xs rounded-full",
                  activeTab === tab.id
                    ? "bg-primary-foreground/15 text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Umrah Section */}
      {activeTab === "umrah" && (
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-primary/30" />
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                Sacred Journey
              </span>
              <span className="h-px w-8 bg-primary/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
              Umrah Packages
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Choose from our carefully planned Umrah packages throughout the year.
            </p>
          </motion.div>

          <PackageCarousel items={umrahPkgs} />
        </section>
      )}

      {/* Hajj Section */}
      {activeTab === "hajj" && (
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-gold/40" />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">
                Pillar of Islam
              </span>
              <span className="h-px w-8 bg-gold/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
              Hajj Package
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Fulfill your obligation with our comprehensive Hajj package.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <PackageCard {...hajjPkgs[0]} index={0} />
            </div>
          </div>
        </section>
      )}

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
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
