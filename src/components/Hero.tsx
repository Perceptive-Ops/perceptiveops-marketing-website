import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { MouseEvent } from "react";

const stats = [
  { value: "200+", label: "AI Models Deployed" },
  { value: "$50M+", label: "Client Revenue Impact" },
  { value: "98%", label: "Client Retention" },
  { value: "50K+", label: "Hours Automated" },
];

type HeroProps = {
  onBookConsultation: () => void;
};

const Hero = ({ onBookConsultation }: HeroProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 110, damping: 24, mass: 0.4 });
  const smoothY = useSpring(mouseY, { stiffness: 110, damping: 24, mass: 0.4 });

  // Make motion responsive to viewport/container dimensions by using pointer pixel offset.
  const gridX = useTransform(smoothX, (value) => value * 0.08);
  const gridY = useTransform(smoothY, (value) => value * 0.08);
  const glowX = useTransform(smoothX, (value) => value * 0.16);
  const glowY = useTransform(smoothY, (value) => value * 0.14);

  const onHeroMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      onMouseMove={onHeroMouseMove}
    >
      <div className="absolute inset-0 bg-[#09090b]" />

      <motion.div
        aria-hidden="true"
        className="absolute inset-0 opacity-100"
        style={{
          x: gridX,
          y: gridY,
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.11) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.11) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "60px 60px"],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 opacity-55"
        style={{
          x: gridX,
          y: gridY,
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.075) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.075) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage: "radial-gradient(ellipse at center, black 26%, transparent 74%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 26%, transparent 74%)",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-35"
        style={{
          x: glowX,
          y: glowY,
          background:
            "radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(168,85,247,0.06) 40%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.24, 0.4, 0.24],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          x: glowX,
          y: glowY,
          background:
            "radial-gradient(60% 48% at 50% 28%, rgba(99,102,241,0.34) 0%, rgba(56,189,248,0.2) 35%, rgba(168,85,247,0.16) 55%, transparent 78%)",
        }}
        animate={{ opacity: [0.72, 0.95, 0.72] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="container mx-auto px-4 lg:px-6 relative z-10 pb-12 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-[1200px] mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(99,102,241,0.25)] bg-[rgba(99,102,241,0.1)] text-xs sm:text-sm font-medium text-[#c4b5fd] mb-6 sm:mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#818cf8] animate-pulse" />
            NOW ACCEPTING NEW CLIENTS
          </div>

          <h1 className="font-display text-[clamp(3.6rem,8vw,6.3rem)] font-black tracking-[-0.035em] leading-[0.98] mb-6 sm:mb-8 text-white max-w-[980px] mx-auto">
            <span className="block">
              We Build <span className="gradient-text">AI Systems</span>
            </span>
            <span className="block">That Run Your</span>
            <span className="block">Operations</span>
          </h1>

          <p className="text-[clamp(1.1rem,2vw,1.35rem)] text-white/65 max-w-3xl mx-auto mb-10 sm:mb-12 leading-[1.5]">
            We audit, automate, and optimize your business with custom AI solutions
            — so your team works smarter, scales faster, and ships with confidence.
          </p>

          <div className="flex flex-col items-center sm:flex-row justify-center gap-4 mb-14 sm:mb-20">
            <Button
              size="lg"
              type="button"
              onClick={onBookConsultation}
              className="btn btn-primary font-semibold text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-14 min-w-[190px] sm:min-w-[230px]"
            >
              Get Free Consultation
              <ArrowRight className="ml-2" size={16} />
            </Button>
            <a href="#cases">
              <Button size="lg" className="btn font-semibold text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-14 min-w-[150px] sm:min-w-[170px] bg-[#e5e7eb] text-[#111827] border border-white/30 hover:bg-white">
                See Our Work
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-5xl mx-auto mt-16 sm:mt-20 lg:mt-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-[2.25rem] md:text-[2.5rem] font-extrabold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[0.74rem] text-white/40 uppercase tracking-[0.08em] font-medium">{stat.label}</div>
                </div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
