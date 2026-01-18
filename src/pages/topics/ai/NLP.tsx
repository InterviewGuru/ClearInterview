import TopicQuestionsPage from "@/components/TopicQuestionsPage";
import { nlpQuestions } from "@/data/ai/nlp";

const NLP = () => {
    return (
        <TopicQuestionsPage
            title="Natural Language Processing"
            description="Text processing, embeddings, LLMs, and sentiment analysis."
            breadcrumbs={[
                { label: "AI", to: "/ai" },
                { label: "NLP" },
            ]}
            questions={nlpQuestions}
        />
    );
};

export default NLP;
