import React from "react";

const AboutMe = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          Hello! I’m{" "}
          <span className="font-semibold text-cyan-600">Zingrin Moi Bawm</span>
         I'm a passionate and creative front-end and backend web
          developer, currently starting my professional journey. As a fresher, I
          spend most of my time experimenting with new ideas, designing
          intuitive interfaces, and building web experiences that bring concepts
          to life.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Beyond coding, I’m an explorer at heart — I enjoy cooking new recipes,
          capturing moments through photography, diving into inspiring books,
          and discovering new places. I believe in lifelong learning, and I’m
          always seeking opportunities to improve my skills and contribute to
          meaningful projects.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Let’s connect and create something extraordinary together!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
