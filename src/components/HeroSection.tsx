
import { Button } from "@/components/ui/button";
import { Play, Zap, Sparkles, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center justify-center bg-background gradient-mesh relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float blur-xl"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent/15 rounded-2xl animate-glow blur-lg"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse opacity-30"></div>
      <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-primary/20 rounded-full animate-bounce"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="inline-flex items-center px-5 py-3 rounded-full border-2 border-primary/20 bg-primary/5 text-primary text-sm font-bold animate-scale-in backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                2.5M+ AI-generated videos
              </div>
              
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-dark leading-[1.02] tracking-tight animate-slide-up">
                Create AI-powered{" "}
                <span className="text-viral animate-pulse-glow">
                  viral videos
                </span>{" "}
                — faster than ever.
              </h1>
              
              <p className="text-xl lg:text-2xl text-medium leading-relaxed max-w-4xl mx-auto font-medium animate-fade-in stagger-2">
                Upload a script or clip, and get a fully-edited short with voiceover, captions, and viral pacing. Ready for Reels, Shorts, TikTok.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up stagger-3">
              <Button 
                size="lg" 
                className="btn-primary text-white font-bold px-12 h-16 rounded-2xl text-lg shadow-2xl hover:shadow-primary/50 transition-all duration-300 group"
              >
                <Zap className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                Start Creating
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="btn-secondary text-dark hover:text-primary font-bold px-12 h-16 rounded-2xl text-lg transition-all duration-300 hover:scale-105 group"
              >
                <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Watch 30-sec Demo
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-10 text-sm text-medium font-semibold animate-fade-in stagger-4">
              <div className="flex items-center space-x-3 animate-pulse-glow">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>No signup needed</span>
              </div>
              <div className="hidden sm:block w-1 h-4 bg-border"></div>
              <div className="flex items-center space-x-3 animate-pulse-glow">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Export in seconds</span>
              </div>
              <div className="hidden sm:block w-1 h-4 bg-border"></div>
              <div className="flex items-center space-x-3 animate-pulse-glow">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <span>No watermarks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
