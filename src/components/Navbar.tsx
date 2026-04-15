import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/perceptive-ops-logo.png";
import logoColor from "@/assets/perceptive-ops-logo-color.png";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Results", href: "/#results" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Tech Stack", href: "/#tech" },
  { label: "Testimonials", href: "/#testimonials" },
];

type NavbarProps = {
  onBookConsultation: () => void;
};

const Navbar = ({ onBookConsultation }: NavbarProps) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const isCaseStudyRoute = location.pathname.startsWith("/case-studies");
  const isLibraryPage = location.pathname === "/case-studies";
  const isDarkTheme = !isLibraryPage;

  useEffect(() => {
    const updateHeaderMode = () => {
      const threshold = isCaseStudyRoute ? 36 : Math.max(120, window.innerHeight * 0.72);
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

  const showHeaderBackground = scrolledPastHero;

  // Theme-based class names
  const textClassName = isDarkTheme
    ? "text-white/60 hover:text-white"
    : "text-[#57657a] hover:text-[#131b2e]";

  const buttonClassName = isDarkTheme
    ? "text-white bg-[linear-gradient(135deg,hsl(239_84%_67%),hsl(217_91%_60%))] shadow-[0_8px_28px_rgba(99,102,241,0.35)] hover:opacity-90"
    : "text-white bg-[linear-gradient(135deg,#000000,#131b2e)] shadow-[0_12px_30px_rgba(19,27,46,0.12)] hover:opacity-95";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-[5px]",
        isLibraryPage
          ? "bg-white border-b border-[#f0f2f5]"
          : (showHeaderBackground
            ? "bg-black border-b border-white/10 shadow-lg"
            : "bg-transparent border-b border-transparent"),
      )}
    >
      <div
        className={cn(
          "container relative mx-auto flex items-center justify-between px-4 lg:px-8 h-20 md:h-24",
        )}
      >
        <Link to="/" className="flex items-center gap-2 shrink-0 py-2">
          <div
            className={cn(
              "overflow-hidden flex items-center",
              isLibraryPage
                ? "h-[54px] w-[196px]"
                : "h-20 md:h-24 w-[390px] md:w-[480px]",
            )}
          >
            <img
              src={isLibraryPage ? logoColor : logo}
              alt="Perceptive Ops"
              className={cn(
                "w-auto max-w-none object-contain object-left",
                isLibraryPage
                  ? "h-[100%] -translate-x-[2%]"
                  : "h-[210%] -translate-x-[5%]",
              )}
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav
          className={cn(
            "hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2",
            showHeaderBackground ? "gap-4 xl:gap-5" : "gap-5 xl:gap-7",
          )}
        >
          {navLinks.map((link) => (
            link.href.startsWith("/case-studies") ? (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  "py-2 whitespace-nowrap text-sm xl:text-[15px] font-medium transition-colors",
                  textClassName,
                )}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "py-2 whitespace-nowrap text-sm xl:text-[15px] font-medium transition-colors",
                  textClassName,
                )}
              >
                {link.label}
              </a>
            )
          ))}
        </nav>

        <Button
          size="sm"
          type="button"
          onClick={onBookConsultation}
          className={cn(
            "hidden md:inline-flex items-center justify-self-end rounded-[var(--radius)] font-semibold text-base px-6 h-10",
            buttonClassName,
          )}
        >
          Book a Call
          <ArrowRight className="ml-1.5" size={14} />
        </Button>

        {/* Mobile menu toggle */}
        <button
          className={cn(
            "md:hidden p-3 -mr-3 flex items-center justify-center transition-colors",
            isDarkTheme ? "text-white active:bg-white/10 rounded-full" : "text-[#131b2e] active:bg-slate-100/50 rounded-full"
          )}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "md:hidden mx-4 mt-2 rounded-[24px] px-6 py-4 backdrop-blur-xl",
            isDarkTheme
              ? "bg-black/80 border border-white/10 shadow-lg"
              : "border border-[rgba(118,119,125,0.16)] bg-[rgba(247,249,251,0.92)] shadow-[0_16px_40px_rgba(25,28,30,0.06)]",
          )}
        >
          {navLinks.map((link) => (
            link.href.startsWith("/case-studies") ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "block py-3 text-sm font-medium transition-colors",
                  textClassName,
                )}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "block py-3 text-sm font-medium transition-colors",
                  textClassName,
                )}
              >
                {link.label}
              </a>
            )
          ))}
          <Button
            size="sm"
            type="button"
            onClick={() => {
              setMenuOpen(false);
              onBookConsultation();
            }}
            className={cn(
              "font-semibold w-full mt-2",
              buttonClassName,
            )}
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
