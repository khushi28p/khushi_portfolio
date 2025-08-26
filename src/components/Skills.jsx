import React, { useState } from "react";
import skillsData, { allCategories } from "./SkillsData";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skillsData.filter((skill) =>
    activeCategory === "All" ? true : skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-20 px-8 md:px-20 lg:px-40 bg-primary text-primary"
    >
      <h2 className="text-5xl md:text-6xl font-bold font-display text-center mb-12 text-[var(--portfolio-accent)]">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-lg font-body font-semibold transition duration-300 ${
              activeCategory === category
                ? "bg-[var(--portfolio-accent)] text-[var(--portfolio-text-on-accent)] shadow-lg"
                : "bg-transparent text-[var(--portfolio-accent)] border-2 border-[var(--portfolio-accent)] hover:bg-[var(--portfolio-accent)] hover:text-[var(--portfolio-text-on-accent)]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 border-2 border-[var(--portfolio-accent)] text-[var(--portfolio-accent)] rounded-lg font-body font-semibold hover:bg-[var(--portfolio-accent)] hover:text-[var(--portfolio-text-on-accent)] transition duration-300 shadow-md cursor-pointer transform hover:-translate-y-2 hover:scale-105"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <span className="text-lg text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
