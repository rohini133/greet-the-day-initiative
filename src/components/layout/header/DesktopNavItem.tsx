
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { MenuItem } from "./types";

interface DesktopNavItemProps {
  item: MenuItem;
  isActive: (path: string) => boolean;
  toggleSubmenu: (title: string) => void;
  openSubmenu: string | null;
}

export function DesktopNavItem({
  item,
  isActive,
  toggleSubmenu,
  openSubmenu,
}: DesktopNavItemProps) {
  if (item.submenu) {
    return (
      <div className="relative group">
        <button
          onClick={() => toggleSubmenu(item.title)}
          className="flex items-center space-x-1 text-gray-700 hover:text-[#0C7DA7] transition-colors font-lexend font-medium"
        >
          <span>{item.title}</span>
          <ChevronDown className="h-4 w-4" />
        </button>
        
        {openSubmenu === item.title && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border z-50">
            <div className="py-2">
              {item.submenu.map((subItem) => (
                <Link
                  key={subItem.title}
                  to={subItem.path}
                  className="block px-4 py-3 text-gray-700 hover:text-white hover:bg-[#F57E20] transition-colors font-lexend"
                >
                  <div className="font-medium">{subItem.title}</div>
                  {subItem.description && (
                    <div className="text-xs text-gray-500 mt-1">
                      {subItem.description}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={item.path}
      className={`font-lexend font-medium transition-colors ${
        isActive(item.path)
          ? "text-[#0C7DA7]"
          : "text-gray-700 hover:text-[#0C7DA7]"
      }`}
    >
      {item.title}
    </Link>
  );
}
