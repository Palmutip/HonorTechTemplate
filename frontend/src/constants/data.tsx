import React from "react";
import { 
    Info, Star, Mail, CheckCircle, BriefcaseIcon, CogIcon, PlugIcon, BarChartIcon,
    Brain, Zap, Target, TrendingUp, PencilLine, Link, DollarSign, 
    Shield, MapPin
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
    icon: BriefcaseIcon,
    title: "Business Automation",
    description:
      "Streamline your daily operations with tailored automation solutions. Eliminate repetitive tasks, reduce errors, and boost efficiency across departments with customized business workflows.",
    features: [
      "Internal process automation",
      "Custom inventory control systems",
      "Employee time and attendance tracking",
      "Help desk ticketing platforms"
    ],
    idealFor:
      "Businesses looking to reduce manual labor, cut operational costs, and increase team productivity through smart automation.",
    phrase:
      "Cut the busywork. Boost productivity with automation built for your business."
  },
  {
    icon: BarChartIcon,
    title: "Reporting Solutions for Your Existing Database",
    description:
      "Get the insights you need from the data you already have. We build powerful, customized reports that connect directly to your database and present real-time, decision-driving information.",
    features: [
      "Microsoft Report Builder (SSRS integration)",
      ".NET-based local reporting apps",
      "Custom web dashboards and live data views"
    ],
    idealFor:
      "Organizations with their own databases that need clear, actionable reports without relying on restrictive or complex third-party tools.",
    phrase:
      "Turn your data into decisions. Real-time, customizable reporting at your fingertips."
  },
  {
    icon: PlugIcon,
    title: "Hardware and Software Integrations",
    description:
      "Connect the tools you already use. We integrate your existing hardware and third-party platforms into cohesive systems that share data and streamline operations.",
    features: [
      "Biometric time clocks",
      "Zebra barcode scanners",
      "Signature pads",
      "Nest cameras and thermostats",
      "Epson projectors",
      "Integrations with Salesforce, QuickBooks, Stripe, Slack, and more"
    ],
    idealFor:
      "Companies looking to unify disconnected systems, automate cross-platform workflows, and get more value from their existing tech stack.",
    phrase:
      "Bridge the gap between hardware and software — seamless integrations that work for you."
  },
  {
    icon: CogIcon,
    title: "Custom Software & System Enhancements",
    description:
      "When off-the-shelf solutions fall short, we build exactly what your business needs. From data migrations to advanced workflows, our custom systems are built to scale and designed around your goals.",
    features: [
      "Data migration between platforms",
      "Email and SMS alert systems",
      "Online payment and shopping cart integration",
      "Custom document workflows",
      "Tailored content management systems (CMS)"
    ],
    idealFor:
      "Organizations with unique challenges or specialized processes that demand flexible, purpose-built software.",
    phrase:
      "No templates. No shortcuts. Just the perfect solution — built for your business."
  }
]

// For Testimonials page: list of testimonials.
export const testimonials = [
  {
    name: "Phillip Gallegos",
    role: "Court Operations Manager, Bernalillo County - Metropolitan Court",
    content: "Software Development played a crucial role in helping us achieve our technical business objectives. They were both professional and affordable and promptly responded to our specific requirements. Their services included automating several court processes, integrating with Tyler Tech's Odyssey case manager, fixing bugs in our current software, and performing a number of data extractions. I strongly recommend Honor Tech LLC to other companies and agencies seeking to build customized programs or supplement their software development teams.",
    rating: 5
  },
  {
    name: "Johnnie Gordon",
    role: "Ankobia Group LLC",
    content: `At Ankobia Group LLC, we pride ourselves on working with exceptional partners, and Honor Tech LLC has proven to be one of the best. As our software development subcontractor for Bexar County's judiciary, Honor Tech delivered innovative solutions that significantly enhanced the County’s operations.\nTheir work on the electronic subpoena request and reset process was a standout achievement. Honor Tech developed a system that not only automated the generation of documents but also seamlessly integrated with other platforms, ensuring a more efficient and reliable workflow.\nAdditionally, Honor Tech played a critical role in building pretrial data entry systems and data visualization tools, which enabled the County to gain better insights into case information. Separately, their advanced notification systems ensured timely communication with all parties, significantly improving both responsiveness and accountability.\nHonor Tech's technical expertise, combined with their ability to collaborate effectively with all stakeholders, has made a meaningful impact on Bexar County’s judiciary. We are proud to have partnered with them and highly recommend their services for any organization looking to improve efficiency through tailored software solutions.`,
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
    icon: PencilLine,
    title: "1. Sign Up",
    description: "Fill out the quick form below"
  },
  {
    icon: Link,
    title: "2. Share Your Link",
    description: "You'll get a unique referral link to send out."
  },
  {
    icon: DollarSign,
    title: "3. You Earn",
    description: "Get paid when your referral signs and pays."
  }
];

// For Referrals page: benefits of the referral program.
export const referralBenefits = {
  forYou: [
    { highlight: "12% commission", rest: " of the signed contract value" },
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
    value: "~$10,000",
    commission: "$500",
    featured: false
  },
  {
    level: "Medium Project",
    value: "$20,000+",
    commission: "$1,000+",
    featured: true
  },
  {
    level: "Large Project",
    value: "$100,000+",
    commission: "$12,000",
    featured: false
  }
];

// For Certifications page: list of company certifications.
export const certifications = [
  {
    title: "D-U-N-S® Number",
    description: "Unique nine-digit identifier assigned to businesses by Dun & Bradstreet (D&B). 119401893",
    icon: Shield,
    status: "Verified"
  },
  {
    title: "SAM.gov Registration & CAGE Code",
    description: "Unique identifier assigned to businesses and organizations doing business with the U.S. federal government.",
    icon: Shield,
    status: "Active"
  },
  {
    title: "SBA Small Business Certification",
    description: "Official recognition from the U.S. Small Business Administration that allows qualifying businesses to compete for federal contracts specifically set aside for small businesses.",
    icon: Shield,
    status: "Active"
  },
  {
    title: "Veteran-Owned Small Business Certification",
    description: "Designation that recognizes businesses majority-owned and controlled by one or more veterans.",
    icon: Shield,
    status: "Pending"
  },
  {
    title: "Colorado Trade Name",
    description: "In Colorado, a trade name, often called a DBA (Doing Business As), is a name that a business or individual uses to operate, which is different from their legal name. Honor Tech LLC.",
    icon: Shield,
    status: "Registered"
  },
  {
    title: "Colorado Vendor Self Service (VSS)",
    description: "Online platform provided by the State of Colorado where vendors can manage their accounts, view and respond to solicitations, and access other relevant information related to doing business with the state.",
    icon: Shield,
    status: "Registered"
  },
  {
    title: "New Hampshire Vendor Registration",
    description: "Registering as a vendor is crucial for businesses looking to sell goods or services to the State of New Hampshire. It allows them to be considered for contracts and ensures they can be paid for their work.",
    icon: Shield,
    status: "Registered"
  },
  {
    title: "New Mexico Vendor Registration",
    description: "Vendor with the state of New Mexico in SHARE. Registering ensures compliance with New Mexico tax laws and allows you to legally operate within the state.",
    icon: Shield,
    status: "Registered"
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
export const referralSources = [
  { value: "Google", label: "Google" },
  { value: "LinkedIn", label: "LinkedIn" },
  { value: "Alignable", label: "Alignable" },
  { value: "WordOfMouth", label: "Word of Mouth" },
  { value: "Other", label: "Other" }
];

// For Contact page: contact information details.
export const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "mimi@honortechllc.com",
    note: "We typically respond within 72 hours"
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Pueblo, CO, United States, Colorado",
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
          creator: "Balázs Kétyi",
          creatorUrl: "https://unsplash.com/@balazsketyi"
        },
        {
          creator: "Simon Kadula",
          creatorUrl: "https://unsplash.com/@simonkadula"
        },
        {
          creator: "Donovan Reeves",
          creatorUrl: "https://unsplash.com/@donovanreeves"
        },
        {
          creator: "Blake Wisz",
          creatorUrl: "https://unsplash.com/@blakewisz"
        },
        {
          creator: "Lukas Blazek",
          creatorUrl: "https://unsplash.com/@goumbik"
        },
        {
          creator: "Tingey Injury Law Firm",
          creatorUrl: "https://unsplash.com/@tingeyinjurylawfirm"
        },
        {
          creator: "James Harrison",
          creatorUrl: "https://unsplash.com/@jstrippa"
        },
        {
          creator: "MaximalFocus",
          creatorUrl: "https://unsplash.com/@maximalfocus"
        },
        {
          creator: "Igor Omilaev",
          creatorUrl: "https://unsplash.com/@omilaev"
        },
        {
          creator: "Zhenyu Luo",
          creatorUrl: "https://unsplash.com/@mrnuclear"
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

export const photographers = [
  {
    name: "Unsplash Contributors",
    description: "Professional photographers who share their work freely",
    specialties: ["Business", "Technology", "Office", "Lifestyle"],
    url: "https://unsplash.com/"
  },
  {
    name: "iStockPhoto Contributors",
    description: "Stock media provider offering a vast library of royalty-free photos",
    specialties: ["Corporate", "Modern", "Clean", "Professional"],
    url: "https://istockphoto.com/"
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