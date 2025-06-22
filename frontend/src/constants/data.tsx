import React from "react";
import { Info, Star, Mail, CheckCircle } from "lucide-react";

/* --- Types --- */
type FooterNavItem = {
    label: string;
    path: string;
    icon: React.ReactNode; 
};

/* --- Constants --- */
export const mainMenu = [
    "Home",
    "Services",
    "AI",
    "About",
    "Testimonials",
    "Referrals",
    "Contact",
]; 

export const footerNavItems: FooterNavItem[] = [
    {
      label: "Our Story",
      path: "/about",
      icon: <Info size={18} />,
    },
    {
      label: "Testimonials",
      path: "/testimonials",
      icon: <Star size={18} />,
    },
    {
      label: "Certifications",
      path: "/certifications",
      icon: <CheckCircle size={18} />,
    },
    {
      label: "Contact Us",
      path: "/contact",
      icon: <Mail size={18} />,
    },
];