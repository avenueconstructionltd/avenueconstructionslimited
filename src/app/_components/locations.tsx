"use client";

import { motion } from "motion/react";

const LOCATIONS = [
  {
    id: "gulshan-banani",
    index: "01",
    tag: "Diplomatic Enclave",
    name: "Gulshan & Banani",
    description:
      "Dhaka's preeminent diplomatic zone, defined by lakeside promenades, tree-lined avenues, and premier international conveniences.",
    highlight: "Lakefront & Diplomatic Living",
  },
  {
    id: "bashundhara",
    index: "02",
    tag: "Gated Sanctuary",
    name: "Bashundhara R/A",
    description:
      "Meticulously organized gated residential sanctuary, home to signature private estates, Evercare Hospital, and top academic hubs.",
    highlight: "Gated Security & Single-Unit Sites",
  },
  {
    id: "baridhara",
    index: "03",
    tag: "Embassy Quarter",
    name: "Baridhara Diplomatic",
    description:
      "The country's most exclusive residential address, offering low-density quiet, manicured parklands, and absolute privacy.",
    highlight: "High-Security Quiet Living",
  },
  {
    id: "aftabnagar-rampura",
    index: "04",
    tag: "Waterfront Corridor",
    name: "Aftabnagar & Hatirjheel Link",
    description:
      "Modern planned zone with green parkways, lakeside vistas, and rapid transit access via Hatirjheel Expressway.",
    highlight: "Hatirjheel Expressway Corridor",
  },
];

export function Locations() {
  return (
    <section
      id="locations"
      suppressHydrationWarning
      className="relative z-10 px-6 sm:px-8 md:px-12 py-24 md:py-32 bg-paper-white text-graphite-ink overflow-hidden"
    >
      {/* Subtle champagne glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full bg-radial-[at_center] from-champagne/6 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto flex flex-col gap-14 md:gap-18 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-champagne-dark font-semibold">
              Prime Dhaka Corridors
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.08] tracking-[-0.015em] text-graphite-ink font-medium">
              Distinguished enclaves across Dhaka.
            </h2>
          </div>
          <p className="text-[15px] text-pebble leading-relaxed max-w-md">
            We focus exclusively on Dhaka&apos;s most secure and prominent residential corridors, selecting plots that provide cross-ventilation, panoramic green views, and enduring prestige.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {LOCATIONS.map((loc, index) => {
            const isWide = index === 0 || index === 3;
            return (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`flex flex-col ${
                  isWide ? "lg:col-span-7" : "lg:col-span-5"
                }`}
              >
                <div className="group p-8 sm:p-10 rounded-2xl border border-stone bg-paper-white/80 hover:bg-paper-white hover:border-champagne/70 shadow-[0_2px_10px_rgba(20,21,24,0.03)] hover:shadow-[0_16px_36px_-8px_rgba(20,21,24,0.08)] hover:-translate-y-1.5 transition-all duration-400 ease-out flex flex-col justify-between h-full gap-8">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold tracking-widest text-pebble group-hover:text-champagne transition-colors duration-300">
                        {loc.index}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-pebble/80 group-hover:text-graphite-ink transition-colors duration-300">
                        {loc.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-graphite-ink font-medium pt-2 group-hover:text-champagne transition-colors duration-300">
                      {loc.name}
                    </h3>

                    <p className="text-[15px] text-pebble leading-relaxed font-normal">
                      {loc.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-pebble font-mono tracking-wide">
                      {loc.highlight}
                    </span>
                    <span className="font-mono text-sm text-champagne opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
                      &rarr;
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
