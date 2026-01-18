import TopicQuestionsPage from "@/components/TopicQuestionsPage";
import { mlopsQuestions } from "@/data/ai/mlops";

const MLOps = () => {
    return (
        <TopicQuestionsPage
            title="MLOps & Model Deployment"
            description="Model serving, monitoring, CI/CD for ML, and production pipelines."
            breadcrumbs={[
                { label: "AI", to: "/ai" },
                { label: "MLOps" },
            ]}
            questions={mlopsQuestions}
        />
    );
};

export default MLOps;
