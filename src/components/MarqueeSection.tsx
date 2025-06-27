
import { Play } from "lucide-react";

export const MarqueeSection = () => {
  const videos = [
    { id: 1, title: "Cooking Hack", views: "2.3M", thumbnail: "bg-gradient-to-br from-red-400 to-pink-500" },
    { id: 2, title: "Dance Trend", views: "5.1M", thumbnail: "bg-gradient-to-br from-blue-400 to-purple-500" },
    { id: 3, title: "Comedy Skit", views: "1.8M", thumbnail: "bg-gradient-to-br from-green-400 to-teal-500" },
    { id: 4, title: "Life Hack", views: "3.4M", thumbnail: "bg-gradient-to-br from-yellow-400 to-orange-500" },
    { id: 5, title: "Tech Review", views: "890K", thumbnail: "bg-gradient-to-br from-purple-400 to-indigo-500" },
    { id: 6, title: "Art Process", views: "2.7M", thumbnail: "bg-gradient-to-br from-pink-400 to-rose-500" }
  ];

  return (
    <section className="py-16 bg-white border-t border-b border-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4">
          See what creators are making
        </h2>
        <p className="text-lg text-[#6D6D6D]">
          Real videos created with QuikTale
        </p>
      </div>
      
      <div className="relative overflow-hidden">
        <div className="flex animate-[scroll_30s_linear_infinite] hover:pause">
          {[...videos, ...videos].map((video, index) => (
            <div 
              key={`${video.id}-${index}`}
              className="flex-shrink-0 mx-4 group cursor-pointer"
            >
              <div className="w-64 h-96 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 relative overflow-hidden">
                <div className={`w-full h-full ${video.thumbnail} flex items-center justify-center relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                  <h3 className="font-semibold text-lg mb-1">{video.title}</h3>
                  <p className="text-sm opacity-90">{video.views} views</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
