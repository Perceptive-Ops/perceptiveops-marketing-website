import { motion } from "framer-motion";
import { TrendingDown, Zap, Target, BadgeDollarSign } from "lucide-react";

const results = [
  {
    icon: TrendingDown,
    value: "40%",
    label: "Average cost reduction",
  },
  {
    icon: Zap,
    value: "3X",
    label: "Faster processing times",
  },
  {
    icon: Target,
    value: "99%",
    label: "Model accuracy rate",
  },
  {
    icon: BadgeDollarSign,
    value: "10X",
    label: "ROI within 12 months",
  },
];

const Results = () => {
  return (
    <section id="results" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">Results That Matter</p>
          <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight mb-4">
            Every Automation <span className="gradient-text">Compounds</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real numbers from real clients. These results compound over time, creating a flywheel of profitability.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {results.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-border bg-card text-center transition-all duration-300 hover:bg-[hsl(var(--dark-card))] hover:border-[hsl(var(--dark-card))]"
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-5">
                <r.icon size={24} className="text-white" />
              </div>
              <div className="font-display text-5xl font-bold mb-2 group-hover:text-[hsl(var(--dark-card-foreground))] transition-colors">
                {r.value}
              </div>
              <div className="text-sm text-muted-foreground group-hover:text-[hsl(0_0%_100%/0.6)] transition-colors">
                {r.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
