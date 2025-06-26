
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { MenuItem } from "./types";

interface MobileNavItemProps {
  item: MenuItem;
  isActive: (path: string) => boolean;
  toggleSubmenu: (title: string) => void;
  openSubmenu: string | null;
  setIsOpen: (isOpen: boolean) => void;
}

export function MobileNavItem({ 
  item, 
  isActive, 
  toggleSubmenu, 
  openSubmenu,
  setIsOpen 
}: MobileNavItemProps) {
  return (
    <div key={item.title} className="py-1">
      {item.submenu ? (
        <div>
          <button
            onClick={() => toggleSubmenu(item.title)}
            className="flex items-center justify-between w-full text-left px-3 py-2 rounded-md text-foreground/80 hover:text-primary"
          >
            <span>{item.title}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                openSubmenu === item.title ? "rotate-180" : ""
              }`}
            />
          </button>
          {openSubmenu === item.title && (
            <div className="pl-4 mt-1 space-y-1 border-l-2 border-muted">
              {item.submenu.map((subitem) => (
                <Link
                  key={subitem.title}
                  to={subitem.href}
                  className="block px-3 py-2 rounded-md text-sm text-foreground/80 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {subitem.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Link
          to={item.href}
          className={`block px-3 py-2 rounded-md transition-colors ${
            isActive(item.href) 
              ? "text-primary font-semibold" 
              : "text-foreground/80 hover:text-primary"
          }`}
          onClick={() => setIsOpen(false)}
        >
          {item.title}
        </Link>
      )}
    </div>
  );
}
