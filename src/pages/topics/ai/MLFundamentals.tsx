import TopicQuestionsPage from "@/components/TopicQuestionsPage";
import { mlFundamentalsQuestions } from "@/data/ai/ml-fundamentals";

const MLFundamentals = () => {
    return (
        <TopicQuestionsPage
            title="Machine Learning Fundamentals"
            description="Supervised, unsupervised learning, model evaluation, and feature engineering."
            breadcrumbs={[
                { label: "AI", to: "/ai" },
                { label: "ML Fundamentals" },
            ]}
            questions={mlFundamentalsQuestions}
        />
    );
};

export default MLFundamentals;
