import TopicQuestionsPage from "@/components/TopicQuestionsPage";
import { generativeAIQuestions } from "@/data/ai/generative-ai";

const GenerativeAI = () => {
    return (
        <TopicQuestionsPage
            title="Generative AI & LLMs"
            description="GPT architectures, prompt engineering, RAG, and fine-tuning."
            breadcrumbs={[
                { label: "AI", to: "/ai" },
                { label: "Generative AI" },
            ]}
            questions={generativeAIQuestions}
        />
    );
};

export default GenerativeAI;
