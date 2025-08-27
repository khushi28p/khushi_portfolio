import React from "react";
import { motion } from "framer-motion";

const ProjectDetailsModal = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4  bg-opacity-80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-primary text-primary p-8 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide relative transform scale-95 md:scale-100"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--portfolio-accent)] text-4xl font-light hover:text-white transition"
        >
          &times;
        </button>
        <div className="w-full h-64 mb-6 rounded-lg overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-4xl font-bold font-display text-[var(--portfolio-accent)] mb-4">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 border border-[var(--portfolio-accent)] text-[var(--portfolio-accent)] rounded-full text-xs font-medium font-body"
            >
              {tech}
            </span>
          ))}
        </div>
        <ul className="list-disc list-inside space-y-2 text-lg text-tertiary">
          {project.description.map((desc, descIndex) => (
            <li key={descIndex}>{desc}</li>
          ))}
        </ul>
        <div className="flex gap-4 mt-6 text-center">
            <a
            href={project.project_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-[var(--portfolio-accent)] text-[var(--portfolio-accent)] font-semibold rounded-lg shadow-md hover:scale-105 transition"
          >
            View Live Project
          </a>
          <a
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[var(--portfolio-accent)] text-[var(--portfolio-text-on-accent)] font-semibold rounded-lg shadow-md hover:scale-105 transition"
          >
            View on GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetailsModal;