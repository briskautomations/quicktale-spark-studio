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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary-contrast text-sm font-medium mb-6">
            <Zap className="w-3 h-3 mr-1" />
            AI-Powered Workflow
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-dark mb-8 leading-tight">
            From idea to viral video in{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              3 simple steps
            </span>
          </h2>
          <p className="text-xl text-medium max-w-3xl mx-auto leading-relaxed">
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
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-slate-200 to-transparent z-10"></div>
              )}
              
              <div className="card-enhanced p-8 h-full hover:shadow-xl transition-all duration-300 group-hover:border-primary/30">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-mono text-medium mb-2">{step.number}</div>
                    <h3 className="text-xl font-bold text-dark mb-3">{step.title}</h3>
                  </div>
                </div>
                
                <p className="text-medium leading-relaxed">{step.description}</p>
                
                {/* Animated progress indicator */}
                <div className="mt-6">
                  <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
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
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 rounded-xl border-2 border-primary text-primary-contrast hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-lg">
            <Zap className="w-5 h-5 mr-2" />
            See AI Workflow in Action
          </button>
        </div>
      </div>
    </section>
  );
};