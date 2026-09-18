"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { PROPERTIES } from "@/lib/properties-constant";
import { MapPin, ArrowRight, ShieldCheck } from "lucide-react";

export function ProjectsView() {
  const [filter, setFilter] = useState<"All" | "Completed" | "Upcoming">("All");

  const filteredProperties = PROPERTIES.filter((p) => {
    if (filter === "All") return true;
    return p.statusTag === filter;
  });

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-canvas pt-32 pb-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col gap-20">
          {/* Header Block with Quick Portfolio Metrics */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-4 border-b border-stone">
            <div className="flex flex-col gap-4 max-w-2xl">
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-champagne font-semibold flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-champagne animate-pulse" />
                Dhaka Signature Portfolio
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.02] text-graphite-ink font-medium">
                Our Signature <br />
                <span className="italic font-light text-champagne">
                  Residences &amp; Towers.
                </span>
              </h1>
              <p className="text-sm md:text-base leading-relaxed text-pebble font-normal">
                Discover our hand-crafted single-unit luxury residential landmarks across Bashundhara R/A, Gulshan, Banani, and Aftabnagar Hatirjheel Link.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 p-1.5 rounded-full border border-stone bg-linen-cream self-start lg:self-auto">
              {(["All", "Completed", "Upcoming"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`pill-btn px-5 py-2 text-xs font-mono transition-all cursor-pointer ${
                    filter === tab
                      ? "bg-obsidian text-paper-white shadow-xs"
                      : "text-pebble hover:text-graphite-ink"
                  }`}
                >
                  {tab === "All" ? "All Projects (6)" : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Staggered Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            {filteredProperties.map((property, index) => {
              const beds = property.specs.find((s) => s.label.toLowerCase().includes("bed"))?.value || "4 Beds";
              const baths = property.specs.find((s) => s.label.toLowerCase().includes("bath"))?.value || "4 Baths";
              const sqft = property.specs.find((s) => s.label.toLowerCase().includes("size") || s.label.toLowerCase().includes("area") || s.label.toLowerCase().includes("unit"))?.value || "2,850 SQFT";

              return (
                <motion.div
                  key={property.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  className="group flex flex-col bg-paper-white rounded-3xl p-4 sm:p-5 border border-stone shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 justify-between"
                >
                  {/* Top Image Window */}
                  <Link
                    href={`/projects/${property.slug}`}
                    className="block relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-stone"
                  >
                    <Image
                      src={property.image}
                      alt={property.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-premium-in-out group-hover:scale-105"
                    />

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="pill-btn inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono tracking-wider uppercase bg-paper-white/95 text-graphite-ink font-semibold backdrop-blur-md shadow-xs border border-black/5">
                        <span
                          className={`size-1.5 rounded-full ${
                            property.statusTag === "Completed"
                              ? "bg-emerald-500"
                              : "bg-champagne"
                          }`}
                        />
                        {property.statusTag}
                      </span>
                    </div>

                    {/* Year Tag */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className="pill-btn px-3 py-1 text-[11px] font-mono text-paper-white bg-black/60 backdrop-blur-md border border-white/15">
                        {property.architecturalDetails.year}
                      </span>
                    </div>
                  </Link>

                  {/* Body Content */}
                  <div className="p-4 sm:p-6 flex flex-col gap-5 flex-1 justify-between">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start justify-between gap-3">
                        <Link href={`/projects/${property.slug}`}>
                          <h2 className="font-serif text-2xl sm:text-3xl text-graphite-ink font-medium group-hover:text-black transition-colors uppercase tracking-tight">
                            {property.name}
                          </h2>
                        </Link>
                        <span className="font-mono text-xs font-semibold text-champagne shrink-0 pt-1 flex items-center gap-1">
                          <ShieldCheck className="size-3.5" />
                          100% RAJUK
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-pebble">
                        <MapPin className="size-3.5 text-champagne shrink-0" />
                        <span className="truncate">
                          {property.region}, {property.location}
                        </span>
                      </div>

                      <p className="font-serif italic text-sm text-pebble pt-1">
                        &ldquo;{property.tagline}&rdquo;
                      </p>

                      <p className="text-xs text-pebble leading-relaxed line-clamp-2 pt-1">
                        {property.description}
                      </p>
                    </div>

                    {/* Spec Strip */}
                    <div className="grid grid-cols-3 gap-2 border-t border-stone pt-4 text-xs font-mono text-graphite-ink">
                      <div className="bg-linen-cream p-2.5 rounded-xl flex flex-col">
                        <span className="text-[10px] text-pebble uppercase tracking-wider">Bedrooms</span>
                        <span className="font-medium mt-0.5">{beds}</span>
                      </div>
                      <div className="bg-linen-cream p-2.5 rounded-xl flex flex-col">
                        <span className="text-[10px] text-pebble uppercase tracking-wider">Bathrooms</span>
                        <span className="font-medium mt-0.5">{baths}</span>
                      </div>
                      <div className="bg-linen-cream p-2.5 rounded-xl flex flex-col">
                        <span className="text-[10px] text-pebble uppercase tracking-wider">Suite Area</span>
                        <span className="font-medium mt-0.5">{sqft}</span>
                      </div>
                    </div>

                    {/* Gallery Preview Thumbnails */}
                    {property.gallery && property.gallery.length > 0 && (
                      <div className="flex flex-col gap-2 pt-1">
                        <div className="flex justify-between items-center text-[10px] font-mono text-pebble">
                          <span className="uppercase tracking-wider">Architectural Gallery</span>
                          <span>{property.gallery.length} Images</span>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                          {property.gallery.slice(0, 4).map((img, imgIdx) => (
                            <div
                              key={imgIdx}
                              className="relative aspect-4/3 rounded-lg overflow-hidden border border-stone bg-stone"
                            >
                              <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes="120px"
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Bar */}
                    <div className="border-t border-stone pt-4 flex items-center justify-between">
                      <span className="text-xs font-mono text-pebble">
                        Typology: <strong className="text-graphite-ink">{property.architecturalDetails.type}</strong>
                      </span>

                      <Link
                        href={`/projects/${property.slug}`}
                        className="group/link inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-graphite-ink font-semibold hover:text-champagne transition-colors"
                      >
                        <span>View Details</span>
                        <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Custom Consultation Banner */}
          <div className="rounded-3xl sm:rounded-4xl bg-obsidian text-paper-white p-8 sm:p-12 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 shadow-xl relative overflow-hidden">
            <div className="glow-accent -bottom-30 -left-30 opacity-30" />
            <div className="flex flex-col gap-3 max-w-xl relative z-10">
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-champagne font-semibold">
                Looking for Bespoke Residences?
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-paper-white">
                Schedule a Private On-Site Tour with an Engineering Director
              </h3>
              <p className="text-xs sm:text-sm text-paper-white/70">
                Inspect raw materials, structural blueprints, and unit customizations directly with our team.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 relative z-10 shrink-0">
              <Link
                href="/contact"
                className="pill-btn inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono uppercase tracking-wider bg-champagne text-obsidian font-semibold hover:bg-champagne-light transition-all shadow-md"
              >
                <span>Book Site Tour</span>
                <ArrowRight className="size-4" />
              </Link>
              <a
                href="tel:+8801714767246"
                className="pill-btn inline-flex items-center justify-center px-6 py-3.5 text-xs font-mono uppercase tracking-wider border border-white/20 text-paper-white hover:bg-white/10 transition-colors"
              >
                +880 1714 767 246
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
