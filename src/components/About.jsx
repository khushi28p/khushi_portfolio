import React from "react";

const About = () => {
  const skills = {
    languages: ["C/C++", "Java", "Python", "SQL", "JavaScript", "TypeScript"],
    frameworks: [
      "React",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux",
    ],
    coreConcepts: [
      "Data Structures",
      "Algorithms",
      "Object-Oriented Programming",
      "Database Management System",
    ],
    databases: ["MySQL", "PostgreSQL", "MongoDB"],
    toolsPlatforms: [
      "Git",
      "Postman",
      "Figma",
      "Google Cloud Platform",
      "VS Code",
      "IntelliJ",
      "Vercel",
      "Netlify",
    ],
  };

  const timelineEvents = [
    {
      date: "Sep. 2022 - May 2026 (Expected)",
      title: "Bachelor of Technology in Computer Science",
      institution: "IPS Academy Institute of Engineering & Science, Indore",
      description:
        "Achieved a CGPA: 9.62 (till date). Strong foundation in Computer Science principles.",
      icon: "graduation-cap", 
    },
    {
      date: "April 2025 - June 2025",
      title: "Full Stack Web Development Intern",
      company: "Zidio Development",
      description:
        "Collaborated in a six-member agile team to develop two full-stack web applications using the MERN stack. Contributed significantly to frontend (React.js) and assisted with backend (APIs, data flow). Delivered projects within one-month sprints. ",
      icon: "code", 
    },
    {
      date: "May 2024 - June 2024",
      title: "Java Developer Intern",
      company: "Internship Studio",
      description:
        "Completed structured training in Core Java, OOP. Developed a GUI-based Pizza Billing Application using Java Swing and MySQL for robust database connectivity. Gained hands-on experience in application design, coding, debugging, and database integration. ",
      icon: "java", 
    },
    {
      date: "2024",
      title: "Finalist, Smart India Hackathon 2024",
      company: "National Competition",
      description:
        "Achieved finalist standing in India's largest product development competition, demonstrating strong problem-solving and rapid prototyping skills. ",
      icon: "trophy", 
    },
    {
      date: "Certifications",
      title:
        "Postman API Fundamentals Student Expert & MongoDB Developer's Toolkit Course",
      company: "Postman / GeeksforGeeks",
      description:
        "Obtained certifications enhancing API knowledge and database development skills. ",
      icon: "certificate",
    },
  ];

  return (
    <section id="about" className="py-20 px-8 md:px-20 lg:px-40 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <h2 className="text-5xl md:text-6xl font-bold font-display text-center mb-12 text-[var(--portfolio-accent)]">
        About Me
      </h2>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-xl md:text-2xl leading-relaxed mb-6 font-body">
            Hi, I'm{" "}
            <span className="text-[var(--portfolio-accent)] font-semibold">
              Khushi Parmar
            </span>
            , a passionate Full Stack Developer specializing in crafting
            responsive and intuitive web applications. My expertise lies in the
            MERN stack (MongoDB, Express.js, React, Node.js), enabling me to
            contribute significantly to both frontend and backend development.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-6 font-body">
            I thrive on turning ideas into reality through clean, efficient code
            and am continuously expanding my skill set. My problem-solving
            abilities were recognized when I was a finalist at the Smart India
            Hackathon 2024.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-8 font-body">
            I have practical experience from my internships at Zidio Development
            and Internship Studio, where I worked on diverse projects from MERN
            stack applications to GUI-based Java applications with MySQL.
          </p>

          <h3 className="text-3xl font-bold font-display mb-4 text-[var(--portfolio-accent)] text-center lg:text-left">
            My Top Skills
          </h3>
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
            {[
              "React",
              "Node.js",
              "MongoDB",
              "Express.js",
              "Java",
              "Python",
              "SQL",
              "JavaScript",
              "TypeScript",
              "Tailwind CSS",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full text-sm font-body font-medium shadow-md cursor-default skill-chip"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 w-full relative pl-8 lg:pl-12">
          <div className="absolute left-4 lg:left-6 top-0 bottom-0 w-1 rounded-full about-timeline-line"></div>

          {timelineEvents.map((event, index) => (
            <div key={index} className="mb-10 flex items-start w-full relative">
              <div className="absolute -left-1.5 lg:-left-2.5 top-2 w-6 h-6 rounded-full z-10 border-4 animate-pulse-once about-timeline-dot"></div>

              <div className="ml-8 lg:ml-12 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02] bg-card">
                <p className="text-sm mb-1 font-body text-secondary"> 
                  {event.date}
                </p>
                <h4 className="text-2xl font-semibold font-display mb-2 text-[var(--portfolio-accent)]">
                  {event.title}
                </h4>
                <p className="text-lg font-body text-tertiary"> 
                  {event.company || event.institution}
                </p>
                <p className="text-base mt-2 font-body text-tertiary">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;