"use client";

import { motion } from "framer-motion";
import { currentFocus } from "@/content/contact";

const trafficLights = [
  { color: "#FF5F56" }, // red
  { color: "#FFBD2E" }, // yellow
  { color: "#27C93F" }, // green
];

function TerminalLine({ line }: { line: string }) {
  if (line.startsWith("$ ")) {
    return (
      <>
        <span style={{ color: "#4ADE80" }}>$</span> {line.slice(2)}
      </>
    );
  }

  if (line.startsWith("> ")) {
    return (
      <>
        <span className="text-accent">{">"}</span>{" "}
        <span style={{ color: "#7DD3FC" }}>{line.slice(2)}</span>
      </>
    );
  }

  const statusMatch = line.match(/^(Status:)\s*(.+)$/);
  if (statusMatch) {
    return (
      <>
        <span className="text-white/50">{statusMatch[1]}</span>{" "}
        <span className="text-accent">{statusMatch[2]}</span>
      </>
    );
  }

  return <>{line}</>;
}

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
          {trafficLights.map(({ color }, index) => (
            <span
              key={index}
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <div className="px-5 py-6 font-mono text-sm leading-relaxed text-white/70">
          {lines.map((line, index) => (
            <p key={`${line}-${index}`}>
              <TerminalLine line={line} />
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
