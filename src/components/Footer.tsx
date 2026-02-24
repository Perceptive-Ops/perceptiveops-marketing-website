import logo from "@/assets/perceptive-ops-logo.png";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Case Studies", href: "#case-studies" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Perceptive Ops" className="h-7 w-auto" />
          </div>

          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="mailto:hello@perceptiveops.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            hello@perceptiveops.com
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          © 2026 Perceptive Ops. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
