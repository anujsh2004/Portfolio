"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { about } from "@/content/about";
import { EducationCard } from "./EducationCard";

export function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <EducationCard />
        </motion.div>
      </div>
    </section>
  );
}
