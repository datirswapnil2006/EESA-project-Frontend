// data/members-data.ts

// Define the Member type for better type safety
export type Member = {
  id: string; // Enforce string ID for Next.js routing consistency
  name: string;
  role: string;
  department: string;
  bio: string;
  avatar: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  joinDate: string;
  projects: number;
  achievements: number;
  skills?: string[];
  projects_list?: { name: string; role: string }[];
  achievements_list?: { name: string; count: number }[];
};

// --- Centralized Member List ---
export const allMembers: Member[] = [
  // 1. Swapnil Datir (Full detail profile for the detail page)
  {
    id: "SwapnilDatir",
    name: "Swapnil Datir",
    role: "Project Lead",
    department: "Engineering",
    bio: "Full-stack developer passionate about scalable systems and mentoring junior developers.",
    avatar: "/Swapnil.jpg",
    email: "swapnil@eesa.com",
    linkedin: "linkedin.com/in/swapnil",
    github: "github.com/swapnil",
    location: "San Francisco, CA",
    joinDate: "2022",
    projects: 5,
    achievements: 12,
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker"],
    projects_list: [
      { name: "E-commerce Platform", role: "Lead Developer" },
      { name: "Analytics Dashboard", role: "Full Stack" },
      { name: "Mobile App", role: "Backend Lead" },
    ],
    achievements_list: [
      { name: "Project Completion", count: 5 },
      { name: "Code Reviews", count: 50 },
      { name: "Mentoring", count: 12 },
    ],
  },
  // 2. Michael Chen
  {
    id: "Shantanu",
    name: "Shantanu Chaobitkar",
    role: "Designer",
    department: "Design",
    bio: "UX/UI designer focused on user-centered design",
    avatar: "/Shantanu.jpg",
    email: "shantanu@eesa.com",
    linkedin: "linkedin.com/in/shantanu",
    github: "github.com/shantanu",
    location: "New York, NY",
    joinDate: "2023",
    projects: 3,
    achievements: 8,
    skills: ["Figma", "Sketch", "Prototyping", "User Research"],
    projects_list: [{ name: "Design System V2", role: "Lead Designer" }],
    achievements_list: [{ name: "Design Awards", count: 2 }],
  },
  // 3. Emily Rodriguez (ID changed to string "3")
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Mentor",
    department: "Education",
    bio: "Experienced mentor helping junior developers grow",
    avatar: "/professional-woman-diverse.png",
    email: "emily@eesa.com",
    linkedin: "linkedin.com/in/emily",
    github: "github.com/emily",
    location: "Austin, TX",
    joinDate: "2021",
    projects: 8,
    achievements: 20,
    skills: ["Leadership", "Teaching", "Public Speaking"],
    projects_list: [{ name: "Mentorship Program", role: "Coordinator" }],
    achievements_list: [{ name: "Mentee Success Stories", count: 7 }],
  },
  // 4. David Park (ID changed to string "4")
  {
    id: "4",
    name: "David Park",
    role: "Developer",
    department: "Engineering",
    bio: "Backend specialist with expertise in cloud infrastructure",
    avatar: "/professional-man.jpg",
    email: "david@eesa.com",
    linkedin: "linkedin.com/in/david",
    github: "github.com/david",
    location: "Seattle, WA",
    joinDate: "2023",
    projects: 4,
    achievements: 10,
    skills: ["AWS", "Docker", "Go", "Kubernetes"],
    projects_list: [{ name: "API Gateway Optimization", role: "Backend Lead" }],
    achievements_list: [{ name: "System Stability", count: 99.99 }],
  },
  // 5. Jessica Lee (ID changed to string "5")
  {
    id: "5",
    name: "Jessica Lee",
    role: "Project Lead",
    department: "Engineering",
    bio: "AI/ML specialist driving innovation in our projects",
    avatar: "/professional-woman-diverse.png",
    email: "jessica@eesa.com",
    linkedin: "linkedin.com/in/jessica",
    github: "github.com/jessica",
    location: "Boston, MA",
    joinDate: "2022",
    projects: 6,
    achievements: 15,
    skills: ["Python", "TensorFlow", "PyTorch", "Data Science"],
    projects_list: [{ name: "Recommendation Engine", role: "Lead ML Engineer" }],
    achievements_list: [{ name: "Model Accuracy", count: 0.95 }],
  },
  // 6. Alex Thompson (ID changed to string "6")
  {
    id: "6",
    name: "Alex Thompson",
    role: "Developer",
    department: "Engineering",
    bio: "Frontend developer passionate about modern web technologies",
    avatar: "/professional-man.jpg",
    email: "alex@eesa.com",
    linkedin: "linkedin.com/in/alex",
    github: "github.com/alex",
    location: "Portland, OR",
    joinDate: "2023",
    projects: 3,
    achievements: 7,
    skills: ["React", "Tailwind CSS", "Next.js", "Vue.js"],
    projects_list: [{ name: "Marketing Site Redesign", role: "Frontend Lead" }],
    achievements_list: [{ name: "Performance Score", count: 98 }],
  },
  
  // --- START ADDING YOUR 30+ MEMBERS HERE ---
  // Example New Member 7
  {
    id: "7",
    name: "Sarah Connor",
    role: "Developer",
    department: "Engineering",
    bio: "Specializing in cybersecurity and secure application design.",
    avatar: "/professional-woman-diverse.png",
    email: "sarah.c@eesa.com",
    linkedin: "linkedin.com/in/sarah-connor",
    github: "github.com/sarah-connor",
    location: "Dallas, TX",
    joinDate: "2024",
    projects: 1,
    achievements: 3,
    skills: ["Security", "Penetration Testing", "Auth0"],
    projects_list: [{ name: "Security Audit Tool", role: "Security Engineer" }],
    achievements_list: [{ name: "Vulnerabilities Patched", count: 15 }],
  },
  // ... continue adding the remaining members ...
];

// Dynamically generate roles for the filter
export const allRoles = ["all", ...Array.from(new Set(allMembers.map(m => m.role)))];