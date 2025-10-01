import React, { useState, useEffect } from "react";
import { FaReact, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";

// Project images
import project1Img from "../assets/project1Img.png";
import project2Img from "../assets/project2Img.png";
import project3Img from "../assets/project31Img.png";

import projectImg11 from "../assets/projectImg11.png";
import projectImg112 from "../assets/projectImg112.png";
import projectImg113 from "../assets/projectImg113.png";

import project31Img from "../assets/project31Img.png";
import project32Img from "../assets/project32Img.png";
import project33Img from "../assets/project33Img.png";

const projectsData = [
  {
    title: "SpeakStack",
    description:
      "SpeakStack is a real-time language learning and conversation platform that connects learners with native speakers. It features live chat, vocabulary tracking, and AI-powered suggestions to help users improve their speaking skills effectively.",
    challenges: [
      "Integrating WebSocket for real-time messaging",
      "Building an AI-powered suggestion system",
      "Ensuring responsive design across all devices",
    ],
    tech: ["React", "Express", "MongoDB", "Node.js"],
    images: [project31Img, project32Img, project33Img],
    links: {
      demo: "https://speakstack-a1b8a.web.app/",
      github: "https://github.com/zingrin/speakstack-client",
    },
  },
  {
    title: "SummerBox",
    description:
      "SummerBox is a full-stack room and item-sharing platform featuring search, filtering, protected routes using Firebase, and a dynamic dashboard with nested routes.",
    challenges: [
      "Implementing search, sort, and filter functionality",
      "Handling protected routes using Firebase",
      "Creating a dynamic dashboard with nested routes",
    ],
    tech: ["React", "TailwindCSS", "Express", "MongoDB"],
    images: [projectImg11, projectImg112, projectImg113],
    links: {
      demo: "https://summer-box.web.app/",
      github: "https://github.com/zingrin/Summer-Box",
    },
  },
  {
    title: "HubbyHub",
    description:
      "HubbyHub is a community-driven platform where hobby enthusiasts can showcase their creations, join groups, and connect with like-minded people. It supports posting, commenting, and exploring trending hobbies worldwide.",
    challenges: [
      "Implementing secure authentication and authorization",
      "Creating a dynamic dashboard with hobby category filters",
      "Building real-time update functionality for posts and comments",
    ],
    tech: ["React", "TailwindCSS", "Express", "MongoDB"],
    images: [project1Img, project2Img, project3Img],
    links: {
      demo: "https://hobby-hub-88270.web.app/",
      github: "https://github.com/zingrin/hobby-hub-client-side",
    },
  },
];

// const techIcons = {
//   React: <FaReact />,
//   Express: <SiExpress />,
//   MongoDB: <SiMongodb />,
//   TailwindCSS: <SiTailwindcss />,
//   "Node.js": <SiNodedotjs />,
// };

const Projects = () => {
  const [currentSlides, setCurrentSlides] = useState(
    projectsData.map(() => 0)
  );

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlides((prev) =>
        prev.map((slide, i) => (slide + 1) % projectsData[i].images.length)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white px-2 sm:px-4 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-600">
            My Projects
          </h2>
          <p className="text-gray-700 text-sm sm:text-base mt-2">
            Explore some of the applications I've built
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-10">
          {projectsData.map((proj, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-stretch bg-white border border-cyan-400 rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg transform transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Image Carousel */}
              <div className="md:w-1/2 relative h-64 sm:h-80 md:h-auto flex items-center justify-center bg-white">
                <img
                  src={proj.images[currentSlides[idx]]}
                  alt={proj.title}
                  className="max-h-full w-full object-contain"
                />
              </div>

              {/* Details */}
              <div className="md:w-1/2 flex flex-col justify-center p-4 sm:p-8 space-y-3 sm:space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-cyan-600">
                  {proj.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  {proj.description}
                </p>

                <h4 className="text-md sm:text-lg font-semibold text-purple-600">
                  Challenges I Faced:
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
                  {proj.challenges.map((ch, i) => (
                    <li key={i}>{ch}</li>
                  ))}
                </ul>

                {/* Tech Stack */}
                {/* <div className="flex space-x-3 sm:space-x-4 text-lg sm:text-xl text-gray-600 mt-2">
                  {proj.tech.map((tech, i) => (
                    <span key={i}>{techIcons[tech] || null}</span>
                  ))}
                </div> */}

                {/* Links */}
                <div className="flex space-x-4 sm:space-x-6 mt-3 sm:mt-4 text-lg sm:text-xl text-cyan-600">
                  <a
                    href={proj.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                  <a
                    href={proj.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
