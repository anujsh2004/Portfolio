"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { stats } from "@/content/stats";
import { cn } from "@/lib/utils";

function CountUpNumber({ value, suffix }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const hasAnimated = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  const start = () => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    const duration = 900;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  return (
    <motion.span
      onViewportEnter={start}
      viewport={{ once: true, amount: 0.6 }}
      className="font-display text-4xl font-semibold text-foreground sm:text-5xl"
    >
      {display}
      {suffix}
    </motion.span>
  );
}

export function Stats() {
  // "Years of Coding" is still an unconfirmed placeholder (value: 0) — hide it
  // rather than show a broken-looking "0+" until Anuj confirms the real number.
  const visibleStats = stats.filter((stat) => stat.value > 0);

  if (visibleStats.length === 0) return null;

  return (
    <section id="stats" className="px-6 py-20">
      <div
        className={cn(
          "mx-auto grid w-full max-w-4xl grid-cols-2 gap-y-10",
          visibleStats.length >= 4 ? "sm:grid-cols-4" : "sm:grid-cols-3"
        )}
      >
        {visibleStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center"
          >
            <CountUpNumber value={stat.value} suffix={stat.suffix} />
            <span className="mt-2 text-sm text-foreground-secondary">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
