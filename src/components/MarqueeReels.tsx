
import { Play } from "lucide-react";

export const MarqueeReels = () => {
  const videos = [
    { id: 1, title: "Reddit Story", category: "Storytelling", views: "2.3M", gradient: "from-red-500 to-orange-500" },
    { id: 2, title: "Gaming Highlight", category: "Gaming", views: "5.1M", gradient: "from-purple-500 to-blue-500" },
    { id: 3, title: "Podcast Clip", category: "Podcast", views: "1.8M", gradient: "from-green-500 to-teal-500" },
    { id: 4, title: "Meme Compilation", category: "Meme", views: "3.4M", gradient: "from-yellow-500 to-pink-500" },
    { id: 5, title: "Life Hack", category: "Educational", views: "890K", gradient: "from-indigo-500 to-purple-500" },
    { id: 6, title: "Tech Review", category: "Tech", views: "2.7M", gradient: "from-cyan-500 to-blue-500" },
    { id: 7, title: "Cooking Short", category: "Food", views: "4.2M", gradient: "from-orange-500 to-red-500" },
    { id: 8, title: "Fitness Tips", category: "Health", views: "1.5M", gradient: "from-green-500 to-emerald-500" }
  ];

  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Trending Video Styles You Can Auto-Generate
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From Reddit stories to gaming clips — choose your style and let AI handle the rest
          </p>
        </div>
        
        {/* Filter tags */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {["All", "Reddit", "Gaming", "Podcast", "Meme", "Educational"].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === "All" 
                  ? "bg-primary text-white" 
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      {/* Scrolling marquee */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll hover:pause gap-6">
          {[...videos, ...videos].map((video, index) => (
            <div 
              key={`${video.id}-${index}`}
              className="flex-shrink-0 group cursor-pointer"
            >
              <div className="w-48 h-80 bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 overflow-hidden border border-border">
                <div className={`w-full h-64 bg-gradient-to-br ${video.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  
                  {/* Play button */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-5 h-5 text-gray-800 ml-0.5" />
                    </div>
                  </div>
                  
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-white/90 text-gray-800 text-xs font-medium rounded-full">
                      {video.category}
                    </span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="h-1 bg-white/30 rounded-full">
                      <div className="h-full bg-white rounded-full" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                    </div>
                  </div>
                </div>
                
                {/* Video info */}
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-1 text-sm">{video.title}</h3>
                  <p className="text-xs text-muted-foreground">{video.views} views</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
