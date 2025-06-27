
import { Zap, MessageSquare, Palette, TrendingUp } from "lucide-react";

export const AIWorkflowSection = () => {
  const steps = [
    {
      number: "01",
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Upload & Analyze",
      description: "Drop your script, audio, or video. Our AI analyzes content and identifies viral potential.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02", 
      icon: <Palette className="w-6 h-6" />,
      title: "AI Enhancement",
      description: "Automatic voiceover generation, smart captions, and trend-based editing with perfect timing.",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Optimize & Export",
      description: "Boost Score analysis, platform-specific formatting, and one-click export to all socials.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            <Zap className="w-3 h-3 mr-1" />
            AI-Powered Workflow
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            From idea to viral video in{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              3 simple steps
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI handles the complex editing, timing, and optimization so you can focus on creating content.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative group"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-border to-transparent z-10"></div>
              )}
              
              <div className="bg-background border border-border rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 group-hover:border-primary/30">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-mono text-muted-foreground mb-2">{step.number}</div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                
                {/* Animated progress indicator */}
                <div className="mt-6">
                  <div className="h-1 bg-border rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${step.color} rounded-full group-hover:animate-shimmer transition-all duration-500`}
                      style={{ 
                        width: `${(index + 1) * 33.33}%`,
                        animationDelay: `${index * 0.2}s` 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 rounded-xl border border-border text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-medium">
            <Zap className="w-4 h-4 mr-2" />
            See AI Workflow in Action
          </button>
        </div>
      </div>
    </section>
  );
};
