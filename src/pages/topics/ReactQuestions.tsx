import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/PageHeader";

import QuestionAccordion from "@/components/QuestionAccordion";
import { reactQuestions } from "@/data/frontend/react-questions";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const ReactQuestions = () => {
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  // Distinct types from the data
  const questionTypes = Array.from(new Set(reactQuestions.map((q) => q.type)));

  const filteredQuestions = reactQuestions.filter((q) => {
    const matchesDifficulty = selectedDifficulties.length === 0 || selectedDifficulties.includes(q.difficulty);
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(q.type);
    return matchesDifficulty && matchesType;
  });

  const toggleDifficulty = (difficulty: string) => {
    setSelectedDifficulties(prev =>
      prev.includes(difficulty)
        ? prev.filter(d => d !== difficulty)
        : [...prev, difficulty]
    );
  };

  const toggleType = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  return (
    <PageLayout>
      <PageHeader
        title="React JS Interview Questions"
        description="Master React concepts from fundamentals to advanced patterns."
        breadcrumbs={[
          { label: "Front-End", to: "/front-end" },
          { label: "React" },
        ]}
      />

      <div className="space-y-6 mb-8">
        <div className="flex flex-wrap items-center gap-6">
          {["easy", "medium", "hard"].map((difficulty) => (
            <div key={difficulty} className="flex items-center space-x-2">
              <Checkbox
                id={`diff-${difficulty}`}
                checked={selectedDifficulties.includes(difficulty)}
                onCheckedChange={() => toggleDifficulty(difficulty)}
              />
              <Label
                htmlFor={`diff-${difficulty}`}
                className="text-sm font-normal capitalize cursor-pointer"
              >
                {difficulty}
              </Label>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {questionTypes.map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox
                id={`type-${type}`}
                checked={selectedTypes.includes(type)}
                onCheckedChange={() => toggleType(type)}
              />
              <Label
                htmlFor={`type-${type}`}
                className="text-sm font-normal cursor-pointer"
              >
                {type}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-4 text-sm text-muted-foreground">
          Showing {filteredQuestions.length} questions
        </div>
        <QuestionAccordion questions={filteredQuestions} />
      </div>
    </PageLayout>
  );
};

export default ReactQuestions;
