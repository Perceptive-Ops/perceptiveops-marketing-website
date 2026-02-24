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
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-[hsl(var(--gradient-start)/0.08)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[hsl(var(--gradient-end)/0.08)] blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-sm font-medium text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full gradient-bg" />
            AI-Powered Operations Partner
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            We Build AI Systems That{" "}
            <span className="gradient-text">Run Your Operations</span>
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            We audit, automate, and optimize your business with custom AI solutions
            — so your team works smarter, scales faster, and ships with confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="gradient-bg border-0 text-white font-semibold text-base px-8 h-12">
              Get Free Consultation
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button size="lg" variant="outline" className="font-semibold text-base px-8 h-12">
              <Play size={16} className="mr-2" />
              See Our Work
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-4">
              <div className="font-display text-3xl lg:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
