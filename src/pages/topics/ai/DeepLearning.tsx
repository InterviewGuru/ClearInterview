import TopicQuestionsPage from "@/components/TopicQuestionsPage";
import { deepLearningQuestions } from "@/data/ai/deep-learning";

const DeepLearning = () => {
    return (
        <TopicQuestionsPage
            title="Deep Learning & Neural Networks"
            description="CNNs, RNNs, transformers, and training deep neural networks."
            breadcrumbs={[
                { label: "AI", to: "/ai" },
                { label: "Deep Learning" },
            ]}
            questions={deepLearningQuestions}
        />
    );
};

export default DeepLearning;
