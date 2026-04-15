import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Bot,
  Workflow,
  BrainCircuit,
  Rocket,
  Lightbulb,
  Database,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import { StackedDeckSlider } from "@/components/StackedDeckSlider";
import { caseStudies } from "@/data/caseStudies";
import { useCountUp } from "@/hooks/useCountUp";
import type { MotionValue } from "framer-motion";

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

/* =============== 1. HERO =============== */
const ExperienceHero = ({ onBook }: { onBook: () => void }) => {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const words = "We orchestrate the operations you wish were invisible.".split(" ");

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#05070f] text-white">
      {/* Mesh */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 45% at 15% 20%, rgba(155,93,229,0.35), transparent 60%), radial-gradient(55% 50% at 85% 15%, rgba(73,124,255,0.32), transparent 65%), radial-gradient(50% 50% at 50% 90%, rgba(0,200,255,0.22), transparent 60%)",
        }}
      />
      {/* Animated grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:60px_60px]"
        style={{
          transform: `translate(${(mouse.x - 0.5) * -20}px, ${(mouse.y - 0.5) * -20}px)`,
        }}
      />
      {/* Floating blurred orbs */}
      <div
        aria-hidden
        className="absolute left-[-10%] top-[20%] h-[520px] w-[520px] rounded-full bg-[#9b5de5]/25 blur-[120px]"
        style={{
          transform: `translate(${(mouse.x - 0.5) * 40}px, ${(mouse.y - 0.5) * 40}px)`,
        }}
      />
      <div
        aria-hidden
        className="absolute right-[-10%] bottom-[-5%] h-[620px] w-[620px] rounded-full bg-[#497cff]/22 blur-[140px]"
        style={{
          transform: `translate(${(mouse.x - 0.5) * -40}px, ${(mouse.y - 0.5) * -40}px)`,
        }}
      />

      <div className="container relative mx-auto px-6 pt-28 lg:px-12 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 backdrop-blur-md"
        >
          <Sparkles size={12} className="text-[#c4b5fd]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/75">
            Experience · A different way to meet us
          </span>
        </motion.div>

        <h1 className="font-display max-w-6xl text-[clamp(3rem,9vw,8rem)] font-black leading-[0.92] tracking-[-0.045em]">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.07 }}
              className="mr-[0.28em] inline-block"
            >
              {w === "invisible." ? (
                <span className="gradient-text font-serif italic">{w}</span>
              ) : (
                w
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
        >
          PerceptiveOps is an AI operations studio for teams that have stopped pretending
          spreadsheets and hope are a strategy. Scroll — the rest tells itself.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={onBook}
            className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-5 text-base font-bold text-[#05070f] transition hover:bg-[#ece9ff]"
          >
            Book a blueprint
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full"
              style={{ background: "linear-gradient(135deg,#9b5de5,#497cff)" }}
            >
              <ArrowUpRight size={14} className="text-white" />
            </span>
          </button>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-5 text-sm font-bold text-white/80 transition hover:bg-white/[0.06] hover:text-white"
          >
            Classic homepage
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

/* =============== 2. MANIFESTO (word-by-word reveal) =============== */
const ManifestoWord = ({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) => {
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.22em] inline-block">
      {word}
    </motion.span>
  );
};

const ManifestoSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const sentence =
    "Real operators don't need another dashboard. They need fewer inboxes, fewer manual handoffs, and systems that quietly do the work at 3am so mornings start with momentum — not triage.";
  const words = sentence.split(" ");

  return (
    <section
      ref={ref}
      className="relative flex min-h-[160vh] items-start bg-[#05070f] text-white"
    >
      <div className="sticky top-0 flex h-screen w-full items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.32em] text-[#b8c7ff]">
            Manifesto
          </p>
          <p className="font-display max-w-5xl text-[clamp(1.75rem,4.5vw,3.75rem)] font-black leading-[1.15] tracking-[-0.025em]">
            {words.map((w, i) => {
              const start = (i / words.length) * 0.6 + 0.1;
              const end = ((i + 1) / words.length) * 0.6 + 0.1;
              return (
                <ManifestoWord
                  key={i}
                  word={w}
                  progress={scrollYProgress}
                  start={start}
                  end={end}
                />
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

/* =============== 3. SERVICES (horizontal pin on desktop) =============== */
const services = [
  {
    icon: Bot,
    title: "AI Agent & Chatbot Development",
    desc: "Custom conversational agents that handle support, qualification, and internal workflows 24/7.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation & Integration",
    desc: "Connect your tools and automate repetitive work across your entire stack.",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning & Predictive Analytics",
    desc: "Turn data into actionable insight with models that predict and recommend.",
  },
  {
    icon: Rocket,
    title: "AI-Powered Product Development",
    desc: "Build intelligent features into your product — recommendation engines, NL interfaces.",
  },
  {
    icon: Lightbulb,
    title: "AI Strategy & Consulting",
    desc: "A clear AI roadmap tailored to goals, team, and infrastructure reality.",
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    desc: "Robust pipelines and dashboards with real-time visibility into operations.",
  },
];

const ServicesPinned = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  // Translate the inner track horizontally. Total width ≈ 6 cards × ~440px + gaps.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);

  return (
    <section className="relative bg-[#f6f7fb] text-slate-950">
      {/* Mobile fallback */}
      <div className="container mx-auto px-6 py-24 lg:hidden">
        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
          What we build
        </p>
        <h2 className="mb-10 font-display text-4xl font-black tracking-[-0.03em]">
          Services, assembled.
        </h2>
        <div className="space-y-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-slate-200 bg-white p-6"
            >
              <s.icon size={22} className="text-[#9b5de5]" />
              <h3 className="mt-3 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop horizontal pin */}
      <div ref={ref} className="relative hidden h-[320vh] lg:block">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="container mx-auto px-12">
            <div className="flex items-end justify-between">
              <div>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                  What we build
                </p>
                <h2 className="font-display text-5xl font-black tracking-[-0.03em] md:text-6xl">
                  Services, <span className="gradient-text font-serif italic">assembled</span>.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-slate-600">
                Scroll — the stack slides horizontally as you move vertically. Six
                disciplines stitched together, picked per engagement.
              </p>
            </div>
            <motion.div style={{ x }} className="mt-16 flex gap-6 pr-[25vw]">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className="relative flex h-[420px] w-[420px] shrink-0 flex-col justify-between overflow-hidden rounded-[32px] border border-slate-200 bg-white p-10 shadow-[0_30px_80px_-30px_rgba(13,18,32,0.15)]"
                >
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px]"
                    style={{
                      background:
                        "linear-gradient(90deg,#9b5de5,#497cff,#00c8ff)",
                    }}
                  />
                  <div>
                    <div className="flex items-start justify-between">
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl"
                        style={{
                          background:
                            "linear-gradient(135deg,#9b5de5,#497cff)",
                        }}
                      >
                        <s.icon size={24} className="text-white" />
                      </div>
                      <span className="font-display text-5xl font-black text-slate-100">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-10 font-display text-2xl font-bold leading-tight">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      {s.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                    Discipline {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =============== 4. CASE STUDIES TEASER DECK =============== */
const CaseStudiesTeaser = () => {
  return (
    <section className="relative overflow-hidden bg-white py-28 lg:py-40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-14 flex items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
              Proof
            </p>
            <h2 className="font-display text-4xl font-black leading-[1.05] tracking-[-0.03em] md:text-6xl">
              Stories in a <span className="gradient-text font-serif italic">stack</span>.
            </h2>
          </div>
          <Link
            to="/case-studies"
            className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:border-slate-900 md:inline-flex"
          >
            See all
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="mx-auto max-w-[920px]">
          <StackedDeckSlider
            items={caseStudies}
            renderCard={(study) => (
              <Link to={`/case-studies/${study.slug}`} draggable={false}>
                <article
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-[32px] shadow-[0_40px_120px_-40px_rgba(13,18,32,0.4)]"
                  style={{
                    background:
                      "linear-gradient(145deg,#0d1220,#131b2e 55%,#1a2240)",
                  }}
                >
                  <img
                    src={imageMap[study.slug]}
                    alt=""
                    draggable={false}
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070f]/95 via-[#05070f]/50 to-[#05070f]/20" />
                  <div
                    className="absolute inset-x-0 top-0 h-[2px]"
                    style={{
                      background:
                        "linear-gradient(90deg,transparent,#9b5de5,#497cff,transparent)",
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-8 md:p-10">
                    <div className="max-w-xl">
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#b8c7ff]">
                        {study.outcomes[0].label} · {study.outcomes[0].value}
                      </p>
                      <h3 className="mt-3 font-display text-2xl font-black leading-tight text-white md:text-4xl">
                        {study.title}
                      </h3>
                    </div>
                    <div className="hidden items-center gap-2 text-sm font-bold text-white md:flex">
                      <span className="underline decoration-[#9b5de5] decoration-2 underline-offset-4">
                        Read
                      </span>
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </article>
              </Link>
            )}
          />
        </div>
      </div>
    </section>
  );
};

/* =============== 5. METRICS PARADE =============== */
type Metric = { raw: string; prefix: string; suffix: string; label: string };
const metrics: Metric[] = [
  { raw: "200", prefix: "", suffix: "+", label: "AI models deployed" },
  { raw: "50", prefix: "$", suffix: "M+", label: "Revenue influenced" },
  { raw: "98", prefix: "", suffix: "%", label: "Client retention" },
  { raw: "50", prefix: "", suffix: "K+", label: "Hours automated" },
];

const MetricTile = ({
  metric,
  inView,
  index,
}: {
  metric: Metric;
  inView: boolean;
  index: number;
}) => {
  const val = useCountUp(Number(metric.raw), inView, 1800 + index * 200);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="border-t border-white/10 pt-6"
    >
      <p
        className="font-display font-black leading-none tracking-tighter"
        style={{
          fontSize: "clamp(3.5rem,7vw,6rem)",
          background:
            "linear-gradient(135deg,#c4b5fd,#9b5de5 35%,#497cff 70%,#00c8ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {metric.prefix}
        {Math.round(val)}
        {metric.suffix}
      </p>
      <p className="mt-4 text-sm font-bold uppercase tracking-[0.22em] text-white/60">
        {metric.label}
      </p>
    </motion.div>
  );
};

const MetricsParade = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#05070f] py-28 text-white lg:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 55% at 20% 30%, rgba(155,93,229,0.22), transparent 70%), radial-gradient(45% 55% at 80% 70%, rgba(73,124,255,0.22), transparent 70%)",
        }}
      />
      <div className="container relative mx-auto px-6 lg:px-12">
        <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-[#b8c7ff]">
          Numbers we're okay saying out loud
        </p>
        <h2 className="max-w-4xl font-display text-4xl font-black leading-[1.05] tracking-[-0.03em] md:text-6xl">
          The receipts.
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <MetricTile key={i} metric={m} inView={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* =============== 6. PROCESS TIMELINE (horizontal) =============== */
const processSteps = [
  {
    num: "01",
    title: "Discover & Audit",
    desc: "We analyze workflows, data, and tech stack to find the highest-impact AI opportunities.",
  },
  {
    num: "02",
    title: "Design & Architect",
    desc: "A tailored AI architecture aligned with business goals and existing infrastructure.",
  },
  {
    num: "03",
    title: "Build & Deploy",
    desc: "We develop, test, and deploy production-ready AI with continuous monitoring.",
  },
  {
    num: "04",
    title: "Optimize & Scale",
    desc: "We continuously improve performance and scale systems as the business grows.",
  },
];

const ProcessTimeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={ref} className="relative bg-[#f6f7fb] py-28 text-slate-950 lg:py-40">
      <div className="container mx-auto px-6 lg:px-12">
        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
          Our process
        </p>
        <h2 className="mb-16 max-w-3xl font-display text-4xl font-black leading-[1.05] tracking-[-0.03em] md:text-6xl">
          From chaos to clarity in four phases.
        </h2>

        <div className="relative">
          <div className="absolute left-0 right-0 top-6 h-[2px] bg-slate-200" />
          <motion.div
            className="absolute left-0 top-6 h-[2px] origin-left"
            style={{
              scaleX: scrollYProgress,
              background: "linear-gradient(90deg,#9b5de5,#497cff,#00c8ff)",
            }}
          />
          <div className="grid gap-12 md:grid-cols-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative"
              >
                <span
                  className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full text-sm font-black text-white"
                  style={{
                    background: "linear-gradient(135deg,#9b5de5,#497cff)",
                  }}
                >
                  {step.num}
                </span>
                <h3 className="mt-8 font-display text-2xl font-bold leading-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* =============== 7. TESTIMONIAL CINEMATIC =============== */
const testimonials = [
  {
    quote:
      "Perceptive Ops transformed our entire data pipeline. Their AI solutions cut our processing time by 70% and gave us insights we never knew existed.",
    name: "James Mitchell",
    role: "CTO, TechFlow Inc.",
  },
  {
    quote:
      "Working with the Perceptive Ops team felt like having a world-class AI department in-house. They delivered on time, on budget, and exceeded every metric we set.",
    name: "Sarah Rodriguez",
    role: "VP of Operations, ScaleUp Labs",
  },
  {
    quote:
      "The AI chatbot they built handles 85% of our support tickets autonomously. Our customers are happier, and we've reinvested the savings into growth.",
    name: "David Kim",
    role: "Head of Customer Success, NovaBridge",
  },
];

const TestimonialCinematic = () => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % testimonials.length),
      6000,
    );
    return () => clearInterval(t);
  }, []);
  const current = testimonials[idx];

  return (
    <section className="relative overflow-hidden bg-[#05070f] py-28 text-white lg:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 40% at 50% 50%, rgba(73,124,255,0.22), transparent 70%)",
        }}
      />
      <div className="container relative mx-auto max-w-5xl px-6 text-center lg:px-12">
        <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-[#b8c7ff]">
          Clients, unscripted
        </p>
        <motion.blockquote
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-[clamp(1.75rem,4vw,3.5rem)] font-black leading-[1.15] tracking-[-0.025em]"
        >
          <span className="mr-2 font-serif italic text-[#9b5de5]">"</span>
          {current.quote}
          <span className="ml-1 font-serif italic text-[#9b5de5]">"</span>
        </motion.blockquote>
        <motion.div
          key={`meta-${idx}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10"
        >
          <p className="font-display text-lg font-bold">{current.name}</p>
          <p className="text-sm text-white/60">{current.role}</p>
        </motion.div>
        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-[3px] w-10 rounded-full transition ${
                i === idx ? "bg-white" : "bg-white/25"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* =============== 8. FINAL CTA =============== */
const FinalCTA = ({ onBook }: { onBook: () => void }) => (
  <section className="relative overflow-hidden bg-[#05070f] py-32 text-white lg:py-48">
    <div
      aria-hidden
      className="absolute inset-x-0 top-0 h-[2px]"
      style={{
        background:
          "linear-gradient(90deg,transparent,#9b5de5,#497cff,#00c8ff,transparent)",
      }}
    />
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(45% 55% at 80% 20%, rgba(155,93,229,0.32), transparent 70%), radial-gradient(45% 55% at 15% 85%, rgba(73,124,255,0.3), transparent 70%)",
      }}
    />
    <div className="container relative mx-auto px-6 text-center lg:px-12">
      <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.32em] text-[#b8c7ff]">
        Ready?
      </p>
      <h2 className="mx-auto max-w-5xl font-display text-[clamp(2.75rem,7vw,6rem)] font-black leading-[0.95] tracking-[-0.04em]">
        Let's put the <span className="gradient-text font-serif italic">boring parts</span>{" "}
        on autopilot.
      </h2>
      <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
        One conversation. A blueprint tailored to your bottleneck. No decks, no fluff —
        just the version worth shipping.
      </p>
      <div className="mt-12">
        <button
          onClick={onBook}
          className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-6 text-lg font-bold text-[#05070f] transition hover:bg-[#ece9ff]"
        >
          Book your blueprint
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full"
            style={{ background: "linear-gradient(135deg,#9b5de5,#497cff)" }}
          >
            <ArrowUpRight size={16} className="text-white" />
          </span>
        </button>
      </div>
    </div>
  </section>
);

/* =============== PAGE =============== */
const ExperiencePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("experience");
  const open = (s: string) => {
    setSource(s);
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#05070f] text-white">
      <Navbar onBookConsultation={() => open("experience-navbar")} />
      <main>
        <ExperienceHero onBook={() => open("experience-hero")} />
        <ManifestoSection />
        <ServicesPinned />
        <CaseStudiesTeaser />
        <MetricsParade />
        <ProcessTimeline />
        <TestimonialCinematic />
        <FinalCTA onBook={() => open("experience-final")} />
      </main>
      <Footer />
      <ConsultationModal
        open={isOpen}
        source={source}
        onOpenChange={setIsOpen}
      />
    </div>
  );
};

export default ExperiencePage;
