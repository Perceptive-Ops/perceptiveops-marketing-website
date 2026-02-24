import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Perceptive Ops transformed our entire data pipeline. Their AI solutions cut our processing time by 70% and gave us insights we never knew existed.",
    name: "James Mitchell",
    role: "CTO, TechFlow Inc.",
  },
  {
    quote: "Working with the Perceptive Ops team felt like having a world-class AI department in-house. They delivered on time, on budget, and exceeded every metric we set.",
    name: "Sarah Rodriguez",
    role: "VP of Operations, ScaleUp Labs",
  },
  {
    quote: "The AI chatbot they built handles 85% of our support tickets autonomously. Our customers are happier, and we've reinvested the savings into growth.",
    name: "David Kim",
    role: "Head of Customer Success, NovaBridge",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold tracking-tight">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
