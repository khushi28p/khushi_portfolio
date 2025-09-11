import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const experienceData = [
    {
      date: "April 2025 - June 2025",
      title: "Full Stack Web Development Intern",
      company: "Zidio Development",
      location: "Remote",
      description: [
        "Collaborated within a six-member agile team to develop two full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
        "Contributed significantly to the frontend development using React.js, creating responsive and intuitive user interfaces.",
        "Assisted with backend development, integrating APIs and managing data flow between the frontend and database.",
        "Delivered two complete projects within one-month sprints, demonstrating strong teamwork and project execution skills.",
      ],
    },
    {
      date: "May 2024 - June 2024",
      title: "Java Developer Intern",
      company: "Internship Studio",
      location: "Remote",
      description: [
        "Completed a structured training program emphasizing Core Java, Object-Oriented Programming (OOP), and software development principles.",
        "Developed a GUI-based Pizza Billing Application using Java Swing for the user interface and MySQL for robust database connectivity.",
        "Gained practical, hands-on experience in application design, efficient coding, systematic debugging, and effective database integration.",
      ],
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="experience"
      className="py-20 px-8 md:px-20 lg:px-40 bg-[var(--bg-primary)] text-[var(--text-primary)]"
      ref={ref}
    >
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 text-[var(--portfolio-accent)]">
        Experience
      </h2>
      <div className="max-w-3xl mx-auto">
        <motion.ol
          className="relative border-s-2 border-[var(--portfolio-accent)]"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {experienceData.map((item, index) => (
            <motion.li
              key={index}
              className="mb-10 ms-4 rounded-lg p-4 transition-colors duration-300 hover:bg-[var(--portfolio-accent)]/5"
              variants={itemVariants}
            >
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-[var(--bg-primary)] bg-[var(--portfolio-accent)]"></div>
              <time className="mb-1 text-sm font-normal leading-none text-tertiary">
                {item.date}
              </time>
              <h3 className="text-xl font-semibold text-[var(--portfolio-accent)] mt-1">
                {item.company}
                <span className="text-base text-[var(--portfolio-accent)]/70 block md:inline md:ml-2 font-normal">
                  - {item.title}
                </span>
              </h3>
              <p className="text-sm font-normal text-tertiary mb-2">
                {item.location}
              </p>
              <ul className="list-disc list-inside space-y-2 text-base font-normal text-tertiary">
                {item.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
};

export default Experience;