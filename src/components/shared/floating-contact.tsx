// @ts-check
"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";

export function FloatingContact() {
  const [hoveredButton, setHoveredButton] = useState<
    "whatsapp" | "phone" | null
  >(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(handle);
  }, []);

  if (!mounted) return null;

  const items = [
    {
      key: "whatsapp" as const,
      href: "https://wa.me/8801714767246",
      external: true,
      label: "WhatsApp Advisor",
      delay: 0.2,
      icon: <MessageCircle className="size-5" strokeWidth={1.75} />,
    },
    {
      key: "phone" as const,
      href: "tel:+8801714767246",
      external: false,
      label: "Call Concierge",
      delay: 0.3,
      icon: <Phone className="size-5" strokeWidth={1.75} />,
    },
  ];

  return (
    <div
      className="flex flex-col items-end gap-2.5 fixed z-50 bottom-6 right-6"
    >
      {items.map((item) => {
        const isHovered = hoveredButton === item.key;
        return (
          <div
            key={item.key}
            className="flex items-center"
            onMouseEnter={() => setHoveredButton(item.key)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <AnimatePresence>
              {isHovered && (
                <motion.a
                  suppressHydrationWarning
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, scale: 0.95, x: 10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: 10 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="mr-2 flex h-9 items-center whitespace-nowrap rounded-full border border-stone bg-paper-white px-3.5 text-xs text-graphite-ink shadow-xs"
                >
                  <span className="font-normal tracking-wide">
                    {item.label}
                  </span>
                </motion.a>
              )}
            </AnimatePresence>

            <motion.a
              suppressHydrationWarning
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="flex size-12 shrink-0 items-center justify-center rounded-full bg-charcoal text-paper-white hover:bg-graphite-ink shadow-sm transition-colors"
              aria-label={item.label}
            >
              {item.icon}
            </motion.a>
          </div>
        );
      })}
    </div>
  );
}
