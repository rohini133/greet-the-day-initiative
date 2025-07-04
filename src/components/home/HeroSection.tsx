
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Brain } from "lucide-react";
import { AIAssessmentModal } from "@/components/assessment/AIAssessmentModal";
import { useEffect } from "react";
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 bg-white">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(12,125,167,0.05),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(12,125,167,0.05),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold font-lexend mb-6 bg-gradient-to-r from-[#40C7E8] to-[#0077B6] bg-clip-text text-transparent">
                Your AI Career Journey Starts Here
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-lexend mb-8 max-w-3xl mx-auto">
                Discover your ideal career path with personalized AI guidance, skill assessments, and intelligent mentorship matching
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['AI-Native', 'Personalized', 'Future-Ready', 'Ethical'].map((feature) => (
                <span 
                  key={feature}
                  className="px-4 py-2 bg-gradient-to-r from-[#FFF4ED] via-[#F2FAFC] to-[#E8F3F9] text-white rounded-full text-sm font-medium font-lexend"
                >
                  <Sparkles className="inline w-4 h-4 mr-1" />
                  {feature}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                className="px-8 py-3 text-lg font-lexend font-medium hover:opacity-90 transition-all duration-300 text-white bg-gradient-to-r from-[#40C7E8] to-[#0077B6] rounded-full"
                onClick={() => setIsAssessmentOpen(true)}
              >
                Start Free Assessment
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-3 text-lg font-lexend font-medium hover:opacity-90 transition-all duration-300 border-2 border-transparent bg-gradient-to-r from-[#40C7E8] to-[#0077B6] bg-clip-border text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-[#40C7E8] hover:to-[#0077B6] hover:text-white rounded-full"
              >
                Explore Platform
              </Button>
            </div>
          </div>
        </div>
      </section>

      <AIAssessmentModal 
        isOpen={isAssessmentOpen} 
        onClose={() => setIsAssessmentOpen(false)} 
      />
    </>
  );
}
