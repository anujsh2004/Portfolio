import type { LucideIcon } from "lucide-react";
import {
  FileCode2,
  Coffee,
  Database,
  Braces,
  Atom,
  Leaf,
  Server,
  Container,
} from "lucide-react";

export interface TechStackItem {
  label: string;
  icon: LucideIcon;
}

export const hero = {
  greeting: "Hi, I'm",
  name: "Anuj Sharma",
  title: "AI & Data Engineering · Full-Stack Development",
  description:
    "I'm a Computer Science (Data Science) undergrad at VIT building AI-driven systems and full-stack products — from computer vision pipelines to concurrency-safe backends.",
  primaryButton: { label: "View My Work", href: "#projects" },
  secondaryButton: { label: "Download Resume", href: "/resume/anuj-sharma-resume.pdf" },
  scrollHint: "Scroll to explore",
  image: "/images/profile/profile.jpg",
  techStackLabel: "Tech I work with",
  // Pulled from confirmed resume + project tech stacks — no invented tools.
  techStack: [
    { label: "Python", icon: FileCode2 },
    { label: "Java", icon: Coffee },
    { label: "SQL", icon: Database },
    { label: "JavaScript", icon: Braces },
    { label: "React", icon: Atom },
    { label: "Spring Boot", icon: Leaf },
    { label: "Node.js", icon: Server },
    { label: "Docker", icon: Container },
  ] satisfies TechStackItem[],
};
