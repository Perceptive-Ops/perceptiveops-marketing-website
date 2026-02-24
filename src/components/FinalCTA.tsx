import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="dark-section rounded-3xl p-12 lg:p-20 text-center"
        >
          <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight mb-6 text-[hsl(var(--dark-card-foreground))]">
            Ready to Make Your<br /> Operations{" "}
            <span className="gradient-text">Intelligent?</span>
          </h2>
          <p className="text-lg text-[hsl(0_0%_100%/0.6)] mb-10 max-w-xl mx-auto">
            Let's talk about how AI can transform your business. Book a free strategy call with our team.
          </p>
          <Button size="lg" className="btn-purple-3d rounded-full font-semibold text-base px-8 h-13 mb-8">
            Get Free Consultation
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
