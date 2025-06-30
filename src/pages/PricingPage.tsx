
import { useEffect } from "react";
import { Clock } from "lucide-react";

const PricingPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header spacing to match site layout */}
      <div className="pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            {/* Animated clock icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <Clock 
                  className="h-16 w-16 text-brand-blue animate-pulse" 
                  strokeWidth={1.5}
                />
                <div className="absolute inset-0 rounded-full bg-brand-cyan/20 animate-ping"></div>
              </div>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl font-lexend font-bold text-gray-900 mb-6">
              Coming Soon
            </h1>

            {/* Subtext */}
            <p className="text-xl text-gray-600 font-lexend leading-relaxed mb-8">
              We're working on exciting pricing options. Stay tuned!
            </p>

            {/* Decorative gradient line */}
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-orange rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
