import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-8 md:px-20 lg:px-40 bg-black text-white">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 text-[#FFD401]">
        Experience
      </h2>
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row bg-neutral-900 rounded-lg shadow-xl p-8 transition-transform duration-300 hover:scale-[1.02]">
          <div className="md:w-1/4 flex-shrink-0 mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold text-[#FFD401]">Zidio Development</h3>
            <p className="text-gray-400">Full Stack Web Development Intern</p>
            <p className="text-gray-400 text-sm">April 2025 - June 2025</p>
            <p className="text-gray-400 text-sm">Remote</p>
          </div>
          <div className="md:w-3/4 md:pl-8">
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li>Collaborated within a six-member agile team to develop two full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js).</li>
              <li>Contributed significantly to the frontend development using React.js, creating responsive and intuitive user interfaces.</li>
              <li>Assisted with backend development, integrating APIs and managing data flow between the frontend and database.</li>
              <li>Delivered two complete projects within one-month sprints, demonstrating strong teamwork and project execution skills.</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row bg-neutral-900 rounded-lg shadow-xl p-8 transition-transform duration-300 hover:scale-[1.02]">
          <div className="md:w-1/4 flex-shrink-0 mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold text-[#FFD401]">Internship Studio</h3>
            <p className="text-gray-400">Java Developer Intern</p>
            <p className="text-gray-400 text-sm">May 2024 - June 2024</p>
            <p className="text-gray-400 text-sm">Remote</p>
          </div>
          <div className="md:w-3/4 md:pl-8">
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li>Completed a structured training program emphasizing Core Java, Object-Oriented Programming (OOP), and software development principles.</li>
              <li>Developed a GUI-based Pizza Billing Application using Java Swing for the user interface and MySQL for robust database connectivity.</li>
              <li>Gained practical, hands-on experience in application design, efficient coding, systematic debugging, and effective database integration.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;