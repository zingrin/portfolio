import React from "react";

const Education = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-4xl font-bold text-cyan-600">Education</h2>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-semibold mb-2">
            Bachelor of Business Studies (BBS) - 2nd Semester
          </h3>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Institution:</span> Bandarban University
          </p>
          <p className="text-gray-700 mb-2">
            This program provides me with a strong foundation in <span className="font-semibold">business management, accounting, and economics</span>.
          </p>
          <p className="text-gray-700 mb-2">
            I am passionate about applying theoretical knowledge to <span className="font-semibold">real-world challenges</span>, developing <span className="font-semibold">critical thinking skills</span>, and preparing myself for a <span className="font-semibold">successful career in the corporate sector</span>.
          </p>
          <p className="text-gray-700">
            The college environment promotes both <span className="font-semibold">academic excellence</span> and <span className="font-semibold">personal growth</span>, encouraging me to take advantage of every learning opportunity and shape my professional journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
