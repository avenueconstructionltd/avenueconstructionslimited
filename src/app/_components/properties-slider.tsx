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
            <div className="flex items-center border-y border-white/20">
              {(["All", "Completed", "Upcoming"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-4 py-2.5 text-[10px] uppercase tracking-[0.14em] border-r border-white/15 transition-colors cursor-pointer ${
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
              className="group inline-flex items-center gap-4 border-b border-white/40 pb-2 text-[10px] uppercase tracking-[0.14em] text-paper-white hover:border-champagne hover:text-champagne transition-colors"
            >
              <span>All 6 Projects</span>
              <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">↗</span>
            </Link>
          </div>
        </div>

        {/* Property Grid — dark glass cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-14">
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
      className="group flex flex-col h-full border-t border-white/25 pt-3"
    >
      {/* Image Frame */}
      <Link
        href={`/projects/${property.slug}`}
        className="block relative aspect-4/3 w-full overflow-hidden bg-obsidian-soft"
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
          <span className="inline-flex px-3 py-2 text-[9px] tracking-[0.16em] uppercase bg-obsidian text-paper-white border border-white/20">
            {property.statusTag}
          </span>
        </div>

        {/* Year Tag */}
        <div className="absolute top-3 right-3 z-20">
          <span className="px-2.5 py-1.5 text-[9px] tracking-[0.14em] text-paper-white bg-obsidian/85 border border-white/15">
            {property.architecturalDetails.year}
          </span>
        </div>
      </Link>

      {/* Card Body */}
      <div className="pt-5 flex flex-col gap-5 flex-1 justify-between">
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

          <div className="text-[10px] uppercase tracking-[0.12em] text-paper-white/50">
            <span className="truncate">
              {property.region}, {property.location}
            </span>
          </div>
        </div>

        {/* Specs Row */}
        <div className="flex items-center gap-3 border-t border-white/15 pt-4 text-[10px] uppercase tracking-[0.1em] text-paper-white/65">
          <span>{beds}</span><span aria-hidden="true">·</span><span>{baths}</span><span aria-hidden="true">·</span><span>{sqft}</span>
        </div>
      </div>
    </motion.div>
  );
}
