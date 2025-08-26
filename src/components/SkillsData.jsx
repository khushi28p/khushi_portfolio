import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiVercel,
  SiNetlify,
  SiPostman,
  SiFigma,
  SiCplusplus,
  SiTypescript,
  SiIntellijidea,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

const skillsData = [
  { name: "React", icon: <FaReact />, category: "Frontend" },
  { name: "JavaScript", icon: <FaJs />, category: "Languages" },
  { name: "TypeScript", icon: <SiTypescript />, category: "Languages" },
  { name: "Node.js", icon: <FaNodeJs />, category: "Backend" },
  { name: "Express.js", icon: <SiVercel />, category: "Backend" },
  { name: "HTML5", icon: <FaHtml5 />, category: "Frontend" },
  { name: "CSS3", icon: <FaCss3Alt />, category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "Frontend" },
  { name: "C/C++", icon: <SiCplusplus />, category: "Languages" },
  { name: "Python", icon: <FaPython />, category: "Languages" },
  { name: "Java", icon: <FaJava />, category: "Languages" },
  { name: "MySQL", icon: <FaDatabase />, category: "Databases" },
  { name: "PostgreSQL", icon: <SiPostgresql />, category: "Databases" },
  { name: "MongoDB", icon: <SiMongodb />, category: "Databases" },
  { name: "Firebase", icon: <IoLogoFirebase />, category: "Databases" },
  { name: "Git", icon: <FaGitAlt />, category: "Tools & Deployment" },
  { name: "Postman", icon: <SiPostman />, category: "Tools & Deployment" },
  { name: "Figma", icon: <SiFigma />, category: "Tools & Deployment" },
  { name: "Vercel", icon: <SiVercel />, category: "Tools & Deployment" },
  { name: "Netlify", icon: <SiNetlify />, category: "Tools & Deployment" },
  { name: "IntelliJ", icon: <SiIntellijidea />, category: "Tools & Deployment" },
];

export const allCategories = [
  "All",
  "Languages",
  "Frontend",
  "Backend",
  "Databases",
  "Tools & Deployment",
];
export default skillsData;
