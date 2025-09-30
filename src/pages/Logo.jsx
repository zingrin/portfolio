import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center space-x-2 cursor-pointer select-none"
    >
      {/* Logo icon */}
      <div className="bg-cyan-600 dark:bg-cyan-400 text-white font-extrabold text-xl w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
        ZB
      </div>
    </Link>
  );
};

export default Logo;