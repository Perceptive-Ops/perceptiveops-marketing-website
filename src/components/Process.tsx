import { motion } from "framer-motion";
import { Search, PenTool, Code2, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Search,
    num: "Phase 1",
    title: "Discover & Audit",
    desc: "We analyze your workflows, data, and tech stack to find the highest-impact AI opportunities. Every engagement starts with deep discovery.",
    highlighted: true,
  },
  {
    icon: PenTool,
    num: "Phase 2",
    title: "Design & Architect",
    desc: "We design a tailored AI architecture aligned with your business goals and existing infrastructure. No cookie-cutter solutions.",
    highlighted: false,
  },
  {
    icon: Code2,
    num: "Phase 3",
    title: "Build & Deploy",
    desc: "We develop, test, and deploy production-ready AI solutions with continuous monitoring and iteration until it's perfect.",
    highlighted: false,
  },
  {
    icon: TrendingUp,
    num: "Phase 4",
    title: "Optimize & Scale",
    desc: "We continuously improve model performance and scale systems as your business grows. Your AI gets smarter over time.",
    highlighted: false,
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Intro block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-secondary/60 border border-border p-8 lg:p-14 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background text-sm font-medium text-muted-foreground mb-6">
                Our Approach
              </div>
              <h2 className="font-display text-3xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
                Our <span className="highlight-box">proven approach</span> to transform your operations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
                We follow a battle-tested methodology that ensures every AI implementation delivers measurable results. From discovery to deployment, we're with you every step.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground rounded-full font-semibold text-base px-8 h-13">
                Free Consultation
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
            <div className="lg:w-[45%] shrink-0">
              <div className="aspect-[4/3] rounded-2xl bg-muted border border-border flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Process Overview</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2x2 Phase cards grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-8 lg:p-10 ${
                step.highlighted
                  ? "dark-section"
                  : "bg-card border border-border"
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <span
                  className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${
                    step.highlighted
                      ? "bg-[hsl(0_0%_100%/0.1)] text-[hsl(var(--gradient-start))]"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {step.num}
                </span>
                <ArrowRight
                  size={20}
                  className={step.highlighted ? "text-[hsl(0_0%_100%/0.3)]" : "text-muted-foreground/30"}
                />
              </div>
              <h3
                className={`font-display text-2xl lg:text-3xl font-bold mb-3 ${
                  step.highlighted ? "text-[hsl(var(--dark-card-foreground))]" : "text-foreground"
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`text-base leading-relaxed ${
                  step.highlighted ? "text-[hsl(0_0%_100%/0.6)]" : "text-muted-foreground"
                }`}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
