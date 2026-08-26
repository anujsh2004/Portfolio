"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ChevronDown, ImageIcon } from "lucide-react";
import { hero } from "@/content/hero";
import { Button } from "@/components/ui/Button";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero({ hasProfileImage }: { hasProfileImage: boolean }) {
  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion ? "show" : "hidden";

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          variants={container}
          initial={initial}
          animate="show"
          className="order-2 lg:order-1"
        >
          <motion.p variants={item} className="text-base text-foreground-secondary">
            {hero.greeting}
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-2 font-display text-5xl font-semibold tracking-tight text-foreground sm:text-6xl"
          >
            {hero.name}
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-3 text-xl font-medium text-accent sm:text-2xl"
          >
            {hero.title}
          </motion.p>
          <motion.p
            variants={item}
            className="mt-6 max-w-md text-base leading-relaxed text-foreground-secondary"
          >
            {hero.description}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={hero.primaryButton.href} variant="primary">
              {hero.primaryButton.label}
            </Button>
            <Button
              href={hero.secondaryButton.href}
              variant="secondary"
              icon={<ChevronDown size={16} className="-rotate-90" />}
            >
              {hero.secondaryButton.label}
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial={initial}
          animate="show"
          className="relative order-1 mx-auto flex aspect-square w-full max-w-sm items-center justify-center lg:order-2"
        >
          <motion.div
            variants={item}
            className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.14),transparent_70%)]"
            aria-hidden
          />

          <motion.svg
            variants={item}
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 400 400"
            fill="none"
            aria-hidden
          >
            <motion.circle
              cx="200"
              cy="200"
              r="178"
              stroke="var(--accent)"
              strokeOpacity="0.35"
              strokeWidth="1"
              initial={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.circle
              cx="200"
              cy="22"
              r="4"
              fill="var(--accent)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.3 }}
            />
          </motion.svg>

          <motion.div
            variants={item}
            className="relative h-[78%] w-[78%] overflow-hidden rounded-full"
          >
            {hasProfileImage ? (
              <Image
                src={hero.image}
                alt={hero.name}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 380px, 320px"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-border bg-surface text-center">
                <ImageIcon size={28} strokeWidth={1.5} className="text-foreground-secondary" />
                <p className="px-6 text-xs text-foreground-secondary">
                  Add your photo at
                  <br />
                  <span className="font-mono">/public/images/profile/profile.png</span>
                </p>
              </div>
            )}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={initial}
        animate="show"
        variants={item}
        className="mx-auto mt-16 flex w-full max-w-6xl flex-col items-center gap-10"
      >
        <div className="flex flex-col items-center gap-2 text-foreground-secondary">
          <span className="text-xs tracking-wide">{hero.scrollHint}</span>
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </div>

        <div className="w-full">
          <p className="mb-5 text-center text-xs uppercase tracking-widest text-foreground-secondary">
            {hero.techStackLabel}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {hero.techStack.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 text-foreground-secondary transition-colors hover:text-foreground"
              >
                <Icon size={22} strokeWidth={1.5} />
                <span className="text-xs">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
