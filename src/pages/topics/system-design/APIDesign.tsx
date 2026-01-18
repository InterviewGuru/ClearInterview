import TopicQuestionsPage from "@/components/TopicQuestionsPage";
import { apiDesignQuestions } from "@/data/system-design/api-design";

const APIDesign = () => {
    return (
        <TopicQuestionsPage
            title="API Design"
            description="Endpoints, contracts, versioning, pagination, idempotency."
            breadcrumbs={[
                { label: "System Design", to: "/system-design" },
                { label: "API Design" },
            ]}
            questions={apiDesignQuestions}
        />
    );
};

export default APIDesign;
