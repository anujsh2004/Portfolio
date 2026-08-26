export type AnimationIntensity = "minimal" | "normal" | "cinematic";

export const animationConfig = {
  /** Global animation intensity. "minimal" is the default per design direction. */
  intensity: "minimal" as AnimationIntensity,
  /** Whether the hero/about sections may use WebGL (React Three Fiber). */
  enable3D: true,
  enableParallax: false,
  enableCursorEffects: false,
  /** Total hero load-in choreography duration, in seconds. */
  heroLoadDuration: 1.2,
  /** Smooth scroll (Lenis) tuning. */
  lenis: {
    duration: 1.1,
    smoothWheel: true,
  },
};
