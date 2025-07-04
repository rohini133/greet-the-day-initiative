import { Button } from "@/components/ui/button";
import { DesktopNavItem } from "./DesktopNavItem";
import { MenuItem } from "./types";
import { UserProfileMenu } from "./UserProfileMenu";
import { AIAgentsButton } from "@/components/ai/AIAgentsButton";

interface DesktopNavProps {
  menuItems: MenuItem[];
  isActive: (path: string) => boolean;
  toggleSubmenu: (title: string) => void;
  openSubmenu: string | null;
  handleLogin: () => void;
  handleSignup: () => void;
  user: any;
}

export function DesktopNav({
  menuItems,
  isActive,
  toggleSubmenu,
  openSubmenu,
  handleLogin,
  handleSignup,
  user,
}: DesktopNavProps) {
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {menuItems.map((item) => (
        <DesktopNavItem 
          key={item.title}
          item={item} 
          isActive={isActive}
          toggleSubmenu={toggleSubmenu}
          openSubmenu={openSubmenu}
        />
      ))}
      
      <div className="flex items-center space-x-3">
        {!user ? (
          <>
            <button
              onClick={handleLogin}
              className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-[#40C7E8] to-[#0077B6] px-6 py-2 rounded-full font-lexend font-medium hover:bg-gray-50 transition-colors border border-white"
            >
              Log In
            </button>
            <button
              onClick={handleSignup}
              className="bg-gradient-to-r from-[#40C7E8] to-[#0077B6] text-white px-6 py-2 rounded-full font-lexend font-medium hover:opacity-90 transition-opacity"
            >
              Sign Up
            </button>
          </>
        ) : (
          <UserProfileMenu user={user} />
        )}
      </div>
    </nav>
  );
}
