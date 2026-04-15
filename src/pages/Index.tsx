import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Results from "@/components/Results";
import CaseStudies from "@/components/CaseStudies";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

const Index = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationSource, setConsultationSource] = useState("unknown");

  const openConsultation = (source: string) => {
    setConsultationSource(source);
    setIsConsultationOpen(true);
  };

  return (
    <div id="home" className="min-h-screen bg-background">
      <Navbar onBookConsultation={() => openConsultation("navbar")} />
      <Hero onBookConsultation={() => openConsultation("hero")} />
      <TrustedBy />
      <Services />
      <Process onBookConsultation={() => openConsultation("process")} />
      <Results />
      <CaseStudies />
      <TechStack />
      <Testimonials />
      <FinalCTA onBookConsultation={() => openConsultation("final-cta")} />
      <Footer />
      <ConsultationModal
        open={isConsultationOpen}
        source={consultationSource}
        onOpenChange={setIsConsultationOpen}
      />
    </div>
  );
};

export default Index;
