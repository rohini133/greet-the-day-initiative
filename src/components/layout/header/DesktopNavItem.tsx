
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface NavItemProps {
  item: {
    title: string;
    href: string;
    submenu?: { title: string; href: string }[];
  };
  isActive: (path: string) => boolean;
  toggleSubmenu: (title: string) => void;
  openSubmenu: string | null;
}

export function DesktopNavItem({ item, isActive, toggleSubmenu, openSubmenu }: NavItemProps) {
  return (
    <div key={item.title} className="relative group">
      {item.submenu ? (
        <button 
          className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-primary flex items-center transition-colors"
          onClick={() => toggleSubmenu(item.title)}
        >
          {item.title}
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>
      ) : (
        <Link 
          to={item.href} 
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            isActive(item.href) 
              ? "text-primary font-semibold" 
              : "text-foreground/80 hover:text-primary"
          }`}
        >
          {item.title}
        </Link>
      )}

      {item.submenu && (
        <div className="absolute left-0 mt-1 w-48 origin-top-left rounded-md bg-white dark:bg-secondary shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          <div className="py-1">
            {item.submenu.map((subitem) => (
              <Link
                key={subitem.title}
                to={subitem.href}
                className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted transition-colors"
              >
                {subitem.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
