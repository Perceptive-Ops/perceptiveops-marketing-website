import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ChevronDown, Check } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import CaseStudyInquiryForm from "@/components/CaseStudyInquiryForm";
import ConsultationModal from "@/components/ConsultationModal";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";
import NotFound from "@/pages/NotFound";
import VideoModal from "@/components/VideoModal";
import { Play } from "lucide-react";

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

/* ----------------- Small helpers ----------------- */
const SectionNumber = ({ n, label }: { n: string; label: string }) => (
  <div className="flex items-baseline gap-4">
    <span className="font-display text-5xl font-black leading-none tracking-tighter text-slate-300 md:text-6xl">
      {n}
    </span>
    <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-slate-500">
      {label}
    </span>
  </div>
);

/* ----------------- Hero ----------------- */
const CinematicHero = ({
  title,
  subtitle,
  image,
  onScrollClick,
  onPlayClick,
  hasVideo,
}: {
  title: string;
  subtitle: string;
  image: string;
  onScrollClick: () => void;
  onPlayClick: () => void;
  hasVideo: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.25]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[500px] w-full overflow-hidden bg-[#05070f] text-white"
    >
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070f]/85 via-[#05070f]/40 to-[#05070f]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#9b5de5]/20 via-transparent to-[#497cff]/25 mix-blend-screen" />

      {/* Title block */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute inset-x-0 bottom-0 z-10 pb-20 md:pb-24"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-5 text-[10px] font-bold uppercase tracking-[0.32em] text-[#b8c7ff]"
          >
            Case study · Workflow story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-display max-w-5xl text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.95] tracking-[-0.04em]"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
          >
            {subtitle}
          </motion.p>

          {hasVideo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <button
                onClick={onPlayClick}
                className="group flex items-center gap-4 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold uppercase tracking-wider backdrop-blur-md transition hover:bg-white hover:text-[#05070f]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9b5de5] text-white transition-transform group-hover:scale-110">
                  <Play size={18} fill="currentColor" />
                </div>
                Watch the Story
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute inset-x-0 bottom-8 z-10 flex justify-center"
      >
        <button
          onClick={onScrollClick}
          className="group flex flex-col items-center gap-1 transition-opacity hover:opacity-100"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 group-hover:text-white"
          >
            Scroll
            <ChevronDown size={14} />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
};

/* ----------------- Challenge ----------------- */
const ChallengeSection = ({
  statements,
  sectionRef,
}: {
  statements: string[];
  sectionRef: React.RefObject<HTMLDivElement>;
}) => (
  <section
    ref={sectionRef}
    className="relative scroll-mt-24 bg-[#f7f9fb] py-[clamp(2.5rem,6vh,4rem)]"
  >
    <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-[0.8fr,1.2fr] lg:px-12">
      <div className="lg:sticky lg:top-40 lg:h-fit">
        <SectionNumber n="01" label="The Challenge" />
        <h2 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-[-0.03em] text-slate-950 md:text-5xl">
          What was breaking<span className="text-[#9b5de5]">.</span>
        </h2>
      </div>
      <ul className="space-y-6">
        {statements.map((s, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group relative pl-14"
          >
            <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white font-display text-sm font-black text-slate-700 shadow-[0_6px_20px_-6px_rgba(13,18,32,0.15)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-xl font-semibold leading-snug text-slate-800 md:text-2xl">
              {s}
            </p>
            <div className="mt-4 h-px w-full bg-gradient-to-r from-slate-300 via-slate-200 to-transparent" />
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);

/* ----------------- Workflow ----------------- */
const WorkflowSection = ({
  steps,
  video,
}: {
  steps: Array<{ title: string; description: string }>;
  video: {
    placeholderTitle: string;
    placeholderDescription: string;
    loomEmbedUrl?: string;
  };
}) => {
  return (
    <section className="relative overflow-hidden bg-[#05070f] py-[clamp(2.5rem,6vh,4rem)] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 40% at 25% 10%, rgba(155,93,229,0.12), transparent 70%), radial-gradient(50% 40% at 85% 80%, rgba(73,124,255,0.15), transparent 70%)",
        }}
      />
      <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-[0.8fr,1.2fr] lg:px-12">
        {/* Left: Sticky label */}
        <div className="lg:sticky lg:top-40 lg:h-fit">
          <SectionNumber n="02" label="The Workflow" />
          <h2 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-[-0.03em] md:text-5xl">
            How it <span className="italic text-[#9b5de5]">works</span>.
          </h2>
          <div className="mt-8 space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-display text-xs font-black text-white"
                  style={{
                    background: "linear-gradient(135deg,#9b5de5,#497cff)",
                  }}
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/50">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Video Embed */}
        <div className="relative">
          <div className="group relative aspect-video overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-md">
            {video.loomEmbedUrl ? (
              <iframe
                src={`${video.loomEmbedUrl}?hide_owner=true&hide_share=true&hide_title=true&hide_embed_params=true`}
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-slate-900/50 p-12 text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-[#9b5de5]">
                  <ArrowUpRight size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  {video.placeholderTitle}
                </h3>
                <p className="mt-3 max-w-md text-base text-white/50">
                  {video.placeholderDescription}
                </p>
              </div>
            )}
          </div>

          {/* Decorative element */}
          <div
            aria-hidden
            className="absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-full blur-3xl opacity-20"
            style={{
              background: "linear-gradient(135deg,#9b5de5,#497cff)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

/* ----------------- Outcomes ----------------- */
const OutcomesSection = ({
  outcomes,
}: {
  outcomes: Array<{ value: string; label: string; description: string }>;
}) => (
  <section className="relative bg-[#f7f9fb] py-[clamp(2.5rem,6vh,4rem)]">
    <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-[0.8fr,1.2fr] lg:px-12">
      {/* Left: Sticky label */}
      <div className="lg:sticky lg:top-40 lg:h-fit">
        <SectionNumber n="03" label="The Outcomes" />
        <h2 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-[-0.03em] text-slate-950 md:text-5xl">
          What changed{" "}
          <span className="gradient-text font-serif italic">materially</span>.
        </h2>
      </div>

      {/* Right: Outcomes list */}
      <div className="space-y-4">
        {outcomes.map((o, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 transition hover:border-slate-300 md:p-10"
          >
            <div
              className="absolute left-0 top-0 h-[4px] w-full"
              style={{
                background: "linear-gradient(90deg,#9b5de5,#497cff)",
              }}
            />
            <div className="flex flex-col gap-6 md:flex-row md:items-baseline md:justify-between">
              <p
                className="font-serif italic leading-none tracking-[-0.04em]"
                style={{
                  fontSize: "clamp(2.5rem,6vw,4.5rem)",
                  background:
                    "linear-gradient(135deg,#9b5de5,#497cff 60%,#00c8ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {o.value}
              </p>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
                {o.label}
              </span>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {o.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ----------------- Reusability + Platform ----------------- */
const ReusabilitySection = ({
  industries,
  platform,
}: {
  industries: string[];
  platform: string[];
}) => (
  <section className="relative bg-white py-[clamp(2.5rem,6vh,4rem)]">
    <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-[0.8fr,1.2fr] lg:px-12">
      {/* Left: Sticky label */}
      <div className="lg:sticky lg:top-40 lg:h-fit">
        <SectionNumber n="04" label="Where it lands" />
        <h2 className="mt-6 font-display text-4xl font-black leading-[0.95] tracking-[-0.03em] text-slate-950 md:text-5xl">
          How it can be applied.
        </h2>
        <p className="mt-6 max-w-sm text-base leading-relaxed text-slate-600">
          The same shape works anywhere operators are drowning in intake,
          triage, and handoffs.
        </p>
      </div>

      {/* Right: Industries + Platform */}
      <div className="space-y-12">
        <ul className="divide-y divide-slate-200">
          {industries.map((ind, i) => (
            <motion.li
              key={ind}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group flex items-baseline justify-between py-6"
            >
              <span className="font-display text-3xl font-black tracking-tight text-slate-900 transition group-hover:text-[#497cff] md:text-4xl">
                {ind}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.li>
          ))}
        </ul>

        <div
          className="relative overflow-hidden rounded-[40px] p-10 md:p-14"
          style={{
            background: "linear-gradient(155deg,#0d1220,#131b2e 55%,#1c2540)",
          }}
        >
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-[4px]"
            style={{
              background: "linear-gradient(90deg,#9b5de5,#497cff,#00c8ff)",
            }}
          />
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#b8c7ff]">
            Platform flexibility
          </p>
          <h3 className="mt-6 font-display text-3xl font-black leading-tight text-white md:text-5xl">
            Tool-agnostic <span className="italic text-[#9b5de5]">by default.</span>
          </h3>
          <ul className="mt-10 space-y-6">
            {platform.map((p, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-5"
              >
                <span
                  className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                  style={{
                    background: "linear-gradient(135deg,#9b5de5,#497cff)",
                  }}
                >
                  <Check size={14} strokeWidth={3} className="text-white" />
                </span>
                <span className="text-lg leading-relaxed text-white/75">
                  {p}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);


/* ----------------- Adjacent Workflows ----------------- */
const AdjacentSection = ({
  items,
}: {
  items: Array<{ name: string; description: string }>;
}) => (
  <section className="relative bg-[#f6f7fb] py-[clamp(2rem,5vh,3.5rem)]">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="mb-14 flex items-end justify-between gap-8">
        <div className="max-w-2xl">
          <SectionNumber n="05" label="Pairs well with" />
          <h2 className="mt-6 font-display text-3xl font-black leading-tight tracking-[-0.03em] text-slate-950 md:text-5xl">
            Adjacent workflows we can bolt on.
          </h2>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item, i) => {
          const colors = [
            "from-[#9b5de5] to-[#497cff]",
            "from-[#497cff] to-[#00c8ff]",
            "from-[#00c8ff] to-[#9b5de5]",
          ];
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-slate-400 hover:shadow-[0_30px_80px_-30px_rgba(13,18,32,0.25)]"
            >
              <div
                className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${colors[i % colors.length]}`}
              />
              <span className="font-display text-4xl font-black text-slate-200">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold leading-snug text-slate-950">
                {item.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
              <ArrowUpRight
                size={18}
                className="absolute right-6 top-6 text-slate-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-900"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

/* ----------------- CTA ----------------- */
const CtaSection = ({
  title,
  body,
  primary,
  onBook,
}: {
  title: string;
  body: string;
  primary: string;
  onBook: () => void;
}) => (
  <section className="relative overflow-hidden bg-[#05070f] py-[clamp(2.5rem,6vh,4rem)]">
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
          "radial-gradient(40% 50% at 85% 15%, rgba(155,93,229,0.32), transparent 70%), radial-gradient(45% 55% at 10% 90%, rgba(73,124,255,0.3), transparent 70%)",
      }}
    />
    <div className="container relative mx-auto px-6 text-center lg:px-12">
      <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.32em] text-[#b8c7ff]">
        Your turn
      </p>
      <h2 className="mx-auto max-w-4xl font-display text-4xl font-black leading-[1.05] tracking-[-0.03em] text-white md:text-6xl">
        {title}
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
        {body}
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={onBook}
          className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-5 text-base font-bold text-[#05070f] transition hover:bg-[#ece9ff]"
        >
          {primary}
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full"
            style={{
              background: "linear-gradient(135deg,#9b5de5,#497cff)",
            }}
          >
            <ArrowUpRight size={14} className="text-white" />
          </span>
        </button>
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-5 text-base font-bold text-white transition hover:bg-white/[0.06]"
        >
          See other case studies
        </Link>
      </div>
    </div>
  </section>
);

/* ----------------- More case studies strip ----------------- */
const MoreStrip = ({ currentSlug }: { currentSlug: string }) => {
  const others = caseStudies.filter((c) => c.slug !== currentSlug);
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-display text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
            Keep reading
          </h2>
          <Link
            to="/case-studies"
            className="text-sm font-bold text-slate-900 underline decoration-[#9b5de5] decoration-2 underline-offset-4"
          >
            All case studies →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {others.map((c) => (
            <Link
              key={c.slug}
              to={`/case-studies/${c.slug}`}
              className="group block overflow-hidden rounded-[24px] border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-slate-400 hover:shadow-[0_30px_80px_-30px_rgba(13,18,32,0.18)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={imageMap[c.slug]}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070f]/85 to-transparent" />
                <h3 className="absolute inset-x-0 bottom-0 p-5 font-display text-lg font-bold leading-snug text-white">
                  {c.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ----------------- Page ----------------- */
const CaseStudyDetailPage = () => {
  const { slug } = useParams();
  const caseStudy = getCaseStudyBySlug(slug);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [consultationSource, setConsultationSource] = useState(
    `case-study-${slug ?? "unknown"}`,
  );
  const challengeRef = useRef<HTMLDivElement>(null);

  if (!caseStudy) return <NotFound />;

  const envVideoUrl = import.meta.env[
    `VITE_LOOM_URL_${caseStudy.slug.toUpperCase().replace(/-/g, "_")}`
  ];
  const effectiveVideoUrl = envVideoUrl || caseStudy.video.loomEmbedUrl;

  const openConsultation = (source: string) => {
    setConsultationSource(source);
    setIsConsultationOpen(true);
  };

  const scrollToChallenge = () => {
    challengeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar onBookConsultation={() => openConsultation("navbar")} />

      <main>
        <CinematicHero
          title={caseStudy.title}
          subtitle={caseStudy.heroSubtitle}
          image={imageMap[caseStudy.slug]}
          onScrollClick={scrollToChallenge}
          onPlayClick={() => setIsVideoModalOpen(true)}
          hasVideo={!!effectiveVideoUrl}
        />
        <ChallengeSection
          statements={caseStudy.challengeStatements}
          sectionRef={challengeRef}
        />
        <WorkflowSection
          steps={caseStudy.workflowSummary}
          video={{ ...caseStudy.video, loomEmbedUrl: effectiveVideoUrl }}
        />
        <OutcomesSection outcomes={caseStudy.outcomes} />
        <ReusabilitySection
          industries={caseStudy.reusableIndustries}
          platform={caseStudy.platformFlexibility}
        />
        <AdjacentSection items={caseStudy.adjacentWorkflows} />
        <CtaSection
          title={caseStudy.cta.closingTitle}
          body={caseStudy.cta.closingBody}
          primary={caseStudy.cta.primary}
          onBook={() => openConsultation(`case-study-${caseStudy.slug}`)}
        />

        {/* Inquiry form — component untouched */}
        <section className="bg-white pb-8 pt-4">
          <div className="container mx-auto px-6 lg:px-12">
            <CaseStudyInquiryForm caseStudy={caseStudy} />
          </div>
        </section>

        <MoreStrip currentSlug={caseStudy.slug} />
      </main>

      <Footer />
      <ConsultationModal
        open={isConsultationOpen}
        source={consultationSource}
        onOpenChange={setIsConsultationOpen}
      />
      {effectiveVideoUrl && (
        <VideoModal
          isOpen={isVideoModalOpen}
          onOpenChange={setIsVideoModalOpen}
          title={caseStudy.video.placeholderTitle}
          loomEmbedUrl={effectiveVideoUrl}
        />
      )}
    </div>
  );
};

export default CaseStudyDetailPage;
