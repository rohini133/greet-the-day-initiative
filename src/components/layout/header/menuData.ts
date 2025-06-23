
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
    title: "Learning Center",
    href: "/learning-center",
    submenu: [
      { title: "Courses Catalog", href: "/learning-center" },
      { title: "Certifications", href: "/learning-center" },
      { title: "Learning Paths", href: "/learning-center" },
    ],
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
    title: "Contact",
    href: "/contact",
  },
  {
title: "AI Updates",
    href: "/ai-updates",

  }, 
];
