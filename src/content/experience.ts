export interface ExperienceEntry {
  role: string;
  organization: string;
  date: string;
  description: string;
  technologies: string[];
  achievements?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Student Coordinator, Riviera Fest",
    organization: "Vellore Institute of Technology",
    date: "2026",
    description:
      "Coordinated 20+ cross-functional members to support execution and documentation for Riviera, VIT's flagship fest serving 30,000+ attendees.",
    technologies: [],
  },
  {
    role: "Operations & Finance Executive, E-Cell VIT",
    organization: "Vellore Institute of Technology",
    date: "2024 – 2025",
    description:
      "Analyzed budgets and streamlined workflows across E-Cell VIT's event operations.",
    technologies: [],
    achievements: [
      "Reduced operational costs by 15% across 10+ events by identifying cost drivers and presenting data-driven recommendations.",
      "Reduced execution delays by 20% by streamlining workflows for a 15-member team coordinating events with 500+ participants.",
    ],
  },
];
