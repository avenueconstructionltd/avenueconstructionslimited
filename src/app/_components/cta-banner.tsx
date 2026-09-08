"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export function CTABanner() {
  return (
    <section className="relative z-10 w-full py-16 sm:py-24 px-6 sm:px-8 md:px-12 bg-paper-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        className="max-w-7xl mx-auto relative overflow-hidden min-h-105 sm:min-h-130 flex flex-col items-start justify-end text-left p-8 sm:p-12 md:p-16 border-y border-stone"
      >
        {/* Background Reflection Architecture Image */}
        <Image
          src="/images/projects/avenue-md-heights/project_image_5.jpeg"
          alt="Avenue Architectural Masterwork"
          fill
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover object-center brightness-[0.4] contrast-[1.1]"
        />

        {/* Subtle Gradient Vignette */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/60 pointer-events-none" />

        <div className="relative z-10 max-w-3xl flex flex-col items-start gap-6 text-paper-white border-l border-paper-white/35 pl-6 sm:pl-9">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-champagne font-semibold">
            Bashundhara R/A &middot; Gulshan &middot; Aftabnagar
          </span>

          <h2 className="font-serif text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.06] tracking-[-0.015em] text-paper-white font-medium">
            Find Your Signature Residence in Dhaka
          </h2>

          <p className="text-[15px] sm:text-[17px] text-paper-white/80 leading-relaxed max-w-xl">
            Connect with our private advisory team to schedule an exclusive on-site viewing, inspect engineering blueprints, or explore joint venture land partnerships.
          </p>

          <div className="pt-3 flex flex-wrap items-center gap-7">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-4 border-b border-paper-white pb-2 text-[10px] uppercase tracking-[0.14em] text-paper-white hover:text-champagne hover:border-champagne transition-colors"
            >
              <span>Explore Available Suites</span>
              <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">↗</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center border-b border-paper-white/45 pb-2 text-[10px] uppercase tracking-[0.14em] text-paper-white/75 hover:text-paper-white hover:border-paper-white transition-colors"
            >
              Schedule Private Advisory
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
