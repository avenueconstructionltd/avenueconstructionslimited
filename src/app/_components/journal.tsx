"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

interface JournalArticle {
  title: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
  href: string;
}

const ARTICLES: JournalArticle[] = [
  {
    title: "The Single-Unit Floor: Why Dhaka’s Elite Choose Total Privacy",
    category: "Architecture",
    date: "12/9/2026",
    readTime: "4 min read",
    image: "/images/projects/avenue-ahsan-palace/project_image_1.jpeg",
    href: "/about",
  },
  {
    title: "Cantilever Balconies & Daylight Corridors in Tropical Climates",
    category: "Engineering",
    date: "10/18/2026",
    readTime: "5 min read",
    image: "/images/projects/avenue-md-heights/project_image_5.jpeg",
    href: "/about",
  },
  {
    title: "Fair-Faced Concrete & Acoustic Glazing: Building for 100 Years",
    category: "Materials",
    date: "08/14/2026",
    readTime: "6 min read",
    image: "/images/projects/avenue-md-heights/project_image_8.jpeg",
    href: "/about",
  },
  {
    title: "Maximizing Generational Land Value Through Joint Ventures",
    category: "Advisory",
    date: "06/02/2026",
    readTime: "3 min read",
    image: "/images/projects/avenue-ahsan-palace/project_image_1.jpeg",
    href: "/landowner",
  },
];

export function ArchitecturalJournal() {
  return (
    <section className="relative z-10 w-full py-24 md:py-32 px-6 sm:px-8 md:px-12 bg-paper-white text-graphite-ink">
      <div className="max-w-7xl mx-auto flex flex-col gap-14 md:gap-18">
        {/* Centered Fazora-Style Header */}
        <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-champagne font-semibold">
            Architectural Insights &amp; Journal
          </span>
          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.08] tracking-[-0.015em] text-graphite-ink">
            Trends and inspiration in one place.
          </h2>
          <p className="text-body text-pebble leading-relaxed">
            At Avenue, every home embodies spatial precision, structural honesty, and timeless elegance.
          </p>
        </div>

        {/* 4-Card Grid (Fazora 2x2 Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTICLES.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="group relative aspect-16/10 sm:aspect-video rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-stone bg-linen-cream"
            >
              {/* Background Image */}
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-premium-in-out group-hover:scale-105"
              />

              {/* Gradient Scrim for Readability */}
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/10 pointer-events-none" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="pill-btn px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-paper-white bg-black/60 backdrop-blur-md border border-white/15">
                  {article.category}
                </span>
              </div>

              {/* Bottom Card Overlay: Title & Date (Fazora Exact Style) */}
              <div className="absolute bottom-4 inset-x-4 sm:bottom-6 sm:inset-x-6 z-10 flex items-end justify-between gap-4">
                <Link href={article.href} className="flex-1">
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-paper-white font-medium group-hover:text-champagne transition-colors leading-snug">
                    {article.title}
                  </h3>
                </Link>

                <span className="pill-btn px-3 py-1 text-[11px] font-mono text-paper-white bg-white/15 backdrop-blur-md border border-white/20 shrink-0">
                  {article.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
