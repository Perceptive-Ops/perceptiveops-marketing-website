import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const stats = [
  { value: "200+", label: "AI Models Deployed" },
  { value: "$50M+", label: "Client Revenue Impact" },
  { value: "98%", label: "Client Retention" },
  { value: "50K+", label: "Hours Automated" },
];

const Hero = () => {
  return (
    <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Subtle background blurs */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-[hsl(var(--gradient-start)/0.04)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[hsl(var(--gradient-end)/0.04)] blur-3xl pointer-events-none" />

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

          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8">
            We Build AI Systems<br className="hidden sm:block" /> That{" "}
            <span className="gradient-text">Run Your<br className="hidden sm:block" /> Operations</span>
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            We audit, automate, and optimize your business with custom AI solutions
            — so your team works smarter, scales faster, and ships with confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button size="lg" className="bg-primary text-primary-foreground rounded-full font-semibold text-base px-8 h-13">
              Get Free Consultation
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full font-semibold text-base px-8 h-13 border-border">
              <Play size={16} className="mr-2" />
              See Our Work
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-border">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <div className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
