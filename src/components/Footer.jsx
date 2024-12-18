import React from "react";
import { NavLink } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black rounded-tl-3xl rounded-tr-3xl border-t-8 border-red-500 dark:border-white  bottom-0 w-full text-white py-8 mt-12 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between text-center sm:text-left">
          <div>
            <p className="uppercase text-gray-400 text-xs">Year Founded</p>
            <h2 className="text-3xl font-bold">2024</h2>
          </div>
          <div>
            <p className="uppercase text-gray-400 text-xs">Location</p>
            <h2 className="text-3xl font-bold">Varanasi, India</h2>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between gap-8 text-center sm:text-left">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Get in touch</h3>
            <p className="text-sm">amanyadavcodes@gmail.com</p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <div className="flex justify-center gap-1">
              <a
                href="https://www.linkedin.com/in/aman-yadav-174029290"
                target="_blank"
                className="text-gray-400 flex justify-center items-center gap-1 text-sm hover:text-gray-300 transition"
              >
                <BsLinkedin />
                LinkedIn
              </a>{" "}
              <div className="bg-gray-700  w-[1px]"></div>
              <br />
              <a
                href="https://github.com/aman-yadav-codes"
                target="_blank"
                className="text-gray-400 flex justify-center items-center gap-1 text-sm hover:text-gray-300 transition"
              >
                <FaGithub />
                Github
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-2 ">Design By </h3>
            <p className="text-sm relative overflow-hidden rounded-lg px-2  transition-all duration-300 ease-in-out group">
              <a
                href="https://github.com/aman-yadav-codes"
                className="relative z-10 "
              >
                Aman Yadav
              </a>
              <span className="absolute inset-0 bg-red-600  transition-all transform scale-x-0 group-hover:scale-x-100 origin-center h-full"></span>
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-center items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-all hover:px-3 hover:py-1 hover:bg-white hover:rounded-full hover:text-black duration-300 ease-in-out ${
                isActive
                  ? "font-bold bg-white text-black px-3 py-1 rounded-full hover:bg-gray-200"
                  : "text-white hover:text-gray-300"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              `transition-all duration-300 hover:px-3 hover:py-1 hover:bg-white hover:rounded-full hover:text-black ease-in-out ${
                isActive
                  ? "font-bold bg-white text-black px-3 py-1 rounded-full hover:bg-gray-200"
                  : "text-white hover:text-gray-300"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/Usage"
            className={({ isActive }) =>
              `transition-all hover:px-3 hover:py-1 hover:bg-white hover:rounded-full hover:text-black duration-300 ease-in-out ${
                isActive
                  ? "font-bold bg-white text-black px-3 py-1 rounded-full hover:bg-gray-200"
                  : "text-white hover:text-gray-300"
              }`
            }
          >
            Usage
          </NavLink>
          <NavLink
            to="/Github"
            className={({ isActive }) =>
              `transition-all hover:px-3 hover:py-1 hover:bg-white hover:rounded-full hover:text-black duration-300 ease-in-out ${
                isActive
                  ? "font-bold bg-white text-black px-3 py-1 rounded-full hover:bg-gray-200"
                  : "text-white hover:text-gray-300"
              }`
            }
          >
            Github
          </NavLink>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} EmojiVerse. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
