"use client";

import { motion, useReducedMotion } from "framer-motion";

// A single isometric cube: top / left / right rhombus faces, drawn as one
// hexagon outline split into three panels so each face can be shaded.
function Cube({
  x,
  y,
  scale = 1,
  accent = false,
  floatDelay = 0,
}: {
  x: number;
  y: number;
  scale?: number;
  accent?: boolean;
  floatDelay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const top = accent ? "var(--accent)" : "var(--surface)";
  const left = accent ? "var(--accent)" : "var(--border)";
  const right = accent ? "var(--accent)" : "var(--border)";

  return (
    <motion.g
      transform={`translate(${x} ${y}) scale(${scale})`}
      animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: floatDelay }}
    >
      <path
        d="M52 0 L104 30 L52 60 L0 30 Z"
        fill={top}
        fillOpacity={accent ? 0.35 : 0.9}
        stroke="var(--border)"
        strokeWidth={1}
      />
      <path
        d="M0 30 L52 60 L52 120 L0 90 Z"
        fill={left}
        fillOpacity={accent ? 0.18 : 0.5}
        stroke="var(--border)"
        strokeWidth={1}
      />
      <path
        d="M104 30 L52 60 L52 120 L104 90 Z"
        fill={right}
        fillOpacity={accent ? 0.12 : 0.3}
        stroke="var(--border)"
        strokeWidth={1}
      />
    </motion.g>
  );
}

export function IsometricCubes() {
  return (
    <svg
      viewBox="0 0 320 320"
      className="h-full w-full"
      aria-hidden
      role="presentation"
    >
      <Cube x={40} y={40} scale={1.1} floatDelay={0} />
      <Cube x={150} y={130} scale={0.8} accent floatDelay={0.6} />
      <Cube x={70} y={190} scale={0.65} floatDelay={1.1} />
    </svg>
  );
}
