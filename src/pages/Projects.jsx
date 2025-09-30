import React, { useState } from "react";
import { FaReact, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiNodedotjs } from "react-icons/si";

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
    images: [project1Img, project2Img, project3Img],
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
    images: [projectImg11, projectImg112, projectImg113],
    links: {
      demo: "https://hobby-hub-88270.web.app/",
      github: "https://github.com/zingrin/hobby-hub-client-side",
    },
  },
];

const techIcons = {
  React: <FaReact />,
  Express: <SiExpress />,
  MongoDB: <SiMongodb />,
  TailwindCSS: <SiTailwindcss />,
  "Node.js": <SiNodedotjs />,
};

const Projects = () => {
  const [currentSlides, setCurrentSlides] = useState(
    projectsData.map(() => 0)
  );

  const handleNext = (idx) => {
    setCurrentSlides((prev) =>
      prev.map((slide, i) =>
        i === idx ? (slide + 1) % projectsData[i].images.length : slide
      )
    );
  };

  const handlePrev = (idx) => {
    setCurrentSlides((prev) =>
      prev.map((slide, i) =>
        i === idx
          ? (slide - 1 + projectsData[i].images.length) %
            projectsData[i].images.length
          : slide
      )
    );
  };

  return (
    <div className="min-h-screen w-full bg-white px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {projectsData.map((proj, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center bg-white border-2 border-cyan-500 rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            {/* Image Slider */}
            <div className="md:w-1/2 relative">
              <img
                src={proj.images[currentSlides[idx]]}
                alt={proj.title}
                className="w-full h-80 md:h-full object-cover"
              />
              {proj.images.length > 1 && (
                <>
                  <button
                    onClick={() => handlePrev(idx)}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full"
                  >
                    &lt;
                  </button>
                  <button
                    onClick={() => handleNext(idx)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full"
                  >
                    &gt;
                  </button>
                </>
              )}
            </div>

            {/* Details */}
            <div className="md:w-1/2 p-8 space-y-4">
              <h2 className="text-3xl font-bold text-cyan-600">{proj.title}</h2>
              <p className="text-gray-700">{proj.description}</p>

              <h4 className="text-lg font-semibold text-purple-600">
                Challenges I Faced:
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {proj.challenges.map((ch, i) => (
                  <li key={i}>{ch}</li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex space-x-4 text-3xl text-gray-600 mt-2">
                {proj.tech.map((tech, i) => (
                  <span key={i}>{techIcons[tech] || null}</span>
                ))}
              </div>

              {/* Links */}
              <div className="flex space-x-6 mt-4 text-3xl text-cyan-600">
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
  );
};

export default Projects;
