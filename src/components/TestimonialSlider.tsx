
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      username: "@sarahcreates",
      avatar: "bg-gradient-to-br from-pink-400 to-rose-500",
      quote: "QuikTale helped me hit 10k subs in 2 weeks! The AI voiceovers are incredibly natural.",
      followers: "125K",
      platform: "TikTok"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      username: "@marcustech",
      avatar: "bg-gradient-to-br from-blue-400 to-indigo-500",
      quote: "I went from 0 to 500k views overnight. The trending templates are pure gold!",
      followers: "89K",
      platform: "YouTube"
    },
    {
      id: 3,
      name: "Emma Thompson",
      username: "@emmastyle",
      avatar: "bg-gradient-to-br from-purple-400 to-pink-500",
      quote: "My engagement rate increased by 400%. QuikTale's AI knows what works!",
      followers: "67K",
      platform: "Instagram"
    },
    {
      id: 4,
      name: "Alex Kim",
      username: "@alexcooks",
      avatar: "bg-gradient-to-br from-green-400 to-teal-500",
      quote: "From struggling creator to viral sensation. This tool changed everything for me.",
      followers: "234K",
      platform: "TikTok"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FFF8E1]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-6">
            Loved by creators everywhere
          </h2>
          <p className="text-xl text-[#6D6D6D] max-w-2xl mx-auto">
            See what successful creators are saying about QuikTale
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border-0 shadow-xl bg-white rounded-3xl mx-auto max-w-2xl">
                    <CardContent className="p-8 md:p-12 text-center">
                      <div className="flex justify-center mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-[#FFD54F] fill-current" />
                        ))}
                      </div>
                      
                      <blockquote className="text-xl md:text-2xl text-[#2B2B2B] mb-8 font-medium italic">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="flex items-center justify-center space-x-4">
                        <div className={`w-16 h-16 ${testimonial.avatar} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="text-left">
                          <h4 className="font-bold text-[#2B2B2B] text-lg">{testimonial.name}</h4>
                          <p className="text-[#6D6D6D]">{testimonial.username}</p>
                          <p className="text-sm text-[#6B3FA0] font-semibold">
                            {testimonial.followers} followers on {testimonial.platform}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg border-gray-200 hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg border-gray-200 hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#6B3FA0] w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
