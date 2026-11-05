"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TEAM_MEMBERS } from "@/lib/team-constant";

export function Team() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section
      id="team"
      className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-12 py-24 md:py-32 bg-paper-white text-graphite-ink overflow-hidden"
    >
      <div className="max-w-360 mx-auto flex flex-col gap-10 md:gap-14">
        {/* Centered Top Header (Clean Single-Line Title & Description) */}
        <div className="flex flex-col items-center text-center gap-2.5 max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-pebble font-medium">
            Our Leadership
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.2rem] leading-tight tracking-tight text-graphite-ink font-medium sm:whitespace-nowrap">
            Leadership &amp; Engineering Stewards
          </h2>
          <p className="text-sm sm:text-[15px] text-pebble leading-relaxed sm:whitespace-nowrap">
            Experienced structural engineers, legal advisors, and corporate leaders ensuring execution precision.
          </p>
        </div>

        {/* Wider Slider Track with Left & Right Flanking Arrow Controls */}
        <div className="relative w-full flex items-center gap-2 sm:gap-4 lg:gap-6">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Previous team member"
            className="shrink-0 size-10 sm:size-11 lg:size-12 rounded-full border border-stone bg-paper-white text-graphite-ink hover:bg-obsidian hover:text-paper-white hover:border-obsidian flex items-center justify-center transition-all duration-300 shadow-xs cursor-pointer active:scale-95"
          >
            <ArrowLeft className="size-4 sm:size-5" />
          </button>

          {/* One-Line Horizontal Slider (Fits 4 Cards on Desktop / 3.5 on Laptops) */}
          <div
            ref={scrollRef}
            className="flex-1 min-w-0 flex gap-4 sm:gap-5 lg:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-1 scrollbar-none"
          >
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="w-70 sm:w-75 lg:w-72.5 xl:w-75 shrink-0 snap-start group/card flex flex-col bg-paper-white rounded-3xl p-3 border border-stone shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 justify-between"
              >
                {/* Portrait Photo Container */}
                <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden bg-linen-cream">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 300px, 310px"
                    className="object-cover object-top transition-transform duration-700 ease-premium-in-out group-hover/card:scale-105"
                  />
                </div>

                {/* Member Details */}
                <div className="p-3 pt-4 flex flex-col gap-1.5">
                  <span className="text-xs uppercase tracking-wider text-champagne-dark font-medium truncate">
                    {member.role}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-graphite-ink leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-xs text-pebble leading-relaxed line-clamp-3 pt-1">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={scrollRight}
            aria-label="Next team member"
            className="shrink-0 size-10 sm:size-11 lg:size-12 rounded-full border border-stone bg-paper-white text-graphite-ink hover:bg-obsidian hover:text-paper-white hover:border-obsidian flex items-center justify-center transition-all duration-300 shadow-xs cursor-pointer active:scale-95"
          >
            <ArrowRight className="size-4 sm:size-5" />
          </button>
        </div>

        {/* Bottom Navigation & CTA Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <span className="text-xs font-mono text-pebble">
            All {TEAM_MEMBERS.length} Leadership &amp; Engineering Members
          </span>

          <Link
            href="/contact"
            className="group pill-btn inline-flex items-center gap-2.5 px-6 py-2.5 text-xs uppercase tracking-wider bg-obsidian text-paper-white hover:bg-black transition-all shadow-xs"
          >
            <span>Contact Our Team</span>
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
