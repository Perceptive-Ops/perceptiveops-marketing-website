import logo from "@/assets/perceptive-ops-logo.png";

const serviceLinks = [
  "AI Agent Development",
  "Workflow Automation",
  "Machine Learning",
  "Product Development",
  "AI Strategy",
  "Data Engineering",
];

const companyLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Case Studies", href: "#case-studies" },
];

const Footer = () => {
  return (
    <footer className="dark-section py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={logo} alt="Perceptive Ops" className="h-[140px] w-auto mb-4 brightness-0 invert" />
            <p className="text-sm text-[hsl(0_0%_100%/0.5)] leading-relaxed">
              We build AI systems that run your operations — so your team works smarter.
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

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-[hsl(var(--dark-card-foreground))] mb-4">Contact</h4>
            <a
              href="mailto:hello@perceptiveops.com"
              className="text-sm text-[hsl(0_0%_100%/0.5)] hover:text-[hsl(0_0%_100%/0.8)] transition-colors"
            >
              hello@perceptiveops.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-[hsl(0_0%_100%/0.1)] text-center text-xs text-[hsl(0_0%_100%/0.4)]">
          © 2026 Perceptive Ops. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
