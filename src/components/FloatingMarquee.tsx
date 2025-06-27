
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
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-accent/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            See QuikTale in Action
          </h2>
          <p className="text-xl text-muted-foreground">
            Real creators, real results — watch the magic happen
          </p>
        </div>
      </div>

      {/* Floating Videos Row 1 */}
      <div className="relative mb-8">
        <div className="flex animate-scroll space-x-6 w-max">
          {videos.concat(videos).map((video, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 w-48 h-85 bg-white rounded-3xl p-2 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-float border border-white/20"
              style={{ 
                animationDelay: `${video.delay}s`,
                background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
                backdropFilter: 'blur(20px)'
              }}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-black">
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
                  <div className="text-xs font-semibold">AI Generated Short</div>
                  <div className="text-xs opacity-80">2.3M views</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Videos Row 2 - Reverse Direction */}
      <div className="relative">
        <div className="flex animate-scroll-reverse space-x-6 w-max">
          {videos.concat(videos).map((video, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 w-48 h-85 bg-white rounded-3xl p-2 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-float border border-white/20"
              style={{ 
                animationDelay: `${video.delay + 2}s`,
                background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
                backdropFilter: 'blur(20px)'
              }}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-black">
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
                    <div className="h-full w-2/3 bg-white rounded-full"></div>
                  </div>
                  <div className="text-xs font-semibold">Viral Content</div>
                  <div className="text-xs opacity-80">1.8M views</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-12 h-12 bg-primary/20 rounded-2xl animate-glow blur-sm"></div>
      <div className="absolute bottom-20 right-10 w-8 h-8 bg-accent/30 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full animate-bounce opacity-60"></div>
    </section>
  );
};
