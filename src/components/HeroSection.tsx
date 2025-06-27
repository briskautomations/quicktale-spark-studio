
import { Button } from "@/components/ui/button";
import { Play, Zap, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen pt-16 flex items-center justify-center bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full border-2 border-primary/30 bg-primary/10 text-primary text-sm font-semibold">
                <Sparkles className="w-4 h-4 mr-2" />
                2.5M+ AI-generated videos
              </div>
              
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.05] tracking-tight">
                Create AI-powered{" "}
                <span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
                  viral videos
                </span>{" "}
                — faster than ever.
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-medium">
                Upload a script or clip, and get a fully-edited short with voiceover, captions, and viral pacing. Ready for Reels, Shorts, TikTok.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="btn-primary text-white font-bold px-10 h-14 rounded-2xl text-lg shadow-2xl hover:shadow-primary/50 transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-3" />
                Start Creating
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-foreground/20 bg-background/80 backdrop-blur-sm text-foreground hover:bg-foreground hover:text-background font-bold px-10 h-14 rounded-2xl text-lg transition-all duration-300 hover:scale-105"
              >
                <Play className="w-5 h-5 mr-3" />
                Watch 30-sec Demo
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground font-medium">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>No signup needed</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Export in seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
