import React from "react";

const About = () => {
  const skills = {
    languages: ["C/C++", "Java", "Python", "SQL", "JavaScript", "TypeScript"],
    frameworks: ["React", "Node.js", "Express.js", "RESTful APIs", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
    coreConcepts: ["Data Structures", "Algorithms", "Object-Oriented Programming", "Database Management System"],
    databases: ["MySQL", "PostgreSQL", "MongoDB"],
    toolsPlatforms: ["Git", "Postman", "Figma", "Google Cloud Platform", "VS Code", "IntelliJ", "Vercel", "Netlify"],
  };

  return (
    <section id="about" className="py-20 px-8 md:px-20 lg:px-40 bg-black text-white">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 text-[#FFD401]">
        About Me
      </h2>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
        <div className="lg:w-2/3 text-center lg:text-left">
          <p className="text-lg md:text-xl leading-relaxed mb-6 font-sans">
            Hi, I'm <span className="text-[#FFD401] font-semibold">Khushi Parmar</span>, a passionate Full Stack Developer specializing in crafting responsive and intuitive web applications. My expertise lies in the MERN stack (MongoDB, Express.js, React, Node.js), enabling me to contribute significantly to both frontend and backend development.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-6 font-sans">
            I have a proven track record of delivering complete projects within tight deadlines, as demonstrated during my internship at Zidio Development where I collaborated on two full-stack web applications. I'm also experienced in Java, having developed a GUI-based Pizza Billing Application using Java Swing and MySQL database connectivity.
          </p>
          <p className="text-lg md:text-xl leading-relaxed font-sans">
            I am driven by a desire to turn innovative ideas into robust, efficient code and am continuously expanding my skill set. My problem-solving abilities were recognized when I was a finalist at the Smart India Hackathon 2024.
          </p>
        </div>

        <div className="lg:w-1/3 w-full">
          <h3 className="text-3xl font-bold mb-6 text-[#FFD401] text-center lg:text-left">
            My Skillset
          </h3>
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="mb-6">
              <h4 className="text-xl font-semibold mb-3 text-white capitalize">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 border border-[#FFD401] text-[#FFD401] rounded-full text-sm font-medium hover:bg-[#FFD401] hover:text-black transition-colors duration-300 shadow-md cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;