import UFONexusLogo from "../../images/theufonexus_logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import ReportUFOButton from "../buttons/ReportUFOButton";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 px-4 lg:flex justify-between relative">
      <div className="flex gap-2">
        <Link to="/">
          <img
            src={UFONexusLogo}
            className="h-12 lg:ml-2 lg:h-16 rounded-full drop-shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </Link>

        {isOpen ? (
          <FaTimes
            onClick={() => setIsOpen(!isOpen)}
            className="text-white h-10 cursor-pointer lg:hidden"
          />
        ) : (
          <FaBars
            onClick={() => setIsOpen(!isOpen)}
            className="text-white h-10 cursor-pointer lg:hidden fixed right-0 mr-4"
          />
        )}
        <h1 className="lg:inline-block relative">
          <Link
            to="/"
            className="text-white relative top-4 w-fit text-lg lg:text-2xl font-bold transition-all duration-300 hover-text-shadow"
            style={{ zIndex: 10 }}
          >
            The UFO Nexus
          </Link>
        </h1>
      </div>

      <div
        className={`fixed lg:mr-12 lg:static right-0 h-full w-48 lg:w-auto bg-gray-800 overflow-auto lg:overflow-visible
    transform transition-transform duration-500 ease-in-out lg:translate-x-0
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="text-center lg:mt-5 lg:flex lg:items-center">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white lg:mr-4 hover-text-shadow bg-gray-800 hover:border-spacing-1 drop-shadow-none p-1 rounded transform transition duration-500 hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-white lg:mr-4 hover-text-shadow bg-gray-800 hover:border-spacing-1 drop-shadow-none p-1 rounded transform transition duration-500 hover:scale-105"
          >
            About
          </Link>
          <Link
            to="/store"
            className="block mt-4 lg:inline-block lg:mt-0 text-white lg:mr-4 hover-text-shadow bg-gray-800 hover:border-spacing-1 drop-shadow-none p-1 rounded transform transition duration-500 hover:scale-105"
          >
            Shop
          </Link>
          <Link
            to="/blog"
            className="block mt-4 lg:inline-block lg:mt-0 text-white lg:mr-4 hover-text-shadow bg-gray-800 hover:border-spacing-1 drop-shadow-none p-1 rounded transform transition duration-500 hover:scale-105"
          >
            Blog
          </Link>
          <Link
            to="/testimonials"
            className="block mt-4 lg:inline-block lg:mt-0 text-white lg:mr-4 hover-text-shadow bg-gray-800 hover:border-spacing-1 drop-shadow-none p-1 rounded transform transition duration-500 hover:scale-105"
          >
            Testimonials
          </Link>
          <ReportUFOButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
