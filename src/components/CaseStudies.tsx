import { motion } from "framer-motion";
import { Activity, ShoppingCart, Headphones } from "lucide-react";
import caseHealthcare from "@/assets/case-healthcare.jpg";
import caseEcommerce from "@/assets/case-ecommerce.jpg";
import caseSupport from "@/assets/case-support.jpg";

const cases = [
  {
    title: "AI Diagnostic System for Biotech Firm",
    desc: "Built a computer vision pipeline that reduced diagnostic turnaround from 5 days to 4 hours, processing 10,000+ samples monthly.",
    tag: "Healthcare AI",
    icon: Activity,
    image: caseHealthcare,
    metrics: [
      { value: "85%", label: "Faster Analysis" },
      { value: "99.2%", label: "Accuracy" },
      { value: "5M+", label: "Images Processed" },
    ],
  },
  {
    title: "Multi-Vendor Marketplace Platform",
    desc: "Designed an AI-powered matching algorithm connecting 500+ vendors with enterprise buyers, increasing transaction volume.",
    tag: "E-Commerce",
    icon: ShoppingCart,
    image: caseEcommerce,
    metrics: [
      { value: "90%", label: "Revenue Increase" },
      { value: "2X", label: "Order Capacity" },
      { value: "5 Days", label: "Time to Launch" },
    ],
  },
  {
    title: "Enterprise AI Support Chatbot",
    desc: "Deployed a multilingual AI chatbot handling 85% of Tier-1 support tickets autonomously, saving $2M annually.",
    tag: "Conversational AI",
    icon: Headphones,
    image: caseSupport,
    metrics: [
      { value: "40%", label: "Faster Response" },
      { value: "2X", label: "Volume Handled" },
      { value: "92%", label: "CSAT Score" },
    ],
  },
];

const CaseStudies = () => {
  return (
    <section id="cases" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">Case Studies</p>
          <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight mb-4">
            Proof in the <span className="gradient-text">Results</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how we've helped companies automate operations, deploy AI, and scale faster.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              {/* Image banner with icon overlay */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--dark-card))]/80 via-[hsl(var(--dark-card))]/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--gradient-start))]/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <c.icon size={28} className="text-[hsl(var(--gradient-start))]" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-7">
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[hsl(var(--gradient-start))] mb-3">
                  {c.tag}
                </span>
                <h3 className="font-display text-xl font-bold mb-3">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{c.desc}</p>

                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-3 pt-5 border-t border-border">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="font-display text-xl font-bold text-[hsl(var(--gradient-start))]">{m.value}</div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">{m.label}</div>
                    </div>
                  ))}
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
