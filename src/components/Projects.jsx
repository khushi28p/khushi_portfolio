import React from "react";

const Projects = () => {
  const projectData = [
    {
      title: "QuillJot",
      technologies: ["React", "ExpressJs", "Tailwind CSS", "ShadCN", "MongoDB", "Redux", "TipTap RTE", "Cloudinary"],
      description: [
        "Developed an interactive blog platform using React, Shadcn UI, and TipTap editor for rich content creation, enhancing user engagement and increasing content creation efficiency by 20%.",
        "Secured platform with JWT-based authentication and managed media assets via Cloudinary, reducing image load times by 15%; enabled efficient CRUD operations with Express.js and MongoDB, supporting over 100 concurrent users.",
        "Implemented Redux for state management, improving performance and scalability for 500+ blog post interactions during testing, and reducing data fetch times by 25%.",
      ],
      link: "https://github.com/khushi28p/QuillJot", 
    },
    {
      title: "Full-stack Youtube Clone",
      technologies: ["React", "ExpressJs", "Tailwind CSS", "Firebase", "Redux", "Cloudinary", "MongoDB"],
      description: [
        "Built a full-featured, responsive YouTube clone with JWT-based authentication, Cloudinary media handling, and MongoDB, supporting seamless video upload and playback across devices for over 1,000 unique videos.",
        "Developed scalable REST APIs using Express.js and integrated Redux for managing app-wide state, reducing UI response time by 30% and handling up to 50 requests per second.",
        "Designed a mobile-friendly UI using React and Tailwind CSS, improving accessibility and user retention on small screens by an estimated 20%, based on responsive design principles.",
      ],
      link: "https://github.com/khushi28p/Youtube-Clone", 
    },
  ];

  return (
    <section id="projects" className="py-20 px-8 md:px-20 lg:px-40 bg-black text-white">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 text-[#FFD401]">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projectData.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group bg-neutral-900 rounded-lg shadow-xl p-8 transition-transform duration-300 hover:scale-[1.02] border border-transparent hover:border-[#FFD401]"
          >
            <h3 className="text-3xl font-bold mb-4 text-[#FFD401] group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 border border-gray-600 text-gray-400 rounded-full text-xs font-medium group-hover:bg-[#FFD401] group-hover:text-black transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
              {project.description.map((desc, descIndex) => (
                <li key={descIndex}>{desc}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;