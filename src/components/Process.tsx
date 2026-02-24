import { motion } from "framer-motion";
import { Search, PenTool, Code2, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Discover & Audit",
    desc: "We analyze your workflows, data, and tech stack to find the highest-impact AI opportunities.",
  },
  {
    icon: PenTool,
    num: "02",
    title: "Design & Architect",
    desc: "We design a tailored AI architecture aligned with your business goals and existing infrastructure.",
  },
  {
    icon: Code2,
    num: "03",
    title: "Build & Deploy",
    desc: "We develop, test, and deploy production-ready AI solutions with continuous monitoring.",
  },
  {
    icon: TrendingUp,
    num: "04",
    title: "Optimize & Scale",
    desc: "We continuously improve model performance and scale systems as your business grows.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">How We Work</p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold tracking-tight">
            Our Proven Process
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="text-6xl font-display font-bold text-primary/10 mb-4">{step.num}</div>
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                <step.icon size={26} className="text-white" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
