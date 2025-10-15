import React from "react";

const Skills = () => {
  const skills = [
    {
      title: "Frontend",
      items: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Tailwind", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      ],
      icon: "💻",
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      ],
      icon: "🖥️",
    },
    {
      title: "Databases",
      items: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "SQLite3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
      ],
      icon: "🗄️",
    },
    {
      title: "Tools",
      items: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Canva", icon: "https://cdn.worldvectorlogo.com/logos/canva-1.svg" },
        { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
      ],
      icon: "🛠️",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-cyan-500">My Skills</h2>
      <p className="mb-12 text-gray-600">Technologies and tools I work with</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="card bg-white border border-cyan-100 shadow-lg rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-cyan-200 cursor-pointer"
          >
            <div className="card-body items-center">
              <h3 className="text-xl font-semibold text-cyan-600 mb-4 flex items-center gap-2">
                {skill.icon} {skill.title}
              </h3>
              <ul className="grid grid-cols-3 gap-4">
                {skill.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex flex-col items-center justify-center p-2 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition"
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-8 h-8 mb-1"
                    />
                    <span className="text-xs text-gray-700">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
