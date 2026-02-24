import { motion } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";

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
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">Reviews</p>
          <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[320px] lg:min-w-0 snap-center p-7 rounded-2xl border border-border bg-card flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} className="fill-foreground text-foreground" />
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <BadgeCheck size={14} className="text-[hsl(var(--gradient-start))]" />
                  Verified
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">"{t.quote}"</p>
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
