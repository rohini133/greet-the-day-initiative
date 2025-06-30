
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function HeroSection() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-cyan/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/730a27c8-03d0-4172-b773-f840a4c9c7e1.png" 
              alt="" 
              className="h-20 w-auto mx-auto mb-6"
            />
          </div>

          {/* Main Tagline */}
          <div className="mb-8 animate-fade-in delay-200">
            <p className="text-xl md:text-2xl font-lexend text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              The AI-Powered Career & Domain Intelligence Ecosystem
            </p>
          </div>

          {/* Value Proposition */}
          <div className="mb-12 animate-fade-in delay-400">
            <p className="text-lg font-lexend text-gray-400 max-w-2xl mx-auto mb-8">
              Equip every learner, professional, and institution with context-aware, adaptable, 
              and continuously intelligent systems to grow — meaningfully, ethically, and sustainably.
            </p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['AI-Native', 'Hyper-Personalized', 'Future-Ready', 'Ethical'].map((feature) => (
                <span 
                  key={feature}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-lexend font-bold"
                >
                  <Sparkles className="inline w-4 h-4 mr-1" />
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in delay-600">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-brand-cyan to-brand-blue text-white px-8 py-3 rounded-full font-lexend font-medium hover-scale"
              onClick={() => navigate('/coming-soon')}
            >
              Start My Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 bg-transparent text-white hover:bg-white/10 font-lexend rounded-full font-semibold px-8 py-4 text-lg backdrop-blur-sm"
              onClick={() => navigate('/coming-soon')}
            >
              Explore Platform
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
