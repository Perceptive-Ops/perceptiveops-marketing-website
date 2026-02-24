import { motion } from "framer-motion";
import { Search, PenTool, Code2, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Search,
    num: "Phase 1",
    title: "Discover & Audit",
    desc: "We analyze your workflows, data, and tech stack to find the highest-impact AI opportunities. Every engagement starts with deep discovery.",
  },
  {
    icon: PenTool,
    num: "Phase 2",
    title: "Design & Architect",
    desc: "We design a tailored AI architecture aligned with your business goals and existing infrastructure. No cookie-cutter solutions.",
  },
  {
    icon: Code2,
    num: "Phase 3",
    title: "Build & Deploy",
    desc: "We develop, test, and deploy production-ready AI solutions with continuous monitoring and iteration until it's perfect.",
  },
  {
    icon: TrendingUp,
    num: "Phase 4",
    title: "Optimize & Scale",
    desc: "We continuously improve model performance and scale systems as your business grows. Your AI gets smarter over time.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">How We Work</p>
          <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight">
            Our Proven Process
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="dark-section rounded-2xl p-8 lg:p-10"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-[hsl(0_0%_100%/0.1)] flex items-center justify-center shrink-0">
                  <step.icon size={22} className="text-[hsl(var(--dark-card-foreground))]" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--gradient-start))] mb-2 block">
                    {step.num}
                  </span>
                  <h3 className="font-display text-xl lg:text-2xl font-bold mb-3 text-[hsl(var(--dark-card-foreground))]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[hsl(0_0%_100%/0.6)] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-primary text-primary-foreground rounded-full font-semibold text-base px-8 h-13">
            Start Your Project
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
