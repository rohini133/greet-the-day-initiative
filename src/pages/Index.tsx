
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import VisionSection from "@/components/home/VisionSection";

const Index = () => {
  return (
    <div className="bg-gradient-to-br from-brand-orange/5 via-brand-cyan/5 to-brand-blue/5 min-h-screen">
      <HeroSection />
      <VisionSection /> 
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Index;
