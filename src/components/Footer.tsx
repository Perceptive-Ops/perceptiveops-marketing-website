import logo from "@/assets/perceptive-ops-logo.png";
import { Linkedin, Github } from "lucide-react";

const serviceLinks = [
  "AI Agent Development",
  "Workflow Automation",
  "Machine Learning",
  "Product Engineering",
  "AI Consulting",
];

const companyLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Case Studies", href: "#cases" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const connectLinks = [
  { label: "hello@perceptiveops.com", href: "mailto:hello@perceptiveops.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/perceptive-ops" },
  { label: "Twitter / X", href: "https://x.com/perceptiveops" },
  { label: "GitHub", href: "https://github.com/perceptiveops" },
];

const Footer = () => {
  return (
    <footer className="dark-section py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#home" className="inline-block">
              <img src={logo} alt="Perceptive Ops" className="h-[140px] w-auto mb-4 brightness-0 invert" />
            </a>
            <p className="text-sm text-[hsl(0_0%_100%/0.5)] leading-relaxed">
              AI-powered operations and automation for businesses that want to scale smarter, not harder.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-[hsl(var(--dark-card-foreground))] mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#services" className="text-sm text-[hsl(0_0%_100%/0.5)] hover:text-[hsl(0_0%_100%/0.8)] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-[hsl(var(--dark-card-foreground))] mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[hsl(0_0%_100%/0.5)] hover:text-[hsl(0_0%_100%/0.8)] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-[hsl(var(--dark-card-foreground))] mb-4">Connect</h4>
            <ul className="space-y-2">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-sm text-[hsl(0_0%_100%/0.5)] hover:text-[hsl(0_0%_100%/0.8)] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[hsl(0_0%_100%/0.1)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[hsl(0_0%_100%/0.4)]">
            © 2026 Perceptive Ops. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <a href="https://x.com/perceptiveops" target="_blank" rel="noopener noreferrer" className="text-[hsl(0_0%_100%/0.4)] hover:text-[hsl(0_0%_100%/0.8)] transition-colors" aria-label="Twitter / X">
              <span className="text-sm font-bold">𝕏</span>
            </a>
            <a href="https://www.linkedin.com/company/perceptive-ops" target="_blank" rel="noopener noreferrer" className="text-[hsl(0_0%_100%/0.4)] hover:text-[hsl(0_0%_100%/0.8)] transition-colors" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="https://github.com/perceptiveops" target="_blank" rel="noopener noreferrer" className="text-[hsl(0_0%_100%/0.4)] hover:text-[hsl(0_0%_100%/0.8)] transition-colors" aria-label="GitHub">
              <Github size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
