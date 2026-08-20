"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const HERO_STAGGER_EASE = [0.32, 0.72, 0, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 w-full min-h-dvh flex flex-col justify-end overflow-hidden text-paper-white pb-12 sm:pb-16 md:pb-20"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 z-0 gpu-accelerated"
        style={{ y: imageY, scale: imageScale }}
      >
        <Image
          src="/images/hero-dhaka-luxury.jpg"
          alt="Avenue Constructions Premier Single-Unit Architecture in Dhaka"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-100 contrast-[1.02]"
        />
      </motion.div>

      {/* Deeper gradient for text contrast */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-linear-to-t from-black/90 via-black/50 to-transparent pointer-events-none z-1" />
      <div className="absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-black/30 to-transparent pointer-events-none z-1" />

      {/* Hero Content with cascading reveal */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col gap-6"
        style={{ opacity: contentOpacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Column: Bold Headline */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: HERO_STAGGER_EASE }}
              className="font-mono text-xs uppercase tracking-[0.25em] text-champagne font-semibold drop-shadow-sm"
            >
              Dhaka Luxury Real Estate &middot; Single-Unit Residences
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: HERO_STAGGER_EASE }}
              className="font-serif text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.98] tracking-[-0.02em] text-paper-white font-medium drop-shadow-md"
            >
              Setting Standards in Luxury Living.
            </motion.h1>
          </div>

          {/* Right Column: Summary + CTAs */}
          <div className="lg:col-span-5 flex flex-col gap-5 lg:pl-4">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: HERO_STAGGER_EASE }}
              className="text-[15px] sm:text-[16px] leading-[1.65] text-paper-white/95 font-normal drop-shadow-sm"
            >
              Avenue Constructions Ltd engineers single-unit luxury residential landmarks in Bashundhara R/A, Gulshan, and Aftabnagar &mdash; delivering 100% RAJUK-sanctioned architectural privacy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: HERO_STAGGER_EASE }}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <Link
                href="/contact"
                className="group pill-btn inline-flex items-center gap-3 pl-6 pr-2.5 py-3 text-xs uppercase font-mono tracking-wider bg-paper-white text-graphite-ink hover:bg-linen-cream transition-all shadow-xl active:scale-[0.98]"
              >
                <span>Make An Appointment</span>
                <span className="flex size-6 items-center justify-center rounded-full bg-obsidian text-paper-white text-[11px] transition-transform duration-300 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </Link>
              <Link
                href="#residences"
                className="pill-btn inline-flex items-center justify-center px-6 py-3 text-xs uppercase font-mono tracking-wider border border-paper-white/60 bg-black/20 text-paper-white hover:bg-paper-white hover:text-graphite-ink active:scale-[0.98] transition-all backdrop-blur-md"
              >
                Explore Residences
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="hidden md:flex flex-col items-center gap-2 pt-8"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-paper-white/50">
            Scroll
          </span>
          <div className="scroll-indicator flex flex-col items-center">
            <div className="w-px h-8 bg-linear-to-b from-paper-white/60 to-transparent" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
