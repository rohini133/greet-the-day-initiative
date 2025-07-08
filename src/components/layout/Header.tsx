
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HeaderLogo } from "./header/HeaderLogo";
import { DesktopNav } from "./header/DesktopNav";
import { MobileNav } from "./header/MobileNav";
import { MobileMenuButton } from "./header/MobileMenuButton";
import { menuItems } from "./header/menuData";
import { useAuth } from "@/hooks/useAuth";
import { UserProfileMenu } from "./header/UserProfileMenu";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 h-14' 
        : 'bg-white/70 backdrop-blur-md shadow-sm border-b border-white/10 h-16'
    }`}>
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'h-14' : 'h-16'
        }`}>
          <HeaderLogo scrolled={scrolled} />
          
          <DesktopNav 
            menuItems={menuItems}
            isActive={isActive}
            toggleSubmenu={toggleSubmenu}
            openSubmenu={openSubmenu}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            user={user}
          />

          <div className="lg:hidden flex items-center space-x-2">
            {user && (
              <UserProfileMenu user={user} />
            )}
            <MobileMenuButton 
              toggleMenu={toggleMenu} 
            />
          </div>
        </div>
      </div>

      <MobileNav 
        isOpen={isOpen}
        menuItems={menuItems}
        isActive={isActive}
        toggleSubmenu={toggleSubmenu}
        openSubmenu={openSubmenu}
        setIsOpen={setIsOpen}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        user={user}
      />
    </header>
  );
}
