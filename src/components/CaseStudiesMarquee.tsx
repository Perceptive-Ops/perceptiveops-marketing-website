import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SectionBadge from "@/components/SectionBadge";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";

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

type CardProps = {
  study: CaseStudy;
  index: number;
};

const MarqueeCard = ({ study, index }: CardProps) => {
  const accents = [
    "from-[#497cff]/70 to-[#00c8ff]/70",
    "from-[#9b5de5]/70 to-[#c77dff]/70",
    "from-[#00c8ff]/70 to-[#497cff]/70",
    "from-[#9b5de5]/70 to-[#497cff]/70",
  ];
  const accent = accents[index % accents.length];

  return (
    <Link
      to={`/case-studies/${study.slug}`}
      className="group relative block w-[340px] shrink-0 overflow-hidden rounded-[26px] border border-white/10 bg-[#0b0f1c] md:w-[400px]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={imageMap[study.slug]}
          alt={study.title}
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.08]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/30 to-transparent" />
        <div
          className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${accent}`}
        />
        <div className="absolute left-5 top-5 flex items-center gap-1.5 rounded-full border border-white/25 bg-black/30 px-3 py-1 backdrop-blur-md">
          <Sparkles size={11} className="text-white" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white">
            {study.reusableIndustries[0]}
          </span>
        </div>
      </div>

      <div className="relative p-6">
        <h3 className="font-display text-lg font-bold leading-tight text-white">
          {study.title}
        </h3>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
            {study.outcomes[0].label}
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-bold text-white transition-transform group-hover:translate-x-0.5">
            Read story
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </div>
    </Link>
  );
};

const CaseStudiesMarquee = () => {
  // Duplicate once for a seamless infinite loop
  const rowA = [...caseStudies, ...caseStudies];
  const rowB = [...caseStudies.slice().reverse(), ...caseStudies.slice().reverse()];

  return (
    <section id="cases" className="relative overflow-hidden py-24 lg:py-32">
      {/* Local styles for the marquee keyframes + pause on hover */}
      <style>{`
        @keyframes po-marquee-left { to { transform: translate3d(-50%, 0, 0); } }
        @keyframes po-marquee-right { from { transform: translate3d(-50%, 0, 0); } to { transform: translate3d(0, 0, 0); } }
        .po-marquee-track { will-change: transform; }
        .po-marquee-left { animation: po-marquee-left 48s linear infinite; }
        .po-marquee-right { animation: po-marquee-right 56s linear infinite; }
        .po-marquee-wrap:hover .po-marquee-track { animation-play-state: paused; }
      `}</style>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-14 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <SectionBadge label="Case Studies" className="mb-4" />
            <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Proof, not <span className="gradient-text">promises.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Real workflows we've shipped for operators who needed outcomes, not slide
              decks. Drift through the wall — pause anything that catches your eye.
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
      </div>

      {/* Full-bleed marquee — escapes container */}
      <div
        className="po-marquee-wrap relative"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="po-marquee-track po-marquee-left flex w-max gap-6 py-2">
          {rowA.map((study, i) => (
            <MarqueeCard key={`a-${i}`} study={study} index={i} />
          ))}
        </div>
        <div className="po-marquee-track po-marquee-right mt-6 flex w-max gap-6 py-2">
          {rowB.map((study, i) => (
            <MarqueeCard key={`b-${i}`} study={study} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesMarquee;
