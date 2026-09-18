"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

/**
 * Thin parallax overlay that wraps the hero image container.
 * The <Image> itself is rendered server-side in hero.tsx for instant LCP.
 * This component only adds scroll-driven transform after hydration.
 */
export function HeroParallaxLayer({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY, scale: imageScale, willChange: "transform" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
