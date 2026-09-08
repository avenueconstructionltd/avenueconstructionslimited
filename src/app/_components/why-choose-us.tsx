"use client";

import { motion } from "motion/react";
import Link from "next/link";

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
    <section className="relative z-10 w-full py-24 md:py-32 px-6 sm:px-8 md:px-12 bg-obsidian text-paper-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-24 relative z-10">
        {/* Section Header */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start flex flex-col gap-9">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-champagne">
              Why Avenue Constructions
            </span>
            <h2 className="font-serif text-[clamp(3rem,5vw,5rem)] leading-[0.94] tracking-[-0.025em] text-paper-white font-normal">
              Evidence,<br /><span className="italic text-champagne-light">not ornament.</span>
            </h2>
            <p className="text-[15px] sm:text-[16px] text-paper-white/70 leading-relaxed pt-1">
              Dhaka&apos;s real estate landscape requires absolute transparency and engineering excellence. Here is why discerning homeowners and landowners choose us.
            </p>
          </div>

          <Link href="/contact" className="group inline-flex w-fit items-center gap-4 border-b border-paper-white/50 pb-2 text-[11px] uppercase tracking-[0.18em] text-paper-white hover:text-champagne hover:border-champagne transition-colors">
            Speak with an Advisor <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">↗</span>
          </Link>
        </div>

        <div className="lg:col-span-7 border-t border-white/25">
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
              className="grid grid-cols-[3.5rem_1fr] sm:grid-cols-[5rem_1fr] gap-4 sm:gap-8 py-8 sm:py-10 border-b border-white/20"
            >
              <span className="font-serif text-3xl italic text-champagne">
                {pillar.number}
              </span>
              <div className="grid sm:grid-cols-2 gap-5 sm:gap-9">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-champagne">
                    {pillar.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-paper-white leading-snug">
                    {pillar.title}
                  </h3>
                </div>
                <div className="flex flex-col justify-between gap-5">
                  <p className="text-xs text-paper-white/62 leading-[1.75]">
                    {pillar.description}
                  </p>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-champagne">
                    {pillar.stats}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-start-6 lg:col-span-7 border-t border-white/25 pt-8 flex flex-col gap-6">
          <div className="flex flex-col gap-1 text-center lg:text-left">
            <h4 className="font-serif text-lg text-paper-white font-medium">
              Standard Quality Commitments on Every Apartment
            </h4>
            <p className="text-xs text-paper-white/60">
              Contractually guaranteed in your deed of agreement with milestone transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
            {TRUST_POINTS.map((point, index) => (
              <div
                key={point}
                className="flex items-baseline gap-4 border-b border-white/15 py-4 text-xs text-paper-white/75"
              >
                <span className="font-serif italic text-champagne">0{index + 1}</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
