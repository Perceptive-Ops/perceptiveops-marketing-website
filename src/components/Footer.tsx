import logo from "@/assets/perceptive-ops-logo.png";
import { Linkedin, Github, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const serviceLinks = [
  "AI Agent Development",
  "Workflow Automation",
  "Machine Learning",
  "Product Engineering",
  "AI Consulting",
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Results", href: "/#results" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Tech Stack", href: "/#tech" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

const connectLinks = [
  { label: "hello@perceptiveops.com", href: "mailto:hello@perceptiveops.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/perceptive-ops" },
  { label: "Instagram", href: "https://www.instagram.com/perceptiveops?igsh=MWlqdTExbjl3aTZicA==" },
  { label: "Twitter / X", href: "https://x.com/perceptiveops" },
  { label: "GitHub", href: "https://github.com/perceptiveops" },
];

type FooterProps = {
  variant?: "default" | "editorial";
};

const Footer = ({ variant = "default" }: FooterProps) => {
  const isEditorial = variant === "editorial";
  const footerClassName = isEditorial ? "bg-[#f7f9fb] py-20" : "dark-section py-16";
  const descriptionClassName = isEditorial
    ? "text-sm leading-relaxed text-[#57657a]"
    : "text-sm text-[hsl(0_0%_100%/0.5)] leading-relaxed";
  const headingClassName = isEditorial
    ? "text-sm font-semibold text-[#131b2e] mb-4"
    : "text-sm font-semibold text-[hsl(var(--dark-card-foreground))] mb-4";
  const linkClassName = isEditorial
    ? "text-sm text-[#57657a] hover:text-[#131b2e] transition-colors"
    : "text-sm text-[hsl(0_0%_100%/0.5)] hover:text-[hsl(0_0%_100%/0.8)] transition-colors";
  const dividerClassName = isEditorial ? "border-[#c6c6cd]/30" : "border-[hsl(0_0%_100%/0.1)]";
  const metaTextClassName = isEditorial ? "text-xs text-[#76777d]" : "text-xs text-[hsl(0_0%_100%/0.4)]";
  const iconClassName = isEditorial
    ? "text-[#76777d] hover:text-[#131b2e] transition-colors"
    : "text-[hsl(0_0%_100%/0.4)] hover:text-[hsl(0_0%_100%/0.8)] transition-colors";

  return (
    <footer className={footerClassName}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <div className="h-[84px] md:h-24 w-[390px] md:w-[480px] overflow-hidden flex items-center mb-4">
                <img
                  src={logo}
                  alt="Perceptive Ops"
                  className="h-[210%] w-auto max-w-none object-contain object-left -translate-x-[5%]"
                />
              </div>
            </Link>
            <p className={descriptionClassName}>
              AI-powered operations and automation for businesses that want to scale smarter, not harder.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className={headingClassName}>Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="/#services" className={linkClassName}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className={headingClassName}>Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  {link.href === "/" || link.href === "/case-studies" ? (
                    <Link to={link.href} className={linkClassName}>
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className={linkClassName}>
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className={headingClassName}>Connect</h4>
            <ul className="space-y-2">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined} className={linkClassName}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${dividerClassName}`}>
          <span className={metaTextClassName}>
            © 2026 Perceptive Ops. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <a href="https://x.com/perceptiveops" target="_blank" rel="noopener noreferrer" className={iconClassName} aria-label="Twitter / X">
              <span className="text-sm font-bold">𝕏</span>
            </a>
            <a href="https://www.linkedin.com/company/perceptive-ops" target="_blank" rel="noopener noreferrer" className={iconClassName} aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="https://www.instagram.com/perceptiveops?igsh=MWlqdTExbjl3aTZicA==" target="_blank" rel="noopener noreferrer" className={iconClassName} aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="https://github.com/perceptiveops" target="_blank" rel="noopener noreferrer" className={iconClassName} aria-label="GitHub">
              <Github size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
