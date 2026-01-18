import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/PageHeader";
import TopicCard from "@/components/TopicCard";
import { 
  GitBranch, 
  Database, 
  Server, 
  Search, 
  Zap, 
  Globe, 
  Scale, 
  ArrowUpDown, 
  Copy, 
  LayoutGrid, 
  ToggleLeft, 
  Triangle, 
  Link2, 
  MessageSquare, 
  Radio, 
  Activity, 
  Shield, 
  Gauge, 
  Timer, 
  CircleDot, 
  Repeat, 
  Lock, 
  KeyRound, 
  FileSearch, 
  HardDrive, 
  Eye, 
  Target 
} from "lucide-react";

const topics = [
  {
    title: "API Design",
    description: "Endpoints, contracts, versioning, pagination, idempotency.",
    icon: GitBranch,
    to: "/system-design/api-design",
    questionsCount: 16,
  },
  {
    title: "Data Modeling",
    description: "Schema choices, access patterns, query performance.",
    icon: Database,
    to: "/system-design/data-modeling",
    questionsCount: 14,
  },
  {
    title: "Databases (SQL vs NoSQL)",
    description: "Transactions vs scale, consistency tradeoffs.",
    icon: Server,
    to: "/system-design/databases",
    questionsCount: 20,
  },
  {
    title: "Indexes",
    description: "Speed up reads, avoid full scans, cost of writes.",
    icon: Search,
    to: "/system-design/indexes",
    questionsCount: 10,
  },
  {
    title: "Caching",
    description: "Reduce latency, handle hot keys, cache invalidation.",
    icon: Zap,
    to: "/system-design/caching",
    questionsCount: 12,
  },
  {
    title: "CDN",
    description: "Faster global delivery for static assets and media.",
    icon: Globe,
    to: "/system-design/cdn",
    questionsCount: 8,
  },
  {
    title: "Load Balancing",
    description: "Distribute traffic, health checks, failover strategies.",
    icon: Scale,
    to: "/system-design/load-balancing",
    questionsCount: 12,
  },
  {
    title: "Horizontal vs Vertical Scaling",
    description: "Add machines vs upgrade machines.",
    icon: ArrowUpDown,
    to: "/system-design/scaling",
    questionsCount: 10,
  },
  {
    title: "Replication",
    description: "Read scaling, failover, geo redundancy.",
    icon: Copy,
    to: "/system-design/replication",
    questionsCount: 11,
  },
  {
    title: "Sharding / Partitioning",
    description: "Scale writes, distribute data, hotspots control.",
    icon: LayoutGrid,
    to: "/system-design/sharding",
    questionsCount: 14,
  },
  {
    title: "Consistency Models",
    description: "Strong vs eventual, user experience tradeoffs.",
    icon: ToggleLeft,
    to: "/system-design/consistency",
    questionsCount: 10,
  },
  {
    title: "CAP Theorem",
    description: "Choosing tradeoffs under partitions.",
    icon: Triangle,
    to: "/system-design/cap-theorem",
    questionsCount: 8,
  },
  {
    title: "Distributed Transactions",
    description: "Why they hurt, when to avoid, alternatives.",
    icon: Link2,
    to: "/system-design/distributed-transactions",
    questionsCount: 12,
  },
  {
    title: "Messaging Queues",
    description: "Async workflows, buffering spikes, decoupling services.",
    icon: MessageSquare,
    to: "/system-design/messaging-queues",
    questionsCount: 14,
  },
  {
    title: "Pub/Sub",
    description: "Event-driven systems, fanout, real-time pipelines.",
    icon: Radio,
    to: "/system-design/pub-sub",
    questionsCount: 10,
  },
  {
    title: "Stream Processing",
    description: "Near real-time analytics, event ordering issues.",
    icon: Activity,
    to: "/system-design/stream-processing",
    questionsCount: 12,
  },
  {
    title: "Rate Limiting",
    description: "Protect services, stop abuse, fairness under load.",
    icon: Shield,
    to: "/system-design/rate-limiting",
    questionsCount: 10,
  },
  {
    title: "Backpressure",
    description: "Keep systems stable when dependencies slow down.",
    icon: Gauge,
    to: "/system-design/backpressure",
    questionsCount: 8,
  },
  {
    title: "Retries + Timeouts",
    description: "Prevent cascading failures, control tail latency.",
    icon: Timer,
    to: "/system-design/retries-timeouts",
    questionsCount: 10,
  },
  {
    title: "Circuit Breakers",
    description: "Isolate failures, degrade gracefully.",
    icon: CircleDot,
    to: "/system-design/circuit-breakers",
    questionsCount: 8,
  },
  {
    title: "Idempotency",
    description: "Safe retries for payments, orders, and APIs.",
    icon: Repeat,
    to: "/system-design/idempotency",
    questionsCount: 10,
  },
  {
    title: "Concurrency Control",
    description: "Locks, optimistic concurrency, race conditions.",
    icon: Lock,
    to: "/system-design/concurrency",
    questionsCount: 12,
  },
  {
    title: "Distributed Locking",
    description: "Leader election, single-writer patterns.",
    icon: KeyRound,
    to: "/system-design/distributed-locking",
    questionsCount: 10,
  },
  {
    title: "Search Systems",
    description: "Inverted index, ranking, text queries at scale.",
    icon: FileSearch,
    to: "/system-design/search-systems",
    questionsCount: 14,
  },
  {
    title: "File Storage",
    description: "Uploads, metadata, chunking, large file handling.",
    icon: HardDrive,
    to: "/system-design/file-storage",
    questionsCount: 10,
  },
  {
    title: "Observability",
    description: "Logs, metrics, traces, debugging in production.",
    icon: Eye,
    to: "/system-design/observability",
    questionsCount: 12,
  },
  {
    title: "SLOs/SLAs",
    description: "Reliability targets, error budgets, prioritization.",
    icon: Target,
    to: "/system-design/slos-slas",
    questionsCount: 10,
  },
];

const SystemDesign = () => {
  return (
    <PageLayout>
      <PageHeader
        title="System Design & Architecture"
        description="Master the fundamentals of designing large-scale distributed systems."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {topics.map((topic) => (
          <TopicCard key={topic.to} {...topic} />
        ))}
      </div>
    </PageLayout>
  );
};

export default SystemDesign;
