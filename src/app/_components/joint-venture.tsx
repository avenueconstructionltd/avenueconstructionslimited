"use client";

import { motion } from "motion/react";
import Link from "next/link";

const JV_MILESTONES = [
  {
    step: "01",
    title: "Confidential Land Appraisal",
    description: "On-site topographic survey, soil test analysis, and preliminary FAR calculation.",
  },
  {
    step: "02",
    title: "Commercial & Ratio Agreement",
    description: "Transparent landowner-developer equity terms structured with clear legal agreements.",
  },
  {
    step: "03",
    title: "100% RAJUK Sanction & IEB Design",
    description: "Official municipal building approvals and IEB-stamped structural blueprints.",
  },
  {
    step: "04",
    title: "Guaranteed Milestone Handover",
    description: "Dedicated escrow financing ensuring zero construction delays and on-time delivery.",
  },
];

export function JointVenture() {
  return (
    <section
      id="joint-venture"
      className="relative z-10 px-6 sm:px-8 md:px-12 py-24 md:py-32 bg-linen-cream text-graphite-ink"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-14 md:gap-18">
        {/* Main 2-Column Split: Editorial Advisory on Left, Progressive Timeline on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Commercial Advisory */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-champagne font-semibold">
                Landowner Joint Venture Advisory
              </span>
              <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.08] tracking-[-0.015em] text-graphite-ink font-medium">
                Maximize the generational yield of your prime freehold plot.
              </h2>
            </div>

            <p className="text-[15px] sm:text-[16px] leading-[1.65] text-pebble font-normal">
              Own freehold land in Gulshan, Banani, Baridhara, or Bashundhara R/A? Partner with Avenue Constructions Ltd to build a bespoke single-unit architectural landmark that commands premier value with 100% legal security.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/landowner"
                className="group pill-btn inline-flex items-center gap-3 pl-6 pr-2.5 py-3 text-xs font-mono uppercase tracking-wider bg-obsidian text-paper-white hover:bg-black transition-all shadow-md active:scale-[0.98]"
              >
                <span>Schedule Land Assessment</span>
                <span className="flex size-6 items-center justify-center rounded-full bg-paper-white/20 text-paper-white text-xs transition-transform duration-300 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </Link>
              <Link
                href="/contact"
                className="pill-btn inline-flex items-center justify-center px-6 py-3 text-xs font-mono uppercase tracking-wider border border-stone bg-paper-white text-graphite-ink hover:border-graphite-ink transition-colors"
              >
                Direct Advisory Call
              </Link>
            </div>
          </div>

          {/* Right Column: Progressive 4-Stage Pathway Card */}
          <div className="lg:col-span-7 rounded-3xl border border-stone bg-paper-white p-6 sm:p-8 lg:p-10 shadow-sm flex flex-col gap-6">
            <div>
              <h3 className="font-serif text-xl font-medium text-graphite-ink">
                The Joint Venture Partnership Framework
              </h3>
            </div>

            <div className="flex flex-col gap-6">
              {JV_MILESTONES.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex flex-col gap-1 pb-4 border-b border-stone/50 last:border-b-0 last:pb-0"
                >
                  <h4 className="font-serif text-lg text-graphite-ink font-medium">
                    {item.title}
                  </h4>
                  <p className="text-[14px] text-pebble leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
