"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { TEAM_MEMBERS } from "@/lib/team-constant";

export function Team() {
  return (
    <section
      id="team"
      className="relative z-10 px-6 sm:px-8 md:px-12 py-24 md:py-32 bg-paper-white text-graphite-ink"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">
        {/* Header Row: Title on Left, Description & CTA on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-champagne font-semibold">
              Our Leadership
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.08] tracking-[-0.015em] text-graphite-ink">
              Leadership &amp; Engineering Stewards.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 max-w-md">
            <p className="text-[14px] text-pebble leading-relaxed">
              Work with experienced structural engineers, legal advisors, and corporate leaders who ensure absolute transparency and execution precision.
            </p>
            <Link
              href="/contact"
              className="group pill-btn shrink-0 inline-flex items-center gap-2.5 px-5 py-2.5 text-xs font-mono uppercase tracking-wider bg-obsidian text-paper-white hover:bg-black transition-all shadow-xs"
            >
              <span>Contact Us</span>
              <span className="flex size-5 items-center justify-center rounded-full bg-paper-white/15 text-[10px] transition-transform duration-300 group-hover:translate-x-0.5">
                &rarr;
              </span>
            </Link>
          </div>
        </div>

        {/* All 5 Team Members Grid (Fazora Exact Portrait Card Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="group flex flex-col bg-paper-white rounded-3xl p-3 border border-stone shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 justify-between"
            >
              {/* Portrait Photo Container */}
              <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden bg-linen-cream">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover object-top transition-transform duration-700 ease-premium-in-out group-hover:scale-105"
                />
              </div>

              {/* Member Details */}
              <div className="p-3 pt-4 flex flex-col gap-1.5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-champagne font-medium truncate">
                  {member.role}
                </span>
                <h3 className="font-serif text-lg font-medium text-graphite-ink leading-snug">
                  {member.name}
                </h3>
                <p className="text-xs text-pebble leading-relaxed line-clamp-3 pt-1">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
