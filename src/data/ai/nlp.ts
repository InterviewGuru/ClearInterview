import { Question } from "@/components/QuestionAccordion";

export const nlpQuestions: Question[] = [
    {
        id: "1",
        question: "What are Word Embeddings?",
        answer: `Word Embeddings are vector representations of words where words with similar meanings have similar vector representations.

Common examples include Word2Vec, GloVe, and FastText. They capture semantic relationships between words in a dense vector space.`,
        difficulty: "medium",
        type: "Natural Language Processing",
    },
];
