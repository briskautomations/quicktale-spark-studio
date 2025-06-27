
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, Sparkles } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-primary/5">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-mesh"></div>
        <div className="absolute top-10 left-1/4 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-16 right-1/3 w-3 h-3 bg-accent rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-20 right-1/4 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full animate-float opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative mb-10">
            <div className="inline-flex items-center px-5 py-3 rounded-full border-2 border-primary/20 bg-primary/5 text-primary text-sm font-bold mb-8 animate-scale-in backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              No signup required • Export in seconds
            </div>
          </div>

          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black text-dark mb-10 leading-[1.05] tracking-tight animate-slide-up">
            Your next viral video is{" "}
            <span className="text-viral animate-pulse-glow">
              1 click
            </span>{" "}
            away.
          </h2>

          <p className="text-xl lg:text-2xl text-medium mb-14 max-w-4xl mx-auto leading-relaxed font-medium animate-fade-in stagger-2">
            Join <span className="font-bold text-dark">12,300+</span> creators who've transformed their content strategy with AI-powered video generation.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16 animate-slide-up stagger-3">
            <Button 
              size="lg" 
              className="btn-primary text-white font-bold px-12 h-16 rounded-2xl text-lg shadow-2xl hover:shadow-primary/40 transition-all duration-300 group"
            >
              <Zap className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
              Start Creating Now
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex items-center space-x-6 text-sm text-medium font-semibold">
              <div className="flex items-center space-x-2 animate-pulse-glow">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>Free to start</span>
              </div>
              <div className="w-1 h-4 bg-border"></div>
              <div className="flex items-center space-x-2 animate-pulse-glow">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span>No watermarks</span>
              </div>
              <div className="w-1 h-4 bg-border"></div>
              <div className="flex items-center space-x-2 animate-pulse-glow">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <span>Unlimited exports</span>
              </div>
            </div>
          </div>

          {/* Enhanced trust indicators */}
          <div className="grid grid-cols-3 gap-12 max-w-2xl mx-auto text-center animate-fade-in stagger-4">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-black text-dark mb-2 group-hover:text-primary transition-colors">2.5M+</div>
              <div className="text-sm text-medium font-medium">Videos Created</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-black text-dark mb-2 group-hover:text-primary transition-colors">89%</div>
              <div className="text-sm text-medium font-medium">Viral Success Rate</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-black text-dark mb-2 group-hover:text-primary transition-colors">3.5x</div>
              <div className="text-sm text-medium font-medium">Faster Creation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
