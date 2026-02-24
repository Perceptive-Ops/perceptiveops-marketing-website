import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            Ready to Make Your Operations{" "}
            <span className="gradient-text">Intelligent?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Let's talk about how AI can transform your business. Book a free strategy call with our team.
          </p>
          <Button size="lg" className="gradient-bg border-0 text-white font-semibold text-base px-8 h-12 mb-6">
            Get Free Consultation
            <ArrowRight className="ml-2" size={18} />
          </Button>
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <Mail size={16} />
            <a href="mailto:hello@perceptiveops.com" className="hover:text-foreground transition-colors">
              hello@perceptiveops.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
