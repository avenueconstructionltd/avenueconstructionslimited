"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { TEAM_MEMBERS } from "@/lib/team-constant";

export function Team() {
  return (
    <section
      id="team"
      suppressHydrationWarning
      className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-surface z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-accent">
            Our Leadership
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight leading-[1.05] text-text-primary uppercase">
            The Minds Behind <br />
            <span className="italic font-light text-accent">
              the Structures
            </span>
          </h2>
        </div>

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {TEAM_MEMBERS.map((member, index) => {
            const isLeader = index === 0;

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className={`double-bezel-outer ${
                  isLeader ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                }`}
              >
                <div
                  className={`double-bezel-inner h-full bg-surface ${
                    isLeader
                      ? "grid grid-cols-1 sm:grid-cols-2"
                      : "flex flex-col justify-between"
                  }`}
                >
                  {/* Image side */}
                  <div
                    className={`relative overflow-hidden ${
                      isLeader
                        ? "h-64 sm:h-full w-full min-h-80"
                        : "aspect-4/3 w-full"
                    }`}
                  >
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      sizes={
                        isLeader
                          ? "(max-width: 640px) 100vw, 50vw"
                          : "(max-width: 768px) 100vw, 33vw"
                      }
                      className="object-cover object-top transition-transform duration-700 ease-premium-in-out hover:scale-105"
                    />
                  </div>

                  {/* Text side */}
                  <div className="p-8 flex flex-col justify-between gap-6 bg-surface">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-mono font-semibold">
                        {member.role}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl uppercase tracking-wider text-text-primary mt-2">
                        {member.name}
                      </h3>
                      <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-light mt-4">
                        {member.bio}
                      </p>
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-text-secondary/40 font-mono pt-4 border-t border-black/5">
                      Team / 0{index + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
