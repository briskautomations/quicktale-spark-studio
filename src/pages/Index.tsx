
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Zap, MessageSquare, Palette, TrendingUp } from "lucide-react";
import { MarqueeSection } from "@/components/MarqueeSection";
import { TestimonialSlider } from "@/components/TestimonialSlider";

const Index = () => {
  const features = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Auto Voiceovers",
      description: "AI-generated natural voices that sound human and engaging"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Captioned in Seconds", 
      description: "Automatic captions and subtitles with perfect timing"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Templates Built to Trend",
      description: "Pre-made viral templates updated with trending formats"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Boost Score AI",
      description: "Smart analytics to predict and maximize your viral potential"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8E1] to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 bg-[#C3F73A]/20 text-[#2B2B2B] hover:bg-[#C3F73A]/30 transition-colors">
            🚀 2.5M+ clips generated
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#2B2B2B] leading-tight animate-fade-in">
            Create short videos that go{" "}
            <span className="text-[#6B3FA0]">viral</span> — instantly.
          </h1>
          
          <p className="text-xl md:text-2xl text-[#6D6D6D] mb-10 max-w-2xl mx-auto">
            AI-generated voiceovers, captions, edits & hooks. Just upload and go viral.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-[#6B3FA0] hover:bg-[#5D3487] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-[#FFD54F]/30"
            >
              Start Creating
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-[#6B3FA0] text-[#6B3FA0] hover:bg-[#6B3FA0] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
        </div>
        
        {/* Hero Visual */}
        <div className="mt-16 relative">
          <div className="flex justify-center items-center space-x-4 animate-fade-in">
            <div className="transform rotate-12 hover:rotate-6 transition-transform duration-500">
              <div className="w-48 h-80 bg-gradient-to-b from-[#6B3FA0] to-[#5D3487] rounded-3xl shadow-2xl flex items-center justify-center">
                <Play className="w-16 h-16 text-white" />
              </div>
            </div>
            <div className="transform -rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="w-48 h-80 bg-gradient-to-b from-[#FFD54F] to-[#FFC107] rounded-3xl shadow-2xl flex items-center justify-center">
                <Zap className="w-16 h-16 text-[#2B2B2B]" />
              </div>
            </div>
            <div className="transform rotate-8 hover:rotate-3 transition-transform duration-500">
              <div className="w-48 h-80 bg-gradient-to-b from-[#C3F73A] to-[#8BC34A] rounded-3xl shadow-2xl flex items-center justify-center">
                <TrendingUp className="w-16 h-16 text-[#2B2B2B]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <MarqueeSection />

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-6">
            Everything you need to go viral
          </h2>
          <p className="text-xl text-[#6D6D6D] max-w-2xl mx-auto">
            Powerful AI tools designed to make your content irresistible
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6B3FA0] to-[#FFD54F] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#6D6D6D]">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-[#6B3FA0] text-[#6B3FA0] hover:bg-[#6B3FA0] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
          >
            See how it works
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#6B3FA0] to-[#5D3487] rounded-3xl p-12 md:p-16 text-white shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Your next viral video is{" "}
            <span className="text-[#FFD54F]">1 click</span> away.
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            Join thousands of creators who've transformed their content strategy
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-[#FFD54F] hover:bg-[#FFC107] text-[#2B2B2B] px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Creating Now
              <Zap className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#6B3FA0] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
