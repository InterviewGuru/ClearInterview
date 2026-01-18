import TopicQuestionsPage from "@/components/TopicQuestionsPage";
import { computerVisionQuestions } from "@/data/ai/computer-vision";

const ComputerVision = () => {
    return (
        <TopicQuestionsPage
            title="Computer Vision"
            description="Image classification, object detection, and image segmentation."
            breadcrumbs={[
                { label: "AI", to: "/ai" },
                { label: "Computer Vision" },
            ]}
            questions={computerVisionQuestions}
        />
    );
};

export default ComputerVision;
