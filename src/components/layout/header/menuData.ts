
import { MenuItem } from "./types";

export const menuItems: MenuItem[] = [
  {
    title: "Home",
    href: "/",
  },
   {
    title: "Platform",
    href: "/platform",
    submenu: [
      { title: "Career Development", href: "/career-development" },
      { title: "FinCode", href: "/fincode" },
      { title: "Let's Advance", href: "/lets-advance" },
    ],
  },
   {
    title: "Pricing",
    href: "/pricing-page",
  } ,
 
  {
    title: "Enterprise Solutions",
    href: "/enterprise",
  },
  {
    title: "About",
    href: "/about",
  },
  {
title: "AI Updates",
    href: "/ai-updates",

  }, 
];
