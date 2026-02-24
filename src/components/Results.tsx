import { motion } from "framer-motion";

const results = [
  { value: "40%", label: "Average Cost Reduction" },
  { value: "3X", label: "Faster Processing Times" },
  { value: "99%", label: "Model Accuracy Rate" },
  { value: "10X", label: "ROI Within 12 Months" },
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
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Proven Results</p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold tracking-tight">
            Numbers That Speak
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-xl border border-border bg-card text-center hover:shadow-lg transition-shadow"
            >
              <div className="font-display text-4xl lg:text-5xl font-bold gradient-text mb-2">
                {r.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">{r.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
