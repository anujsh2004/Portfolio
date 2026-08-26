"use client";

import { motion } from "framer-motion";
import { philosophy } from "@/content/contact";

export function Philosophy() {
  return (
    <section className="px-6 py-40">
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-3xl text-balance text-center font-display text-3xl font-medium leading-snug tracking-tight text-foreground sm:text-4xl md:text-5xl"
      >
        &ldquo;{philosophy.quote}&rdquo;
        {philosophy.attribution && (
          <footer className="mt-6 text-base font-normal text-foreground-secondary">
            — {philosophy.attribution}
          </footer>
        )}
      </motion.blockquote>
    </section>
  );
}
