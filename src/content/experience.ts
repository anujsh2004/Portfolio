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
    role: "Backend & AI Engineer (Intern)",
    organization: "FOMO Entertainment Pvt. Ltd. · Remote",
    date: "Oct 2025 – May 2026",
    description:
      "Built an LLM-based semantic verification agent on Google ADK that reads a parsed .eml as transcript context alongside the seller's listing and compares event, artist, venue, date and buyer identity field by field, catching a valid signature on a ticket for the wrong event.",
    technologies: ["Google ADK", "Spring Boot", "Java", "SMTP/MIME"],
    achievements: [
      "Engineered the ingestion and verification stack in Spring Boot against SMTP and MIME specifications: parsing headers and body parts, validating the cryptographic signature and sender domain, and proving the seller forwarded the original, unaltered email.",
      "Authored and ran the backend test suite over adversarial cases (mismatched events, forwarded chains, tampered bodies, replayed tickets), validating that genuine and fraudulent listings were classified correctly before rollout.",
    ],
  },
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
