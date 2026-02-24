import { motion } from "framer-motion";
import { Search, PenTool, Code2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import processApproach from "@/assets/process-approach.jpg";
import SectionBadge from "@/components/SectionBadge";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Discover & Audit",
    desc: "We analyze your workflows, data, and tech stack to find the highest-impact AI opportunities. Every engagement starts with deep discovery.",
  },
  {
    icon: PenTool,
    num: "02",
    title: "Design & Architect",
    desc: "We design a tailored AI architecture aligned with your business goals and existing infrastructure. No cookie-cutter solutions.",
  },
  {
    icon: Code2,
    num: "03",
    title: "Build & Deploy",
    desc: "We develop, test, and deploy production-ready AI solutions with continuous monitoring and iteration until it's perfect.",
  },
  {
    icon: TrendingUp,
    num: "04",
    title: "Optimize & Scale",
    desc: "We continuously improve model performance and scale systems as your business grows. Your AI gets smarter over time.",
  },
];

type ProcessProps = {
  onBookConsultation: () => void;
};

const Process = ({ onBookConsultation }: ProcessProps) => {
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
              <SectionBadge label="Our Process" className="mb-6" />
              <h2 className="font-display text-3xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
                From Chaos to Clarity in <span className="highlight-box">4 Phases</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
                A battle-tested approach that's transformed operations for 200+ businesses.
              </p>
              <Button
                size="lg"
                type="button"
                onClick={onBookConsultation}
                className="btn btn-primary font-semibold text-base px-8 h-13"
              >
                Free Consultation
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
            <div className="lg:w-[45%] shrink-0">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={processApproach} alt="AI-powered operations approach" className="w-full h-full object-cover" loading="lazy" />
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
              className="group rounded-2xl p-8 lg:p-10 bg-card border border-border transition-all duration-300 hover:bg-[hsl(var(--dark-card))] hover:border-[hsl(var(--dark-card))]"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-secondary text-muted-foreground group-hover:bg-[hsl(0_0%_100%/0.1)] group-hover:text-[hsl(var(--gradient-start))] transition-colors">
                  {step.num}
                </span>
                {/* Long arrow */}
                <div className="flex items-center text-muted-foreground/30 group-hover:text-[hsl(var(--gradient-end))] transition-colors">
                  <div className="w-20 lg:w-28 h-[1.5px] bg-current" />
                  <ArrowRight size={18} className="-ml-1" />
                </div>
              </div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold mb-3 text-foreground group-hover:text-[hsl(var(--dark-card-foreground))] transition-colors">
                {step.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground group-hover:text-[hsl(0_0%_100%/0.6)] transition-colors">
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
