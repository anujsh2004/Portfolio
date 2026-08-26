import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  className?: string;
};

const variants = {
  primary:
    "bg-foreground text-background hover:opacity-90 border border-foreground",
  secondary:
    "bg-transparent text-foreground border border-border hover:border-foreground",
  ghost: "bg-transparent text-foreground hover:text-accent",
};

export function Button({
  href,
  children,
  variant = "primary",
  icon,
  className,
}: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200",
        variants[variant],
        className
      )}
    >
      {children}
      {icon && (
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </Link>
  );
}
