import { motion } from "framer-motion";
import { Bot, Workflow, BrainCircuit, Rocket, Lightbulb, Database, ArrowUpRight } from "lucide-react";
import SectionBadge from "@/components/SectionBadge";

const services = [
  {
    icon: Bot,
    title: "AI Agent & Chatbot Development",
    desc: "Custom conversational AI agents that handle customer support, lead qualification, and internal workflows 24/7.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation & Integration",
    desc: "Connect your tools and automate repetitive tasks across your entire tech stack with intelligent workflows.",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning & Predictive Analytics",
    desc: "Turn your data into actionable insights with custom ML models that predict trends and drive decisions.",
  },
  {
    icon: Rocket,
    title: "AI-Powered Product Development",
    desc: "Build intelligent features into your product — from recommendation engines to natural language interfaces.",
  },
  {
    icon: Lightbulb,
    title: "AI Strategy & Consulting",
    desc: "Get a clear AI roadmap tailored to your business goals, team capabilities, and technical infrastructure.",
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    desc: "Build robust data pipelines and dashboards that give you real-time visibility into your operations.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionBadge label="What We Do" className="mb-4" />
          <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight mb-4">
            AI-Powered Services Built for <span className="gradient-text">Real Impact</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From strategy to deployment — we handle the full stack of AI transformation so you can focus on growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative p-7 rounded-2xl border border-border bg-card hover:bg-secondary/50 hover:border-border transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--gradient-start)/0.1)] flex items-center justify-center">
                  <s.icon size={22} className="text-[hsl(var(--gradient-start))]" />
                </div>
                <ArrowUpRight size={18} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <a href="#services" className="text-sm font-medium gradient-text inline-flex items-center gap-1 hover:opacity-80 transition-opacity">
                Learn more <ArrowUpRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
