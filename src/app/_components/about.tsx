"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";

const STATS = [
  { value: 6, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "%", label: "RAJUK Sanctioned" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 9, suffix: "", label: "Max G+ Floors" },
];

const PILLARS = [
  {
    label: "Single-Unit Floor Privacy",
    detail:
      "One exclusive residence per floor with dedicated private lift access, full acoustic isolation, and 360-degree daylight across living zones.",
    image: "/images/projects/avenue-ahsan-palace/project_image_1.jpeg",
  },
  {
    label: "Certified Structural Longevity",
    detail:
      "Engineered with BSRM 500W rebar, Holcim cement, stone chips casting, and complete IEB-stamped structural load calculations.",
    image: "/images/projects/avenue-md-heights/project_image_5.jpeg",
  },
  {
    label: "Prime Dhaka Enclaves",
    detail:
      "Freehold plots hand-selected in Bashundhara R/A (Block E, near Evercare), Aftabnagar Hatirjheel Link, Gulshan, and Banani.",
    image: "/images/projects/avenue-md-heights/project_image_8.jpeg",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!isInView) return;

    let current = 0;
    const step = Math.max(1, Math.floor(value / 40));
    const interval = setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="relative z-10 w-full py-24 md:py-32 px-6 sm:px-8 md:px-12 bg-paper-white text-graphite-ink"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        {/* Section Header: 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Brand Story with vertical accent */}
          <div className="lg:col-span-6 flex flex-col gap-5 relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-champagne via-champagne/30 to-transparent hidden lg:block" />
            <div className="lg:pl-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-champagne font-semibold">
                About Avenue Constructions
              </span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.12] tracking-[-0.015em] text-graphite-ink font-medium mt-3"
              >
                Crafting private single-unit residences with structural permanence in Dhaka.
              </motion.h2>

              <p className="text-body leading-[1.7] text-pebble font-normal pt-4">
                Headquartered in Purana Paltan, Dhaka, Avenue Constructions Limited is an institutional-grade developer of private single-unit residences. We build homes for discerning families who value total privacy, generous spatial volume, and permanent structural integrity.
              </p>

              <div className="pt-5">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-4 border-b border-graphite-ink pb-2 text-[10px] uppercase tracking-[0.14em] text-graphite-ink hover:text-champagne hover:border-champagne transition-colors"
                >
                  <span>Our Story &amp; Philosophy</span>
                  <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">↗</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Counter Stats */}
          <div className="lg:col-span-6 grid grid-cols-2 border-t border-stone">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="py-7 pr-5 border-b border-stone flex flex-col gap-3 odd:border-r odd:pr-7 even:pl-7"
              >
                <span className="font-serif text-[clamp(2.4rem,5vw,3.6rem)] font-medium text-graphite-ink leading-none">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-pebble">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mx-auto" />

        {/* Architectural Masterwork Video Feature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="relative w-full aspect-video overflow-hidden border-y border-stone bg-black group"
        >
          <iframe
            src="https://www.youtube-nocookie.com/embed/IIz5zEPHBHk?autoplay=1&mute=1&start=6&controls=0&loop=1&playlist=IIz5zEPHBHk&playsinline=1&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&disablekb=1"
            title="Avenue Ahsan Palace at Bashundhara, Dhaka"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-[-15%] left-[-15%] w-[130%] h-[130%] object-cover border-0 pointer-events-none"
          />
          <div className="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-transparent to-black/20 pointer-events-auto" />
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-20 text-paper-white pointer-events-none">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-champagne block mb-1">
              Architectural Handover Showcase
            </span>
            <p className="font-serif text-xl sm:text-2xl md:text-3xl font-medium leading-snug">
              Avenue Ahsan Palace &middot; Bashundhara R/A
            </p>
          </div>
        </motion.div>

        {/* The 3 Core Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-start pt-4">
          {PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.32, 0.72, 0, 1],
              }}
              className={`${index === 0 ? "md:col-span-5" : index === 1 ? "md:col-span-3 md:mt-20" : "md:col-span-4 md:mt-8"} group border-t border-stone pt-3`}
            >
              <div className="flex flex-col justify-between bg-transparent">
                <div className="relative aspect-4/3 w-full overflow-hidden bg-stone">
                  <Image
                    src={pillar.image}
                    alt={pillar.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-premium-in-out group-hover:scale-105"
                  />
                </div>
                <div className="pt-5 flex flex-col gap-3">
                  <h3 className="font-serif text-2xl text-graphite-ink font-medium">
                    {pillar.label}
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-pebble font-normal">
                    {pillar.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
