"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function HeroBackground() {
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
        className="absolute inset-0 gpu-accelerated"
        style={{ y: imageY, scale: imageScale }}
      >
        <Image
          src="/images/hero-dhaka-luxury.webp"
          alt="Avenue Constructions Premier Single-Unit Architecture in Dhaka"
          fill
          priority
          quality={65}
          sizes="100vw"
          className="object-cover object-center brightness-100 contrast-[1.02]"
        />
      </motion.div>
    </div>
  );
}
