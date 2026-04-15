import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionBadge from "@/components/SectionBadge";
import { caseStudies } from "@/data/caseStudies";
import caseHealthcare from "@/assets/case-healthcare.jpg";
import caseEcommerce from "@/assets/case-ecommerce.jpg";
import caseSupport from "@/assets/case-support.jpg";
import processApproach from "@/assets/process-approach.jpg";

const imageBySlug = {
  "lead-qualification-nurturing": caseHealthcare,
  "invoice-processing-ap-automation": caseEcommerce,
  "appointment-scheduling-reminders": caseSupport,
  "content-metadata-distribution": processApproach,
} as const;

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
          <SectionBadge label="Case Studies" className="mb-4" />
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.02em] mb-4">
            Proof in the <span className="gradient-text">Results</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how we've helped companies automate operations, deploy AI, and scale faster.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {caseStudies.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={imageBySlug[c.slug]}
                  alt={c.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--dark-card))]/80 via-[hsl(var(--dark-card))]/30 to-transparent" />
              </div>

              <div className="p-6 lg:p-7">
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[hsl(var(--gradient-start))] mb-3">
                  {c.primaryIndustryExample}
                </span>
                <h3 className="font-display text-xl font-bold mb-3">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{c.shortSummary}</p>

                <div className="grid grid-cols-3 gap-3 pt-5 border-t border-border">
                  {c.cardHighlights.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="font-display text-xl font-bold gradient-text inline-block">{m.value}</div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/case-studies/${c.slug}`}
                  className="mt-6 inline-flex text-sm font-medium gradient-text hover:opacity-80 transition-opacity"
                >
                  View Case Study
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
