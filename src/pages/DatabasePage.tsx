import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/PageHeader";
import TopicCard from "@/components/TopicCard";
import { 
  Database, 
  Table, 
  FileJson, 
  Zap, 
  Layers,
  Search
} from "lucide-react";

const topics = [
  {
    title: "SQL Fundamentals",
    description: "Queries, joins, subqueries, indexing, and query optimization.",
    icon: Table,
    to: "/database/sql",
    questionsCount: 50,
  },
  {
    title: "PostgreSQL",
    description: "Advanced PostgreSQL features, JSONB, full-text search, and extensions.",
    icon: Database,
    to: "/database/postgresql",
    questionsCount: 30,
  },
  {
    title: "MongoDB",
    description: "Document modeling, aggregation pipeline, and MongoDB best practices.",
    icon: FileJson,
    to: "/database/mongodb",
    questionsCount: 28,
  },
  {
    title: "Redis",
    description: "Caching patterns, data structures, pub/sub, and Redis clusters.",
    icon: Zap,
    to: "/database/redis",
    questionsCount: 22,
  },
  {
    title: "Database Design",
    description: "Normalization, ER diagrams, and designing scalable data models.",
    icon: Layers,
    to: "/database/design",
    questionsCount: 25,
  },
  {
    title: "Elasticsearch",
    description: "Full-text search, mappings, aggregations, and search optimization.",
    icon: Search,
    to: "/database/elasticsearch",
    questionsCount: 18,
  },
];

const DatabasePage = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Database Technologies"
        description="Learn SQL, NoSQL, and database design for interview success."
        breadcrumbs={[{ label: "Database" }]}
      />

      <div className="grid gap-4 md:grid-cols-2">
        {topics.map((topic) => (
          <TopicCard key={topic.to} {...topic} />
        ))}
      </div>
    </PageLayout>
  );
};

export default DatabasePage;
