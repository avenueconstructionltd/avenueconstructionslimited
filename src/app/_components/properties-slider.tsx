"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ShieldCheck, MapPin, Bed, Bath, Maximize2, Layers, ArrowUpRight, FileText } from "lucide-react";
import { PROPERTIES, Property } from "@/lib/properties-constant";

export function PropertiesSlider() {
  return (
    <section
      id="residences"
      className="relative z-10 w-full py-20 md:py-28 px-6 sm:px-8 md:px-12 bg-paper-white text-graphite-ink overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10 md:gap-14 relative z-10">
        {/* Top Middle Center Header */}
        <div className="flex flex-col items-center text-center gap-3 max-w-3xl mx-auto">
          <span className="font-mono text-xs text-pebble uppercase tracking-[0.25em] font-semibold">
            Dhaka Signature Developments
          </span>
          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.08] tracking-[-0.015em] text-graphite-ink font-medium">
            Our Signature Residences
          </h2>
          <p className="text-[14px] sm:text-[15px] text-pebble leading-relaxed max-w-2xl">
            Bespoke single-unit luxury residential landmarks engineered with fair-faced concrete, private elevator access, and museum-grade finishes across Dhaka&apos;s prime enclaves.
          </p>
        </div>

        {/* 2x2 Grid with Compact Horizontal Split Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {PROPERTIES.map((property, index) => (
            <motion.div
              key={property.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="flex"
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Navigation CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <span className="font-mono text-xs text-pebble">
            All {PROPERTIES.length} Signature Developments
          </span>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2.5 px-6 py-2.5 text-xs font-mono rounded-full border border-stone bg-paper-white text-graphite-ink hover:border-champagne hover:bg-linen-cream/50 transition-colors shadow-2xs"
          >
            <span>Explore All Projects Archive</span>
            <span className="text-champagne transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function PropertyCard({ property }: { property: Property }) {
  const beds =
    property.specs.find((s) => s.label.toLowerCase().includes("bed"))?.value || "3";
  const baths =
    property.specs.find((s) => s.label.toLowerCase().includes("bath"))?.value || "3";
  const unitSize =
    property.specs.find(
      (s) =>
        s.label.toLowerCase().includes("size") ||
        s.label.toLowerCase().includes("area") ||
        s.label.toLowerCase().includes("unit"),
    )?.value || "1,532 Sft";
  const land =
    property.specs.find((s) => s.label.toLowerCase().includes("land"))?.value || "3 Katha";
  const verandas =
    property.specs.find((s) => s.label.toLowerCase().includes("veranda"))?.value || "3";

  return (
    <div className="group flex flex-col sm:flex-row w-full rounded-3xl border border-stone bg-paper-white hover:border-champagne/70 shadow-[0_2px_12px_rgba(20,21,24,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(20,21,24,0.08)] hover:-translate-y-1 transition-all duration-400 p-3.5 sm:p-4 gap-4 sm:gap-5 justify-between">
      {/* Left: 4:5 Image Frame (Uncropped full building view) */}
      <Link
        href={`/projects/${property.slug}`}
        draggable={false}
        className="block relative w-full sm:w-52.5 md:w-57.5 lg:w-52.5 xl:w-57.5 shrink-0 aspect-4/5 overflow-hidden rounded-2xl bg-linen-cream"
      >
        <Image
          src={property.image}
          alt={property.name}
          fill
          draggable={false}
          sizes="(max-width: 640px) 100vw, 230px"
          className="object-cover object-center transition-transform duration-700 ease-premium-in-out group-hover:scale-105 pointer-events-none select-none"
        />

        {/* Status Badge */}
        <div className="absolute top-3 left-3 z-20">
          <span className="inline-block px-3 py-1 text-[10px] font-mono tracking-[0.16em] uppercase bg-paper-white/95 text-graphite-ink font-semibold backdrop-blur-md rounded-full shadow-xs border border-stone/80">
            {property.statusTag}
          </span>
        </div>
      </Link>

      {/* Right: Card Body with generous space for single-line title & rich data */}
      <div className="flex flex-col justify-between flex-1 min-w-0 py-1 sm:py-1.5">
        <div className="flex flex-col gap-2">
          {/* Top Row: Brochure (left) & Trust Seal (right) */}
          <div className="flex items-center justify-between gap-2 min-h-6">
            {property.brochurePdf ? (
              <a
                href={property.brochurePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] font-semibold text-champagne hover:opacity-75 flex items-center gap-1 transition-opacity"
              >
                <FileText className="size-3.5" />
                <span>Brochure</span>
              </a>
            ) : (
              <span />
            )}
            <span className="font-mono text-[11px] font-semibold text-champagne flex items-center gap-1">
              <ShieldCheck className="size-3.5" />
              100% RAJUK
            </span>
          </div>

          {/* Title: Unconstrained full-width single line */}
          <Link href={`/projects/${property.slug}`} draggable={false} className="block">
            <h3 className="font-serif text-xl sm:text-2xl text-graphite-ink font-medium leading-tight group-hover:text-champagne transition-colors truncate">
              {property.name}
            </h3>
          </Link>

          {/* Full Location on ONE line + Landmark */}
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-1.5 text-xs text-pebble">
              <MapPin className="size-3.5 text-champagne shrink-0" />
              <span className="truncate">
                {property.region}, {property.location}
              </span>
            </div>
            {property.landmark && (
              <span className="text-[11px] font-mono text-champagne font-medium pl-5">
                {property.landmark}
              </span>
            )}
          </div>

          {/* Narrative Tagline */}
          <p className="font-serif italic text-xs text-pebble line-clamp-1 pt-0.5">
            &ldquo;{property.tagline}&rdquo;
          </p>
        </div>

        {/* Specs Grid: 4 Clean Metrics in 2x2 Grid (Zero Truncation, Zero Wrapping) */}
        <div className="mt-2.5 flex flex-col gap-2.5">
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            {/* Bedrooms */}
            <div className="bg-linen-cream/60 px-2.5 py-1.5 rounded-xl flex items-center justify-between border border-stone/40">
              <span className="text-[10px] text-pebble uppercase tracking-wider flex items-center gap-1 shrink-0">
                <Bed className="size-3 text-pebble/70" />
                Beds
              </span>
              <span className="font-medium text-graphite-ink whitespace-nowrap">{beds}</span>
            </div>

            {/* Bathrooms */}
            <div className="bg-linen-cream/60 px-2.5 py-1.5 rounded-xl flex items-center justify-between border border-stone/40">
              <span className="text-[10px] text-pebble uppercase tracking-wider flex items-center gap-1 shrink-0">
                <Bath className="size-3 text-pebble/70" />
                Baths
              </span>
              <span className="font-medium text-graphite-ink whitespace-nowrap">{baths}</span>
            </div>

            {/* Unit Size */}
            <div className="bg-linen-cream/60 px-2.5 py-1.5 rounded-xl flex items-center justify-between border border-stone/40">
              <span className="text-[10px] text-pebble uppercase tracking-wider flex items-center gap-1 shrink-0">
                <Maximize2 className="size-3 text-pebble/70" />
                Unit
              </span>
              <span className="font-medium text-graphite-ink whitespace-nowrap text-[11px] sm:text-xs">
                {unitSize}
              </span>
            </div>

            {/* Land Area */}
            <div className="bg-linen-cream/60 px-2.5 py-1.5 rounded-xl flex items-center justify-between border border-stone/40">
              <span className="text-[10px] text-pebble uppercase tracking-wider flex items-center gap-1 shrink-0">
                <Layers className="size-3 text-pebble/70" />
                Land
              </span>
              <span className="font-medium text-graphite-ink whitespace-nowrap text-[11px] sm:text-xs">
                {land}
              </span>
            </div>
          </div>

          {/* Action Link Row */}
          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] font-mono text-pebble truncate max-w-50 sm:max-w-none">
              {verandas} Verandas · {property.architecturalDetails.type}
            </span>
            <Link
              href={`/projects/${property.slug}`}
              className="inline-flex items-center gap-1 text-xs font-mono text-graphite-ink hover:text-champagne transition-colors font-medium group/link shrink-0"
            >
              <span>View Details</span>
              <ArrowUpRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 text-champagne" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
