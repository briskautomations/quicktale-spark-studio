import { TrendingUp, Target, Clock, Users, ArrowUpRight, Zap } from "lucide-react";

export const PerformanceMetrics = () => {
  const metrics = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "+89%",
      label: "Boost Score",
      description: "Average viral potential increase",
      color: "from-emerald-500 to-green-600",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: "+72%",
      label: "Avg View Time",
      description: "Compared to manual editing",
      color: "from-blue-500 to-indigo-600",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: "3.5x",
      label: "Faster Creation",
      description: "Speed up your workflow",
      color: "from-purple-500 to-violet-600",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "12.3K+",
      label: "Active Creators",
      description: "Growing community",
      color: "from-orange-500 to-red-500",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-primary-contrast text-sm font-semibold mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Performance Analytics
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-dark mb-8 leading-tight">
            Real results from real creators
          </h2>
          <p className="text-xl text-medium max-w-3xl mx-auto leading-relaxed">
            See the performance boost creators are experiencing with QuikTale's AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="card-enhanced p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className={`${metric.iconBg} ${metric.iconColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {metric.icon}
              </div>
              
              <div className={`text-5xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {metric.value}
              </div>
              
              <div className="text-xl font-bold text-dark mb-3">
                {metric.label}
              </div>
              
              <div className="text-medium leading-relaxed">
                {metric.description}
              </div>

              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-5 h-5 text-primary-contrast mx-auto" />
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Social Proof */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-6 card-enhanced px-10 py-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i}
                  className={`w-12 h-12 rounded-full border-4 border-white bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold shadow-lg`}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 flex items-center justify-center text-slate-600 text-xs font-bold shadow-lg">
                +2K
              </div>
            </div>
            <div className="text-lg text-medium">
              Join <span className="font-bold text-dark text-xl">12,300+</span> creators seeing these results
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};