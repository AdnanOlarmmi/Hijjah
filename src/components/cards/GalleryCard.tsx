"use client";

import { motion } from "framer-motion";
import { Expand } from "lucide-react";

interface GalleryCardProps {
  title: string;
  location: string;
  image: string;
  category: string;
  index?: number;
  onOpen: () => void;
}

export function GalleryCard({
  title,
  location,
  image,
  category,
  index = 0,
  onOpen,
}: GalleryCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      onClick={onOpen}
      className="group relative rounded-xl overflow-hidden aspect-[4/3] text-left"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />

      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
        <span className="inline-block text-xs font-medium text-gold bg-charcoal/60 px-2.5 py-1 rounded-full mb-2">
          {category}
        </span>
        <h3 className="text-base sm:text-lg font-semibold text-off-white">
          {title}
        </h3>
        <p className="text-sm text-off-white/70">{location}</p>
      </div>

      <div className="absolute top-4 right-4 p-2 rounded-full bg-charcoal/50 text-off-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Expand className="h-4 w-4" />
      </div>
    </motion.button>
  );
}
