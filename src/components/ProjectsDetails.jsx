import { useParams, Link } from "react-router";
import { projectsData } from "../data/ProjectsData";
import { useState } from "react";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  const [activeImage, setActiveImage] = useState(0);

  if (!project) {
    return (
      <div className="py-32 text-center text-gray-500">
        Project not found
      </div>
    );
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#f8fafc] to-[#eef2ff]">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* ================= BACK TO HOME ================= */}
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium
            text-gray-600 hover:text-blue-600 transition"
          >
            ← Back to Home
          </Link>
        </div>

        {/* ================= HERO ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-black text-white">
              Completed
            </span>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>

            <p className="text-gray-600 mb-6 max-w-xl">
              {project.shortDescription}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mb-6">
              {project.links?.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition"
                >
                  Live Demo
                </a>
              )}

              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-lg border border-gray-300 hover:border-black transition"
                >
                  View Code
                </a>
              )}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src={project.images[activeImage]}
              alt={project.title}
              className="rounded-2xl shadow-xl mb-4"
            />

            {/* Thumbnails */}
            <div className="flex gap-3">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`h-16 w-24 overflow-hidden rounded-lg border
                    ${
                      activeImage === i
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                >
                  <img
                    src={img}
                    alt="preview"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ================= OVERVIEW ================= */}
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">
            Project <span className="text-blue-500">Overview</span>
          </h2>

          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {project.description}
          </p>
        </div>

        {/* ================= CHALLENGES ================= */}
        {project.challenges?.length > 0 && (
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">
              Key <span className="text-blue-500">Challenges</span>
            </h2>

            <ul className="space-y-3 text-gray-600 list-disc list-inside">
              {project.challenges.map((challenge, i) => (
                <li key={i}>{challenge}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetails;
