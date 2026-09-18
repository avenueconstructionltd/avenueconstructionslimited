"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const PILLARS = [
  {
    number: "01",
    title: "100% RAJUK Sanctioned",
    subtitle: "Official Municipal Clearances",
    description:
      "Every single Avenue project is fully approved under RAJUK building bylaws with complete sub-zone clearances before we break ground. Zero legal ambiguity, 100% peace of mind.",
    stats: "Permit: D-0006453-10-25",
  },
  {
    number: "02",
    title: "Single-Unit Full Floor Privacy",
    subtitle: "One Family Per Floor",
    description:
      "Unlike crowded multi-unit buildings, our signature towers feature only one exclusive luxury apartment per floor. Enjoy your private lift lobby, zero shared walls, and 360° light ventilation.",
    stats: "3,000+ SQFT Single Suites",
  },
  {
    number: "03",
    title: "IEB-Certified Engineering",
    subtitle: "Structural Longevity Guaranteed",
    description:
      "Engineered strictly with 60-grade BSRM 500W rebar, Holcim/Crown cement, and stone chips casting. Every blueprint is calculated and stamped by registered IEB structural engineers for earthquake resilience.",
    stats: "Seismic Resilient Standard",
  },
  {
    number: "04",
    title: "100% Freehold Prime Land",
    subtitle: "Dhaka's Most Secure Corridors",
    description:
      "We hand-select clean, vetted freehold plots in Bashundhara R/A (Block E, near Evercare), Gulshan, Banani, and Aftabnagar Hatirjheel Link. Zero third-party liability and prompt registration.",
    stats: "Zero Land Liabilities",
  },
];

const TRUST_POINTS = [
  "Dedicated Escrow Capital Funding",
  "Guaranteed On-Time Handover",
  "Customized Interior Floor Plans",
  "European Lift & Soundproof Generator",
];

export function WhyChooseUs() {
  return (
    <section className="relative z-10 w-full py-24 md:py-32 px-6 sm:px-8 md:px-12 bg-linen-cream/60 text-graphite-ink overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-4">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-champagne-dark font-semibold">
              Why Avenue Constructions
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.08] tracking-[-0.015em] text-graphite-ink font-medium">
              Built on Trust. Engineered for Generations.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-pebble leading-relaxed pt-1">
              Dhaka&apos;s real estate landscape requires absolute transparency and engineering excellence. Here is why discerning homeowners and landowners choose us.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-6 py-3 text-xs font-mono uppercase tracking-wider bg-obsidian text-paper-white hover:bg-black rounded-full transition-all shadow-sm active:scale-[0.98]"
            >
              <span>Speak with an Advisor</span>
              <ArrowRight className="size-4 text-champagne transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="group rounded-2xl border border-stone bg-paper-white p-7 flex flex-col justify-between gap-6 hover:border-champagne/70 shadow-[0_2px_10px_rgba(20,21,24,0.03)] hover:shadow-[0_16px_36px_-8px_rgba(20,21,24,0.08)] hover:-translate-y-1.5 transition-all duration-400 ease-out"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold tracking-widest text-champagne-dark">
                    {pillar.number}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-pebble/80 text-right">
                    {pillar.subtitle}
                  </span>
                </div>

                <div className="flex flex-col gap-1.5 pt-1">
                  <h3 className="font-serif text-xl font-medium text-graphite-ink leading-snug group-hover:text-champagne transition-colors">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-[14px] text-pebble leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 text-[11px] font-mono text-pebble">
                <span className="text-champagne-dark font-medium">{pillar.stats}</span>
                <span className="text-champagne opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
                  &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges Strip */}
        <div className="rounded-2xl border border-stone bg-paper-white p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[0_2px_10px_rgba(20,21,24,0.03)]">
          <div className="flex flex-col gap-1 text-center lg:text-left">
            <h4 className="font-serif text-lg text-graphite-ink font-medium">
              Standard Quality Commitments on Every Apartment
            </h4>
            <p className="text-xs text-pebble">
              Contractually guaranteed in your deed of agreement with milestone transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full lg:w-auto">
            {TRUST_POINTS.map((point) => (
              <div
                key={point}
                className="flex items-center gap-2 text-xs font-mono text-graphite-ink"
              >
                <CheckCircle2 className="size-4 text-champagne shrink-0" />
                <span className="truncate">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
