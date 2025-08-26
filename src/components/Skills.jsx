import React, { useState } from "react";
import skillsData, { allCategories } from "./SkillsData";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.2,    
  });

  const filteredSkills = skillsData.filter((skill) =>
    activeCategory === "All" ? true : skill.category === activeCategory
  );

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="skills"
      className="py-20 px-8 md:px-20 lg:px-40 bg-primary text-primary"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <h2 className="text-5xl md:text-6xl font-bold font-display text-center mb-12 text-[var(--portfolio-accent)]">
        Skills
      </h2>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-12"
        variants={itemVariants}
      >
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 font-body font-semibold transition duration-300 relative ${
              activeCategory === category
                ? "text-[var(--portfolio-accent)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[var(--portfolio-accent)]"
                : "text-[var(--portfolio-text)] hover:text-[var(--portfolio-accent)]"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex gap-2 items-center justify-center p-6 border-2 border-[var(--portfolio-accent)] text-[var(--portfolio-accent)] rounded-lg font-body font-semibold hover:bg-[var(--portfolio-accent)] hover:text-[var(--portfolio-text-on-accent)] transition duration-300 shadow-md cursor-pointer transform hover:-translate-y-2 hover:scale-105"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            variants={itemVariants}
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <span className="text-lg text-center">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;