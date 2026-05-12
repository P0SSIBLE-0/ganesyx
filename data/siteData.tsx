import { TrendingDown, MousePointerClick, Ghost, HeartCrack, Snail, Search, Target, Zap, Rocket, TrendingUp, DollarSign, Users, BarChart3, Code, Terminal, Cpu, ShieldCheck, Globe, Smartphone, Database, Layout, ShoppingBag, Landmark, Stethoscope, GraduationCap, Building2, ArrowUpRight, LayoutDashboard } from "lucide-react";

// Data exports for Ganesyx website

export const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Works", href: "#works" },
  { label: "Process", href: "#process" },
  { label: "Performance", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const heroData = {
  badge: "🛠️ Trusted by 100+ brands",
  headline: "We build Websites that scale.",
  subheading: (
    <>
      From high-performance <strong style={{ color: 'var(--brand)' }}>WordPress</strong>, <strong style={{ color: 'var(--brand)' }}>Shopify</strong> platforms to custom <strong style={{ color: 'var(--brand)' }}>full-stack applications</strong>, <strong style={{ color: 'var(--brand)' }}>CMS</strong> & more — Ganesyx builds robust systems that drive business logic, user engagement, and <strong style={{ color: 'var(--brand)' }}>quality results</strong>.
    </>
  ),
  primaryCta: "Start a Project",
  secondaryCta: "See Our Impact",
};

export const brandsData = [
  { name: "NJ", logo: "/brands/Frame 12.png" },
  { name: "Yasashvi", logo: "/brands/Frame 13.png" },
  { name: "CollegeTime", logo: "/brands/Frame 14.png" },
  { name: "GK Pro", logo: "/brands/Frame 15.png" },
  { name: "Invent Elevator", logo: "/brands/Frame 16.png" },
  { name: "Miva", logo: "/brands/Frame 18.png" },
  { name: "MKC", logo: "/brands/Frame 19.png" },
  { name: "Nutribay", logo: "/brands/Frame 20.png" },
  { name: "Petal Art", logo: "/brands/Frame 21.png" },
  { name: "NJ", logo: "/brands/Frame 12.png" },
  { name: "Yasashvi", logo: "/brands/Frame 22.png" },
  { name: "CollegeTime", logo: "/brands/Frame 23.png" },
  { name: "GK Pro", logo: "/brands/Frame 26.png" },
  { name: "Invent Elevator", logo: "/brands/Frame 25.png" },
  { name: "Kautilya", logo: "/brands/Frame 26.png" },
  { name: "Miva", logo: "/brands/Frame 12.png" },
  { name: "MKC", logo: "/brands/Frame 25.png" },
  { name: "Nutribay", logo: "/brands/Frame 20.png" },
  { name: "Petal Art", logo: "/brands/Frame 21.png" },
];

export const statsData = [
  { value: 150, suffix: "+", label: "Applications Launched" },
  { value: 99.9, suffix: "%", label: "System Uptime" },
  { value: 100, suffix: "+", label: "Enterprise Clients" },
  { value: 6, suffix: "+", label: "Years of Experience" },
];

export const whyChooseUsData = {
  label: "Why Ganesyx",
  title: "Building Better for the Modern Web",
  description: "At Ganesyx, we turn complex requirements into seamless digital experiences. We build high-performance web applications and scalable with an uncompromising focus on clean code and robust security.",
  items: [
    {
      value: "100%",
      label: "MODERN TECH STACK",
      description: "We use the latest frameworks like Next.js, TypeScript, and Node.js to ensure your application is fast, secure, and maintainable."
    },
    {
      value: "2x",
      label: "FASTER LOAD TIMES",
      description: "Our performance-first development approach ensures lightning-fast load times, improving SEO and user satisfaction."
    },
    {
      value: "Zero",
      label: "TECHNICAL DEBT",
      description: "We prioritize clean architecture and rigorous testing to ensure your codebase remains scalable and easy to evolve."
    }
  ]
};

export const problemsData = [
  {
    icon: <Snail size={24} />,
    title: "Slow Performance",
    description:
      "Legacy code and bloated architectures slowing you down? We optimize for speed and efficiency.",
    image: "/down-arrow.png",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Security Vulnerabilities",
    description:
      "Don't let your data be a liability. We build with security-first principles to protect your business.",
    image: "/security.png",
  },
  {
    icon: <Cpu size={24} />,
    title: "Unscalable Systems",
    description:
      "Struggling with growth? We architect systems that scale horizontally and handle traffic spikes with ease.",
    image: "/growth.png",
  },
  {
    icon: <MousePointerClick size={24} />,
    title: "Poor User Experience",
    description:
      "Complex flows driving users away? We build intuitive, high-performance interfaces that convert.",
    image: "/experience.png",
  },
  {
    icon: <Terminal size={24} />,
    title: "Technical Debt",
    description:
      "Tired of patching old bugs? We refactor and modernize your stack for long-term stability.",
    image: "/system.png",
  },
];

export const worksData = [
  {
    title: "Nutribray | India’s Trusted Infant Formula & Baby Food Brand",
    category: "E-commerce Development",
    description:
      "Nutribray, a renowned infant formula and baby food manufacturer in India, provides premium nourishment for your child's healthy development.",
    metrics: ["₹50L+ Sales Growth", "CRO-Focused Shopify", "Improved UX/Trust"],
    url: "https://nutribray.com/",
    image: "/works/braymil.png",
  },
  {
    title: "Invent Elevator | Premium Elevator Solutions & Services",
    category: "Corporate Web App",
    description:
      "Invent Elevator provides high-quality elevator solutions. We optimized their lead handling and digital sales operations through a streamlined web structure.",
    metrics: ["+60% Lead Efficiency", "+ Inquiry Flow", "Digital Sales Ops"],
    url: "#",
    image: "/works/invent.png",
  },
  {
    title: "GKPro Academy — CA, IELTS, PTE & Professional Skill Courses",
    category: "EdTech Platform",
    description: "GKPro Academy offers professional courses and skill development. We integrated automated administration and scaled their onboarding capacity.",
    metrics: ["5,000+ Onboarding", "100+ Admin Auto.", "-70% Manual Work"],
    url: "https://gkproacademy.com",
    image: "/works/gk-pro.png",
  },
  {
    title: "Best Kidney Hospital in Pitampura | Delhi Madhuban Kidney Care",
    category: "Medical SEO & Web",
    description:
      "Madhuban Kidney Care is the Best Kidney Hospital in Delhi NCR. We boosted their visibility and inquiry flow through specialized medical SEO.",
    metrics: ["3X Patient Inquiries", "Improved Local SEO", "Trust-Driven Design"],
    url: "https://madhubankidneycare.com",
    image: "/works/mkc.png",
  },
];

export const websiteTypesData = [
  { label: "Shopify Stores", logo: "/logos/shopify.svg" },
  { label: "WordPress Sites", logo: "/logos/wordpress.svg" },
  { label: "LMS Systems", icon: <GraduationCap size={18} /> },
  { label: "Next.js Apps", logo: "/logos/nextjs_icon_dark.svg" },
  { label: "Custom Dashboards", icon: <BarChart3 size={18} /> },
  { label: "Headless CMS", icon: <Database size={18} /> },
  { label: "Integretion Systems", icon: <Globe size={18} /> },
  { label: "CRM Systems", icon: <Building2 size={18} /> },
  { label: "E-commerce", icon: <ShoppingBag size={18} /> },
  { label: "Landing Pages", icon: <Rocket size={18} /> },
  { label: "Portfolio Sites", icon: <LayoutDashboard size={18} /> },
];

export const industriesData = {
  title: "Industries We Transform",
  description: "We specialize in building high-performance digital products across diverse sectors, tailoring our technical expertise to solve industry-specific challenges.",
  items: [
    {
      icon: <ShoppingBag size={24} />,
      name: "E-commerce",
      description: "Scalable storefronts and headless commerce engines designed for high conversion and global reach.",
      color: "#ff6b6b"
    },
    {
      icon: <Landmark size={24} />,
      name: "Fintech",
      description: "Secure, compliant financial platforms with real-time data processing and robust API integrations.",
      color: "#4ecdc4"
    },
    {
      icon: <Stethoscope size={24} />,
      name: "Healthcare",
      description: "HIPAA-compliant patient portals and health management systems with a focus on data privacy.",
      color: "#45b7d1"
    },
    {
      icon: <GraduationCap size={24} />,
      name: "EdTech",
      description: "Interactive learning management systems and educational tools that engage students and educators.",
      color: "#f7d794"
    },
    {
      icon: <Building2 size={24} />,
      name: "Real Estate",
      description: "Property management portals and dynamic listing platforms with advanced search and filtering.",
      color: "#786fa6"
    },
    {
      icon: <Smartphone size={24} />,
      name: "Industry Specific Applications",
      description: "Custom web applications tailored to the specific needs of your industry.",
      color: "#f8a5c2"
    }
  ]
};

export const processData = [
  {
    step: "01",
    title: "Strategy & Planning",
    description:
      "We plan the technical foundation, selecting the right stack and defining the system architecture for long-term success.",
    icon: <Search size={20} />,
  },
  {
    step: "02",
    title: "Agile Development",
    description:
      "We build in iterative sprints, ensuring constant feedback and rapid delivery of functional, high-quality code.",
    icon: <Code size={20} />,
  },
  {
    step: "03",
    title: "Rigorous Testing",
    description:
      "Automated and manual testing ensure every feature is bug-free, secure, and performs under load.",
    icon: <ShieldCheck size={20} />,
  },
  {
    step: "04",
    title: "Deployment & Scale",
    description:
      "We handle CI/CD pipelines and cloud orchestration to ensure a smooth launch and seamless scaling.",
    icon: <Rocket size={20} />,
  },
];

export const resultsData = [
  {
    metric: "45%",
    label: "Performance Boost",
    description:
      "Reduced TTI (Time to Interactive) by 45% through code splitting and asset optimization.",
    icon: <Zap size={24} />,
  },
  {
    metric: "100%",
    label: "Uptime Guaranteed",
    description:
      "Built serverless and containerized solutions with auto-scaling to ensure 100% availability.",
    icon: <Globe size={24} />,
  },
  {
    metric: "60%",
    label: "Dev Cycle Reduction",
    description:
      "Implemented CI/CD and modular architecture, reducing development time for new features by 60%.",
    icon: <Terminal size={24} />,
  },
  {
    metric: "Zero",
    label: "Security Breaches",
    description:
      "Maintained a flawless security record through regular audits and best-in-class encryption standards.",
    icon: <ShieldCheck size={24} />,
  },
];

export const testimonialsData = [
  {
    name: "Rohan Mehra",
    role: "Founder, Delhi Business Hub",
    content:
      "The Ganesyx team is one of the best digital marketing agency partners we have worked with. Their SEO, social media marketing, and performance marketing services delivered excellent business growth.",
    rating: 5,
    avatar: "/avatar/avatar-rohan.png",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Head, Urban Growth Solutions",
    content:
      "We were looking for a reliable website developer company and Ganesyx created a professional, user-friendly website that improved our online presence and conversions.",
    rating: 5,
    avatar: "/avatar/avatar-priya-sharma.png",
  },
  {
    name: "Ananya Kapoor",
    role: "Marketing Manager, BrightEdge Solutions",
    content:
      "Their expertise as a marketing agency for small business helped us generate quality leads through local SEO, PPC advertising, and content marketing.",
    rating: 5,
    avatar: "/avatar/avatar-ananya-kapoor.png",
  },
  {
    name: "Arjun Singhania",
    role: "CEO, Nexa Retail",
    content:
      "Ganesyx handled our online marketing business campaigns professionally. Their performance marketing strategies significantly increased our traffic and customer engagement.",
    rating: 5,
    avatar: "/avatar/avatar-arjun-singhania.png",
  },
  {
    name: "Ishita Verma",
    role: "Founder, Urban Hive Media",
    content:
      "Their team transformed our digital marketing website with modern design, fast performance, and effective SEO optimization for better search rankings.",
    rating: 5,
    avatar: "/avatar/avatar-ishita-verma.png",
  },
  {
    name: "Vikram Malhotra",
    role: "Director, Visionary Tech Labs",
    content:
      "If you are searching for the best SEO company with strong expertise in website development and Google Ads management, Ganesyx is an excellent choice.",
    rating: 5,
    avatar: "/avatar/avatar-vikram-malhotra.png",
  },
  {
    name: "Sneha Gupta",
    role: "Co-Founder, Elevate Commerce",
    content:
      "The professionalism and technical expertise of the Ganesyx team in performance marketing, social media management, website development, and digital branding exceeded our expectations.",
    rating: 5,
    avatar: "/avatar/avatar-sneha-gupta.png",
  },
];

export const contactInfo = {
  email: "info.ganesyx@gmail.com",
  phone: "+919205466534",
  location: "Third Floor, E-52, near Santom Hospital, Prashant Vihar, Sector 14, Rohini, Delhi, 110085, India",
};

export const footerData = {
  description:
    "We build high-performance digital products and custom full-stack applications. Partner with us to build the future.",
  quickLinks: [
    { label: "Solutions", href: "#solutions" },
    { label: "Portfolio", href: "#works" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    "Full-Stack Development",
    "Enterprise Architecture",
    "Web Application Development",
    "API Design & Integration",
    "Mobile App Development",
    "Cloud Infrastructure (DevOps)",
  ],
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/ganesyx.digitals/" },
    { label: "Facebook", href: "https://www.facebook.com/ganesyx/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/ganesyx/" },
  ],
};

export const faqData = {
  title: "Frequently Asked Questions",
  description: "Everything you need to know about our services, process, and billing.",
  categories: [
    {
      id: "general",
      label: "General",
      faqs: [
        {
          question: "Do you offer post-launch support?",
          answer: "Absolutely. We offer ongoing maintenance and retainer packages to ensure your application remains secure, up-to-date, and performs optimally as you scale and add new features."
        },
        {
          question: "Can you rescue an existing codebase?",
          answer: "Yes. We frequently take over legacy systems or stalled projects. We begin with a comprehensive technical audit to identify technical debt, security vulnerabilities, and architectural bottlenecks before formulating a modernization strategy."
        },
        {
          question: "Where are you located?",
          answer: "We are based in Rohini, Delhi, India, but we work with clients globally. Our team is fully equipped for remote collaboration and uses modern communication tools to stay in sync across all time zones."
        },
        {
          question: "How do I get started with Ganesyx?",
          answer: "The easiest way is to click the 'Start a Project' button or use the contact form. We'll schedule a discovery call to discuss your goals, technical requirements, and how we can best support your vision."
        }
      ]
    },
    {
      id: "services",
      label: "Services",
      faqs: [
        {
          question: "What technologiess do you specialize in?",
          answer: "We specialize in modern JavaScript/TypeScript ecosystems. For the frontend, we primarily use Next.js and React. For the backend, we leverage Node.js, Express, or serverless architectures on AWS and Vercel. We also have deep expertise in headless e-commerce (Shopify) and custom solutions."
        },
        {
          question: "Do you build mobile applications?",
          answer: "Yes, we build cross-platform mobile applications using React Native. This allows us to share business logic between your web and mobile platforms, reducing development time and costs while maintaining native performance."
        },
        {
          question: "Do you handle UI/UX design?",
          answer: "While our core focus is development, we have a dedicated design team that creates high-fidelity prototypes and user-centric interfaces. We ensure that every product we build is as intuitive as it is technically sound."
        },
        {
          question: "Can you help with SEO and performance?",
          answer: "Performance is at the heart of our development. We build lightning-fast applications that score high on Core Web Vitals, which directly translates to better SEO rankings and user retention."
        }
      ]
    },
    {
      id: "process",
      label: "Process",
      faqs: [
        {
          question: "How long does a typical project take?",
          answer: "Project timelines vary based on scope and complexity. A standard marketing website or MVP might take 4-6 weeks, while a complex enterprise application can take 2-4 months. We provide detailed timelines during our planning phase."
        },
        {
          question: "How do we communicate during development?",
          answer: "We use Slack for daily communication, Jira for task tracking, and Zoom for weekly syncs. You'll have a dedicated project manager and direct access to the development team."
        },
        {
          question: "Do you use Agile methodology?",
          answer: "Yes, we work in 2-week sprints. At the end of each sprint, we demonstrate functional progress, allowing for constant feedback and adjustments to ensure the final product matches your expectations."
        },
        {
          question: "Will I own the source code?",
          answer: "Yes, once the project is completed and final payment is made, you own 100% of the intellectual property and source code. We'll hand over all repositories and documentation."
        }
      ]
    },
    {
      id: "pricing",
      label: "Pricing",
      faqs: [
        {
          question: "How do you handle project pricing?",
          answer: "We offer both fixed-price contracts for well-defined projects and time-and-materials arrangements for ongoing development. After our initial consultation, we provide a transparent, detailed proposal outlining all costs."
        },
        {
          question: "What are your payment terms?",
          answer: "Typically, we require a 50% upfront deposit to begin work, with the remaining 50% due upon project completion or based on agreed-upon milestones for larger projects."
        },
        {
          question: "Are there any hidden costs?",
          answer: "No. Our proposals are comprehensive and include development, testing, and initial deployment. We'll also help you estimate external costs like hosting (AWS/Vercel) or third-party APIs."
        },
        {
          question: "Do you offer discounts for long-term partnerships?",
          answer: "Yes, we offer reduced rates for long-term retainer agreements (6+ months) where we provide dedicated development resources for your ongoing needs."
        }
      ]
    }

  ]
};

export const comparisonData = {
  title: "Why Ganesyx Beats the Rest",
  othersLabel: "Traditional Agencies",
  usLabel: "Ganesyx",
  features: [
    {
      name: "Technical Depth",
      others: "Surface-level UI focus",
      us: "Robust & scalable solutions"
    },
    {
      name: "Development Speed",
      others: "Slow, rigid waterfall models",
      us: "Rapid, agile 2-week sprint cycles"
    },
    {
      name: "Code Quality",
      others: "Messy, unscalable technical debt",
      us: "Clean, modular, test-driven code"
    },
    {
      name: "Performance",
      others: "Bloated, slow-loading sites",
      us: "Lightning-fast Core Web Vitals"
    },
    {
      name: "Support",
      others: "Ticket-based slow responses",
      us: "Direct engineer access & Slack"
    },
    {
      name: "Ownership",
      others: "Proprietary platform lock-in",
      us: "100% source code & IP ownership"
    },
    {
      name: "Security",
      others: "Standard patches & plugins",
      us: "Enterprise security-first principles"
    }
  ]
};

