
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, Sparkles } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with vertical light beams */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/5">
        <div className="absolute inset-0" style={{
          background: `
            linear-gradient(90deg, transparent 0%, rgba(91, 95, 238, 0.1) 50%, transparent 100%),
            linear-gradient(90deg, transparent 20%, rgba(50, 226, 216, 0.1) 70%, transparent 100%),
            linear-gradient(90deg, transparent 60%, rgba(91, 95, 238, 0.05) 90%, transparent 100%)
          `
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating elements */}
          <div className="relative mb-8">
            <div className="absolute -top-8 left-1/4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute -top-4 right-1/3 w-2 h-2 bg-accent rounded-full animate-bounce"></div>
            <div className="absolute top-2 left-1/3 w-1 h-1 bg-primary rounded-full animate-ping"></div>
            
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-8">
              <Sparkles className="w-3 h-3 mr-2" />
              No signup required • Export in seconds
            </div>
          </div>

          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-8 leading-[1.1] tracking-tight">
            Your next viral video is{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              1 click
            </span>{" "}
            away.
          </h2>

          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join <span className="font-semibold text-foreground">12,300+</span> creators who've transformed their content strategy with AI-powered video generation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="btn-primary text-white font-semibold px-10 h-14 rounded-2xl text-lg shadow-2xl hover:shadow-primary/25 transition-all duration-300"
            >
              <Zap className="w-5 h-5 mr-3" />
              Start Creating Now
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>

            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Free to start</span>
              </div>
              <div className="w-1 h-4 bg-border"></div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>No watermarks</span>
              </div>
              <div className="w-1 h-4 bg-border"></div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span>Unlimited exports</span>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto text-center">
            <div>
              <div className="text-2xl font-bold text-foreground mb-1">2.5M+</div>
              <div className="text-sm text-muted-foreground">Videos Created</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-1">89%</div>
              <div className="text-sm text-muted-foreground">Viral Success Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-1">3.5x</div>
              <div className="text-sm text-muted-foreground">Faster Creation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
