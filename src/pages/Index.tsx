
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import VisionSection from "@/components/home/VisionSection";

const Index = () => {
  return (
    <div className="bg-gradient-to-r from-[#FFF4ED] via-[#F2FAFC] to-[#E8F3F9] min-h-screen">
      <HeroSection />
      <VisionSection /> 
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Index;
