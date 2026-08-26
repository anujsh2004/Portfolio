"use client";

import { motion } from "framer-motion";
import { currentFocus } from "@/content/contact";

export function CurrentlyBuilding() {
  const lines = [...currentFocus.terminalLines, ...currentFocus.items.map((item) => `> ${item}`)];

  return (
    <section id="currently-building" className="px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-[#0d0d10]"
      >
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>

        <div className="px-5 py-6 font-mono text-sm leading-relaxed text-white/70">
          {lines.map((line, index) => (
            <p key={`${line}-${index}`}>
              {line}
              {index === lines.length - 1 && (
                <span className="ml-1 inline-block h-[1em] w-[7px] translate-y-[2px] animate-pulse bg-accent align-middle" />
              )}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
