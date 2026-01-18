import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/PageHeader";
import QuestionAccordion, { Question } from "@/components/QuestionAccordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface TopicQuestionsPageProps {
    title: string;
    description: string;
    breadcrumbs: { label: string; to?: string }[];
    questions: Question[];
}

const TopicQuestionsPage = ({
    title,
    description,
    breadcrumbs,
    questions,
}: TopicQuestionsPageProps) => {
    const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);

    // Filtering logic
    const filteredQuestions = questions.filter((q) => {
        const matchesDifficulty = selectedDifficulties.length === 0 || selectedDifficulties.includes(q.difficulty);
        return matchesDifficulty;
    });

    const toggleDifficulty = (difficulty: string) => {
        setSelectedDifficulties(prev =>
            prev.includes(difficulty)
                ? prev.filter(d => d !== difficulty)
                : [...prev, difficulty]
        );
    };

    return (
        <PageLayout>
            <PageHeader
                title={title}
                description={description}
                breadcrumbs={breadcrumbs}
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

export default TopicQuestionsPage;
