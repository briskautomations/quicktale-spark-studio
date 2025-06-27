
import { Button } from "@/components/ui/button";
import { Play, Zap, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen pt-16 gradient-mesh flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
                <Sparkles className="w-3 h-3 mr-1" />
                2.5M+ AI-generated videos
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                Create AI-powered{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  viral videos
                </span>{" "}
                — faster than ever.
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Upload a script or clip, and get a fully-edited short with voiceover, captions, and viral pacing. Ready for Reels, Shorts, TikTok.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-primary text-white font-semibold px-8 h-12 rounded-xl text-base"
              >
                <Zap className="w-4 h-4 mr-2" />
                Start Creating
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-foreground/10 text-foreground hover:bg-foreground hover:text-background font-semibold px-8 h-12 rounded-xl text-base transition-all duration-300"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch 30-sec Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No signup needed</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Export in seconds</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - 3D Video Preview */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              {/* Floating video cards */}
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-1 shadow-2xl animate-float" style={{ animationDelay: '0s' }}>
                  <div className="aspect-[9/16] bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="h-1 bg-white/30 rounded-full mb-2">
                        <div className="h-full w-3/4 bg-white rounded-full"></div>
                      </div>
                      <div className="text-white text-xs font-medium">Cooking Hack</div>
                      <div className="text-white/70 text-xs">2.3M views</div>
                    </div>
                    <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-1 shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
                  <div className="aspect-[9/16] bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="h-1 bg-white/30 rounded-full mb-2">
                        <div className="h-full w-2/3 bg-white rounded-full"></div>
                      </div>
                      <div className="text-white text-xs font-medium">Tech Review</div>
                      <div className="text-white/70 text-xs">890K views</div>
                    </div>
                    <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 pt-8">
                <div className="bg-white rounded-2xl p-1 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                  <div className="aspect-[9/16] bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="h-1 bg-white/30 rounded-full mb-2">
                        <div className="h-full w-4/5 bg-white rounded-full"></div>
                      </div>
                      <div className="text-white text-xs font-medium">Life Hack</div>
                      <div className="text-white/70 text-xs">3.4M views</div>
                    </div>
                    <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-1 shadow-2xl animate-float" style={{ animationDelay: '3s' }}>
                  <div className="aspect-[9/16] bg-gradient-to-br from-orange-500 to-red-500 rounded-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="h-1 bg-white/30 rounded-full mb-2">
                        <div className="h-full w-1/2 bg-white rounded-full"></div>
                      </div>
                      <div className="text-white text-xs font-medium">Dance Trend</div>
                      <div className="text-white/70 text-xs">5.1M views</div>
                    </div>
                    <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating AI elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-lg animate-glow opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
