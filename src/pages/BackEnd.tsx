import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/PageHeader";
import TopicCard from "@/components/TopicCard";
import { 
  Server, 
  Hexagon, 
  Coffee, 
  FileCode2, 
  Workflow,
  Shield
} from "lucide-react";

const topics = [
  {
    title: "Node.js",
    description: "Event loop, streams, clustering, and building scalable Node applications.",
    icon: Hexagon,
    to: "/back-end/nodejs",
    questionsCount: 40,
  },
  {
    title: "Java & Spring",
    description: "Spring Boot, dependency injection, JPA, and enterprise Java patterns.",
    icon: Coffee,
    to: "/back-end/java",
    questionsCount: 50,
  },
  {
    title: "Python & Django/FastAPI",
    description: "Django ORM, FastAPI async, and Python backend best practices.",
    icon: FileCode2,
    to: "/back-end/python",
    questionsCount: 35,
  },
  {
    title: "Go (Golang)",
    description: "Goroutines, channels, and building high-performance Go services.",
    icon: Server,
    to: "/back-end/golang",
    questionsCount: 25,
  },
  {
    title: "REST & GraphQL APIs",
    description: "API design principles, versioning, and GraphQL schema design.",
    icon: Workflow,
    to: "/back-end/apis",
    questionsCount: 30,
  },
  {
    title: "Authentication & Security",
    description: "OAuth 2.0, JWT, session management, and backend security patterns.",
    icon: Shield,
    to: "/back-end/security",
    questionsCount: 20,
  },
];

const BackEnd = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Back-End Technologies"
        description="Master server-side development and API design patterns."
        breadcrumbs={[{ label: "Back-End" }]}
      />

      <div className="grid gap-4 md:grid-cols-2">
        {topics.map((topic) => (
          <TopicCard key={topic.to} {...topic} />
        ))}
      </div>
    </PageLayout>
  );
};

export default BackEnd;
