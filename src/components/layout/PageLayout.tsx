import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-[max(15%,200px)] min-w-0 flex flex-col pt-14 lg:pt-0">
        <main className="flex-1 flex flex-col lg:flex-row">
          {/* Main Content */}
          <div className="flex-1 p-4 sm:p-6 lg:p-8">
            <div className="max-w-4xl mx-auto animate-fade-in">
              {children}
            </div>
          </div>

          {/* Right Section - Reserved for Ads (hidden on mobile/tablet) */}
          <aside className="w-[200px] min-w-[150px] bg-muted/30 border-l border-border p-4 hidden xl:block">
            <div className="sticky top-8">
              <div className="rounded-lg border border-dashed border-border bg-card/50 h-[300px] flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Ad Space</span>
              </div>
            </div>
          </aside>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;