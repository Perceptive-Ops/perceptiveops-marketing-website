import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    title: "AI Diagnostic System for Biotech Firm",
    desc: "Built a computer vision pipeline that reduced diagnostic turnaround from 5 days to 4 hours, processing 10,000+ samples monthly with 99.2% accuracy.",
    tag: "Healthcare AI",
    quote: "This system completely transformed our diagnostic workflow.",
    quoteAuthor: "Lab Director, BioGenesis",
    metric: "99.2% accuracy",
  },
  {
    title: "Multi-Vendor Marketplace Platform",
    desc: "Designed an AI-powered matching algorithm connecting 500+ vendors with enterprise buyers, increasing transaction volume by 340% in 6 months.",
    tag: "E-Commerce",
    quote: "The AI matching doubled our conversion rate overnight.",
    quoteAuthor: "CEO, MarketStack",
    metric: "340% growth",
  },
  {
    title: "Enterprise AI Support Chatbot",
    desc: "Deployed a multilingual AI chatbot handling 85% of Tier-1 support tickets autonomously, saving $2M annually in support costs.",
    tag: "Customer Support",
    quote: "We reinvested the savings straight into product development.",
    quoteAuthor: "VP Support, NovaBridge",
    metric: "$2M saved/yr",
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">Case Studies</p>
          <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight">
            Real Impact, Real Results
          </h2>
        </motion.div>

        <div className="space-y-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card hover:bg-secondary/30 transition-all duration-300 overflow-hidden"
            >
              <div className="p-8 lg:p-10 flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-foreground px-3 py-1 rounded-full bg-secondary border border-border">
                      {c.tag}
                    </span>
                    <span className="text-xs font-bold gradient-text">{c.metric}</span>
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">{c.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{c.desc}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-foreground group-hover:gap-2 transition-all cursor-pointer">
                    View Case Study <ArrowRight size={14} className="ml-1.5" />
                  </span>
                </div>
                <div className="lg:w-80 shrink-0">
                  <div className="bg-secondary rounded-xl p-6 h-full flex flex-col justify-center">
                    <p className="text-sm italic text-muted-foreground leading-relaxed mb-4">"{c.quote}"</p>
                    <span className="text-xs font-semibold text-foreground">{c.quoteAuthor}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
