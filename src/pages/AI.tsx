import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/PageHeader";
import TopicCard from "@/components/TopicCard";
import { 
  Brain, 
  Network, 
  Eye, 
  MessageCircle, 
  BarChart3,
  Sparkles
} from "lucide-react";

const topics = [
  {
    title: "Machine Learning Fundamentals",
    description: "Supervised, unsupervised learning, model evaluation, and feature engineering.",
    icon: Brain,
    to: "/ai/ml-fundamentals",
    questionsCount: 40,
  },
  {
    title: "Deep Learning & Neural Networks",
    description: "CNNs, RNNs, transformers, and training deep neural networks.",
    icon: Network,
    to: "/ai/deep-learning",
    questionsCount: 35,
  },
  {
    title: "Computer Vision",
    description: "Image classification, object detection, and image segmentation.",
    icon: Eye,
    to: "/ai/computer-vision",
    questionsCount: 25,
  },
  {
    title: "Natural Language Processing",
    description: "Text processing, embeddings, LLMs, and sentiment analysis.",
    icon: MessageCircle,
    to: "/ai/nlp",
    questionsCount: 30,
  },
  {
    title: "MLOps & Model Deployment",
    description: "Model serving, monitoring, CI/CD for ML, and production pipelines.",
    icon: BarChart3,
    to: "/ai/mlops",
    questionsCount: 20,
  },
  {
    title: "Generative AI & LLMs",
    description: "GPT architectures, prompt engineering, RAG, and fine-tuning.",
    icon: Sparkles,
    to: "/ai/generative-ai",
    questionsCount: 28,
  },
];

const AI = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Artificial Intelligence"
        description="Prepare for AI/ML interviews with fundamental to advanced concepts."
        breadcrumbs={[{ label: "AI" }]}
      />

      <div className="grid gap-4 md:grid-cols-2">
        {topics.map((topic) => (
          <TopicCard key={topic.to} {...topic} />
        ))}
      </div>
    </PageLayout>
  );
};

export default AI;
