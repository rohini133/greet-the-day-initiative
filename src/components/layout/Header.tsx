
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HeaderLogo } from "./header/HeaderLogo";
import { DesktopNavItem } from "./header/DesktopNavItem";
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
        ? 'bg-white/90 backdrop-blur-md shadow-lg h-14' 
        : 'bg-white/80 backdrop-blur-md shadow-sm h-16'
    }`}>
      <div className="container mx-auto px-4">
          <div className={`hidden lg:flex items-center justify-between w-full max-w-6xl rounded-full transition-all duration-500 ${
  scrolled ? 'px-6 py-2' : 'px-8 py-3'
}`}>
          {/* Logo with rounded container */}
          <div className="bg-white/95 backdrop-blur-md rounded-full shadow-sm border border-white/20 p-2">
            <HeaderLogo scrolled={scrolled} />
          </div>
          
          {/* LangChain-style rounded navigation container */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-white/20 px-8 py-3">
              <nav className="flex items-center space-x-8">
                {menuItems.map((item) => (
                  <DesktopNavItem 
                    key={item.title}
                    item={item} 
                    isActive={isActive}
                    toggleSubmenu={toggleSubmenu}
                    openSubmenu={openSubmenu}
                  />
                ))}
              </nav>
            </div>
          </div>

          {/* Right side buttons with rounded container */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="bg-white/95 backdrop-blur-md rounded-full shadow-sm border border-white/20 px-4 py-2">
              {!user ? (
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handleLogin}
                    className="bg-white/80 backdrop-blur-sm text-[#017ea6] px-6 py-2 rounded-full font-inter font-medium hover:bg-[#017ea6] hover:text-white transition-all duration-300 border border-[#017ea6]/30 hover:shadow-lg hover:shadow-[#017ea6]/20"
                  >
                    Log In
                  </button>
                  <button
                    onClick={handleSignup}
                    className="bg-gradient-to-r from-[#f37c20] to-[#ff8c42] text-white px-6 py-2 rounded-full font-inter font-medium hover:shadow-lg hover:shadow-[#f37c20]/30 transition-all duration-300 hover:scale-105"
                  >
                    Start Your Journey
                  </button>
                </div>
              ) : (
                <UserProfileMenu user={user} />
              )}
            </div>
          </div>

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
