import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/PageHeader";
import TopicCard from "@/components/TopicCard";
import { 
  Atom, 
  Triangle, 
  Hexagon, 
  Boxes, 
  Package,
  Palette
} from "lucide-react";

const topics = [
  {
    title: "React",
    description: "Component lifecycle, hooks, state management, and modern React patterns.",
    icon: Atom,
    to: "/front-end/react",
    questionsCount: 45,
  },
  {
    title: "Angular",
    description: "Modules, dependency injection, RxJS, and enterprise Angular development.",
    icon: Triangle,
    to: "/front-end/angular",
    questionsCount: 35,
  },
  {
    title: "Vue.js",
    description: "Composition API, reactivity, Vuex/Pinia, and Vue ecosystem.",
    icon: Hexagon,
    to: "/front-end/vue",
    questionsCount: 30,
  },
  {
    title: "Micro Frontends",
    description: "Module federation, single-spa, and independent deployment strategies.",
    icon: Boxes,
    to: "/front-end/micro-frontends",
    questionsCount: 15,
  },
  {
    title: "Bundler Concepts",
    description: "Webpack, Vite, Rollup - bundling, code splitting, and optimization.",
    icon: Package,
    to: "/front-end/bundlers",
    questionsCount: 20,
  },
  {
    title: "CSS & Styling",
    description: "CSS-in-JS, Tailwind, CSS Grid, Flexbox, and responsive design patterns.",
    icon: Palette,
    to: "/front-end/css",
    questionsCount: 25,
  },
];

const FrontEnd = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Front-End Technologies"
        description="Prepare for interviews on modern front-end frameworks and tools."
        breadcrumbs={[{ label: "Front-End" }]}
      />

      <div className="grid gap-4 md:grid-cols-2">
        {topics.map((topic) => (
          <TopicCard key={topic.to} {...topic} />
        ))}
      </div>
    </PageLayout>
  );
};

export default FrontEnd;
