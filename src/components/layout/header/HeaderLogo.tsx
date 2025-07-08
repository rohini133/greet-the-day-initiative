
import { Link, useLocation } from "react-router-dom";

interface HeaderLogoProps {
  scrolled?: boolean;
}

export function HeaderLogo({ scrolled = false }: HeaderLogoProps) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (isHomePage) {
    // Text-only logo for homepage - stacked vertically
    return (
      <Link to="/" className="flex items-center ml-2 group">
        <div className={`font-inter font-bold transition-all duration-300 group-hover:scale-105 ${
          scrolled ? 'text-lg' : 'text-xl'
        } flex flex-col leading-tight`} style={{ letterSpacing: '0.5px' }}>
          <span className="text-gray-900">GURUKUL</span>
          <span className="text-[#f37c20]">CODE</span>
        </div>
      </Link>
    );
  }

  // Image logo for all other pages
  return (
    <Link to="/" className="flex items-center ml-2 group">
      <img 
        src="/lovable-uploads/24ebd473-ae40-411b-81b9-6cc9fbd06f98.png" 
        alt="Gurukul Code" 
        className={`w-auto transition-all duration-500 ease-in-out group-hover:scale-105 ${
          scrolled ? 'h-12' : 'h-16'
        }`}
      />
    </Link>
  );
}
