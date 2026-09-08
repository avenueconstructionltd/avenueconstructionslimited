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
      className="relative z-10 w-full min-h-dvh flex flex-col justify-end overflow-hidden text-paper-white pb-10 sm:pb-14 md:pb-18"
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
          className="rounded-none object-cover object-center brightness-100 contrast-[1.02]"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/34 pointer-events-none z-1" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/82 to-transparent pointer-events-none z-1" />

      {/* Hero Content with cascading reveal */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col gap-9"
        style={{ opacity: contentOpacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-end border-t border-paper-white/35 pt-7">
          {/* Left Column: Bold Headline */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: HERO_STAGGER_EASE }}
              className="font-sans text-[11px] uppercase tracking-[0.28em] text-paper-white/72"
            >
              Dhaka Luxury Real Estate &middot; Single-Unit Residences
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: HERO_STAGGER_EASE }}
              className="font-serif text-[clamp(3.6rem,8.2vw,7.4rem)] leading-[0.82] tracking-[-0.035em] text-paper-white font-normal"
            >
              Private living,<br /><span className="italic font-normal">drawn in light.</span>
            </motion.h1>
          </div>

          {/* Right Column: Summary + CTAs */}
          <div className="lg:col-span-4 flex flex-col gap-7 lg:pb-1">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: HERO_STAGGER_EASE }}
              className="text-[14px] sm:text-[15px] leading-[1.8] text-paper-white/76 font-normal max-w-[38ch]"
            >
              Avenue Constructions Ltd engineers single-unit luxury residential landmarks in Bashundhara R/A, Gulshan, and Aftabnagar &mdash; delivering 100% RAJUK-sanctioned architectural privacy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: HERO_STAGGER_EASE }}
              className="flex flex-wrap items-center gap-7 pt-1"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 border-b border-paper-white pb-2 text-[11px] uppercase tracking-[0.18em] text-paper-white transition-colors hover:text-champagne hover:border-champagne"
              >
                <span>Make An Appointment</span>
                <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">↗</span>
              </Link>
              <Link
                href="#residences"
                className="inline-flex items-center border-b border-paper-white/45 pb-2 text-[11px] uppercase tracking-[0.18em] text-paper-white/75 transition-colors hover:text-paper-white hover:border-paper-white"
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
          className="hidden md:flex items-center gap-4 pt-2"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-paper-white/50">
            Scroll
          </span>
          <div className="scroll-indicator h-px w-16 bg-paper-white/45" />
        </motion.div>
      </motion.div>
    </section>
  );
}
