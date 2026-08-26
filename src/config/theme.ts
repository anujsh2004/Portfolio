/**
 * Single source of truth for the color system. Mirrored as CSS variables in
 * `src/app/globals.css` — change values in both places if you edit here.
 */
export const theme = {
  light: {
    background: "#FFFFFF",
    surface: "#FAFAFA",
    foreground: "#111111",
    foregroundSecondary: "#6B6B6B",
    border: "#EAEAEA",
    accent: "#6366F1",
    accentForeground: "#FFFFFF",
  },
  dark: {
    background: "#0A0A0B",
    surface: "#131316",
    foreground: "#F5F5F5",
    foregroundSecondary: "#A0A0A8",
    border: "#232327",
    accent: "#818CF8",
    accentForeground: "#0A0A0B",
  },
} as const;

export const fonts = {
  display: "var(--font-display)",
  sans: "var(--font-sans)",
  mono: "var(--font-mono)",
} as const;
