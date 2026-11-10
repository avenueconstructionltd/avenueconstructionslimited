"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { FileText } from "lucide-react";

interface ShowcaseItem {
  num: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  slug: string;
  image: string;
  brochurePdf?: string;
  specs: { label: string; value: string }[];
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    num: "01",
    category: "UTTAR BADDA · DHAKA",
    title: "Avenue Castle",
    subtitle: "Monolithic Geometry on the Skyline",
    description:
      "A luxury 10-storied (G+9) residential tower showcasing architectural symmetry and bold structural framing on Shadhinota Shoroni, minutes from Baridhara.",
    slug: "avenue-castle",
    image: "/images/projects/avenue-castle/avenue-castle-project.webp",
    specs: [
      { label: "STRUCTURE", value: "10 Storied (G+9)" },
      { label: "LAND & UNITS", value: "7.5 Katha · 27 Units" },
      { label: "UNIT SIZE", value: "1,450 Sft · 3 Bed, 3 Bath" },
      { label: "DELIVERY", value: "Completed Landmark" },
    ],
  },
  {
    num: "02",
    category: "BASHUNDHARA R/A · DHAKA",
    title: "Avenue Ahsan Palace",
    subtitle: "Eight-Storied Sanctuary of Refined Living",
    description:
      "An 8-storied (G+7) single-unit masterwork on a 25-ft road in Bashundhara Block-E, steps from Evercare Hospital. Designed to capture southern light currents, offering absolute residential privacy.",
    slug: "avenue-ahsan-palace",
    brochurePdf: "/brochures/avenue-ahsan-palace-brochure.pdf",
    image: "/images/projects/avenue-ahsan-palace/avenue-ahsan-palace-project.webp",
    specs: [
      { label: "STRUCTURE", value: "8 Storied (G+7) Single Unit" },
      { label: "LAND & ROAD", value: "7 Katha · 25 Ft Wide Road" },
      { label: "APPROVAL", value: "RAJUK Permit D-0006453-10-25" },
      { label: "DELIVERY", value: "Under Construction" },
    ],
  },
  {
    num: "03",
    category: "AFTABNAGAR · HATIRJHEEL",
    title: "Avenue Mohammad Heights",
    subtitle: "10-Storied Luxury Landmark Overlooking the Green Reserve",
    description:
      "Prestige residential landmark on a 50-foot wide road in Aftabnagar Sector 4 on 7 Katha land. Features 18 luxury residences, basement parking, 2 high-speed lifts, and an AC rooftop community pavilion.",
    slug: "avenue-md-heights",
    brochurePdf: "/brochures/avenue-mohammad-heights-brochure.pdf",
    image: "/images/projects/avenue-md-heights/avenue-md-heights-project.webp",
    specs: [
      { label: "STRUCTURE", value: "10 Storied (B+G+9)" },
      { label: "LAND & ROAD", value: "7 Katha · 50 Ft Wide Road" },
      { label: "CAPACITY", value: "18 Units (1,801 / 1,785 Sft)" },
      { label: "DELIVERY", value: "Under Construction" },
    ],
  },
  {
    num: "04",
    category: "RAMPURA · HATIRJHEEL LINK",
    title: "Avenue Dream",
    subtitle: "Urban Architectural Serenity",
    description:
      "A 9-storied (G+8) landmark sculpted with disciplined acoustic glazing on Ulon Road, providing seamless connectivity to Hatirjheel Expressway while maintaining complete acoustic quiet.",
    slug: "avenue-dream",
    image: "/images/projects/avenue-dream/avenue-dream-project.webp",
    specs: [
      { label: "STRUCTURE", value: "9 Storied (G+8)" },
      { label: "LAND & SIZE", value: "5 Katha · 1,450 Sft" },
      { label: "LOCATION", value: "Ulon Road, Rampura" },
      { label: "DELIVERY", value: "Under Construction" },
    ],
  },
];

export function PinnedShowcase() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentItem = SHOWCASE_ITEMS[selectedIndex];

  return (
    <section className="relative z-10 w-full py-20 sm:py-28 px-6 sm:px-8 md:px-12 bg-paper-white text-graphite-ink">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Section Header with Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-pebble uppercase tracking-[0.2em] font-semibold">
              Signature Spotlight
            </span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] tracking-[-0.015em] text-graphite-ink">
              Featured Landmark Developments.
            </h2>
          </div>

          {/* Interactive Landmark Switcher Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-full border border-stone bg-linen-cream self-start md:self-auto overflow-x-auto">
            {SHOWCASE_ITEMS.map((item, idx) => (
              <button
                key={item.slug}
                onClick={() => setSelectedIndex(idx)}
                className={`pill-btn px-4 py-2 text-xs font-mono transition-all cursor-pointer ${
                  selectedIndex === idx
                    ? "bg-obsidian text-paper-white shadow-xs"
                    : "text-pebble hover:text-graphite-ink"
                }`}
              >
                <span>{item.title.replace("Avenue ", "")}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Single Unified Spotlight Card */}
        <div className="rounded-3xl sm:rounded-4xl border border-stone bg-linen-cream overflow-hidden shadow-sm p-5 sm:p-8 lg:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.slug}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Image Window */}
              <div className="lg:col-span-7 relative aspect-16/10 sm:aspect-video rounded-2xl overflow-hidden shadow-md bg-stone group">
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 720px"
                  className="object-cover transition-transform duration-700 ease-premium-in-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="pill-btn px-3 py-1 text-[11px] font-mono uppercase tracking-wider bg-black/70 text-paper-white backdrop-blur-md border border-white/20">
                    {currentItem.category}
                  </span>
                </div>
              </div>

              {/* Right Column: Narrative & Technical Specs */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs text-champagne-dark uppercase tracking-widest font-semibold">
                    {currentItem.specs.find((s) => s.label === "DELIVERY")?.value ||
                      "Development"}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-graphite-ink font-medium leading-tight">
                    {currentItem.title}
                  </h3>
                  <span className="font-serif text-base sm:text-lg italic text-pebble">
                    {currentItem.subtitle}
                  </span>
                  <p className="text-[14px] sm:text-[15px] leading-relaxed text-pebble pt-1">
                    {currentItem.description}
                  </p>
                </div>

                {/* Monograph Spec Table */}
                <div className="border-t border-stone pt-2 flex flex-col">
                  {currentItem.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex justify-between items-center py-2.5 border-b border-stone/70 text-xs font-mono"
                    >
                      <span className="text-pebble tracking-wider">{spec.label}</span>
                      <span className="text-graphite-ink font-medium text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Links */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/projects/${currentItem.slug}`}
                    className="group pill-btn inline-flex items-center gap-3 pl-6 pr-2.5 py-3 text-xs font-mono uppercase tracking-wider bg-obsidian text-paper-white hover:bg-black transition-all shadow-sm"
                  >
                    <span>View Project Monograph</span>
                    <span className="flex size-6 items-center justify-center rounded-full bg-paper-white/15 text-[11px] transition-transform duration-300 group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </Link>

                  {currentItem.brochurePdf && (
                    <a
                      href={currentItem.brochurePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pill-btn inline-flex items-center gap-2 px-5 py-3 text-xs font-mono uppercase tracking-wider border border-champagne text-graphite-ink hover:bg-champagne/10 transition-colors shadow-xs"
                    >
                      <FileText className="size-3.5 text-champagne" />
                      <span>Brochure PDF</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
