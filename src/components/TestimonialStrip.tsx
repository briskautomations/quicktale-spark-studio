
import { Star, PlayCircle } from "lucide-react";

export const TestimonialStrip = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      handle: "@sarahcreates",
      followers: "125K",
      platform: "TikTok",
      quote: "QuikTale's AI is incredible. Hit 500K views in 12 hours with zero editing experience.",
      avatar: "bg-gradient-to-br from-pink-500 to-rose-500",
      verified: true
    },
    {
      name: "Marcus Rodriguez", 
      handle: "@marcustech",
      followers: "89K",
      platform: "YouTube",
      quote: "The voiceover quality is insane. Sounds more natural than my own voice sometimes.",
      avatar: "bg-gradient-to-br from-blue-500 to-indigo-500",
      verified: true
    },
    {
      name: "Emma Thompson",
      handle: "@emmastyle", 
      followers: "67K",
      platform: "Instagram",
      quote: "Went from 2 hours of editing to 2 minutes. This is the future of content creation.",
      avatar: "bg-gradient-to-br from-purple-500 to-pink-500",
      verified: false
    }
  ];

  return (
    <section className="py-20 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Loved by creators everywhere
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what top creators are saying about their QuikTale experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-background border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group relative overflow-hidden"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              
              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-foreground mb-8 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full ${testimonial.avatar} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">{testimonial.handle}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.followers} followers on {testimonial.platform}
                  </p>
                </div>
              </div>

              {/* View profile link */}
              <button className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <PlayCircle className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 rounded-xl border border-border text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-medium">
            Read More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};
