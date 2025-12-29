import React from "react";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <GraduationCap className="w-8 h-8 text-cyan-600" />
          <h2 className="text-4xl font-bold text-gray-900">
            Education
          </h2>
        </div>

        {/* Card */}
        <div className="relative rounded-2xl p-8 shadow-lg border border-gray-200">
          
          {/* Accent */}
          <div className="absolute top-0 left-0 h-full w-1 bg-cyan-500 rounded-l-2xl" />

          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Bachelor of Business Studies (BBA)
          </h3>

          <p className="text-sm text-gray-500 mb-4">
            2nd Semester · Bandarban University
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Currently pursuing a Bachelor of Business Studies with a focus on
            <span className="font-semibold text-gray-900">
              {" "}business management, accounting, and economics
            </span>.
            This academic journey is strengthening my understanding of how
            organizations operate and make strategic decisions.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            I actively seek opportunities to apply theoretical knowledge to
            <span className="font-semibold text-gray-900">
              {" "}real-world business challenges
            </span>, while developing
            <span className="font-semibold text-gray-900">
              {" "}critical thinking, communication, and problem-solving skills
            </span>.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The university environment encourages
            <span className="font-semibold text-gray-900">
              {" "}academic excellence
            </span> and
            <span className="font-semibold text-gray-900">
              {" "}personal growth
            </span>, helping me prepare for a successful
            professional career in both corporate and entrepreneurial settings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
