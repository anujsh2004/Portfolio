"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, FolderGit2, type LucideIcon, Satellite, Ticket, HeartPulse } from "lucide-react";
import { projects, type Project } from "@/content/projects";
import { site } from "@/content/site";

// Representative icon shown on each project's placeholder thumbnail until a
// real screenshot is supplied — keyed by project id, not invented per-project.
const projectIcons: Record<string, LucideIcon> = {
  skynetra: Satellite,
  slowmo: Ticket,
  "zenstudent-ai": HeartPulse,
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = projectIcons[project.id] ?? Satellite;
  const primaryHref = project.live ?? project.github;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col"
    >
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#0d0d10]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.22),transparent_60%)]" />
        <div className="flex h-full items-center justify-center">
          <Icon size={40} strokeWidth={1.25} className="text-white/70" />
        </div>
        <span className="absolute bottom-3 right-3 rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[10px] tracking-wide text-white/50">
          Preview coming soon
        </span>
      </div>

      <p className="mt-5 text-xs uppercase tracking-widest text-accent">{project.category}</p>
      <h3 className="mt-1.5 font-display text-xl font-semibold text-foreground">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
        {project.description}
      </p>

      {project.metrics && project.metrics.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-foreground-secondary">
          {project.metrics.map((metric) => (
            <span key={metric.label}>
              <span className="text-foreground">{metric.value}</span> {metric.label}
            </span>
          ))}
        </div>
      )}

      <div className="mt-5 flex items-center gap-5">
        {primaryHref && (
          <Link
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
          >
            View Project
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        )}
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="text-foreground-secondary transition-colors hover:text-foreground"
          >
            <FolderGit2 size={16} />
          </Link>
        )}
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Featured Projects
          </h2>
          {site.social.github && (
            <Link
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground-secondary transition-colors hover:text-foreground"
            >
              View all projects
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
