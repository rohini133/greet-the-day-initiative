
import { Link, useLocation } from "react-router-dom";

interface HeaderLogoProps {
  scrolled?: boolean;
}

export function HeaderLogo({ scrolled = false }: HeaderLogoProps) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (isHomePage) {
    // Use the attached logo image for homepage navigation
    return (
      <Link to="/" className="flex items-center ml-2 group">
        <img 
          src="/lovable-uploads/adb8b02b-4bb9-4ba5-a602-9610c00dd84d.png" 
          alt="Gurukul Code" 
          className={`w-auto transition-all duration-500 ease-in-out group-hover:scale-105 ${
            scrolled ? 'h-12' : 'h-16'
          }`}
        />
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
