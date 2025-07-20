import React from "react";

const Skills = () => {
  const allSkills = [
    "C/C++", "Java", "Python", "SQL", "JavaScript", "TypeScript",
    "React", "Node.js", "HTML5", "CSS3", "Express.js", "RESTful APIs",
    "Tailwind CSS", "Redux", "Data Structures", "Algorithms",
    "Object-Oriented Programming", "Database Management System",
    "MySQL", "PostgreSQL", "MongoDB", "Git", "Postman", "Figma",
    "Google Cloud Platform", "VS Code", "IntelliJ", "Vercel", "Netlify"
  ];

  return (
    <section id="skills" className="py-20 px-8 md:px-20 lg:px-40 bg-black text-white">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 text-[#FFD401]">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {allSkills.map((skill, index) => (
          <span
            key={index}
            className="px-6 py-3 border-2 border-[#FFD401] text-[#FFD401] rounded-lg font-semibold hover:bg-[#FFD401] hover:text-black transition duration-300 shadow-md cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;