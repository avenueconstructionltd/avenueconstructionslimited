"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROPERTIES } from "@/lib/properties-constant";

gsap.registerPlugin(ScrollTrigger);

export function PropertiesSlider() {
  const [filter, setFilter] = useState<"All" | "Completed" | "Upcoming">("All");
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Mouse click-and-drag to scroll
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  const filteredProperties = PROPERTIES.filter((property) => {
    if (filter === "All") return true;
    return property.statusTag === filter;
  });

  const checkScroll = useCallback(() => {
    const el = sliderRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = sliderRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll, filteredProperties.length]);

  const scrollPrev = () => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 32 : 400;
    sliderRef.current.scrollBy({ left: -step, behavior: "smooth" });
  };

  const scrollNext = () => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 32 : 400;
    sliderRef.current.scrollBy({ left: step, behavior: "smooth" });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    const el = sliderRef.current;
    if (!el) return;
    isDownRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX;
    scrollLeftRef.current = el.scrollLeft;

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (!isDownRef.current || !sliderRef.current) return;
      const x = moveEvent.pageX;
      const walk = (x - startXRef.current) * 1.25;
      if (Math.abs(x - startXRef.current) > 5) {
        if (!hasDraggedRef.current) {
          hasDraggedRef.current = true;
          setIsDragging(true);
          sliderRef.current.style.scrollSnapType = "none";
          sliderRef.current.style.scrollBehavior = "auto";
        }
        sliderRef.current.scrollLeft = scrollLeftRef.current - walk;
      }
    };

    const onMouseUp = () => {
      isDownRef.current = false;
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      if (sliderRef.current) {
        sliderRef.current.style.scrollSnapType = "";
        sliderRef.current.style.scrollBehavior = "";
      }
      setTimeout(() => {
        setIsDragging(false);
        hasDraggedRef.current = false;
      }, 50);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const handleClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  /* Re-trigger GSAP reveals when filter changes */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = slider.querySelectorAll<HTMLElement>("[data-property-card]");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 40,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: slider,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
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
            <span className="font-mono text-xs text-pebble uppercase tracking-[0.25em] font-semibold">
              Curated Portfolio
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.08] tracking-[-0.015em] text-graphite-ink font-medium">
              Signature Residences &amp; Developments.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-pebble leading-relaxed">
              Every residence is engineered with fair-faced concrete, private elevator access, and bespoke spatial layouts across Dhaka&apos;s prime enclaves.
            </p>
          </div>

          {/* Controls: Filter Pills, View All */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            <div className="flex items-center gap-1.5 p-1 rounded-full border border-stone bg-linen-cream/70">
              {(["All", "Completed", "Upcoming"] as const)
                .filter(
                  (tab) =>
                    tab === "All" ||
                    PROPERTIES.some((property) => property.statusTag === tab),
                )
                .map((tab) => (
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
              <span>All {PROPERTIES.length} Projects</span>
              <span className="text-champagne transition-transform duration-300 group-hover:translate-x-0.5">
                &rarr;
              </span>
            </Link>
          </div>
        </div>

        {/* Carousel Slider with Flanking Left & Right Arrow Buttons */}
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
          {/* Left Arrow Button (Flanking with Dedicated Gap) */}
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canScrollLeft}
            aria-label="Previous project"
            className="hidden sm:flex shrink-0 size-12 lg:size-14 rounded-full border border-stone/90 bg-paper-white text-graphite-ink shadow-[0_4px_20px_rgba(20,21,24,0.06)] hover:bg-obsidian hover:text-paper-white hover:border-obsidian hover:shadow-[0_10px_28px_rgba(20,21,24,0.18)] disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-paper-white disabled:hover:text-graphite-ink disabled:hover:scale-100 disabled:shadow-none transition-all duration-300 items-center justify-center cursor-pointer hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="size-5 lg:size-6 stroke-[2.2]" />
          </button>

          {/* Slider Track Container */}
          <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onClickCapture={handleClickCapture}
            className={`flex-1 min-w-0 flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 pt-2 scrollbar-none [&::-webkit-scrollbar]:hidden select-none ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            {filteredProperties.map((property) => (
              <div
                key={property.slug}
                data-property-card
                className="w-[85vw] sm:w-85 md:w-95 lg:w-[calc(33.333%-1.35rem)] shrink-0 snap-start h-auto"
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>

          {/* Right Arrow Button (Flanking with Dedicated Gap) */}
          <button
            type="button"
            onClick={scrollNext}
            disabled={!canScrollRight}
            aria-label="Next project"
            className="hidden sm:flex shrink-0 size-12 lg:size-14 rounded-full border border-stone/90 bg-paper-white text-graphite-ink shadow-[0_4px_20px_rgba(20,21,24,0.06)] hover:bg-obsidian hover:text-paper-white hover:border-obsidian hover:shadow-[0_10px_28px_rgba(20,21,24,0.18)] disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-paper-white disabled:hover:text-graphite-ink disabled:hover:scale-100 disabled:shadow-none transition-all duration-300 items-center justify-center cursor-pointer hover:scale-105 active:scale-95"
          >
            <ChevronRight className="size-5 lg:size-6 stroke-[2.2]" />
          </button>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex sm:hidden items-center justify-between pt-2 px-1">
          <span className="font-mono text-xs text-pebble">
            Swipe or use arrows ({filteredProperties.length} residences)
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollLeft}
              aria-label="Previous project"
              className="size-10 rounded-full border border-stone/80 bg-paper-white text-graphite-ink flex items-center justify-center disabled:opacity-20 shadow-xs cursor-pointer active:scale-95 transition-all"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={!canScrollRight}
              aria-label="Next project"
              className="size-10 rounded-full border border-stone/80 bg-paper-white text-graphite-ink flex items-center justify-center disabled:opacity-20 shadow-xs cursor-pointer active:scale-95 transition-all"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
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
    <div className="group flex flex-col h-full rounded-2xl border border-stone bg-paper-white hover:border-champagne/70 shadow-[0_2px_10px_rgba(20,21,24,0.03)] hover:shadow-[0_16px_36px_-8px_rgba(20,21,24,0.08)] hover:-translate-y-1.5 transition-all duration-400 ease-out p-3.5 sm:p-4">
      {/* Image Frame (4:5 matching the new project image ratio) */}
      <Link
        href={`/projects/${property.slug}`}
        draggable={false}
        className="block relative aspect-4/5 w-full overflow-hidden rounded-xl bg-linen-cream"
      >
        <div data-card-image className="absolute inset-0">
          <Image
            src={property.image}
            alt={property.name}
            fill
            draggable={false}
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 380px, 420px"
            className="object-cover transition-transform duration-700 ease-premium-in-out group-hover:scale-105 pointer-events-none select-none"
          />
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 left-3 z-20">
          <span className="inline-flex items-center px-3 py-1 text-[11px] font-mono tracking-wider uppercase bg-paper-white/95 text-graphite-ink font-medium backdrop-blur-md border border-stone/70 rounded-full shadow-xs">
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
            <Link href={`/projects/${property.slug}`} draggable={false}>
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
