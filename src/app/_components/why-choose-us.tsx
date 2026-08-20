"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ShieldCheck, Award, Home, Lock, CheckCircle2, ArrowRight } from "lucide-react";

const PILLARS = [
  {
    icon: <ShieldCheck className="size-6 text-champagne" />,
    number: "01",
    title: "100% RAJUK Sanctioned",
    subtitle: "Official Municipal Clearances",
    description:
      "Every single Avenue project is fully approved under RAJUK building bylaws with complete sub-zone clearances before we break ground. Zero legal ambiguity, 100% peace of mind.",
    stats: "Permit: D-0006453-10-25",
  },
  {
    icon: <Home className="size-6 text-champagne" />,
    number: "02",
    title: "Single-Unit Full Floor Privacy",
    subtitle: "One Family Per Floor",
    description:
      "Unlike crowded multi-unit buildings, our signature towers feature only one exclusive luxury apartment per floor. Enjoy your private lift lobby, zero shared walls, and 360° light ventilation.",
    stats: "3,000+ SQFT Single Suites",
  },
  {
    icon: <Award className="size-6 text-champagne" />,
    number: "03",
    title: "IEB-Certified Engineering",
    subtitle: "Structural Longevity Guaranteed",
    description:
      "Engineered strictly with 60-grade BSRM 500W rebar, Holcim/Crown cement, and stone chips casting. Every blueprint is calculated and stamped by registered IEB structural engineers for earthquake resilience.",
    stats: "Seismic Resilient Standard",
  },
  {
    icon: <Lock className="size-6 text-champagne" />,
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
      {/* Decorative ambient glow */}
      <div className="glow-accent -top-40 -left-40 opacity-40" />
      <div className="glow-accent -bottom-40 -right-40 opacity-40" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-4 border-b border-white/10">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-champagne font-semibold flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-champagne animate-pulse" />
              Why Avenue Constructions
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.08] tracking-[-0.015em] text-paper-white font-medium">
              Built on Trust. Engineered for Generations.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-paper-white/70 leading-relaxed pt-1">
              Dhaka&apos;s real estate landscape requires absolute transparency and engineering excellence. Here is why discerning homeowners and landowners choose us.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact"
              className="group pill-btn inline-flex items-center gap-3 px-6 py-3 text-xs font-mono uppercase tracking-wider bg-champagne text-obsidian font-semibold hover:bg-champagne-light transition-all shadow-md active:scale-[0.98]"
            >
              <span>Speak with an Advisor</span>
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
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
              className="dark-glass-card rounded-3xl p-7 flex flex-col justify-between gap-6 group hover:border-champagne/40 transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-champagne/10 group-hover:border-champagne/30 transition-colors">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-xs text-paper-white/40 group-hover:text-champagne transition-colors">
                    [{pillar.number}]
                  </span>
                </div>

                <div className="flex flex-col gap-1.5 pt-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-champagne">
                    {pillar.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-paper-white leading-snug">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-xs text-paper-white/65 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between text-[11px] font-mono text-paper-white/60">
                <span className="text-champagne/80 font-medium">{pillar.stats}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges Strip */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 text-center lg:text-left">
            <h4 className="font-serif text-lg text-paper-white font-medium">
              Standard Quality Commitments on Every Apartment
            </h4>
            <p className="text-xs text-paper-white/60">
              Contractually guaranteed in your deed of agreement with milestone transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full lg:w-auto">
            {TRUST_POINTS.map((point) => (
              <div
                key={point}
                className="flex items-center gap-2 text-xs font-mono text-paper-white/80 bg-black/40 border border-white/10 px-3.5 py-2 rounded-xl"
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
