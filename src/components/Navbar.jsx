import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const navItems = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Experience", href: "experience" },
    { name: "Projects", href: "projects" },
    { name: "Skills", href: "skills" },
    { name: "Contact", href: "contact" },
  ];

  useEffect(() => {
    scrollSpy.update();
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.href));
      const currentScrollPos = window.pageYOffset;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop - 100;
          if (currentScrollPos >= sectionTop) {
            setActiveLink(navItems[i].href);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-20 navbar-dynamic-bg border border-line rounded-full px-3 py-2 shadow-md">
      <div className="hidden sm:flex px-4 flex-wrap justify-center items-center gap-x-6 md:gap-x-2 gap-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
            onSetActive={() => setActiveLink(item.href)}
            className={`text-sm font-medium px-4 py-2 rounded-md hover-nav-item transition duration-300 ease-in-out cursor-pointer ${
              activeLink === item.href
                ? "text-[var(--portfolio-accent)]"
                : "text-[var(--portfolio-text)]"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;