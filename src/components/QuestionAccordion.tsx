import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CodeBlock from "./CodeBlock";

export interface Question {
  id: string;
  question: string;
  answer: string;
  difficulty: "easy" | "medium" | "hard";
  type: string;
  imageUrl?: string;
  imageAlt?: string;
}

interface QuestionAccordionProps {
  questions: Question[];
}

// Format text with markdown-like syntax (bold, inline code)
const formatText = (text: string) => {
  return text
    // Bold text **text**
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
    // Inline code `code`
    .replace(/`([^`]+)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary">$1</code>');
};

// Parse answer text and extract code blocks
const parseAnswer = (answer: string) => {
  const parts: Array<{ type: "text" | "code"; content: string; language?: string }> = [];
  const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
  let lastIndex = 0;
  let match;

  while ((match = codeBlockRegex.exec(answer)) !== null) {
    // Add text before code block
    if (match.index > lastIndex) {
      const textContent = answer.slice(lastIndex, match.index).trim();
      if (textContent) {
        parts.push({ type: "text", content: textContent });
      }
    }
    // Add code block
    parts.push({
      type: "code",
      content: match[2].trim(),
      language: match[1] || "jsx",
    });
    lastIndex = match.index + match[0].length;
  }

  // Add remaining text after last code block
  if (lastIndex < answer.length) {
    const textContent = answer.slice(lastIndex).trim();
    if (textContent) {
      parts.push({ type: "text", content: textContent });
    }
  }

  // If no code blocks found, return the whole answer as text
  if (parts.length === 0) {
    parts.push({ type: "text", content: answer });
  }

  return parts;
};

const QuestionAccordion = ({ questions }: QuestionAccordionProps) => {
  if (questions.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        No questions match your current filter.
      </div>
    );
  }

  return (
    <Accordion type="multiple" className="space-y-3">
      {questions.map((q, index) => {
        const answerParts = parseAnswer(q.answer);

        return (
          <AccordionItem
            key={q.id}
            value={q.id}
            className="bg-card border border-border rounded-lg px-4 sm:px-6 data-[state=open]:shadow-card-hover transition-shadow"
          >
            <AccordionTrigger className="hover:no-underline py-3 sm:py-4 relative">
              <div className="flex items-start gap-2 sm:gap-4 text-left w-full">
                <span className="text-muted-foreground text-xs sm:text-sm font-mono w-6 sm:w-8 flex-shrink-0 mt-0.5">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0 pr-20">
                  <h3 className="font-medium text-foreground text-sm sm:text-base">
                    {q.question}
                  </h3>
                </div>
                <span className={`absolute top-4 right-8 difficulty-badge difficulty-${q.difficulty} text-xs bg-opacity-20`}>
                  {q.difficulty}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-3 sm:pb-4">
              <div className="pl-0 sm:pl-12 pr-0 sm:pr-4">
                <div className="bg-muted/50 rounded-lg p-3 sm:p-4 text-xs sm:text-sm text-foreground leading-relaxed space-y-4">
                  <div>
                    {answerParts.map((part, i) =>
                      part.type === "code" ? (
                        <CodeBlock key={i} code={part.content} language={part.language} />
                      ) : (
                        <div
                          key={i}
                          className="whitespace-pre-wrap"
                          dangerouslySetInnerHTML={{ __html: formatText(part.content) }}
                        />
                      )
                    )}
                  </div>
                  {q.imageUrl && (
                    <div className="mt-4">
                      <img
                        src={q.imageUrl}
                        alt={q.imageAlt || "Diagram illustrating the answer"}
                        className="rounded-lg border border-border max-w-full h-auto"
                      />
                    </div>
                  )}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default QuestionAccordion;
