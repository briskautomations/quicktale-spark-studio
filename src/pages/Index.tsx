
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeReels } from "@/components/MarqueeReels";
import { AIWorkflowSection } from "@/components/AIWorkflowSection";
import { PerformanceMetrics } from "@/components/PerformanceMetrics";
import { TestimonialStrip } from "@/components/TestimonialStrip";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <MarqueeReels />
      <AIWorkflowSection />
      <PerformanceMetrics />
      <TestimonialStrip />
      <FinalCTA />
    </div>
  );
};

export default Index;
