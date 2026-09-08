"use client";

import { motion } from "motion/react";

const LOCATIONS = [
  {
    id: "gulshan-banani",
    name: "Gulshan & Banani",
    description:
      "Dhaka's preeminent diplomatic zone, defined by lakeside promenades, tree-lined avenues, and premier international conveniences.",
    highlight: "Lakefront & Diplomatic Enclave",
  },
  {
    id: "bashundhara",
    name: "Bashundhara R/A",
    description:
      "Meticulously organized gated residential sanctuary, home to signature private estates, Evercare Hospital, and top academic hubs.",
    highlight: "Gated Security & Single-Unit Sites",
  },
  {
    id: "baridhara",
    name: "Baridhara Diplomatic",
    description:
      "The country's most exclusive residential address, offering low-density quiet, manicured parklands, and absolute privacy.",
    highlight: "High-Security Quiet Living",
  },
  {
    id: "aftabnagar-rampura",
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
      <div className="max-w-7xl mx-auto flex flex-col gap-14 md:gap-18 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-champagne font-semibold">
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

        <div className="border-t border-stone">
          {LOCATIONS.map((loc, index) => (
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
                className="grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_1fr_1fr] gap-5 md:gap-10 py-8 md:py-10 border-b border-stone"
              >
                <span className="font-serif text-2xl italic text-champagne">0{index + 1}</span>
                <div className="flex flex-col gap-3">
                    <h3 className="font-serif text-2xl sm:text-3xl text-graphite-ink font-medium group-hover:text-charcoal transition-colors">
                      {loc.name}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.16em] text-champagne">{loc.highlight}</span>
                </div>
                    <p className="text-[15px] text-pebble leading-relaxed font-normal">
                      {loc.description}
                    </p>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
