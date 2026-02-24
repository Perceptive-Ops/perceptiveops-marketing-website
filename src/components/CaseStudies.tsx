import { motion } from "framer-motion";
import { ArrowRight, Lightbulb } from "lucide-react";

const cases = [
  {
    title: "AI Diagnostic System for Biotech Firm",
    desc: "Built a computer vision pipeline that reduced diagnostic turnaround from 5 days to 4 hours, processing 10,000+ samples monthly with 99.2% accuracy.",
    tag: "Healthcare AI",
    quote: "This system completely transformed our diagnostic workflow. We went from days of manual review to hours of automated precision.",
    quoteAuthor: "Lab Director",
    quoteCompany: "BioGenesis",
    metric: "99.2% accuracy",
    color: "bg-[hsl(var(--gradient-start)/0.1)]",
  },
  {
    title: "Multi-Vendor Marketplace Platform",
    desc: "Designed an AI-powered matching algorithm connecting 500+ vendors with enterprise buyers, increasing transaction volume by 340% in 6 months.",
    tag: "E-Commerce",
    quote: "The AI matching doubled our conversion rate overnight. We've never seen growth like this before in the marketplace.",
    quoteAuthor: "CEO",
    quoteCompany: "MarketStack",
    metric: "340% growth",
    color: "bg-[hsl(var(--gradient-end)/0.1)]",
  },
  {
    title: "Enterprise AI Support Chatbot",
    desc: "Deployed a multilingual AI chatbot handling 85% of Tier-1 support tickets autonomously, saving $2M annually in support costs.",
    tag: "Customer Support",
    quote: "We reinvested the savings straight into product development. The chatbot pays for itself many times over.",
    quoteAuthor: "VP Support",
    quoteCompany: "NovaBridge",
    metric: "$2M saved/yr",
    color: "bg-[hsl(var(--gradient-start)/0.1)]",
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

        <div className="space-y-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Left - Content */}
                <div className="flex-1 p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-foreground px-3 py-1 rounded-full bg-secondary border border-border">
                      {c.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold mb-5">{c.title}</h3>

                  {/* Image placeholder with metric overlay */}
                  <div className={`relative rounded-xl ${c.color} aspect-[16/9] mb-6 flex items-center justify-center`}>
                    <span className="font-display text-3xl lg:text-4xl font-bold text-foreground/20">{c.metric}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                    <Lightbulb size={14} />
                    What We Did
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>

                {/* Right - Testimonial */}
                <div className="lg:w-[38%] shrink-0 bg-secondary/50 p-8 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border">
                  <p className="text-base lg:text-lg text-foreground leading-relaxed mb-8 font-medium italic">
                    "{c.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center">
                      <span className="text-xs font-bold text-muted-foreground">
                        {c.quoteAuthor.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{c.quoteAuthor}</div>
                      <div className="text-xs text-muted-foreground">{c.quoteCompany}</div>
                    </div>
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
