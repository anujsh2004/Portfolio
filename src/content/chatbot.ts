export interface ChatbotEntry {
  /** Keywords that trigger this answer (case-insensitive, matched by inclusion). */
  keywords: string[];
  answer: string;
}

export const chatbotConfig = {
  buttonLabel: "Ask Anuj",
  windowTitle: "Ask Anuj",
  placeholder: "Ask about my projects, skills, or experience...",
  fallbackAnswer: "I don't have that information yet.",
  greeting: "Hi! Ask me about Anuj's projects, skills, or background.",
};

// Rule-based v1 knowledge base — every answer below is grounded in the resume
// and the site's own content files. Extend this as real content is added
// elsewhere; never add an answer that isn't backed by real, confirmed info.
export const chatbotKnowledge: ChatbotEntry[] = [
  {
    keywords: ["who are you", "who is anuj", "about you", "about anuj", "introduce"],
    answer:
      "I'm a Computer Science (Data Science) student at VIT, building AI-enabled, data-driven products end-to-end — from computer vision pipelines to concurrency-safe backend systems.",
  },
  {
    keywords: ["education", "college", "university", "degree", "cgpa", "vit"],
    answer:
      "I'm pursuing a B.Tech in Computer Science and Engineering (Data Science) at Vellore Institute of Technology (2023–2027), with a CGPA of 8.34/10.",
  },
  {
    keywords: ["project", "cliniq", "eda", "skynetra", "slowmo", "zenstudent", "built", "portfolio"],
    answer:
      "I've built several projects, including CliniQ (a multilingual voice-agent clinic booking SaaS with self-hosted speech models), SkyNetra (a satellite image intelligence platform using YOLOv8 + FAISS), SlowMO (a concurrency-safe ticket booking backend in Spring Boot), and ZenStudent AI (a real-time stress-detection app using ML on physiological signals), plus an EDA course project on telco churn. Check the Projects section for details and links.",
  },
  {
    keywords: ["skill", "tech stack", "technologies", "stack", "language", "programming"],
    answer:
      "My core stack includes Python, Java, SQL, and JavaScript, with React on the frontend; Spring Boot, FastAPI, and Node.js on the backend; PostgreSQL, MySQL, MongoDB, and Redis for data; plus AI/ML tools like Scikit-learn, FAISS, LangChain, and LangGraph. Full breakdown is in the Skills section.",
  },
  {
    keywords: ["ai", "machine learning", "ml", "genai", "llm", "rag"],
    answer:
      "I work with Machine Learning, Generative AI, LLMs, RAG, LangChain, and LangGraph — I'm also an Oracle Certified Generative AI Professional (2024).",
  },
  {
    keywords: ["experience", "leadership", "riviera", "e-cell", "ecell", "work"],
    answer:
      "I was Student Coordinator for Riviera Fest 2026 at VIT (coordinating 20+ members for VIT's flagship fest, 30,000+ attendees), and Operations & Finance Executive at E-Cell VIT (2024–2025), where I helped cut operational costs by 15% and execution delays by 20%.",
  },
  {
    keywords: ["certification", "certificate", "oracle"],
    answer: "I hold the Oracle Certified Generative AI Professional certification (2024).",
  },
  {
    keywords: ["contact", "email", "reach", "hire", "talk", "linkedin", "github"],
    answer:
      "You can reach me at anujsharma160904@gmail.com, or find me on LinkedIn and GitHub — links are in the Contact section.",
  },
  {
    keywords: ["hi", "hello", "hey"],
    answer: "Hi! Ask me about Anuj's projects, skills, education, or experience.",
  },
];
