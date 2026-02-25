import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

type FinalCTAProps = {
  onBookConsultation: () => void;
};

const FinalCTA = ({ onBookConsultation }: FinalCTAProps) => {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="dark-section rounded-3xl p-12 lg:p-20 text-center"
        >
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.02em] mb-6 text-[hsl(var(--dark-card-foreground))]">
            Ready to Make Your<br /> Operations{" "}
            <span className="gradient-text">Intelligent</span>?
          </h2>
          <p className="text-lg text-[hsl(0_0%_100%/0.6)] mb-10 max-w-xl mx-auto">
            Book a free consultation. We'll audit your operations and show you exactly where AI can save time, cut costs, and accelerate growth.
          </p>
          <Button
            size="lg"
            type="button"
            onClick={onBookConsultation}
            className="btn btn-primary font-semibold text-base px-8 h-13 mb-8"
          >
            Book Your Free Consultation
            <ArrowRight className="ml-2" size={18} />
          </Button>
          <div className="flex items-center justify-center gap-2 text-[hsl(0_0%_100%/0.5)] text-sm">
            <Mail size={16} />
            <a href="mailto:hello@perceptiveops.com" className="hover:text-[hsl(0_0%_100%/0.8)] transition-colors">
              hello@perceptiveops.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
