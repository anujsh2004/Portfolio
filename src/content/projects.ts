export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  live?: string;
  metrics?: { label: string; value: string }[];
  featured: boolean;
}

// Pulled from the resume — screenshots are placeholders until real thumbnails
// are supplied.
export const projects: Project[] = [
  {
    id: "skynetra",
    title: "SkyNetra",
    category: "Computer Vision · AI",
    description:
      "An end-to-end computer vision platform processing 1,000+ satellite images — YOLOv8 object detection, FAISS similarity search over ResNet50 embeddings, and K-Means clustering surfaced through a FastAPI + React interface.",
    technologies: ["Python", "FastAPI", "REST APIs", "React", "JavaScript", "YOLOv8", "FAISS", "Git"],
    image: "/images/projects/skynetra.png",
    github: "https://github.com/anujsh2004/SkyNetra",
    metrics: [
      { label: "Images Processed", value: "1,000+" },
      { label: "Cluster Purity", value: "87%" },
    ],
    featured: true,
  },
  {
    id: "slowmo",
    title: "SlowMO",
    category: "Full-Stack · Backend Systems",
    description:
      "A concurrency-safe ticket booking backend in Spring Boot 3 with pessimistic row-level locking and JPA optimistic versioning to prevent double-booking, plus a Redis-backed seat hold system, FIFO waitlist, and real-time WebSocket seat-map sync.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "WebSocket/STOMP", "JWT", "Docker", "React", "Git"],
    image: "/images/projects/slowmo.png",
    github: "https://github.com/anujsh2004/Ticket_Booking",
    live: "https://slowmotickets.vercel.app/",
    metrics: [
      { label: "REST Endpoints", value: "25+" },
      { label: "Concurrency Test", value: "1 success / 99 rejected" },
    ],
    featured: true,
  },
  {
    id: "zenstudent-ai",
    title: "ZenStudent AI",
    category: "Machine Learning · Health Tech",
    description:
      "A real-time stress-detection application processing 5,000+ HRV/EDA samples from 100+ users, with a Scikit-learn classification model trained on engineered physiological features and dashboards surfacing the results.",
    technologies: ["Python", "Node.js", "REST APIs", "Scikit-learn", "Pandas", "NumPy", "JavaScript", "Git"],
    image: "/images/projects/zenstudent-ai.png",
    github: "https://github.com/anujsh2004/ZenStudent-AI_Intelligent_stress-detection",
    live: "https://zenstudent-ai.vercel.app/",
    metrics: [
      { label: "Model Accuracy", value: "93%" },
      { label: "Samples Processed", value: "5,000+" },
    ],
    featured: true,
  },
];
