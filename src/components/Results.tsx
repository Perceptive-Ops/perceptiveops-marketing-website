import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const rows = [
  {
    problem: "High operational costs",
    solution: "Automate with AI",
    outcome: "40% cost reduction",
  },
  {
    problem: "Slow processing",
    solution: "AI-powered pipelines",
    outcome: "3X faster",
  },
  {
    problem: "Inaccurate predictions",
    solution: "Custom ML models",
    outcome: "99% accuracy",
  },
  {
    problem: "Low ROI on tech",
    solution: "Strategic AI deployment",
    outcome: "10X ROI",
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
          className="rounded-3xl bg-secondary/60 border border-border p-8 lg:p-14"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background text-sm font-medium text-muted-foreground mb-6">
              Outcomes
            </div>
            <h2 className="font-display text-3xl lg:text-5xl font-bold tracking-tight mb-4">
              We find constraints, then solve them for{" "}
              <span className="highlight-box">massive results</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI solutions don't just improve metrics — they fundamentally transform how your business operates.
            </p>
          </div>

          {/* Table */}
          <div className="rounded-2xl border border-border bg-background overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 divide-x divide-border border-b border-border">
              <div className="p-5 lg:p-6">
                <span className="font-display font-bold text-sm lg:text-base text-foreground">Problems</span>
              </div>
              <div className="p-5 lg:p-6">
                <span className="font-display font-bold text-sm lg:text-base text-foreground">Solutions</span>
              </div>
              <div className="p-5 lg:p-6">
                <span className="font-display font-bold text-sm lg:text-base text-foreground">Outcomes</span>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 divide-x divide-border ${
                  i < rows.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="p-5 lg:p-6 flex items-center">
                  <span className="text-base text-muted-foreground">{row.problem}</span>
                </div>
                <div className="p-5 lg:p-6 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[hsl(var(--gradient-start))] shrink-0" />
                  <span className="text-base text-foreground">{row.solution}</span>
                </div>
                <div className="p-5 lg:p-6 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[hsl(var(--gradient-start))] shrink-0" />
                  <span className="text-base font-semibold text-foreground">{row.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
