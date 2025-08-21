import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ThemeSwitcher from "./components/ThemeSwitcher";

const App = () => {
  return (
    <ThemeProvider>
      <div className="overflow-y-auto scrollbar-hidden">
        <Navbar />
        <HeroSection />
        <AboutMe />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
};

export default App;
