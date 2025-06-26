
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
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 dark:bg-secondary/90 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <HeaderLogo />
          
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
