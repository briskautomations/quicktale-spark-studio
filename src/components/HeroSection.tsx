import { Button } from "@/components/ui/button";
import { Play, Zap, Sparkles, ArrowRight, Video } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full border-2 border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10 text-primary-contrast text-sm font-bold shadow-lg">
                <Sparkles className="w-5 h-5 mr-2" />
                2.5M+ AI-generated videos
              </div>
              
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-900 leading-[1.05] tracking-tight">
                Create AI-powered{" "}
                <span className="bg-gradient-to-r from-primary via-purple-600 to-accent bg-clip-text text-transparent">
                  viral videos
                </span>{" "}
                — faster than ever.
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-700 leading-relaxed max-w-4xl mx-auto font-medium">
                Upload a script or clip, and get a fully-edited short with voiceover, captions, and viral pacing. Ready for Reels, Shorts, TikTok.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="btn-primary text-white font-bold px-12 h-16 rounded-2xl text-lg shadow-2xl hover:shadow-primary/50 transition-all duration-300 group"
              >
                <Zap className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                Start Creating
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="btn-secondary font-bold px-12 h-16 rounded-2xl text-lg transition-all duration-300 hover:scale-105 group"
              >
                <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Watch 30-sec Demo
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-sm text-slate-700 font-semibold">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>No signup needed</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Export in seconds</span>
              </div>
              <div className="flex items-center space-x-3">
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