import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Skills from "../components/Skills";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Education from "../components/Education";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
    });
  }, []);

  return (
    <div>
      {/* Hero section */}
      <div data-aos="fade-up">
        <Hero />
      </div>

      {/* About Me */}
      <div data-aos="fade-up">
        <AboutMe />
      </div>

      {/* Skills */}
      <div data-aos="fade-up">
        <Skills />
      </div>

      {/* Projects */}
      <div data-aos="fade-up">
        <Projects />
      </div>

      {/* Education */}
      <div data-aos="fade-up">
        <Education />
      </div>

      {/* Contact */}
      <div data-aos="fade-up">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
