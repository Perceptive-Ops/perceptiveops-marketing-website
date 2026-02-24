import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/perceptive-ops-logo.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Case Studies", href: "#case-studies" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className={`w-full max-w-6xl flex items-center justify-between h-16 px-6 rounded-full transition-all duration-300 bg-[hsl(240_10%_8%)] border border-white/10 ${
          scrolled ? "shadow-lg backdrop-blur-xl" : "backdrop-blur-md"
        }`}
      >
        <a href="#" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Perceptive Ops" className="h-[140px] w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button size="sm" className="hidden md:inline-flex btn-purple-3d rounded-full font-semibold text-sm px-5">
          Free Consultation
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
          className="absolute top-20 left-4 right-4 md:hidden bg-[hsl(240_10%_8%/0.95)] backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 shadow-xl"
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
          <Button size="sm" className="btn-purple-3d rounded-full font-semibold w-full mt-2">
            Free Consultation
            <ArrowRight className="ml-1.5" size={14} />
          </Button>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
