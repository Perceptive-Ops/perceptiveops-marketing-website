import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/perceptive-ops-logo.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Case Studies", href: "#cases" },
  { label: "Testimonials", href: "#testimonials" },
];

type NavbarProps = {
  onBookConsultation: () => void;
};

const Navbar = ({ onBookConsultation }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const updateHeaderMode = () => {
      const threshold = Math.max(120, window.innerHeight * 0.72);
      setScrolledPastHero(window.scrollY > threshold);
    };

    updateHeaderMode();
    window.addEventListener("scroll", updateHeaderMode, { passive: true });
    window.addEventListener("resize", updateHeaderMode);

    return () => {
      window.removeEventListener("scroll", updateHeaderMode);
      window.removeEventListener("resize", updateHeaderMode);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolledPastHero
          ? "bg-black border-b border-white/10 shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 h-14 md:h-16 flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <div className="h-10 md:h-[66px] w-[210px] md:w-[600px]">
            <img
              src={logo}
              alt="PerceptiveOps"
              className="h-full w-full object-contain object-left scale-[2.5] md:scale-[2.35] origin-left"
            />
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[15px] font-medium text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          size="sm"
          type="button"
          onClick={onBookConsultation}
          className="hidden md:inline-flex items-center justify-self-end rounded-[var(--radius)] font-semibold text-base px-6 h-10 text-white bg-[linear-gradient(135deg,hsl(239_84%_67%),hsl(217_91%_60%))] shadow-[0_8px_28px_rgba(99,102,241,0.35)] hover:opacity-90"
        >
          Book a Call
          <ArrowRight className="ml-1.5" size={14} />
        </Button>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10 px-6 py-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            type="button"
            onClick={() => {
              setMenuOpen(false);
              onBookConsultation();
            }}
            className="btn btn-primary font-semibold w-full mt-2"
          >
              Book a Call
              <ArrowRight className="ml-1.5" size={14} />
          </Button>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
