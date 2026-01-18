import { Question } from "@/components/QuestionAccordion";

export const generativeAIQuestions: Question[] = [
    {
        id: "1",
        question: "What is Retrieval-Augmented Generation (RAG)?",
        answer: `RAG is a technique that enhances Large Language Models (LLMs) by retrieving relevant information from an external knowledge base before generating a response.

This ensures the model has access to up-to-date or private information that wasn't included in its training data, reducing hallucinations.`,
        difficulty: "hard",
        type: "Generative AI & LLMs",
    },
];
