import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 text-center py-6 px-4">
      <div className="flex justify-center space-x-6 mb-4 text-2xl">
        {[
          
          {
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/zingrin",
            label: "LinkedIn",
          },
          {
            icon: <FaGithub />,
            link: "https://github.com/zingrin",
            label: "GitHub",
          },
        ].map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transform hover:-translate-y-1 transition-all duration-300"
            aria-label={item.label}
          >
            {item.icon}
          </a>
        ))}
      </div>

      <p className="text-sm">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-cyan-600 font-semibold">ZingrinDev</span>. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
