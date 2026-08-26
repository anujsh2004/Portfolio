import type { LucideIcon } from "lucide-react";
import {
  FileCode2,
  Database,
  Coffee,
  Code2,
  Terminal,
  Braces,
  Atom,
  LayoutTemplate,
  Leaf,
  Zap,
  Server,
  Network,
  Radio,
  KeyRound,
  Brain,
  Cpu,
  Search,
  Sparkles,
  MessageSquare,
  BookOpenCheck,
  Link2,
  Workflow,
  Table,
  Sigma,
  BarChart3,
  HardDrive,
  FileJson,
  Flame,
  Container,
  GitBranch,
  CheckCircle2,
} from "lucide-react";

export interface SkillItem {
  label: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

// Every item below comes straight from the resume's Technical Skills section —
// nothing pre-filled or invented.
export const skills: SkillCategory[] = [
  {
    category: "Programming",
    items: [
      { label: "Python", icon: FileCode2 },
      { label: "SQL", icon: Database },
      { label: "Java", icon: Coffee },
      { label: "C++", icon: Code2 },
      { label: "C", icon: Terminal },
      { label: "JavaScript", icon: Braces },
    ],
  },
  {
    category: "Frontend",
    items: [
      { label: "React", icon: Atom },
      { label: "HTML/CSS", icon: LayoutTemplate },
    ],
  },
  {
    category: "Backend",
    items: [
      { label: "Spring Boot", icon: Leaf },
      { label: "FastAPI", icon: Zap },
      { label: "Node.js", icon: Server },
      { label: "REST APIs", icon: Network },
      { label: "WebSocket (STOMP)", icon: Radio },
      { label: "JWT Auth", icon: KeyRound },
    ],
  },
  {
    category: "AI/ML",
    items: [
      { label: "Machine Learning", icon: Brain },
      { label: "Scikit-learn", icon: Cpu },
      { label: "FAISS", icon: Search },
      { label: "Generative AI", icon: Sparkles },
      { label: "LLMs", icon: MessageSquare },
      { label: "RAG", icon: BookOpenCheck },
      { label: "LangChain", icon: Link2 },
      { label: "LangGraph", icon: Workflow },
      { label: "Pandas", icon: Table },
      { label: "NumPy", icon: Sigma },
      { label: "Data Visualization", icon: BarChart3 },
    ],
  },
  {
    category: "Databases",
    items: [
      { label: "PostgreSQL", icon: Database },
      { label: "MySQL", icon: HardDrive },
      { label: "MongoDB", icon: FileJson },
      { label: "Redis", icon: Flame },
    ],
  },
  {
    category: "Cloud/DevOps",
    items: [{ label: "Docker", icon: Container }],
  },
  {
    category: "Tools",
    items: [
      { label: "Git", icon: GitBranch },
      { label: "JUnit", icon: CheckCircle2 },
    ],
  },
];
