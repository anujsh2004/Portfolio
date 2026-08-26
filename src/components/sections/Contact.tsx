"use client";

import { motion } from "framer-motion";
import { Mail, Briefcase, FolderGit2, ArrowUpRight } from "lucide-react";
import { contact } from "@/content/contact";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32">
      <div
        aria-hidden
        className="absolute right-0 top-0 h-64 w-64 opacity-[0.35] [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:18px_18px] [mask-image:radial-gradient(circle,black,transparent_70%)]"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto flex w-full max-w-3xl flex-col items-center text-center"
      >
        <h2 className="max-w-xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {contact.heading}
        </h2>
        <p className="mt-5 max-w-md text-base leading-relaxed text-foreground-secondary">
          {contact.description}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href={`mailto:${site.email}`} variant="secondary" icon={<Mail size={16} />}>
            Email Me
          </Button>
          {site.social.linkedin && (
            <Button href={site.social.linkedin} variant="secondary" icon={<Briefcase size={16} />}>
              LinkedIn
            </Button>
          )}
          {site.social.github && (
            <Button href={site.social.github} variant="secondary" icon={<FolderGit2 size={16} />}>
              GitHub
            </Button>
          )}
          <Button href={contact.talkCta.href} variant="primary" icon={<ArrowUpRight size={16} />}>
            {contact.talkCta.label}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
