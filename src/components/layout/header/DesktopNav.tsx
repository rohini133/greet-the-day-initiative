
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
  user
}: DesktopNavProps) {
  return (
    <>
      <nav className="hidden lg:flex items-center space-x-1">
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

      <div className="hidden lg:flex items-center space-x-4">
        {/* <AIAgentsButton /> */}
        
        {user ? (
          <UserProfileMenu user={user} />
        ) : (
          <>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleLogin}
              className="bg-white text-white border-white hover:bg-gray-50 font-lexend font-bold text-base px-6 py-3"
              style={{ color: '#0C7DA7', borderColor: 'white' }}
            >
              Log in
            </Button>
            <Button 
              size="lg" 
              onClick={handleSignup}
              className="bg-white hover:bg-gray-50 font-lexend font-bold text-base px-6 py-3"
              style={{ color: '#0C7DA7' }}
            >
              Sign up
            </Button>
          </>
        )}
      </div>
    </>
  );
}
