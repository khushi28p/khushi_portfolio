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
  SiIntellijidea,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

const skillsData = [
  { name: "React", icon: <FaReact />, category: "Frontend" },
  { name: "JavaScript", icon: <FaJs />, category: "Languages" },
  { name: "Node.js", icon: <FaNodeJs />, category: "Backend" },
  { name: "Express.js", icon: <SiVercel />, category: "Backend" },
  { name: "HTML5", icon: <FaHtml5 />, category: "Frontend" },
  { name: "CSS3", icon: <FaCss3Alt />, category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "Styling" },
  { name: "Python", icon: <FaPython />, category: "Languages" },
  { name: "Java", icon: <FaJava />, category: "Languages" },
  { name: "MySQL", icon: <FaDatabase />, category: "Databases" },
  { name: "PostgreSQL", icon: <SiPostgresql />, category: "Databases" },
  { name: "MongoDB", icon: <SiMongodb />, category: "Databases" },
  { name: "Firebase", icon: <IoLogoFirebase />, category: "Databases" },
  { name: "Git", icon: <FaGitAlt />, category: "Tools" },
  { name: "Postman", icon: <SiPostman />, category: "Tools" },
  { name: "Figma", icon: <SiFigma />, category: "Tools" },
  { name: "Vercel", icon: <SiVercel />, category: "Deployment" },
  { name: "Netlify", icon: <SiNetlify />, category: "Deployment" },
  { name: "IntelliJ", icon: <SiIntellijidea />, category: "Tools" },
];

export const allCategories = [
  "All",
  "Languages",
  "Frontend",
  "Backend",
  "Databases",
  "Styling",
  "Tools",
  "Deployment",
];
export default skillsData;
