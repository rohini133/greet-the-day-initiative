
import { MenuItem } from "./types";

export const menuItems: MenuItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "AI Assessment",
    href: "/ai-assessment",
  },
  
  {
    title: "Career Center",
    href: "/career-center",
    submenu: [
      { title: "Skill Analysis", href: "/career-center" },
      { title: "Career Mapping", href: "/career-center" },
      { title: "Career Awareness Hub", href: "/career-center" },
    ],
  },
  
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Pricing",
    href: "/pricing-page",
  } ,
  {
title: "AI Updates",
    href: "/ai-updates",

  }, 
];
