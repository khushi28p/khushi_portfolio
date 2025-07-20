  import React from "react";
  import Example from "./components/Particle";
  import Navbar from "./components/Navbar";
  import HeroSection from "./components/HeroSection";
  import AboutMe from "./components/About";
  import Experience from "./components/Experience";
  import Projects from "./components/Projects";
  import Skills from "./components/Skills";
  import Contact from "./components/Contact";

  const App = () => {
    return (
      <div className="overflow-y-auto scrollbar-hidden">
        <Navbar />
        <HeroSection />
        <AboutMe />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    );
  };

  export default App;
