"use client";

import { motion } from "motion/react";

const TRUST_PILLARS = [
  {
    title: "100% RAJUK Sanctioned",
    authority: "Rajdhani Unnayan Kartripakkha",
    permit: "Permit: D-0006453-10-25",
    detail: "Official municipal clearance and sub-zone zoning approval secured prior to any ground-breaking.",
  },
  {
    title: "IEB Stamped Engineering",
    authority: "Institution of Engineers Bangladesh",
    permit: "Member Reg: IEB-M-34892",
    detail: "Structural load calculations, soil test validation, and BSRM 500W rebar casting blueprints.",
  },
  {
    title: "100% Freehold Title",
    authority: "Land Title Governance",
    permit: "Zero Third-Party Liability",
    detail: "Direct, vetted freehold land ownership ensuring complete legal security and immediate mutation.",
  },
  {
    title: "BNBC 2020 Compliance",
    authority: "National Building Code",
    permit: "Seismic Resilient Standard",
    detail: "High-grade concrete pour, stone chips casting, earthquake load tolerance, and fire safety systems.",
  },
];

export function Credentials() {
  return (
    <section
      id="credentials"
      suppressHydrationWarning
      className="relative z-10 px-6 sm:px-8 md:px-12 py-24 md:py-32 bg-linen-cream text-graphite-ink"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-14 md:gap-18">
        {/* Section Header */}
        <div className="max-w-3xl flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-champagne font-semibold">
            Institutional Trust &amp; Governance
          </span>
          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.08] tracking-[-0.015em] text-graphite-ink font-medium">
            Every residence is 100% RAJUK sanctioned &amp; IEB engineering certified.
          </h2>
          <p className="text-[15px] sm:text-[16px] text-pebble leading-relaxed">
            We ensure zero legal ambiguity, full statutory compliance, and rigorous structural safety standards for every single development in our portfolio.
          </p>
        </div>

        {/* 4 Clean Trust Pillar Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="p-7 rounded-3xl border border-stone bg-paper-white flex flex-col justify-between gap-6 shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col gap-2.5">
                <span className="text-[11px] font-mono text-champagne uppercase tracking-wider font-semibold">
                  {pillar.authority}
                </span>
                <h3 className="font-serif text-xl font-medium text-graphite-ink leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-pebble leading-relaxed pt-1">
                  {pillar.detail}
                </p>
              </div>

              <div className="border-t border-stone pt-3 font-mono text-xs text-graphite-ink font-medium">
                {pillar.permit}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
