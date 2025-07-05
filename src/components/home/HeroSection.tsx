
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 bg-gradient-to-r from-[#FFF4ED] via-[#F2FAFC] to-[#E8F3F9]">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(12,125,167,0.05),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(12,125,167,0.05),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold font-lexend mb-6 bg-gradient-to-r from-[#40C7E8] to-[#0077B6] bg-clip-text text-transparent">
               Empowering Future-Ready Careers, Finance intelligence, and Creative Growth — with AI insights
              </h1>
              {/* <p className="text-xl md:text-2xl text-gray-600 font-lexend mb-8 max-w-3xl mx-auto">
                Discover your ideal career path with personalized AI guidance, skill assessments, and intelligent mentorship matching
              </p> */}
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[ 'Hyper-Personalized', 'Future-Proof', 'FinTech'].map((feature) => (
                <span 
                  key={feature}
                  className="px-4 py-2 bg-white border-2 border-transparent bg-gradient-to-r from-[#40C7E8] to-[#0077B6] bg-clip-border text-transparent bg-clip-text rounded-full text-sm font-medium font-lexend"
                  style={{
                    background: 'white',
                    borderImage: 'linear-gradient(to right, #40C7E8, #0077B6) 1',
                    color: 'black',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    backgroundImage: 'linear-gradient(to right, #40C7E8, #0077B6)'
                  }}
                >
                  <Sparkles className="inline w-4 h-4 mr-1" style={{ color: '#40C7E8' }} />
                  {feature}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="orange" className="font-montserrat font-medium px-8 py-3 hover-scale">
              Begin Your Assessment
            </Button>
            <Button className="border-2 font-montserrat font-medium px-8 py-3 bg-transparent hover:text-white" style={{ borderColor: '#0C7DA7', color: '#0C7DA7', '--hover-bg': '#0C7DA7' } as any} onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#0C7DA7'} onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}>
              Explore platform
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
