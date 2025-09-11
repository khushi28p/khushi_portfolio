import React, { useState } from "react";
import skillsData, { allCategories } from "./SkillsData";
import { motion, AnimatePresence } from "framer-motion"; 
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
        staggerChildren: 0.1, 
      },
    },
    exit: { 
        opacity: 0, 
        scale: 0.95,
        transition: {
            duration: 0.5,
            ease: "easeIn"
        }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.5 } 
    },
    exit: { 
        opacity: 0, 
        y: -20, 
        transition: { duration: 0.3 } 
    }
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
      >
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 font-body font-semibold transition duration-300 relative ${
              activeCategory === category
                ? "text-[var(--portfolio-accent)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[var(--portfolio-accent)]"
                : "text-secondary hover:text-[var(--portfolio-accent)]"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory} 
          className="flex flex-wrap justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit" 
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              className="relative flex gap-2 items-center justify-center align-center px-4 py-2 border-1 skill-chip text-primary rounded-lg font-body font-semibold hover:text-[var(--portfolio-text-on-accent)] transition duration-300 shadow-md cursor-pointer hover:-translate-y-2 hover:scale-105 hover-glow-accent"
              whileHover={{ rotate: 1.5 }}
              transition={{ duration: 0.2 }}
              variants={itemVariants}
              aria-label={`${skill.name} skill`}
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <span className="text-lg text-center">{skill.name}</span>
              <span className="skill-tooltip">{skill.category}</span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
};

export default Skills;
