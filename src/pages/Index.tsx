import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FloatingMarquee } from "@/components/FloatingMarquee";
import { AIWorkflowSection } from "@/components/AIWorkflowSection";
import { PerformanceMetrics } from "@/components/PerformanceMetrics";
import { TestimonialStrip } from "@/components/TestimonialStrip";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <HeroSection />
      <FloatingMarquee />
      <AIWorkflowSection />
      <PerformanceMetrics />
      <TestimonialStrip />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;