import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-6 flex items-center justify-between py-6">
      <div className="font-bold text-2xl text-white px-2">
        <h1>Portfolio</h1>
      </div>
      <div className="flex flex-shrink-0 gap-4 text-2xl px-5 items-center justify-center text-white">
        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/in/tabhishek07"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 z-1"
        >
          <CiLinkedin />
        </a>

        {/* GitHub Link */}
        <a
          href="https://github.com/tabhishek07"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <FaGithub />
        </a>

        {/* Twitter (X) Link */}
        <a
          href="https://x.com/tabhishek__?t=lN3_nCAZcuMm4tRuG2nGzw&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <FaXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
