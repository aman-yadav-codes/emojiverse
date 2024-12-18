import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed dark:bg-black w-full top-0 z-40 border-b-4 border-red-400 dark:border-white bg-customLightB rounded-bl-3xl rounded-br-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex justify-center items-center">
            <Link
              to="/"
              className="relative text-black dark:text-white font-bold text-2xl group"
            >
              <span className="text-2xl">😄</span>EmojiVerse
              <span className="absolute bottom-0 left-1 w-full h-[2px] bg-black dark:bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-90"></span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="relative group text-black dark:text-white dark:hover:text-black dark:hover:bg-white px-3 py-2 rounded-md text-xl font-semibold font-poppins hover:bg-customLightA"
            >
              Home
              <span className="absolute bottom-1 left-0 w-full h-[5px] bg-black text-black scale-x-0 transition-transform duration-300 group-hover:scale-x-90"></span>
            </Link>
            <Link
              to="/About"
              className="relative group text-black px-3 py-2 rounded-md text-xl dark:text-white dark:hover:text-black dark:hover:bg-white font-semibold font-poppins hover:bg-customLightA"
            >
              About
              <span className="absolute bottom-1 left-0 w-full h-[5px] bg-black text-black scale-x-0 transition-transform duration-300 group-hover:scale-x-90"></span>

            </Link>
            <Link
              to="/Usage"
              className="relative group text-black px-3 py-2 rounded-md text-xl dark:text-white dark:hover:text-black dark:hover:bg-white font-semibold font-poppins hover:bg-customLightA"
            >
              Usage
              <span className="absolute bottom-1 left-0 w-full h-[5px] bg-black text-black scale-x-0 transition-transform duration-300 group-hover:scale-x-90"></span>
            </Link>
            <Link
              to="/Github"
              className="relative group flex justify-center items-center gap-2 text-black px-3 py-2 rounded-md text-xl dark:text-white dark:hover:text-black dark:hover:bg-white font-semibold font-poppins hover:bg-customLightA"
            >
              <FaGithub /> Github
              <span className="absolute bottom-1 left-0 w-full h-[5px] bg-black text-black scale-x-0 transition-transform duration-300 group-hover:scale-x-90"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black dark:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link
          to="/"
          className="block dark:hover:text-black dark:text-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-customLightA"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/About"
          className="block dark:hover:text-black dark:text-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-customLightA"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to="/Usage"
          className="block dark:hover:text-black dark:text-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-customLightA"
          onClick={() => setIsOpen(false)}
        >
          Usage
        </Link>
        <Link
          to="/Github"
          className="block dark:hover:text-black dark:text-white rounded-bl-3xl rounded-br-3xl text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-customLightA"
          onClick={() => setIsOpen(false)}
        >
          Github
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
