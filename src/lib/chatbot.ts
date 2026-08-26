import { chatbotConfig, chatbotKnowledge } from "@/content/chatbot";

/**
 * v1: simple keyword matching over a fixed, hand-written knowledge base.
 * Swap the implementation for a server-side API route call (never call an
 * LLM API with a key directly from the client) if/when a real LLM is added —
 * the call site (ChatWidget) doesn't need to change either way.
 */
export function getChatbotAnswer(question: string): string {
  const normalized = question.toLowerCase();
  const match = chatbotKnowledge.find((entry) =>
    entry.keywords.some((keyword) => normalized.includes(keyword.toLowerCase()))
  );
  return match?.answer ?? chatbotConfig.fallbackAnswer;
}
