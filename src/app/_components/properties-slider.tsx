"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROPERTIES } from "@/lib/properties-constant";

gsap.registerPlugin(ScrollTrigger);

export function PropertiesSlider() {
  const [filter, setFilter] = useState<"All" | "Completed" | "Upcoming">("All");
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProperties = PROPERTIES.filter((property) => {
    if (filter === "All") return true;
    return property.statusTag === filter;
  });

  /* Re-trigger GSAP reveals when filter changes */
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll<HTMLElement>("[data-property-card]");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 50,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: grid,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      /* Subtle parallax on each card image */
      cards.forEach((card) => {
        const imageWrapper = card.querySelector<HTMLElement>("[data-card-image]");
        if (!imageWrapper) return;

        gsap.to(imageWrapper, {
          y: -16,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      });
    });

    return () => ctx.revert();
  }, [filter, filteredProperties.length]);

  return (
    <section
      id="residences"
      className="relative z-10 w-full py-24 md:py-32 px-6 sm:px-8 md:px-12 bg-paper-white text-graphite-ink overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="font-mono text-xs text-champagne-dark uppercase tracking-[0.25em] font-semibold">
              Curated Portfolio
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.08] tracking-[-0.015em] text-graphite-ink font-medium">
              Signature Residences &amp; Developments.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-pebble leading-relaxed">
              Every residence is engineered with fair-faced concrete, private elevator access, and bespoke spatial layouts across Dhaka&apos;s prime enclaves.
            </p>
          </div>

          {/* Filter Pills and View All */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            <div className="flex items-center gap-1.5 p-1 rounded-full border border-stone bg-linen-cream/70">
              {(["All", "Completed", "Upcoming"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-4 py-1.5 text-xs font-mono rounded-full transition-all cursor-pointer ${
                    filter === tab
                      ? "bg-obsidian text-paper-white shadow-xs"
                      : "text-pebble hover:text-graphite-ink"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <Link
              href="/projects"
              className="group inline-flex items-center gap-2.5 px-4 py-2 text-xs font-mono rounded-full border border-stone bg-paper-white text-graphite-ink hover:border-champagne hover:bg-linen-cream/50 transition-colors shadow-2xs"
            >
              <span>All 6 Projects</span>
              <span className="text-champagne transition-transform duration-300 group-hover:translate-x-0.5">
                &rarr;
              </span>
            </Link>
          </div>
        </div>

        {/* Property Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PropertyCard({
  property,
}: {
  property: (typeof PROPERTIES)[0];
}) {
  const beds = property.specs.find((s) => s.label.toLowerCase().includes("bed"))?.value || "4 Beds";
  const baths = property.specs.find((s) => s.label.toLowerCase().includes("bath"))?.value || "4 Baths";
  const sqft = property.specs.find((s) => s.label.toLowerCase().includes("size") || s.label.toLowerCase().includes("area") || s.label.toLowerCase().includes("unit"))?.value || "2,850 SQFT";

  return (
    <div
      data-property-card
      className="group flex flex-col h-full rounded-2xl border border-stone bg-paper-white hover:border-champagne/70 shadow-[0_2px_10px_rgba(20,21,24,0.03)] hover:shadow-[0_16px_36px_-8px_rgba(20,21,24,0.08)] hover:-translate-y-1.5 transition-all duration-400 ease-out p-3.5 sm:p-4"
    >
      {/* Image Frame */}
      <Link
        href={`/projects/${property.slug}`}
        className="block relative aspect-4/3 w-full overflow-hidden rounded-xl bg-linen-cream"
      >
        <div data-card-image className="absolute inset-0">
          <Image
            src={property.image}
            alt={property.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 384px"
            className="object-cover transition-transform duration-700 ease-premium-in-out group-hover:scale-105"
          />
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 left-3 z-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono tracking-wider uppercase bg-paper-white/95 text-graphite-ink font-medium backdrop-blur-md border border-stone/70 rounded-full shadow-xs">
            <span
              className={`size-1.5 rounded-full ${
                property.statusTag === "Completed"
                  ? "bg-emerald-600"
                  : "bg-champagne"
              }`}
            />
            {property.statusTag}
          </span>
        </div>

        {/* Year Tag */}
        <div className="absolute top-3 right-3 z-20">
          <span className="px-2.5 py-0.5 text-[10px] font-mono text-pebble bg-paper-white/95 backdrop-blur-md border border-stone/70 rounded-full shadow-xs">
            {property.architecturalDetails.year}
          </span>
        </div>
      </Link>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex flex-col gap-4 flex-1 justify-between">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-start justify-between gap-2">
            <Link href={`/projects/${property.slug}`}>
              <h3 className="font-serif text-xl sm:text-2xl text-graphite-ink font-medium group-hover:text-champagne transition-colors">
                {property.name}
              </h3>
            </Link>
            <span className="font-mono text-xs font-semibold text-champagne shrink-0 pt-0.5">
              100% RAJUK
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs text-pebble">
            <svg
              className="size-3.5 shrink-0 text-champagne"
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
        <div className="flex items-center justify-between border-t border-stone/50 pt-3.5 text-xs font-mono text-pebble">
          {/* Beds */}
          <div className="flex items-center gap-1.5">
            <svg
              className="size-3.5 text-pebble/60"
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
              className="size-3.5 text-pebble/60"
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
              className="size-3.5 text-pebble/60"
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
    </div>
  );
}
