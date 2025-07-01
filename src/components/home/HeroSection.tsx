
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
      <section className="relative bg-white min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(12,125,167,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(12,125,167,0.1),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              {/* <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-lexend font-medium mb-6" style={{ color: '#0C7DA7' }}>
                <Brain className="mr-2 h-4 w-4" />
                AI-Powered Career Intelligence
              </div> */}
              
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
                style={{ backgroundColor: '#0C7DA7'}}
              >
                Explore Platform
              </Button>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold font-lexend mb-2" style={{ color: '#0C7DA7' }}>98%</div>
                <div className="text-gray-600 font-lexend">Success Rate</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold font-lexend mb-2" style={{ color: '#0C7DA7' }}>50K+</div>
                <div className="text-gray-600 font-lexend">Careers Transformed</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold font-lexend mb-2" style={{ color: '#0C7DA7' }}>24/7</div>
                <div className="text-gray-600 font-lexend">AI Support</div>
              </div>
            </div> */}
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
