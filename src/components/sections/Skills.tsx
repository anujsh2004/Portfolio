"use client";

import { motion } from "framer-motion";
import { skills } from "@/content/skills";

export function Skills() {
  const populated = skills.filter((category) => category.items.length > 0);

  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Skills
        </h2>

        <div className="mt-12 flex flex-col gap-10">
          {populated.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs uppercase tracking-widest text-foreground-secondary">
                {category.category}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-8 gap-y-5">
                {category.items.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 rounded-full border border-transparent px-3 py-2 text-foreground-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:text-foreground"
                  >
                    <Icon size={18} strokeWidth={1.5} />
                    <span className="text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
