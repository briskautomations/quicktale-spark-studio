import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, Sparkles, CheckCircle, Star, TrendingUp } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Floating elements */}
          <div className="relative mb-8">
            <div className="absolute -top-8 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="absolute -top-4 right-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-300"></div>
            <div className="absolute top-2 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
            
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              No signup required • Export in seconds
            </div>
          </div>

          <h2 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Your next viral video is{" "}
            <span className="text-white">
              1 click
            </span>{" "}
            away.
          </h2>

          <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join <span className="font-bold text-white text-2xl">12,300+</span> creators who've transformed their content strategy with AI-powered video generation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold px-12 h-16 rounded-2xl text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 animate-pulse-glow"
            >
              <Zap className="w-6 h-6 mr-3" />
              Start Creating Now
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>

            <div className="flex items-center space-x-6 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white">Free to start</span>
              </div>
              <div className="w-1 h-4 bg-white/30"></div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white">No watermarks</span>
              </div>
              <div className="w-1 h-4 bg-white/30"></div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white">Unlimited exports</span>
              </div>
            </div>
          </div>

          {/* Enhanced Trust indicators */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <Star className="w-6 h-6 text-yellow-400 mr-2" />
                <div className="text-3xl font-bold text-white">2.5M+</div>
              </div>
              <div className="text-sm text-white/80">Videos Created</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-6 h-6 text-green-400 mr-2" />
                <div className="text-3xl font-bold text-white">89%</div>
              </div>
              <div className="text-sm text-white/80">Viral Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <Zap className="w-6 h-6 text-blue-400 mr-2" />
                <div className="text-3xl font-bold text-white">3.5x</div>
              </div>
              <div className="text-sm text-white/80">Faster Creation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};