import { NavLink, useLocation } from "react-router-dom";
import {
  Code2,
  Server,
  Network,
  Brain,
  Cloud,
  Database,
  Sparkles,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { path: "/system-design", label: "System Design & Architecture", icon: Network },
  { path: "/front-end", label: "Front-End", icon: Code2 },
  { path: "/back-end", label: "Back-End", icon: Server },
  { path: "/ai", label: "AI", icon: Brain },
  { path: "/cloud", label: "Cloud", icon: Cloud },
  { path: "/database", label: "Database", icon: Database },
];

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-sidebar border-b border-sidebar-border px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-sidebar-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold text-sidebar-accent-foreground leading-tight">
              Clear
            </span>
            <span className="text-xs font-medium text-sidebar-primary -mt-0.5">
              Interview
            </span>
          </div>
        </NavLink>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-sidebar-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-sidebar-foreground" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 h-screen bg-sidebar flex flex-col border-r border-sidebar-border z-50
          lg:w-[15%] lg:min-w-[200px]
          w-[280px] transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo - Desktop */}
        <div className="p-6 border-b border-sidebar-border hidden lg:flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-sidebar-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-sidebar-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-sidebar-accent-foreground">
                Clear Interview
              </span>
              <span className="text-sm font-medium text-sidebar-primary -mt-1">
                Get Hired
              </span>
            </div>
          </NavLink>
          <ThemeToggle />
        </div>

        {/* Logo - Mobile (in sidebar) */}
        <div className="p-6 border-b border-sidebar-border lg:hidden flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-sidebar-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-sidebar-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-sidebar-accent-foreground">
                Clear
              </span>
              <span className="text-sm font-medium text-sidebar-primary -mt-1">
                Interview
              </span>
            </div>
          </NavLink>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-sidebar-foreground" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path ||
              (location.pathname === "/" && item.path === "/system-design") ||
              location.pathname.startsWith(item.path + "/");

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`sidebar-link ${isActive ? "active" : ""}`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-sidebar-border">
          <p className="text-xs text-sidebar-foreground/50 text-center">
            © 2024 Clear Interview
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;