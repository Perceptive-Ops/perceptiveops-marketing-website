import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "200+", label: "AI Models Deployed" },
  { value: "50K+", label: "Hours Automated" },
  { value: "98%", label: "Client Retention" },
];

const Hero = () => {
  return (
    <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Subtle background blurs */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-[hsl(var(--gradient-start)/0.03)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[hsl(var(--gradient-end)/0.03)] blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary text-sm font-medium text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full gradient-bg" />
            AI-Powered Operations Partner
          </div>

          <h1 className="font-display text-6xl sm:text-7xl lg:text-[7rem] font-bold tracking-tight leading-[1.05] mb-8">
            We Build AI Systems<br className="hidden sm:block" /> That{" "}
            <span className="highlight-box">Run Your Operations</span>
          </h1>

          <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            We audit, automate, and optimize your business with custom AI solutions
            — so your team works smarter, scales faster, and ships with confidence.
          </p>

          <div className="flex justify-center mb-20">
            <Button size="lg" className="btn-purple-3d rounded-full font-semibold text-base px-8 h-16 uppercase tracking-wide">
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
          className="max-w-4xl mx-auto rounded-2xl border border-border bg-secondary/50 p-6 lg:p-8"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Badges area */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-background border border-border">
                <div className="w-8 h-8 rounded-full bg-[hsl(var(--gradient-end))] flex items-center justify-center">
                  <span className="text-white text-xs font-bold">★</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">5.0</div>
                  <div className="text-[10px] text-muted-foreground">Clutch</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-background border border-border">
                <div className="w-8 h-8 rounded-full bg-[hsl(var(--gradient-end))] flex items-center justify-center">
                  <span className="text-white text-xs font-bold">A+</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">Top Rated</div>
                  <div className="text-[10px] text-muted-foreground">Upwork</div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-12 bg-border" />

            {/* Stats */}
            <div className="flex-1 grid grid-cols-3 divide-x divide-border">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center px-4">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
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
