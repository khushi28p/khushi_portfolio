import React from 'react';

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-20 top-0 left-0 bg-transparent py-4 backdrop-filter backdrop-blur-xs">
      <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-[#FFD401] font-medium px-4 py-2 rounded-md
                       hover:bg-gray-100/20 hover:bg-opacity-20 transition duration-300 ease-in-out"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
