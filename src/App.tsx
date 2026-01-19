import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import SystemDesign from "./pages/SystemDesign";
import FrontEnd from "./pages/FrontEnd";
import BackEnd from "./pages/BackEnd";
import AI from "./pages/AI";
import CloudPage from "./pages/CloudPage";
import DatabasePage from "./pages/DatabasePage";
import ReactQuestions from "./pages/topics/ReactQuestions";
import APIDesign from "./pages/topics/system-design/APIDesign";
import MLFundamentals from "./pages/topics/ai/MLFundamentals";
import DeepLearning from "./pages/topics/ai/DeepLearning";
import ComputerVision from "./pages/topics/ai/ComputerVision";
import NLP from "./pages/topics/ai/NLP";
import MLOps from "./pages/topics/ai/MLOps";
import GenerativeAI from "./pages/topics/ai/GenerativeAI";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/system-design" element={<SystemDesign />} />
            <Route path="/front-end" element={<FrontEnd />} />
            <Route path="/front-end/react" element={<ReactQuestions />} />
            <Route path="/back-end" element={<BackEnd />} />
            <Route path="/ai" element={<AI />} />
            <Route path="/system-design/api-design" element={<APIDesign />} />
            <Route path="/ai/ml-fundamentals" element={<MLFundamentals />} />
            <Route path="/ai/deep-learning" element={<DeepLearning />} />
            <Route path="/ai/computer-vision" element={<ComputerVision />} />
            <Route path="/ai/nlp" element={<NLP />} />
            <Route path="/ai/mlops" element={<MLOps />} />
            <Route path="/ai/generative-ai" element={<GenerativeAI />} />
            <Route path="/cloud" element={<CloudPage />} />
            <Route path="/database" element={<DatabasePage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
