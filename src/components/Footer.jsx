import React from "react";

const Footer = () => {
  return (
    <footer className="pb-6 px-8 bg-primary text-center">
      <p className="text-sm font-body text-secondary">
        &copy; {new Date().getFullYear()} Khushi Parmar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;