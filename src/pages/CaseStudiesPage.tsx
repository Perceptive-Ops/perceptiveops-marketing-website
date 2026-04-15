import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudies } from "@/data/caseStudies";
import { StackedDeckSlider } from "@/components/StackedDeckSlider";
import ConsultationModal from "@/components/ConsultationModal";

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

const CaseStudiesPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationSource, setConsultationSource] = useState("case-studies-page");

  const openConsultation = (source: string) => {
    setConsultationSource(source);
    setIsConsultationOpen(true);
  };

  const activeStudy = caseStudies[activeIndex];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f6f7fb] text-slate-900 selection:bg-[#d6e0ff] selection:text-[#131b2e]">
      {/* Ambient color field */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[720px]"
        style={{
          background:
            "radial-gradient(60% 50% at 18% 10%, rgba(155,93,229,0.16), transparent 60%), radial-gradient(50% 40% at 85% 0%, rgba(73,124,255,0.14), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(#131b2e_1px,transparent_1px),linear-gradient(90deg,#131b2e_1px,transparent_1px)] [background-size:46px_46px]"
      />

      <Navbar onBookConsultation={() => openConsultation("navbar")} />

      <main className="relative pt-28 lg:pt-36">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-16 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/60 px-4 py-1.5 backdrop-blur-md">
                <Sparkles size={12} className="text-[#9b5de5]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-700">
                  Proof Library
                </span>
              </div>
              <h1 className="font-display text-[clamp(2.75rem,9vw,6.5rem)] font-black leading-[0.95] tracking-[-0.04em] text-[#0b0f1c]">
                From chaos to{" "}
                <span className="relative inline-block">
                  <span className="gradient-text font-serif italic">velocity</span>
                  <span
                    aria-hidden
                    className="absolute -bottom-2 left-0 right-0 h-[6px] rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg,transparent,#9b5de5,#497cff,transparent)",
                    }}
                  />
                </span>
                .
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
                Four workflows we've shipped end-to-end. Drag a card, flick through them,
                or just read the top one — every story ends the same way: operators got
                their hours back.
              </p>
            </motion.div>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-baseline gap-2 font-display text-slate-900"
            >
              <span className="text-[clamp(3rem,7vw,5.5rem)] font-black leading-none tracking-tighter">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-lg font-semibold text-slate-400">
                / {String(caseStudies.length).padStart(2, "0")}
              </span>
            </motion.div>
          </div>

          {/* Stacked Deck */}
          <div className="relative mx-auto w-full max-w-[1120px]">
            <StackedDeckSlider
              items={caseStudies}
              onActiveIndexChange={setActiveIndex}
              renderCard={(study, { isActive }) => (
                <Link
                  to={`/case-studies/${study.slug}`}
                  draggable={false}
                  className="block select-none"
                >
                  <article
                    className="relative aspect-[5/7] w-full overflow-hidden rounded-[34px] shadow-[0_40px_120px_-40px_rgba(13,18,32,0.45)] md:aspect-[16/10]"
                    style={{
                      background:
                        "linear-gradient(145deg,#0d1220,#131b2e 55%,#1a2240)",
                    }}
                  >
                    {/* Image layer */}
                    <img
                      src={imageMap[study.slug]}
                      alt={study.title}
                      draggable={false}
                      className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.85]"
                    />
                    {/* Top accent line */}
                    <div
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[2px]"
                      style={{
                        background:
                          "linear-gradient(90deg,transparent,#9b5de5,#497cff,#00c8ff,transparent)",
                      }}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05070f]/95 via-[#05070f]/40 to-[#05070f]/30" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#9b5de5]/10 via-transparent to-[#497cff]/15 mix-blend-screen" />

                    {/* Top row: industry tags + index */}
                    <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6 md:p-10">
                      <div className="flex flex-wrap gap-2">
                        {study.reusableIndustries.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md md:px-4 md:py-1.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="hidden items-center gap-2 text-white/60 md:flex">
                        <span className="h-2 w-2 rounded-full bg-[#9b5de5]" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                          Case study
                        </span>
                      </div>
                    </div>

                    {/* Center metric */}
                    <div className="absolute inset-0 flex items-center justify-center px-6">
                      <div className="text-center">
                        <p
                          className="font-serif italic font-black leading-none tracking-[-0.04em]"
                          style={{
                            fontSize: "clamp(3.5rem,11vw,8rem)",
                            background:
                              "linear-gradient(135deg,#c4b5fd 0%,#9b5de5 40%,#497cff 75%,#00c8ff 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          {study.outcomes[0].value}
                        </p>
                        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 md:text-xs">
                          {study.outcomes[0].label}
                        </p>
                      </div>
                    </div>

                    {/* Bottom content */}
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 md:p-10">
                      <div className="max-w-xl">
                        <h2 className="font-display text-xl font-black leading-tight text-white md:text-3xl">
                          {study.title}
                        </h2>
                        <p className="mt-2 line-clamp-2 text-sm text-white/60 md:mt-3 md:text-base">
                          {study.primaryIndustryExample}
                        </p>
                      </div>
                      <div
                        className={`hidden shrink-0 items-center gap-2 text-sm font-bold text-white transition-opacity md:flex ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <span className="underline decoration-[#9b5de5] decoration-2 underline-offset-[6px]">
                          Read the story
                        </span>
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </article>
                </Link>
              )}
            />
          </div>

          {/* Bottom summary strip */}
          <section className="mt-20 mb-24 lg:mb-32">
            <div className="flex flex-col items-start justify-between gap-10 border-t border-slate-900/10 pt-12 md:flex-row md:items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-2xl"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                    Now showing
                  </p>
                  <p className="mt-3 text-lg leading-relaxed text-slate-700 md:text-xl">
                    {activeStudy.shortSummary}
                  </p>
                </motion.div>
              </AnimatePresence>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openConsultation(`case-slider-${activeStudy.slug}`)}
                className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#0b0f1c] px-8 py-5 text-base font-bold text-white shadow-[0_20px_60px_-20px_rgba(13,18,32,0.6)] transition hover:bg-[#131b2e]"
              >
                Book your blueprint
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition group-hover:bg-white/25">
                  <ArrowUpRight size={14} />
                </span>
              </motion.button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <ConsultationModal
        open={isConsultationOpen}
        source={consultationSource}
        onOpenChange={setIsConsultationOpen}
      />
    </div>
  );
};

export default CaseStudiesPage;
