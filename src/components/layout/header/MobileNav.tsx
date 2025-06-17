
import { Button } from "@/components/ui/button";
import { MobileNavItem } from "./MobileNavItem";
import { MenuItem } from "./types";
import { 
  Sheet,
  SheetContent,
  SheetHeader
} from "@/components/ui/sheet";
import { X } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useToast } from "@/hooks/use-toast";
import { AIAgentsButton } from "@/components/ai/AIAgentsButton";

interface MobileNavProps {
  isOpen: boolean;
  menuItems: MenuItem[];
  isActive: (path: string) => boolean;
  toggleSubmenu: (title: string) => void;
  openSubmenu: string | null;
  setIsOpen: (isOpen: boolean) => void;
  handleLogin: () => void;
  handleSignup: () => void;
  user: any;
}

export function MobileNav({ 
  isOpen, 
  menuItems, 
  isActive, 
  toggleSubmenu, 
  openSubmenu,
  setIsOpen,
  handleLogin,
  handleSignup,
  user
}: MobileNavProps) {
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setIsOpen(false);
      toast({
        title: "Logged out",
        description: "You have been successfully logged out."
      });
    } catch (error) {
      console.error("Error signing out:", error);
      toast({
        title: "Logout failed",
        description: "An error occurred during logout.",
        variant: "destructive"
      });
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
        <SheetHeader className="border-b p-4">
          <div className="flex items-center justify-end">
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
              <X size={18} />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </SheetHeader>
        <div className="px-4 py-5 space-y-3 subtle-scroll max-h-[calc(100vh-4rem)] overflow-y-auto">
          {menuItems.map((item) => (
            <MobileNavItem
              key={item.title}
              item={item}
              isActive={isActive}
              toggleSubmenu={toggleSubmenu}
              openSubmenu={openSubmenu}
              setIsOpen={setIsOpen}
            />
          ))}
          <div className="pt-4 flex flex-col space-y-3">
            <div className="mb-2">
              <AIAgentsButton />
            </div>
            {user ? (
              <div className="border-t pt-4">
                <div className="text-sm font-medium mb-2">
                  Signed in as {user.email}
                </div>
                <Button 
                  className="w-full"
                  variant="outline"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <>
                <Button variant="outline" className="w-full" onClick={() => {
                  handleLogin();
                  setIsOpen(false);
                }}>
                  Log in
                </Button>
                <Button className="w-full" onClick={() => {
                  handleSignup();
                  setIsOpen(false);
                }}>
                  Sign up
                </Button>
              </>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
