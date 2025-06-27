
import { TrendingUp, Target, Clock, Users } from "lucide-react";

export const PerformanceMetrics = () => {
  const metrics = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "+89%",
      label: "Boost Score",
      description: "Average viral potential increase",
      color: "text-green-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: "+72%",
      label: "Avg View Time",
      description: "Compared to manual editing",
      color: "text-blue-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: "3.5x",
      label: "Faster Creation",
      description: "Speed up your workflow",
      color: "text-purple-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "12.3K+",
      label: "Active Creators",
      description: "Growing community",
      color: "text-orange-500"
    }
  ];

  return (
    <section className="py-20 gradient-mesh">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real results from real creators
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the performance boost creators are experiencing with QuikTale's AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className={`${metric.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                {metric.icon}
              </div>
              
              <div className="text-4xl font-bold text-foreground mb-2 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {metric.value}
              </div>
              
              <div className="text-lg font-semibold text-foreground mb-2">
                {metric.label}
              </div>
              
              <div className="text-sm text-muted-foreground">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-card border border-border rounded-2xl px-8 py-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i}
                  className={`w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold`}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              Join <span className="font-semibold text-foreground">12,300+</span> creators seeing these results
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
