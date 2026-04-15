import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionBadge from "@/components/SectionBadge";
import { caseStudies } from "@/data/caseStudies";

import realEstateImg from "@/assets/case-studies/real-estate.png";
import apAutomationImg from "@/assets/case-studies/ap-automation.png";
import schedulingImg from "@/assets/case-studies/scheduling.png";
import operationsImg from "@/assets/case-studies/operations.png";

const imageMap: Record<string, string> = {
  "lead-qualification-nurturing": realEstateImg,
  "invoice-processing-ap-automation": apAutomationImg,
  "appointment-scheduling-reminders": schedulingImg,
  "content-metadata-distribution": operationsImg,
};

const CaseStudies = () => {
  return (
    <section id="cases" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-14 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <SectionBadge label="Case Studies" className="mb-4" />
            <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Proof, not <span className="gradient-text">promises.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Real workflows we've shipped for operators who needed outcomes, not slide
              decks. Explore how we turn process logic into production automation.
            </p>
          </motion.div>

          <Link
            to="/case-studies"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition hover:border-foreground hover:bg-secondary/50"
          >
            Explore all case studies
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {caseStudies.map((c, i) => (
            <motion.article
              key={c.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-border bg-card transition-all hover:shadow-[0_24px_60px_rgba(25,28,30,0.08)]"
            >
              <Link to={`/case-studies/${c.slug}`} className="block overflow-hidden aspect-[16/9]">
                <img
                  src={imageMap[c.slug]}
                  alt={c.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </Link>

              <div className="flex flex-1 flex-col p-8 lg:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--gradient-start))]">
                    {c.reusableIndustries[0]}
                  </span>
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-4 group-hover:gradient-text transition-all">
                  <Link to={`/case-studies/${c.slug}`}>{c.title}</Link>
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                  {c.shortSummary}
                </p>

                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                  {c.cardHighlights.map((m) => (
                    <div key={m.label} className="text-left">
                      <div className="font-display text-xl font-bold text-foreground mb-1">{m.value}</div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60">{m.label}</div>
                    </div>
                  ))}
                </div>
                
                <Link
                  to={`/case-studies/${c.slug}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold group/link"
                >
                  <span className="gradient-text">Read the full story</span>
                  <ArrowUpRight size={16} className="text-[hsl(var(--gradient-start))] transition-transform group-hover/link:-translate-y-0.5" />
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
