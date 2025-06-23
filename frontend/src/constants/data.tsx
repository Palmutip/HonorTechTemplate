import React from "react";
import { Info, Star, Mail, CheckCircle, Code, Building2, ShoppingCart } from "lucide-react";
import  pointOfSale from "/src/assets/img/pointOfSale1.webp"
import  mobile from "/src/assets/img/mobile.webp"
import  enterpriseSol from "/src/assets/img/annie-spratt-unsplash.webp"

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

export const coverHomePage = [
  {
    img: enterpriseSol,
    alt: "Web Applications",
    href: "#web-applications",
    label: "Web Applications"
  },
  {
    img: mobile,
    alt: "Enterprise Solutions",
    href: "#enterprise-solutions",
    label: "Enterprise Solutions"
  },
  {
    img: pointOfSale,
    alt: "Point of Sale",
    href: "#point-of-sale",
    label: "Point of Sale"
  }
]

export const honorTechServices = [
    {
      icon: Code,
      title: "Web Applications",
      description: "Our custom web applications help businesses streamline operations, improve productivity, and automate workflows. Whether you need a client portal, internal dashboard, or a specialized workflow system, we build scalable solutions designed for long-term success.",
      features: [
        "Cloud-based platforms",
        "Data-driven reporting tools",
        "Workflow automation",
        "Real-time collaboration",
        "Mobile-responsive design"
      ],
      idealFor: "Businesses needing centralized data systems, real-time collaboration tools, or performance-driven applications."
    },
    {
      icon: ShoppingCart,
      title: "Point of Sale Systems",
      description: "A custom-built Point of Sale (POS) system should be more than just payment processing—it should be the backbone of your entire business workflow. We design fully integrated business management applications that seamlessly incorporate Stripe or similar payment platforms.",
      features: [
        "Cloud-based POS management",
        "Integrated payment processing",
        "Real-time inventory tracking",
        "Location-based scanning",
        "Automated financial reporting"
      ],
      idealFor: "Businesses looking for a custom, all-in-one POS solution that works exactly how they need—without the limitations of traditional POS systems."
    },
    {
      icon: Building2,
      title: "Enterprise Solutions",
      description: "Enterprise businesses require powerful, scalable software that can handle complex workflows, data security, and compliance regulations. We build solutions that integrate seamlessly across departments and automate mission-critical processes.",
      features: [
        "Enterprise Resource Planning (ERP)",
        "AI-driven analytics",
        "Automated workflow systems",
        "Compliance management",
        "Cross-department integration"
      ],
      idealFor: "Large organizations needing automation, process optimization, and AI-driven efficiency improvements."
    }
]

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