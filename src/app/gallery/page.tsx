"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GalleryCard } from "@/components/cards/GalleryCard";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { galleryStories } from "@/lib/constants";

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const current =
    selectedIndex !== null ? galleryStories[selectedIndex] : null;

  const next = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryStories.length);
    }
  };

  const prev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + galleryStories.length) % galleryStories.length
      );
    }
  };

  return (
    <main className="pt-24 sm:pt-28 pb-16 sm:pb-20">
      <div className="content-max-w px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Journey Stories"
          subtitle="Every pilgrimage tells a story. Browse through moments captured by our pilgrims."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {galleryStories.map((story, i) => (
            <GalleryCard
              key={story.id}
              {...story}
              index={i}
              onOpen={() => setSelectedIndex(i)}
            />
          ))}
        </div>
      </div>

      <Dialog
        open={selectedIndex !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedIndex(null);
        }}
      >
        <DialogContent className="max-w-4xl p-0 bg-background/95 backdrop-blur-xl border border-border">
          {current && (
            <div className="relative">
              <div
                className="w-full aspect-[16/10] bg-cover bg-center rounded-t-lg"
                style={{ backgroundImage: `url(${current.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-heading font-semibold text-off-white">
                  {current.title}
                </h3>
                <p className="text-sm text-off-white/80">{current.location}</p>
              </div>

              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-charcoal/50 text-off-white hover:bg-charcoal/70 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-14 top-1/2 -translate-y-1/2 p-2 rounded-full bg-charcoal/50 text-off-white hover:bg-charcoal/70 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-charcoal/50 text-off-white hover:bg-charcoal/70 transition-colors"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
