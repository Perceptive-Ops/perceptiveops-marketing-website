import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";

const stats = [
  { value: "200+", label: "AI Models Deployed" },
  { value: "50K+", label: "Hours Automated" },
  { value: "98%", label: "Client Retention" },
];

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {
      // Autoplay blocked — video stays on poster
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.pexels.com/videos/5377684/pexels-photo-5377684.jpeg?auto=compress&cs=tinysrgb&w=1920"
      >
        <source
          src="https://videos.pexels.com/video-files/5377684/5377684-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/10 text-sm font-medium text-white/80 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full gradient-bg" />
            AI-Powered Operations Partner
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8 text-white">
            We Build AI Systems<br className="hidden sm:block" /> That{" "}
            <span className="highlight-box">Run Your Operations</span>
          </h1>

          <p className="text-lg lg:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            We audit, automate, and optimize your business with custom AI solutions
            — so your team works smarter, scales faster, and ships with confidence.
          </p>

          <div className="flex justify-center mb-20">
            <Button size="lg" className="btn-gradient rounded-full font-semibold text-base px-8 h-16 uppercase tracking-wide">
              Free Consultation
              <span className="ml-3 w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <ArrowRight size={16} />
              </span>
            </Button>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 lg:p-8"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Badges area */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-full bg-[hsl(var(--gradient-end))] flex items-center justify-center">
                  <span className="text-white text-xs font-bold">★</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white">5.0</div>
                  <div className="text-[10px] text-white/50">Clutch</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-full bg-[hsl(var(--gradient-end))] flex items-center justify-center">
                  <span className="text-white text-xs font-bold">A+</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Top Rated</div>
                  <div className="text-[10px] text-white/50">Upwork</div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-12 bg-white/10" />

            {/* Stats */}
            <div className="flex-1 grid grid-cols-3 divide-x divide-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center px-4">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
