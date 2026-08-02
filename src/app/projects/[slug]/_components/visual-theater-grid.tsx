"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import type { GalleryImage } from "@/lib/properties-constant";

interface VisualTheaterGridProps {
  images: GalleryImage[];
  projectName: string;
}

export function VisualTheaterGrid({ images, projectName }: VisualTheaterGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const total = images.length;

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + total) % total : null));
  }, [total]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % total : null));
  }, [total]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  return (
    <>
      {/* Equal 3-Column Architectural Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
        {images.map((img, idx) => (
          <motion.div
            key={img.src + idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
            onClick={() => setSelectedIndex(idx)}
            className="group relative aspect-4/3 rounded-2xl overflow-hidden cursor-pointer bg-surface shadow-xs hover:shadow-xl transition-all duration-500"
          >
            <div className="relative w-full h-full">
              <Image
                src={img.src}
                alt={img.alt || `${projectName} render ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-100"
              />

              {/* Reference Tag Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 font-mono text-[9px] uppercase tracking-widest text-white/90 shadow-xs">
                  Ref {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Dark Gradient & Caption Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                <div className="flex items-end justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-serif text-sm md:text-base text-white font-light tracking-wide leading-tight">
                      {img.caption || projectName}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-accent">
                      Click to view full resolution
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center font-mono text-xs shrink-0">
                    ⤢
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-6 md:p-12"
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between text-white border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                  Visual Theater
                </span>
                <span className="text-white/30">•</span>
                <span className="font-mono text-xs text-white/80">
                  {projectName}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-white/60">
                  {String(selectedIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedIndex(null)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white font-mono text-sm"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Main Lightbox Image View */}
            <div className="relative flex-1 my-6 flex items-center justify-center overflow-hidden">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full max-w-6xl max-h-[75vh]"
              >
                <Image
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].alt || `${projectName} full render`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Navigation Arrows */}
              {total > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-white/20 text-white font-mono text-lg flex items-center justify-center hover:bg-accent hover:border-accent transition-all shadow-lg"
                    aria-label="Previous image"
                  >
                    &larr;
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-white/20 text-white font-mono text-lg flex items-center justify-center hover:bg-accent hover:border-accent transition-all shadow-lg"
                    aria-label="Next image"
                  >
                    &rarr;
                  </button>
                </>
              )}
            </div>

            {/* Modal Bottom Caption */}
            <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-white">
              <p className="font-serif text-sm md:text-lg font-light text-white/90">
                {images[selectedIndex].caption || `${projectName} Architectural Detail`}
              </p>
              <span className="font-mono text-[10px] uppercase tracking-widest text-text-secondary/60">
                Use &larr; &rarr; keys or ESC to exit
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
