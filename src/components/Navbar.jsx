import React from "react";

const Navbar = () => {
  const navItems = [
    { name: "Home" , href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-20 navbar-dynamic-bg border border-line rounded-full px-3 py-2 shadow-md">
      <div className="hidden sm:flex px-4 flex-wrap justify-center items-center gap-x-6 md:gap-x-2 gap-y-2">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-[var(--portfolio-accent)] text-sm font-medium px-4 py-2 rounded-md hover-nav-item transition duration-300 ease-in-out"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;