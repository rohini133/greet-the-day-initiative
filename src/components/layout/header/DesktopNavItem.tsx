
import { Link } from "react-router-dom";
import { ChevronDown, Home, BookOpen, Users, Briefcase, Mail } from "lucide-react";
import { MenuItem } from "./types";
import { useEffect, useRef } from "react";

interface DesktopNavItemProps {
  item: MenuItem;
  isActive: (path: string) => boolean;
  toggleSubmenu: (title: string) => void;
  openSubmenu: string | null;
}

const getMenuIcon = (title: string) => {
  switch (title.toLowerCase()) {
    case 'home':
      return Home;
    case 'courses':
    case 'learning center':
      return BookOpen;
    case 'community':
      return Users;
    case 'career center':
      return Briefcase;
    case 'contact':
      return Mail;
    default:
      return null;
  }
};

export function DesktopNavItem({
  item,
  isActive,
  toggleSubmenu,
  openSubmenu,
}: DesktopNavItemProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const IconComponent = getMenuIcon(item.title);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (openSubmenu === item.title) {
          toggleSubmenu(item.title);
        }
      }
    };

    if (openSubmenu === item.title) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openSubmenu, item.title, toggleSubmenu]);

  const handleLinkClick = () => {
    // Close dropdown when any link is clicked
    if (openSubmenu === item.title) {
      toggleSubmenu(item.title);
    }
  };

  if (item.submenu) {
    return (
      <div className="relative group" ref={dropdownRef}>
        <button
          onClick={() => toggleSubmenu(item.title)}
          className="flex items-center space-x-2 text-gray-700 hover:text-[#017ea6] transition-all duration-300 font-inter font-medium relative group py-2"
        >
          {IconComponent && <IconComponent className="h-4 w-4" />}
          <span className="relative">
            {item.title}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#017ea6] transition-all duration-300 group-hover:w-full"></span>
          </span>
          <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
        </button>
        
        {openSubmenu === item.title && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-white/20 z-50 animate-fade-in">
            <div className="py-2">
              {item.submenu.map((subItem) => (
                <Link
                  key={subItem.title}
                  to={subItem.path}
                  onClick={handleLinkClick}
                  className="block px-4 py-3 text-gray-700 hover:text-[#f37c20] transition-all duration-300 font-inter"
                >
                  <div className="font-medium">{subItem.title}</div>
                  {subItem.description && (
                    <div className="text-xs text-gray-500 mt-1">{subItem.description}</div>
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
      className={`font-inter font-medium transition-all duration-300 relative group py-2 flex items-center space-x-2 ${
        isActive(item.path)
          ? "text-[#017ea6]"
          : "text-gray-700 hover:text-[#017ea6]"
      }`}
    >
      {IconComponent && <IconComponent className="h-4 w-4" />}
      <span className="relative">
        {item.title}
        <span className={`absolute bottom-0 left-0 h-0.5 bg-[#017ea6] transition-all duration-300 ${
          isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
        }`}></span>
      </span>
    </Link>
  );
}
