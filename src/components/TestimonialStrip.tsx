import { Star, PlayCircle, CheckCircle } from "lucide-react";

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
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-dark mb-8 leading-tight">
            Loved by creators everywhere
          </h2>
          <p className="text-xl text-medium max-w-3xl mx-auto leading-relaxed">
            See what top creators are saying about their QuikTale experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-enhanced p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group relative overflow-hidden"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              
              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-dark mb-8 leading-relaxed font-medium">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className={`w-14 h-14 rounded-full ${testimonial.avatar} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-dark text-lg">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                    )}
                  </div>
                  <p className="text-medium text-sm">{testimonial.handle}</p>
                  <p className="text-xs text-light">
                    {testimonial.followers} followers on {testimonial.platform}
                  </p>
                </div>
              </div>

              {/* View profile link */}
              <button className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <PlayCircle className="w-6 h-6 text-medium hover:text-primary-contrast" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 rounded-xl border-2 border-primary text-primary-contrast hover:bg-primary hover:text-white transition-all duration-300 font-semibold">
            Read More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};