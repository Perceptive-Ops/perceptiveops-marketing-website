import { motion } from "framer-motion";
import { Bot, Workflow, BrainCircuit, Rocket, Lightbulb, Database } from "lucide-react";

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
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold tracking-tight">
            End-to-End AI Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                <s.icon size={24} className="text-white" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
