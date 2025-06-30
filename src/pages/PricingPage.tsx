
import { useEffect } from "react";

const PricingPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-lexend font-bold text-gray-900">
          Coming Soon
        </h1>
      </div>
    </div>
  );
};

export default PricingPage;
