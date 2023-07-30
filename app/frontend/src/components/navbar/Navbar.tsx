import UFOhubLogo from "../../assets/images/ufohub_alien_icon.png";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import ReportUFOButton from "../buttons/ReportUFOButton";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 lg:py-2 px-4 lg:flex justify-between relative">
      <div className="flex items-center justify-between">
        <img
          src={UFOhubLogo}
          className="h-8 lg:ml-2 lg:h-12 rounded-full"
          alt="UFOHub Alien Icon"
        />
        {isOpen ? (
          <FaTimes
            onClick={() => setIsOpen(!isOpen)}
            className="text-white h-10 cursor-pointer lg:hidden"
          />
        ) : (
          <FaBars
            onClick={() => setIsOpen(!isOpen)}
            className="text-white h-10 cursor-pointer lg:hidden"
          />
        )}
      </div>

      <h1 className="absolute lg:bottom-2 bottom-1 inset-x-0 text-center">
        <a
          href="/"
          className="text-white drop-shadow-lg text-xl mx-auto lg:text-4xl font-bold"
        >
          The UFO Nexus
        </a>
      </h1>

      <div
        className={`fixed lg:static right-0 h-full w-48 lg:w-auto bg-gray-800 overflow-auto lg:overflow-visible
    transform transition-transform duration-500 ease-in-out lg:translate-x-0
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="text-center drop-shadow-lg lg:mt-3 lg:flex lg:items-center">
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white lg:mr-4"
          >
            Home
          </a>
          <a
            href="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-white lg:mr-4"
          >
            About
          </a>
          <a
            href="/store"
            className="block mt-4 lg:inline-block lg:mt-0 text-white lg:mr-4"
          >
            Shop
          </a>
          <a
            href="/blog"
            className="block mt-4 lg:inline-block lg:mt-0 text-white lg:mr-4"
          >
            Blog
          </a>
        </div>
        <ReportUFOButton />
      </div>
    </nav>
  );
};

export default Navbar;
