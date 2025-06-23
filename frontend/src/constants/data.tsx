import React from "react";
import { 
    Info, Star, Mail, CheckCircle, Code, Building2, ShoppingCart, 
    Brain, Zap, Target, TrendingUp, Users, ArrowRight, DollarSign, 
    Shield, Award, Phone, MapPin
} from "lucide-react";
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

// For Testimonials page: list of testimonials.
export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "Honor Tech transformed our business operations with their custom software solution. The team was professional, responsive, and delivered exactly what we needed. Our efficiency has increased by 40% since implementation.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Operations Manager, Retail Solutions",
    content: "The POS system they built for us is incredible. It's intuitive, reliable, and has streamlined our entire sales process. The integration with our payment processors was seamless.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Director of IT, Enterprise Corp",
    content: "Working with Honor Tech was a game-changer for our enterprise. Their AI-driven analytics platform has given us insights we never had before. The ROI was immediate and substantial.",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "Founder, StartupXYZ",
    content: "As a startup, we needed a partner who could scale with us. Honor Tech delivered a solution that grows with our business. Their ongoing support has been invaluable.",
    rating: 5
  },
  {
    name: "Lisa Wang",
    role: "CTO, Manufacturing Co.",
    content: "The workflow automation system they implemented has eliminated bottlenecks we didn't even know we had. Our production efficiency has improved dramatically.",
    rating: 5
  },
  {
    name: "Robert Davis",
    role: "VP of Operations, Service Industry",
    content: "Honor Tech's custom web application has revolutionized how we serve our clients. The real-time collaboration features have made remote work seamless for our team.",
    rating: 5
  }
]

// For AI page: features of AI solutions.
export const aiFeatures = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Predictive analytics and pattern recognition"
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Intelligent workflow optimization"
  },
  {
    icon: Target,
    title: "Data Analytics",
    description: "Deep insights from your business data"
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Continuous improvement through AI"
  }
];

// For AI page: detailed AI-powered solutions.
export const aiSolutions = [
  {
    title: "Intelligent Analytics",
    description: "Our AI-driven analytics platform provides deep insights into your business operations, helping you make data-driven decisions and identify opportunities for growth.",
    features: [
      "Predictive modeling and forecasting",
      "Real-time data processing",
      "Automated reporting and dashboards"
    ]
  },
  {
    title: "Smart Automation",
    description: "Automate repetitive tasks and complex workflows with intelligent systems that learn and adapt to your business processes.",
    features: [
      "Workflow automation and optimization",
      "Intelligent document processing",
      "Customer service automation"
    ]
  }
];

// For Referrals page: steps on how the referral program works.
export const howItWorksSteps = [
  {
    icon: Users,
    title: "1. Refer a Client",
    description: "Connect us with someone who needs custom software solutions"
  },
  {
    icon: ArrowRight,
    title: "2. We Deliver",
    description: "Our team builds and delivers the custom solution"
  },
  {
    icon: DollarSign,
    title: "3. You Earn",
    description: "Receive 12% of the project value as your commission"
  }
];

// For Referrals page: benefits of the referral program.
export const referralBenefits = {
  forYou: [
    { highlight: "12% commission", rest: " on every project" },
    { highlight: "No cap", rest: " on earnings potential" },
    { highlight: "No upfront costs", rest: " or investment required" },
    { highlight: "Ongoing commissions", rest: " for maintenance contracts" }
  ],
  forReferrals: [
    { highlight: "Custom software solutions", rest: " tailored to their needs" },
    { highlight: "U.S.-based development", rest: " with quality assurance" },
    { highlight: "Ongoing support", rest: " and maintenance" },
    { highlight: "Competitive pricing", rest: " without hidden fees" }
  ]
};

// For Referrals page: examples of commission earnings.
export const commissionExamples = [
  {
    level: "Small Project",
    value: "$5,000",
    commission: "$600",
    featured: false
  },
  {
    level: "Medium Project",
    value: "$25,000",
    commission: "$3,000",
    featured: true
  },
  {
    level: "Large Project",
    value: "$100,000",
    commission: "$12,000",
    featured: false
  }
];

// For Certifications page: list of company certifications.
export const certifications = [
  {
    title: "ISO 27001 Information Security",
    description: "Certified for information security management systems, ensuring your data is protected with enterprise-grade security measures.",
    icon: Shield,
    status: "Active",
    validUntil: "2025-12-31"
  },
  {
    title: "Microsoft Partner",
    description: "Official Microsoft Partner with expertise in Azure cloud solutions and Microsoft technologies.",
    icon: Star,
    status: "Active",
    validUntil: "2025-12-31"
  },
  {
    title: "AWS Certified Solutions Architect",
    description: "Certified in designing and deploying scalable, reliable, and secure applications on AWS.",
    icon: Award,
    status: "Active",
    validUntil: "2025-12-31"
  },
  {
    title: "Google Cloud Professional",
    description: "Certified in Google Cloud Platform technologies and best practices for cloud-native development.",
    icon: CheckCircle,
    status: "Active",
    validUntil: "2025-12-31"
  }
]

// For Certifications page: list of quality standards and best practices.
export const qualityStandards = [
  "Agile Development Methodology",
  "Test-Driven Development (TDD)",
  "Continuous Integration/Continuous Deployment (CI/CD)",
  "Code Review Standards",
  "Security Best Practices",
  "Performance Optimization",
  "Accessibility Compliance (WCAG 2.1)",
  "Mobile-First Responsive Design"
]

// For Contact page: types of projects for the contact form select input.
export const projectTypes = [
  { value: "web-app", label: "Web Application" },
  { value: "pos", label: "Point of Sale System" },
  { value: "enterprise", label: "Enterprise Solution" },
  { value: "ai-ml", label: "AI/ML Integration" },
  { value: "other", label: "Other" }
];

// For Contact page: contact information details.
export const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "info@honortechllc.com",
    note: "We typically respond within 24 hours"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 123-4567",
    note: "Monday - Friday, 9 AM - 6 PM EST"
  },
  {
    icon: MapPin,
    title: "Location",
    details: "United States",
    note: "Serving clients nationwide"
  }
];

// For Contact page: list of reasons to choose the company.
export const whyChooseUsContact = [
  "U.S.-based development team",
  "Transparent pricing and communication",
  "Ongoing support and maintenance",
  "Quality guaranteed results"
];

// For ImageCredits page: list of image credits and attributions.
export const imageCredits = [
    {
      type: "Photography",
      source: "Unsplash",
      sourceUrl: "https://unsplash.com",
      license: "Unsplash License",
      items: [
        {
          creator: "Annie Spratt",
          creatorUrl: "https://unsplash.com/@anniespratt"
        }
      ]
    },
    {
      type: "Icons",
      source: "Lucide",
      sourceUrl: "https://lucide.dev",
      license: "ISC License",
      items: []
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