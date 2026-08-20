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
        className="max-w-7xl mx-auto relative rounded-3xl sm:rounded-[36px] overflow-hidden min-h-105 sm:min-h-120 flex flex-col items-center justify-center text-center p-8 sm:p-12 shadow-2xl border border-stone"
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

        {/* Center Content (Fazora Exact Layout) */}
        <div className="relative z-10 max-w-2xl flex flex-col items-center gap-5 text-paper-white">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-champagne font-semibold">
            Bashundhara R/A &middot; Gulshan &middot; Aftabnagar
          </span>

          <h2 className="font-serif text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.06] tracking-[-0.015em] text-paper-white font-medium">
            Find Your Signature Residence in Dhaka
          </h2>

          <p className="text-[15px] sm:text-[17px] text-paper-white/90 leading-relaxed max-w-xl">
            Connect with our private advisory team to schedule an exclusive on-site viewing, inspect engineering blueprints, or explore joint venture land partnerships.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/projects"
              className="group pill-btn inline-flex items-center gap-3 px-8 py-3.5 text-xs font-mono uppercase tracking-wider bg-paper-white text-obsidian hover:bg-champagne transition-all shadow-lg active:scale-[0.98]"
            >
              <span>Explore Available Suites</span>
              <span className="flex size-6 items-center justify-center rounded-full bg-obsidian text-paper-white text-[10px] transition-transform duration-300 group-hover:translate-x-0.5">
                &rarr;
              </span>
            </Link>

            <Link
              href="/contact"
              className="pill-btn inline-flex items-center justify-center px-6 py-3.5 text-xs font-mono uppercase tracking-wider border border-white/50 text-paper-white hover:bg-white/20 transition-colors backdrop-blur-xs"
            >
              Schedule Private Advisory
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
