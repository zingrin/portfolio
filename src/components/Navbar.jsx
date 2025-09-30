import React, { useState } from "react";
import { NavLink } from "react-router";
import Logo from "../pages/Logo";
import resume from "../assets/resume.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "AboutMe", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white text-black shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-semibold text-lg items-center">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `relative group inline-block transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                    isActive ? "text-cyan-500" : "text-black"
                  }`
                }
              >
                {name}
                <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-cyan-500 transition-all duration-300 ease-in-out"></span>
              </NavLink>
            </li>
          ))}

          {/* Resume Button Desktop */}
          <li>
            <a
              href={resume}
              download
              className="btn btn-sm border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white ml-4 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white flex flex-col items-center space-y-4 py-6 font-semibold text-lg shadow-lg">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `relative group inline-block transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                    isActive ? "text-cyan-500" : "text-black"
                  }`
                }
              >
                {name}
                <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-cyan-500 transition-all duration-300 ease-in-out"></span>
              </NavLink>
            </li>
          ))}

          {/* Resume Button Mobile */}
          <li>
            <a
              href={resume}
              download
              onClick={closeMenu}
              className="btn btn-sm border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
