import React from "react";
import profileImg from "../assets/profile.png";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 bg-white text-gray-800">
      {/* Left Content */}
      <div className="md:w-1/2 md:pr-12 space-y-6">
        <h2 className="text-lg text-gray-500 font-medium">
          Hello, I’m
        </h2>
        <h1 className="text-2xl md:text-2xl font-bold text-cyan-600 leading-tight">
          Zingrin Moi Bawm
        </h1>
        <h3 className="text-xl md:text-2xl text-gray-700">
          I am a{" "}
          <span className="text-cyan-600 font-semibold">
            <Typewriter
              words={["MERN Stack Developer", "React Developer", "UI Designer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h3>
        <p className="text-gray-700 max-w-lg">
          I am a dedicated Web Designer and React Developer, specializing in
          creating modern, responsive websites and intuitive frontend
          interfaces. I blend creativity with advanced technologies to deliver
          seamless and engaging digital experiences.
        </p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex space-x-6 mt-4 text-2xl"
        >
          {[
            {
              icon: <FaWhatsapp />,
              link: "https://web.whatsapp.com/",
              label: "WhatsApp",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/zingrin-loncheu-902503379/",
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
              className="hover:text-cyan-600 transform hover:-translate-y-1 transition-all duration-300"
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Right Content: Animated Glowing Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="relative w-64 h-64 rounded-full bg-cyan-100 animate-glow-ring">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full rounded-full object-cover border-[6px] border-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
