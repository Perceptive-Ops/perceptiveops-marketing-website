import { motion } from "framer-motion";

const results = [
  { value: "40%", label: "Average Cost Reduction", desc: "Slash operational costs with intelligent automation" },
  { value: "3X", label: "Faster Processing", desc: "Accelerate workflows with AI-powered pipelines" },
  { value: "99%", label: "Model Accuracy", desc: "Production-grade ML models that deliver results" },
  { value: "10X", label: "ROI in 12 Months", desc: "Measurable returns that compound over time" },
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
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">Proven Results</p>
          <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight">
            Numbers That Speak
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {results.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="dark-section rounded-2xl p-8 text-center"
            >
              <div className="font-display text-4xl lg:text-5xl font-bold gradient-text mb-2">
                {r.value}
              </div>
              <div className="text-sm font-semibold text-[hsl(var(--dark-card-foreground))] mb-1">{r.label}</div>
              <div className="text-xs text-[hsl(0_0%_100%/0.5)]">{r.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
