import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Breadcrumb {
  label: string;
  to?: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
}

const PageHeader = ({ title, description, breadcrumbs }: PageHeaderProps) => {
  return (
    <div className="mb-6 sm:mb-8">
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 flex-wrap">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex items-center gap-1">
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              {crumb.to ? (
                <Link to={crumb.to} className="hover:text-foreground transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-foreground">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      )}
      <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{title}</h1>
      {description && (
        <p className="text-muted-foreground mt-2 text-base sm:text-lg">{description}</p>
      )}
    </div>
  );
};

export default PageHeader;
