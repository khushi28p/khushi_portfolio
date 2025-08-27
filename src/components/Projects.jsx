import { useState } from "react";
import React from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import { motion, AnimatePresence } from "framer-motion";

const projectData = [
  {
    title: "QuillJot",
    image: "/images/quilljot.png", 
    technologies: [
      "React",
      "ExpressJs",
      "Tailwind CSS",
      "ShadCN",
      "MongoDB",
      "Redux",
      "TipTap RTE",
      "Cloudinary",
    ],
    description: [
      "Developed an interactive blog platform using React, Shadcn UI, and TipTap editor for rich content creation, enhancing user engagement and increasing content creation efficiency by 20%.",
      "Secured platform with JWT-based authentication and managed media assets via Cloudinary, reducing image load times by 15%; enabled efficient CRUD operations with Express.js and MongoDB, supporting over 100 concurrent users.",
      "Implemented Redux for state management, improving performance and scalability for 500+ blog post interactions during testing, and reducing data fetch times by 25%.",
    ],
    github_link: "https://github.com/khushi28p/blog-app",
    project_link: "https://blog-app-orcin-ten.vercel.app/"
  },
  {
    title: "Full-stack Youtube Clone",
    image: "/images/youtube-clone.png", 
    technologies: [
      "React",
      "ExpressJs",
      "Tailwind CSS",
      "Firebase",
      "Redux",
      "Cloudinary",
      "MongoDB",
    ],
    description: [
      "Built a full-featured, responsive YouTube clone with JWT-based authentication, Cloudinary media handling, and MongoDB, supporting seamless video upload and playback across devices for over 1,000 unique videos.",
      "Developed scalable REST APIs using Express.js and integrated Redux for managing app-wide state, reducing UI response time by 30% and handling up to 50 requests per second.",
      "Designed a mobile-friendly UI using React and Tailwind CSS, improving accessibility and user retention on small screens by an estimated 20%, based on responsive design principles.",
    ],
    github_link: "https://github.com/khushi28p/youtube-clone-2",
    project_link: "https://youtube-clone-ten-hazel.vercel.app/"
  },
  {
    title: "Second Brain App",
    image: "/images/youtube-clone.png", 
    technologies: [
      "React",
      "ExpressJs",
      "Tailwind CSS",
      "Firebase",
      "Redux",
      "Cloudinary",
      "MongoDB",
    ],
    description: [
      "Built a full-featured, responsive YouTube clone with JWT-based authentication, Cloudinary media handling, and MongoDB, supporting seamless video upload and playback across devices for over 1,000 unique videos.",
      "Developed scalable REST APIs using Express.js and integrated Redux for managing app-wide state, reducing UI response time by 30% and handling up to 50 requests per second.",
      "Designed a mobile-friendly UI using React and Tailwind CSS, improving accessibility and user retention on small screens by an estimated 20%, based on responsive design principles.",
    ],
    github_link: "https://github.com/khushi28p/second-brain-app",
    project_link: "https://youtube-clone-ten-hazel.vercel.app/"
  },
  {
    title: "AI Application",
    image: "/images/aiapp.png",
    technologies: [
      "React",
      "ExpressJs",
      "Tailwind CSS",
      "Firebase",
      "Redux",
      "Cloudinary",
      "MongoDB",
    ],
    description: [
      "Built a full-featured, responsive YouTube clone with JWT-based authentication, Cloudinary media handling, and MongoDB, supporting seamless video upload and playback across devices for over 1,000 unique videos.",
      "Developed scalable REST APIs using Express.js and integrated Redux for managing app-wide state, reducing UI response time by 30% and handling up to 50 requests per second.",
      "Designed a mobile-friendly UI using React and Tailwind CSS, improving accessibility and user retention on small screens by an estimated 20%, based on responsive design principles.",
    ],
    github_link: "https://github.com/khushi28p/ai-application",
    project_link: "https://ai-application-seven.vercel.app/"
  },
];

const Projects = () => {
  
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-20 px-8 md:px-20 lg:px-40 bg-primary text-primary relative"
    >
      <h2 className="text-5xl md:text-6xl font-bold font-display text-center mb-12 text-[var(--portfolio-accent)]">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="block relative rounded-lg shadow-xl overflow-hidden aspect-video transition-transform duration-300 hover:scale-[1.02] border-2 border-transparent hover:border-[var(--portfolio-accent)] cursor-pointer"
            onClick={() => handleCardClick(project)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            
            <h3 className="absolute bottom-4 left-4 text-3xl font-bold font-display text-white">
              {project.title}
            </h3>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailsModal
            project={selectedProject}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;