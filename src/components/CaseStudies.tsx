import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    title: "AI Diagnostic System for Biotech Firm",
    desc: "Built a computer vision pipeline that reduced diagnostic turnaround from 5 days to 4 hours, processing 10,000+ samples monthly with 99.2% accuracy.",
    tag: "Healthcare AI",
  },
  {
    title: "Multi-Vendor Marketplace Platform",
    desc: "Designed an AI-powered matching algorithm connecting 500+ vendors with enterprise buyers, increasing transaction volume by 340% in 6 months.",
    tag: "E-Commerce",
  },
  {
    title: "Enterprise AI Support Chatbot",
    desc: "Deployed a multilingual AI chatbot handling 85% of Tier-1 support tickets autonomously, saving $2M annually in support costs.",
    tag: "Customer Support",
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Case Studies</p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold tracking-tight">
            Real Impact, Real Results
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-4 px-3 py-1 rounded-full bg-primary/10">
                {c.tag}
              </span>
              <h3 className="font-display text-xl font-semibold mb-3">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.desc}</p>
              <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Read More <ArrowRight size={14} className="ml-1" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
