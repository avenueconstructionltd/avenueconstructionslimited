"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { PROPERTIES } from "@/lib/properties-constant";

export function PropertiesSlider() {
  const [filter, setFilter] = useState<"All" | "Completed" | "Upcoming">("All");

  const filteredProperties = PROPERTIES.filter((p) => {
    if (filter === "All") return true;
    return p.statusTag === filter;
  });

  return (
    <section
      id="residences"
      className="relative z-10 w-full py-24 md:py-32 px-6 sm:px-8 md:px-12 bg-obsidian text-paper-white overflow-hidden"
    >
      {/* Decorative glow accents */}
      <div className="glow-accent -top-50 -left-50" />
      <div className="glow-accent -bottom-50 -right-50" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="font-mono text-xs text-champagne uppercase tracking-[0.2em]">
              Curated Portfolio
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.08] tracking-[-0.015em] text-paper-white">
              Signature Residences &amp; Developments.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-paper-white/60 leading-relaxed">
              Every residence is engineered with fair-faced concrete, private elevator access, and bespoke spatial layouts across Dhaka&apos;s prime enclaves.
            </p>
          </div>

          {/* Filter Pills and View All */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            <div className="flex items-center gap-1.5 p-1 rounded-full border border-white/10 bg-white/5">
              {(["All", "Completed", "Upcoming"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`pill-btn px-4 py-1.5 text-xs font-mono transition-all cursor-pointer ${
                    filter === tab
                      ? "bg-champagne text-obsidian"
                      : "text-paper-white/50 hover:text-paper-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <Link
              href="/projects"
              className="group pill-btn inline-flex items-center gap-2.5 pl-4 pr-2 py-2 text-xs font-mono border border-white/15 bg-white/5 text-paper-white hover:border-champagne/40 transition-colors"
            >
              <span>All 6 Projects</span>
              <span className="flex size-6 items-center justify-center rounded-full bg-white/10 text-[11px] transition-transform duration-300 group-hover:translate-x-0.5">
                &rarr;
              </span>
            </Link>
          </div>
        </div>

        {/* Property Grid — dark glass cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <PropertyCard key={property.slug} property={property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PropertyCard({
  property,
  index,
}: {
  property: (typeof PROPERTIES)[0];
  index: number;
}) {
  const beds = property.specs.find((s) => s.label.toLowerCase().includes("bed"))?.value || "4 Beds";
  const baths = property.specs.find((s) => s.label.toLowerCase().includes("bath"))?.value || "4 Baths";
  const sqft = property.specs.find((s) => s.label.toLowerCase().includes("size") || s.label.toLowerCase().includes("area") || s.label.toLowerCase().includes("unit"))?.value || "2,850 SQFT";

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.32, 0.72, 0, 1],
      }}
      className="group flex flex-col h-full dark-glass-card rounded-3xl p-3.5 sm:p-4"
    >
      {/* Image Frame */}
      <Link
        href={`/projects/${property.slug}`}
        className="block relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-obsidian-soft"
      >
        <Image
          src={property.image}
          alt={property.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-premium-in-out group-hover:scale-105"
        />

        {/* Status Badge */}
        <div className="absolute top-3 left-3 z-20">
          <span className="pill-btn inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono tracking-wider uppercase bg-black/70 text-paper-white font-semibold backdrop-blur-md border border-white/15">
            <span
              className={`size-1.5 rounded-full ${
                property.statusTag === "Completed"
                  ? "bg-emerald-400"
                  : "bg-champagne"
              }`}
            />
            {property.statusTag}
          </span>
        </div>

        {/* Year Tag */}
        <div className="absolute top-3 right-3 z-20">
          <span className="pill-btn px-2.5 py-0.5 text-[10px] font-mono text-paper-white bg-white/10 backdrop-blur-md border border-white/15">
            {property.architecturalDetails.year}
          </span>
        </div>
      </Link>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex flex-col gap-4 flex-1 justify-between">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-start justify-between gap-2">
            <Link href={`/projects/${property.slug}`}>
              <h3 className="font-serif text-xl sm:text-2xl text-paper-white font-medium group-hover:text-champagne transition-colors uppercase tracking-tight">
                {property.name}
              </h3>
            </Link>
            <span className="font-mono text-xs font-semibold text-champagne shrink-0 pt-0.5">
              100% RAJUK
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs text-paper-white/50">
            <svg
              className="size-3.5 shrink-0 text-champagne/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="truncate">
              {property.region}, {property.location}
            </span>
          </div>
        </div>

        {/* Specs Row */}
        <div className="flex items-center justify-between border-t border-white/10 pt-3.5 text-xs font-mono text-paper-white/70">
          {/* Beds */}
          <div className="flex items-center gap-1.5">
            <svg
              className="size-3.5 text-paper-white/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M3 7v11m0-4h18m0-7v11M7 11V7a2 2 0 012-2h6a2 2 0 012 2v4"
              />
            </svg>
            <span className="uppercase text-[11px]">{beds}</span>
          </div>

          {/* Baths */}
          <div className="flex items-center gap-1.5">
            <svg
              className="size-3.5 text-paper-white/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M4 12h16a1 1 0 011 1v3a4 4 0 01-4 4H7a4 4 0 01-4-4v-3a1 1 0 011-1zm2-5h3a2 2 0 012 2v3H4V9a2 2 0 012-2z"
              />
            </svg>
            <span className="uppercase text-[11px]">{baths}</span>
          </div>

          {/* Sqft */}
          <div className="flex items-center gap-1.5">
            <svg
              className="size-3.5 text-paper-white/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
            <span className="uppercase text-[11px]">{sqft}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
