"use client";

import Link from "next/link";
import { ArrowUp, Briefcase, FolderGit2, AtSign } from "lucide-react";
import { site } from "@/content/site";
import { navigation } from "@/content/navigation";

const socialLinks = [
  { href: site.social.github, label: "GitHub", icon: FolderGit2 },
  { href: site.social.linkedin, label: "LinkedIn", icon: Briefcase },
  { href: site.social.twitter, label: "Twitter / X", icon: AtSign },
  { href: site.social.instagram, label: "Instagram", icon: AtSign },
].filter((link) => link.href);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-display text-sm font-semibold text-foreground">
          {navigation.logoMark}
        </span>

        <p className="order-3 text-xs text-foreground-secondary sm:order-2">
          © {year} {site.name}. All rights reserved.
        </p>

        <div className="order-2 flex items-center gap-4 sm:order-3">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-foreground-secondary transition-colors hover:text-foreground"
            >
              <Icon size={16} />
            </Link>
          ))}
          <button
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground-secondary transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
