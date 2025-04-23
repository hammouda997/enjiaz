import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import WhyEnjaz from "./pages/WhyEnjaz";
import MissionVision from "./pages/MissionVision";
import Careers from "./pages/Careers";
import Resources from "./pages/Resources";
import Services from "./pages/Services";
import Approach from "./pages/Approach";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TechnologyAssessments from "./pages/services/TechnologyAssessments";
import ItStrategy from "./pages/services/ItStrategy";
import CloudInfrastructure from "./pages/services/CloudInfrastructure";
import NetworkSecurity from "./pages/services/NetworkSecurity";
import CybersecurityAdvisory from "./pages/services/CybersecurityAdvisory";
import MaDueDiligence from "./pages/services/MaDueDiligence";
import ExecutiveAdvisory from "./pages/services/ExecutiveAdvisory";
import BusinessContinuity from "./pages/services/BusinessContinuity";
import ComplianceGovernance from "./pages/services/ComplianceGovernance";
import Insights from "./pages/Insights";
import { ChatBot } from "./components/ChatBot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/why-enjaz" element={<WhyEnjaz />} />
          <Route path="/about/mission-vision" element={<MissionVision />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/assessments" element={<TechnologyAssessments />} />
          <Route path="/services/strategy" element={<ItStrategy />} />
          <Route path="/services/cloud" element={<CloudInfrastructure />} />
          <Route path="/services/network-security" element={<NetworkSecurity />} />
          <Route path="/services/cybersecurity" element={<CybersecurityAdvisory />} />
          <Route path="/services/ma-diligence" element={<MaDueDiligence />} />
          <Route path="/services/executive" element={<ExecutiveAdvisory />} />
          <Route path="/services/continuity" element={<BusinessContinuity />} />
          <Route path="/services/compliance" element={<ComplianceGovernance />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ChatBot />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
