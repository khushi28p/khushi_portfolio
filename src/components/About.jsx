import React from "react";

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
      className="py-20 px-8 md:px-20 lg:px-40 bg-primary text-primary"
    >
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
            , a passionate Full Stack Developer with a strong focus on crafting
            responsive and intuitive web applications. My core expertise lies in
            the{" "}
            <span className="text-[var(--portfolio-accent)] font-semibold">
              MERN stack
            </span>
            .
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-6 font-body">
            I thrive on turning innovative ideas into reality through clean,
            efficient code and am continuously expanding my skill set. I love to
            solve complex challenges and contribute to impactful projects.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-8 font-body">
            My journey into full-stack development has equipped me with the
            skills to handle both front-end user interfaces and robust back-end
            systems, ensuring seamless functionality from concept to deployment.
          </p>
        </div>

        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center pt-8 lg:pt-0">
          <h3 className="text-3xl font-bold font-display mb-10 text-[var(--portfolio-accent)]">
            My Core Stack
          </h3>
          <div className="flex flex-wrap justify-center items-end gap-8 md:gap-12">
            {mernStack.map((item, index) => (
              <div
                key={index}
                className="relative group flex flex-col items-center mern-tech-item"
              >
                <img
                  src={item.logo}
                  alt={`${item.name} Logo`}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain mb-2 filter-accent-svg transition-transform duration-200 group-hover:scale-110"
                />

                <span className="text-5xl md:text-6xl font-display font-bold text-secondary group-hover:text-[var(--portfolio-accent)] transition-colors">
                  {item.initial}
                </span>

                <div className="absolute bottom-full mb-2 hidden group-hover:block bg-card text-primary px-3 py-1 rounded-md shadow-lg whitespace-nowrap text-sm font-body">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
