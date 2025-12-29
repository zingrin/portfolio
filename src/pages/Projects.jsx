import { useEffect, useState } from "react";
import { Link } from "react-router";
import { projectsData } from "../data/ProjectsData";

const Projects = () => {
  const [currentSlides, setCurrentSlides] = useState(
    projectsData.map(() => 0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlides((prev) =>
        prev.map(
          (slide, i) => (slide + 1) % projectsData[i].images.length
        )
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#f8fafc] to-[#eef2ff]">
      <div className="max-w-7xl mx-auto space-y-14">

        {/* Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-bold text-gray-900">
            Featured Projects
          </h2>
          <p className="text-gray-600">
            Selected projects with clean UI and real-world use cases
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden
              border border-gray-200 transition-all duration-300
              hover:-translate-y-2 hover:border-cyan-400"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.images[currentSlides[idx]]}
                  alt={project.title}
                  className="w-full h-full object-cover
                  transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-cyan-600">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Learn more */}
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-block pt-2 text-sm font-medium
                  text-cyan-600 hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
