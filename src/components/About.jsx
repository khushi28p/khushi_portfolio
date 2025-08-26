import React from "react";
import { BiSolidSchool } from "react-icons/bi";

const About = () => {
  const mernStack = [
    {
      name: "MongoDB",
      initial: "M",
      logo: "/logos/mongodb.png",
      description: "A NoSQL database for flexible data storage.",
    },
    {
      name: "Express.js",
      initial: "E",
      logo: "/logos/expressjs.png",
      description: "A back-end web application framework for Node.js.",
    },
    {
      name: "React",
      initial: "R",
      logo: "/logos/react.png",
      description: "A JavaScript library for building user interfaces.",
    },
    {
      name: "Node.js",
      initial: "N",
      logo: "/logos/nodejs.png",
      description:
        "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 px-8 md:px-20 lg:px-40 bg-primary text-primary"
    >
      <h2 className="text-4xl md:text-5xl font-bold font-display text-center mb-12 text-[var(--portfolio-accent)]">
        About Me
      </h2>
      
      {/* MERN Stack Icons Section */}
      <div className="flex flex-wrap justify-center items-end gap-8 md:gap-12 lg:gap-24 mb-12">
        {mernStack.map((item, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center cursor-pointer transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative w-20 h-20 md:w-24 md:h-24 p-2 md:p-4 rounded-full flex justify-center items-center transition-all duration-300 group-hover:bg-gray-100 group-hover:shadow-lg">
              <img
                src={item.logo}
                alt={`${item.name} Logo`}
                className="w-full h-full object-contain filter-accent-svg transition-transform duration-200 group-hover:scale-110"
              />
            </div>
            <span className="text-4xl md:text-5xl font-display font-bold text-secondary group-hover:text-[var(--portfolio-accent)] transition-colors mt-2">
              {item.initial}
            </span>
            <div className="absolute bottom-full mb-2 hidden group-hover:block bg-card text-primary px-3 py-1 rounded-md shadow-lg whitespace-nowrap text-sm font-body">
              {item.name}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 md:gap-12 mt-8">
        <div className="lg:w-1/2 text-center lg:text-left animate-fade-in-up">
          <p className="text-lg md:text-xl leading-relaxed mb-6 font-body text-[var(--portfolio-secondary)]">
            Hi, I'm <span className="text-[var(--portfolio-accent)] font-bold">Khushi Parmar</span>, a passionate Full Stack Developer specializing in the <span className="text-[var(--portfolio-accent)] font-bold">MERN stack</span>. My expertise lies in crafting clean, efficient, and user-friendly web applications from concept to deployment. I thrive on solving complex challenges and am always eager to learn new technologies to deliver impactful, seamless digital experiences.
          </p>
        </div>

        <div className="lg:w-1/2 h-full flex flex-col justify-center items-center gap-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm md:text-xl border border-gray-300 px-4 md:px-6 py-3 md:py-4 rounded-xl text-[var(--portfolio-accent)] shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg text-center">
            <BiSolidSchool size={30} md:size={50} /> 
            <span className="text-sm md:text-lg font-body">
              IPS Academy Institute of Engineering and Science, Indore (2022-26)
            </span>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-4 w-full">
            <div className="flex flex-col text-4xl md:text-5xl text-center px-4 py-2 md:px-8 md:py-4 rounded-xl bg-card text-secondary shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
              9.5
              <span className="font-bold text-xl md:text-2xl mt-1">CGPA</span>
            </div>
            <div className="flex flex-col text-4xl md:text-5xl text-center px-4 py-2 md:px-8 md:py-4 rounded-xl bg-card text-secondary shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
              10+
              <span className="font-bold text-xl md:text-2xl mt-1">Projects built</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;