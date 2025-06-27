import { Play } from "lucide-react";

export const FloatingMarquee = () => {
  const videoId = "w1EhwfASwUA";
  
  // Create multiple instances of the same video for marquee effect
  const videos = Array(8).fill(null).map((_, index) => ({
    id: `${videoId}-${index}`,
    embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`,
    title: "YouTube Short Video",
    delay: index * 0.5
  }));

  return (
    <section className="py-24 bg-gradient-to-br from-slate-100 to-blue-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-dark mb-6 leading-tight">
            See QuikTale in Action
          </h2>
          <p className="text-xl text-medium max-w-3xl mx-auto leading-relaxed">
            Real creators, real results — watch the magic happen
          </p>
        </div>
      </div>

      {/* Single Floating Videos Row */}
      <div className="relative">
        <div className="flex animate-scroll space-x-6 w-max">
          {videos.concat(videos).map((video, index) => (
            <div
              key={`video-${index}`}
              className="flex-shrink-0 w-48 h-85 bg-white rounded-3xl p-2 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-float border border-slate-200"
              style={{ 
                animationDelay: `${video.delay}s`,
                background: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(248,250,252,0.9))',
                backdropFilter: 'blur(20px)'
              }}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-slate-900">
                <iframe
                  src={video.embedUrl}
                  className="w-full h-full object-cover"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ aspectRatio: '9/16' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="h-1 bg-white/30 rounded-full mb-2">
                    <div className="h-full w-3/4 bg-white rounded-full"></div>
                  </div>
                  <div className="text-xs opacity-80">2.3M views</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Darker Floating Elements */}
      <div className="absolute top-20 left-10 w-12 h-12 bg-slate-400/30 rounded-2xl animate-glow blur-sm"></div>
      <div className="absolute bottom-20 right-10 w-8 h-8 bg-slate-500/40 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full animate-bounce opacity-60"></div>
    </section>
  );
};