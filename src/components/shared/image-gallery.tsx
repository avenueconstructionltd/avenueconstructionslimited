"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import type { GalleryImage } from "@/lib/properties-constant";

interface ImageGalleryProps {
  images: GalleryImage[];
  /** Accessible label for the gallery region. */
  label?: string;
}

export function ImageGallery({ images, label }: ImageGalleryProps) {
  const [viewMode, setViewMode] = useState<"grid" | "slideshow">("grid");
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const total = images.length;

  const goTo = useCallback(
    (next: number) => {
      const wrapped = (next + total) % total;
      setDirection(next > activeIndex ? 1 : -1);
      setActiveIndex(wrapped);
    },
    [activeIndex, total],
  );

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  // Keyboard navigation for accessibility and lightbox
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxOpen(false);
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goPrev, goNext]);

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, scale: 1.04, x: dir * 24 }),
    center: { opacity: 1, scale: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, scale: 1.02, x: dir * -24 }),
  };

  return (
    <div
      className="flex flex-col gap-6"
      aria-label={label ?? "Project gallery"}
    >
      {/* Header controls: Grid Collage vs Slideshow toggle */}
      <div className="flex items-center justify-between border-b border-black/5 pb-4">
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-accent">
            Visual Record
          </span>
          <span className="text-text-secondary/40 text-xs">•</span>
          <span className="text-xs font-mono text-text-secondary">
            {total} 3D Architectural Renders
          </span>
        </div>

        <div className="flex items-center gap-1 bg-black/5 p-1 rounded-xl border border-black/5">
          <button
            type="button"
            onClick={() => setViewMode("grid")}
            className={`px-3 py-1.5 rounded-lg font-mono text-[10px] uppercase tracking-wider transition-all duration-300 ${
              viewMode === "grid"
                ? "bg-surface text-text-primary shadow-xs font-bold"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            [⊞ Grid Collage]
          </button>
          <button
            type="button"
            onClick={() => setViewMode("slideshow")}
            className={`px-3 py-1.5 rounded-lg font-mono text-[10px] uppercase tracking-wider transition-all duration-300 ${
              viewMode === "slideshow"
                ? "bg-surface text-text-primary shadow-xs font-bold"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            [⬈ Slideshow]
          </button>
        </div>
      </div>

      {/* VIEW MODE 1: EDITORIAL GRID COLLAGE */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {images.map((image, index) => {
            // Asymmetric layout logic for dynamic architectural collage
            const isLarge = index % 4 === 0 || index % 4 === 3;
            const gridClass = isLarge
              ? "md:col-span-7 aspect-16/10"
              : "md:col-span-5 aspect-4/3";

            return (
              <motion.div
                key={image.src + index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => openLightbox(index)}
                className={`group relative ${gridClass} rounded-2xl overflow-hidden cursor-pointer border border-black/5 shadow-xs bg-surface`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-text-primary/80 via-text-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-md border border-white/20 font-mono text-[9px] uppercase tracking-widest text-white/90">
                    Ref 0{index + 1} · 3D Render
                  </span>
                </div>

                {/* Bottom Caption & Expand Icon */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex flex-col gap-1 max-w-[80%]">
                    <span className="font-serif text-sm md:text-base text-white font-light tracking-wide">
                      {image.caption}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-accent">
                      Click to expand full resolution
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center font-mono text-xs">
                    ⤢
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* VIEW MODE 2: INTERACTIVE SLIDESHOW */}
      {viewMode === "slideshow" && (
        <div className="flex flex-col gap-5">
          <div className="double-bezel-outer">
            <div className="double-bezel-inner relative aspect-16/10 w-full overflow-hidden">
              <AnimatePresence custom={direction} mode="wait" initial={false}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute inset-0 cursor-pointer"
                  onClick={() => openLightbox(activeIndex)}
                >
                  <Image
                    src={images[activeIndex].src}
                    alt={images[activeIndex].alt}
                    fill
                    priority={activeIndex === 0}
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-text-primary/70 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 md:p-8">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-white/90 font-light max-w-[60ch]">
                      {images[activeIndex].caption}
                    </span>
                    <span className="font-mono text-xs text-white/80 tracking-wider">
                      {String(activeIndex + 1).padStart(2, "0")} /{" "}
                      {String(total).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next controls */}
              {total > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous image"
                    className="group absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-text-primary transition-all duration-300 z-20"
                  >
                    <span aria-hidden className="text-lg">
                      &larr;
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next image"
                    className="group absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-text-primary transition-all duration-300 z-20"
                  >
                    <span aria-hidden className="text-lg">
                      &rarr;
                    </span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Thumbnail strip */}
          {total > 1 && (
            <div className="grid grid-cols-4 gap-3 md:gap-4">
              {images.map((image, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={image.src + index}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`View image ${index + 1}: ${image.alt}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative aspect-4/3 rounded-xl overflow-hidden border transition-all duration-400 ${
                      isActive
                        ? "border-accent ring-1 ring-accent/40"
                        : "border-black/5 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 25vw, 220px"
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* LIGHTBOX MODAL OVERLAY */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-6 md:p-12"
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between z-20">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  3D Render Lightbox Inspection
                </span>
                <span className="text-white/30">•</span>
                <span className="font-mono text-xs text-white/70">
                  {activeIndex + 1} / {total}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider border border-white/20 transition-all"
              >
                [✕ Close ESC]
              </button>
            </div>

            {/* Main Lightbox Stage */}
            <div className="relative flex-1 my-6 w-full flex items-center justify-center">
              <div className="relative w-full h-full max-w-6xl max-h-[80vh]">
                <Image
                  src={images[activeIndex].src}
                  alt={images[activeIndex].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {/* Navigation Arrows */}
              {total > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center transition-all text-xl"
                  >
                    &larr;
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center transition-all text-xl"
                  >
                    &rarr;
                  </button>
                </>
              )}
            </div>

            {/* Bottom Caption Bar */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-t border-white/10 pt-4 gap-4 z-20">
              <div className="flex flex-col gap-1">
                <h4 className="font-serif text-lg text-white font-light">
                  {images[activeIndex].caption}
                </h4>
                <p className="text-xs text-white/60 font-light">
                  {images[activeIndex].alt}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? "w-8 bg-accent"
                        : "w-2 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
