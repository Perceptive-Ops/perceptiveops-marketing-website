import { motion } from "framer-motion";
import SectionBadge from "@/components/SectionBadge";

const techs = [
  { name: "Python", color: "hsl(210 80% 55%)" },
  { name: "TensorFlow", color: "hsl(25 100% 55%)" },
  { name: "PyTorch", color: "hsl(10 80% 55%)" },
  { name: "OpenAI", color: "hsl(160 60% 50%)" },
  { name: "Claude / Anthropic", color: "hsl(30 90% 60%)" },
  { name: "LangChain", color: "hsl(140 70% 45%)" },
  { name: "AWS", color: "hsl(35 100% 50%)" },
  { name: "Google Cloud", color: "hsl(210 90% 55%)" },
  { name: "Azure", color: "hsl(205 100% 50%)" },
  { name: "Next.js", color: "hsl(0 0% 80%)" },
  { name: "React", color: "hsl(195 100% 50%)" },
  { name: "Node.js", color: "hsl(120 50% 50%)" },
  { name: "Flutter", color: "hsl(200 90% 55%)" },
  { name: "FastAPI", color: "hsl(170 70% 45%)" },
  { name: "LangGraph", color: "hsla(260, 27%, 2%, 1.00)" },
  { name: "LangSmith", color: "hsl(10 70% 50%)" },
  { name: "PostgreSQL", color: "hsl(210 60% 50%)" },
  { name: "Pinecone", color: "hsl(160 80% 40%)" },
  { name: "Docker", color: "hsl(205 85% 55%)" },
  { name: "Kubernetes", color: "hsl(220 70% 55%)" },
];

const TechStack = () => {
  return (
    <section id="tech" className="dark-section py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <SectionBadge label="Tech Stack" tone="dark" className="mb-4" />
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.02em] mb-4 text-[hsl(var(--dark-card-foreground))]">
            Built With the <span className="gradient-text">Best Tools</span>
          </h2>
          <p className="text-[hsl(0_0%_100%/0.6)] max-w-2xl mx-auto">
            We're tech-agnostic. We choose what's right for your project, not what's trendy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        >
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[hsl(0_0%_100%/0.1)] bg-[hsl(0_0%_100%/0.05)] text-sm font-medium text-[hsl(var(--dark-card-foreground))] hover:border-[hsl(0_0%_100%/0.2)] transition-colors"
            >
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: tech.color }}
              />
              {tech.name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
