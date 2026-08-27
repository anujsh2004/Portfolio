"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { about } from "@/content/about";

export function About() {
  return (
    <section id="about" className="px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-6xl"
      >
        <h2 className="max-w-lg font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {about.heading}
        </h2>
        <p className="mt-6 max-w-md text-base leading-relaxed text-foreground-secondary">
          {about.paragraph}
        </p>
        <Link
          href={about.linkHref}
          className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
        >
          {about.linkLabel}
          <ArrowRight
            size={15}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </motion.div>
    </section>
  );
}
