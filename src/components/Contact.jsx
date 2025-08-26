import React, { useState } from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "cbd91b74-ed38-459e-926e-59021ad53839"); 
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent! 🎉");
        event.target.reset();
      } else {
        console.error("Error:", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setResult("Failed to send message.");
    }

    setTimeout(() => {
      setResult("");
    }, 5000);
  };

  return (
    <section 
      id="contact" 
      className="relative py-20 px-8 md:px-20 lg:px-40 bg-primary text-primary text-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="animated-rect rect-1 bg-[var(--portfolio-accent)] opacity-95"></div>
        <div className="animated-rect rect-2 bg-[var(--portfolio-accent)] opacity-45"></div>
        <div className="animated-rect rect-3 bg-[var(--portfolio-accent)] opacity-80"></div>
        <div className="animated-rect rect-4 bg-[var(--portfolio-accent)] opacity-60"></div>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold font-display mb-12 text-[var(--portfolio-accent)]">
          Get In Touch
        </h2>
        {/* Rest of your content */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-20 max-w-7xl mx-auto">
          {/* ... (Your left-hand side content) */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-in-up">
            <p className="text-xl md:text-2xl mb-8 font-body font-medium">
              I'm currently seeking new opportunities. Whether you have a question or just want to say hi, feel free to reach out.
            </p>
            <div className="flex justify-center lg:justify-start space-x-8 mt-4 w-full">
              <a
                href="mailto:kparmar2855@gmail.com"
                className="text-secondary hover:text-[var(--portfolio-accent)] transition-colors duration-300 contact-icon-glow"
                aria-label="Email Khushi Parmar"
              >
                <FaEnvelope className="w-12 h-12" />
              </a>
              <a
                href="https://linkedin.com/in/khushi28parmar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-[var(--portfolio-accent)] transition-colors duration-300 contact-icon-glow"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn className="w-12 h-12" />
              </a>
              <a
                href="https://github.com/khushi28p"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-[var(--portfolio-accent)] transition-colors duration-300 contact-icon-glow"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-12 h-12" />
              </a>
            </div>
          </div>
          {/* ... (Your right-hand side content) */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0 animate-fade-in-up delay-200">
            <form className="max-w-xl mx-auto space-y-6" onSubmit={onSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg border-2 border-[var(--portfolio-border)] font-body form-input placeholder-text-color bg-transparent focus:outline-none focus:border-[var(--portfolio-accent)] focus:ring-1 focus:ring-[var(--portfolio-accent)] transition duration-300"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg border-2 border-[var(--portfolio-border)] font-body form-input placeholder-text-color bg-transparent focus:outline-none focus:border-[var(--portfolio-accent)] focus:ring-1 focus:ring-[var(--portfolio-accent)] transition duration-300"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                className="w-full p-4 rounded-lg border-2 border-[var(--portfolio-border)] font-body form-input placeholder-text-color bg-transparent focus:outline-none focus:border-[var(--portfolio-accent)] focus:ring-1 focus:ring-[var(--portfolio-accent)] transition duration-300"
                required
              ></textarea>
              <button
                type="submit"
                className="px-8 py-4 bg-[var(--portfolio-accent)] text-[var(--portfolio-text-on-accent)] font-bold font-display rounded-lg hover:brightness-110 transition duration-300 shadow-lg hover:shadow-xl w-full"
              >
                Send Message
              </button>
              <p className={`text-center mt-4 text-[var(--portfolio-accent)] transition-opacity duration-500 ${result ? 'opacity-100' : 'opacity-0'}`}>{result}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;