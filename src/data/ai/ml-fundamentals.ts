import { Question } from "@/components/QuestionAccordion";

export const mlFundamentalsQuestions: Question[] = [
    {
        id: "1",
        question: "What is the difference between Supervised and Unsupervised Learning?",
        answer: `Supervised Learning uses labeled data where the input and output are known. The model learns to map input to output. Examples include classification and regression.

Unsupervised Learning uses unlabeled data and tries to find hidden structures or patterns in the data. Examples include clustering and dimensionality reduction.`,
        difficulty: "easy",
        type: "Machine Learning Fundamentals",
    },
];
