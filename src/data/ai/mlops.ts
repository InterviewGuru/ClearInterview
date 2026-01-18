import { Question } from "@/components/QuestionAccordion";

export const mlopsQuestions: Question[] = [
    {
        id: "1",
        question: "What is Model Drift?",
        answer: `Model Drift (or Concept Drift) refers to the change in the relationship between input data and the target variable over time.

This causes the model's performance to degrade because the data it was trained on no longer represents the current real-world data effectively.`,
        difficulty: "medium",
        type: "MLOps & Model Deployment",
    },
];
