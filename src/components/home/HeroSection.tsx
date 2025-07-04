
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Brain } from "lucide-react";
import { AIAssessmentModal } from "@/components/assessment/AIAssessmentModal";
import { useEffect } from "react";

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(12,125,167,0.05),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(12,125,167,0.05),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold font-lexend mb-6" style={{ color: '#0C7DA7' }}>
                Your AI Career Journey Starts Here
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-lexend mb-8 max-w-3xl mx-auto">
                Discover your ideal career path with personalized AI guidance, skill assessments, and intelligent mentorship matching
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                className="px-8 py-3 text-lg font-lexend font-medium hover:scale-105 transition-all duration-300 text-white"
                style={{ backgroundColor: '#0C7DA7' }}
                onClick={() => setIsAssessmentOpen(true)}
              >
                Start Free Assessment
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-3 text-lg font-lexend font-medium hover:scale-105 transition-all duration-300 border-2"
                style={{ borderColor: '#0C7DA7', color: '#0C7DA7' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0C7DA7';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#0C7DA7';
                }}
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
