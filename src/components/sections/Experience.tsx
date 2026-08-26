"use client";

import { motion } from "framer-motion";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Experience
        </h2>

        <div className="mt-12 flex max-w-3xl flex-col">
          {experience.map((entry, index) => (
            <motion.div
              key={`${entry.role}-${entry.organization}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative border-l border-border pb-12 pl-8 last:pb-0"
            >
              <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full border-2 border-accent bg-background" />

              <p className="font-mono text-xs text-foreground-secondary">{entry.date}</p>
              <h3 className="mt-1.5 font-display text-lg font-semibold text-foreground">
                {entry.role}
              </h3>
              <p className="text-sm text-accent">{entry.organization}</p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground-secondary">
                {entry.description}
              </p>

              {entry.achievements && entry.achievements.length > 0 && (
                <ul className="mt-3 flex max-w-xl flex-col gap-1.5">
                  {entry.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex gap-2 text-sm leading-relaxed text-foreground-secondary"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}

              {entry.technologies.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {entry.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-2.5 py-1 text-xs text-foreground-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
