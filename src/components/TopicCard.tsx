import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface TopicCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  questionsCount?: number;
}

const TopicCard = ({ title, description, icon: Icon, to, questionsCount }: TopicCardProps) => {
  return (
    <Link to={to} className="topic-card block group">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-2">
            {description}
          </p>
          {questionsCount !== undefined && (
            <p className="text-xs text-primary mt-2 font-medium">
              {questionsCount} questions
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default TopicCard;