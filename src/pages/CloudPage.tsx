import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/PageHeader";
import TopicCard from "@/components/TopicCard";
import { 
  Cloud, 
  Server, 
  Container, 
  GitBranch, 
  Shield,
  Gauge
} from "lucide-react";

const topics = [
  {
    title: "AWS",
    description: "EC2, S3, Lambda, RDS, and core AWS services for cloud architecture.",
    icon: Cloud,
    to: "/cloud/aws",
    questionsCount: 55,
  },
  {
    title: "Azure",
    description: "Azure VMs, Blob Storage, Functions, and Microsoft cloud ecosystem.",
    icon: Cloud,
    to: "/cloud/azure",
    questionsCount: 40,
  },
  {
    title: "Google Cloud Platform",
    description: "Compute Engine, BigQuery, Cloud Run, and GCP best practices.",
    icon: Cloud,
    to: "/cloud/gcp",
    questionsCount: 35,
  },
  {
    title: "Docker & Containers",
    description: "Containerization, Dockerfile best practices, and container orchestration.",
    icon: Container,
    to: "/cloud/docker",
    questionsCount: 25,
  },
  {
    title: "Kubernetes",
    description: "Pods, deployments, services, and managing containerized applications.",
    icon: Server,
    to: "/cloud/kubernetes",
    questionsCount: 45,
  },
  {
    title: "CI/CD & DevOps",
    description: "Jenkins, GitHub Actions, infrastructure as code, and deployment strategies.",
    icon: GitBranch,
    to: "/cloud/cicd",
    questionsCount: 30,
  },
  {
    title: "Cloud Security",
    description: "IAM, network security, compliance, and securing cloud infrastructure.",
    icon: Shield,
    to: "/cloud/security",
    questionsCount: 22,
  },
  {
    title: "Monitoring & Observability",
    description: "CloudWatch, Prometheus, Grafana, and building observable systems.",
    icon: Gauge,
    to: "/cloud/monitoring",
    questionsCount: 18,
  },
];

const CloudPage = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Cloud Technologies"
        description="Master cloud platforms, containerization, and DevOps practices."
        breadcrumbs={[{ label: "Cloud" }]}
      />

      <div className="grid gap-4 md:grid-cols-2">
        {topics.map((topic) => (
          <TopicCard key={topic.to} {...topic} />
        ))}
      </div>
    </PageLayout>
  );
};

export default CloudPage;
