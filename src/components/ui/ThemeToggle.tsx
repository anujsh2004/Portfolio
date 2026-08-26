"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

// Visibility is driven purely by the `.dark` class (via Tailwind's `dark:`
// variant) rather than JS state, so there is no mount-detection effect and
// no hydration mismatch to guard against.
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground-secondary transition-colors hover:border-accent hover:text-accent",
        className
      )}
    >
      <Sun size={16} strokeWidth={1.75} className="hidden dark:block" />
      <Moon size={16} strokeWidth={1.75} className="block dark:hidden" />
    </button>
  );
}
