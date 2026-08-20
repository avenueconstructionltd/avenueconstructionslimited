"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

interface ShowcaseItem {
  num: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  slug: string;
  image: string;
  specs: { label: string; value: string }[];
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    num: "01",
    category: "BASHUNDHARA R/A · DHAKA",
    title: "Avenue Ahsan Palace",
    subtitle: "Eight-Storied Sanctuary of Refined Living",
    description:
      "A G+7 single-unit masterwork situated steps from Evercare Hospital. Designed to capture southern light currents, offering absolute residential privacy and museum-grade finishes.",
    slug: "avenue-ahsan-palace",
    image: "/images/projects/avenue-ahsan-palace/project_image_1.jpeg",
    specs: [
      { label: "STRUCTURE", value: "G+7 Single Unit Floors" },
      { label: "ORIENTATION", value: "South Facing Daylight Corridor" },
      { label: "APPROVAL", value: "100% RAJUK Sanctioned" },
      { label: "DELIVERY", value: "Completed & Delivered" },
    ],
  },
  {
    num: "02",
    category: "AFTABNAGAR · HATIRJHEEL",
    title: "Avenue MD Heights",
    subtitle: "Monuments Above the Lake",
    description:
      "Single-unit private residences engineered with cantilevered balconies, fair-faced architectural concrete, and panoramic cross-ventilation across Dhaka’s eastern skyline.",
    slug: "avenue-md-heights",
    image: "/images/projects/avenue-md-heights/project_image_5.jpeg",
    specs: [
      { label: "STRUCTURE", value: "G+9 High Ceiling Suites" },
      { label: "AMENITIES", value: "Private Elevator & Terraces" },
      { label: "ENGINEERING", value: "IEB Stamped Structural Design" },
      { label: "DELIVERY", value: "Completed Landmark" },
    ],
  },
  {
    num: "03",
    category: "RAMPURA · HATIRJHEEL LINK",
    title: "Avenue Dream",
    subtitle: "Urban Architectural Serenity",
    description:
      "Sculpted with disciplined acoustic glazing and deep shadow overhangs, providing seamless connectivity to Hatirjheel Expressway while maintaining complete acoustic quiet.",
    slug: "avenue-dream",
    image: "/images/projects/avenue-md-heights/project_image_8.jpeg",
    specs: [
      { label: "STRUCTURE", value: "G+7 Luxury Residences" },
      { label: "CONNECTIVITY", value: "Hatirjheel Expressway Corridor" },
      { label: "PARKING", value: "Secured Ground Floor Bays" },
      { label: "DELIVERY", value: "Signature Handover" },
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
            <span className="font-mono text-xs text-champagne uppercase tracking-[0.2em]">
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
                  sizes="(max-width: 1024px) 100vw, 60vw"
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
                  <span className="font-mono text-xs text-champagne uppercase tracking-widest font-semibold">
                    Signature Handover
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

                {/* CTA Link */}
                <div className="pt-2">
                  <Link
                    href={`/projects/${currentItem.slug}`}
                    className="group pill-btn inline-flex items-center gap-3 pl-6 pr-2.5 py-3 text-xs font-mono uppercase tracking-wider bg-obsidian text-paper-white hover:bg-black transition-all shadow-sm"
                  >
                    <span>View Project Monograph</span>
                    <span className="flex size-6 items-center justify-center rounded-full bg-paper-white/15 text-[11px] transition-transform duration-300 group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
