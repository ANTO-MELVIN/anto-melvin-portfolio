import { 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  Terminal, 
  Layout, 
  Smartphone,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Users,
  Award,
  Mic,
  MessageCircle
} from 'lucide-react';
import { Project, Experience, SkillCategory, SocialLink, EventItem, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Anto Melvin A",
  role: "Computer Science Engineer",
  tagline: "Building the future with IoT, Gen AI, ML and Fullstack Solutions.",
  location: "Coimbatore, India",
  email: "antomelvin@karunya.edu.in",
  phone: "9487868172",
  about: "Innovative Computer Science student at Karunya Institute of Technology and Sciences. I specialize in bridging the gap between hardware and software, leveraging IoT and Generative AI to solve real-world problems. With a strong track record in hackathons and a passion for leadership, I turn concepts into deployed solutions."
};

// PLACEHOLDERS: Replace these URLs with your actual image URLs
export const PROFILE_IMAGES = {
  hero: "/image/anto1.jpg", // Your main profile picture
  hover: "/image/antomain.jpg", // Hover version of profile picture
  parallax: "/image/portfolio-background.png" // Your background/action shot
};

export const SOCIALS: SocialLink[] = [
  {
    platform: "Email",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=antomelvin@karunya.edu.in",
    icon: Mail,
    text: "antomelvin@karunya.edu.in",
    color: "hover:text-sky-500 hover:border-sky-500"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/antomelvin123/",
    icon: Linkedin,
    text: "antomelvin123",
    color: "hover:text-blue-500 hover:border-blue-500"
  },
  {
    platform: "GitHub",
    url: "https://github.com/ANTO-MELVIN",
    icon: Github,
    text: "ANTO-MELVIN",
    color: "hover:text-slate-200 hover:border-slate-200"
  },
  {
    platform: "WhatsApp",
    url: "https://api.whatsapp.com/send?phone=919487868172&text=hi%20anto%20melvin",
    icon: MessageCircle,
    text: "Chat on WhatsApp",
    color: "hover:text-green-500 hover:border-green-500"
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/a.m_thalapathy?igsh=OWE0MGs0Y2tvZjc3",
    icon: Instagram,
    text: "a.m_thalapathy",
    color: "hover:text-pink-500 hover:border-pink-500"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Core Programming",
    skills: ["Python", "Java", "C++", "Dart"],
    icon: Terminal
  },
  {
    title: "IoT & Hardware",
    skills: ["Arduino", "Raspberry Pi", "Sensors", "Embedded Systems"],
    icon: Cpu
  },
  {
    title: "Web & App Dev",
    skills: ["React", "HTML/CSS/JS", "Flutter", "Tailwind"],
    icon: Layout
  },
  {
    title: "AI & Data",
    skills: ["Machine Learning", "Gen AI", "OpenCV", "MongoDB"],
    icon: Database
  }
];

export const PROJECTS: Project[] = [
  {
    title: "SparkVigil",
    description: "Women's Safety device utilizing IoT for real-time alerts and tracking.",
    category: "IoT",
    tech: ["IoT", "Arduino", "GPS/GSM"],
    status: "Completed"
  },
  {
    title: "ZenAura",
    description: "AI-based student stress detection and management application.",
    category: "AI/ML",
    tech: ["AI", "Flutter", "Python"],
    status: "Completed"
  },
  {
    title: "AlertNet",
    description: "Intelligent fire accident detection and alert system.",
    category: "IoT",
    tech: ["IoT", "Sensors", "Cloud"],
    status: "Completed"
  },
  {
    title: "Buddy",
    description: "AI-powered companion app focused on personalized support and real-time interaction.",
    category: "AI/ML",
    tech: ["Gen AI", "NLP", "Mobile App"],
    status: "Completed"
  },
  {
    title: "Accident Anomaly Detection",
    description: "AIML and OpenCV-based accident detection & alerts system.",
    category: "AI/ML",
    tech: ["OpenCV", "Python", "ML"],
    status: "Ongoing"
  },
  {
    title: "Air Ambulance",
    description: "Emergency dispatch system optimization.",
    category: "Web/App",
    tech: ["Fullstack", "Maps API"],
    status: "Ongoing"
  },
  {
    title: "Ventilated Patient Monitor",
    description: "Eye-tracking-based emotion monitoring for ventilated patients.",
    category: "AI/ML",
    tech: ["Eye-Tracking", "HealthTech"],
    status: "Ongoing"
  }
];

export const HACKATHONS: Project[] = [
  {
    title: "SIH 2025 - Smart Bus Travel",
    description: "Ticket resale & live tracking app companion.",
    category: "Hackathon",
    tech: ["Flutter", "Maps", "Live Tracking"],
    status: "Hackathon"
  },
  {
    title: "Israeli-Indian Hackathon",
    description: "System For Ventilated Patients in Intensive Care.",
    category: "Hackathon",
    tech: ["MedTech", "IoT"],
    status: "Hackathon"
  },
  {
    title: "FLIPR Hackathon",
    description: "Meeting transcripts & automated reminders system.",
    category: "Hackathon",
    tech: ["AI", "Speech-to-Text"],
    status: "Hackathon"
  },
  {
    title: "UYIR Hackathon",
    description: "Road safety solution.",
    category: "Hackathon",
    tech: ["IoT", "Safety"],
    status: "Hackathon"
  }
];

export const EDUCATION = [
  {
    degree: "B.Tech Computer Science and Engineering",
    institution: "Karunya Institute of Technology and Sciences",
    year: "2023 - 2027"
  },
  {
    degree: "CCBP 4.0 Academy Fellow",
    institution: "NextWave",
    year: "2023 - 2027"
  },
  {
    degree: "Higher Secondary",
    institution: "Holy Angel's Matric Hr.sec School",
    year: "2011 - 2023"
  }
];

export const CERTIFICATIONS: Certification[] = [
    {
        title: "Microsoft Certified: Azure Data Fundamentals",
        issuer: "Microsoft",
        year: "2025"
    },
    {
        title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
        issuer: "Oracle",
        year: "2025"
    },
    {
        title: "User Experience Design Fundamentals",
        issuer: "IBM-SkillsBuild",
        year: "2025"
    },
    {
        title: "Introduction to Industry 4.0 and Industrial Internet of Things (IIoT)",
        issuer: "NPTEL Online Certification - IIT Kharagpur",
        year: "2025"
    },
    {
        title: "Cyber Security",
        issuer: "Ediglobe",
        year: "2024"
    },
    {
        title: "Software Development",
        issuer: "Codetech Solutions",
        year: "2025"
    },
    {
        title: "Enterprise Security in Practice",
        issuer: "IBM SkillsBuild",
        year: "2024-5"
    },
    {
        title: "Exploratory Data Analysis (EDA)",
        issuer: "Infosys",
        year: "2025"
    },
    {
        title: "JavaScript Essentials 1",
        issuer: "Cisco",
        year: "2025"
    },
    {
        title: "JavaScript Essentials 2",
        issuer: "Cisco",
        year: "2025"
    },
    {
        title: "CCNA: Switching, Routing, and Wireless Essentials",
        issuer: "Cisco",
        year: "2025"
    },
    {
        title: "CCNA: Introduction to Networks",
        issuer: "Cisco",
        year: "2025"
    }
    
];

export const INTERNSHIPS: Experience[] = [
  {
    role: "Software Development Intern",
    company: "Codetech Solutions",
    period: "2025"
  },
  {
    role: "Cyber Security Intern",
    company: "Ediglobe",
    period: "2024"
  },
  {
    role: "Introduction to Cybersecurity",
    company: "Cisco Virtual",
    period: "2024"
  }
];

export const EVENTS: EventItem[] = [
  {
    title: "IEEE Computer Science Society - VISUAL INTELLIGENCE",
    role: "Program Lead",
    description: "Visual Intelligence: The Rise of AI in Video Creation was a collaborative event organized by the School of Computer Science and Technology, the IEEE Computer Society, and ACM on September 4, 2025. Participants created AI-generated videos based on themes such as “Life and Legacy of Our Beloved Chancellor” and “AI for Humanity – Solving Global Challenges.” The event began with an expert session on prompt engineering and a live demo of AI video workflows. The hands-on competition allowed students to apply their creative and technical knowledge to produce impactful, theme-based videos. It enhanced their understanding of AI-driven multimedia tools and visual storytelling, encouraging innovation and digital creativity.",
    images: [
      "/image/aitoolsworkshop.jpg",
      "/image/aitoolsworkshop3.jpg",
      "/image/aitoolsworkshop4.jpg"
    ]
  },
  {
    title: "IEEE Computer Science Society -  MEDICAL-CAMP ",
    role: "PROGRAM LEAD",
    description: "The Free Medical Camp at Katteri, Coonoor on 14th September 2025, alongside IEEE CS, ACM, the Cultural Heritage Club, and SEESHA Hospital.The camp marked a dual celebration — the 63rd birthday of Dr. Paul Dhinakaran and the 40th year of Karunya Institute of Technology and Sciences. Nearly 86 individuals benefited from general health check-ups, consultations, counseling, and free medicines. What inspired me most was the collaborative spirit — students, faculty, doctors, and community members all coming together to make an impact. This initiative reinforced how technical societies like IEEE can extend beyond innovation, reaching communities with compassion and care.",
    images: [
      "/image/ieeemedicalcamp.jpg",
      "/image/ieeemedicalcamp2.jpg",
      "/image/ieeemedicalcamp3.jpg"
    ]
  },
  {
    title: "IEEE Computer Science Society - Network Quest",
    role: "PROGRAM LEAD",
    description: "Network Quest was an interactive treasure-hunt-style event organized by the IEEE Computer Society to test participants’ analytical and problem-solving skills. Teams of four navigated through various checkpoints by scanning QR codes, each unlocking a challenge such as riddles, logic puzzles, or technical questions. Solving one clue revealed the next location, leading teams closer to the final destination. The event promoted teamwork, quick thinking, and creativity in a fun, gamified setting. Participants enhanced their collaboration, leadership, and communication skills while solving each level’s challenge. The winning team was determined based on both completion time and accuracy.",
    images: [
      "/image/WORKSHOP.jpg",
      "/image/WORKSHOP2.jpg",
      "/image/WORKSHOP4.jpeg"
    ]
  }
];