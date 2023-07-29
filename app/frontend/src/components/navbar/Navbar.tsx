import UFOhubLogo from "../../assets/images/ufohub_alien_icon.png";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 lg:py-2 px-4 lg:flex justify-between">
      <div className="flex items-center justify-between">
        <img
          src={UFOhubLogo}
          className="h-8 lg:ml-2 lg:h-12 rounded-full"
          alt="UFOHub Alien Icon"
        />
        <h1>
          <a
            href="/"
            className="text-white text-2xl lg:text-4xl font-bold lg:ml-2"
          >
            The UFO Nexus
          </a>
        </h1>
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

      <div
        className={`fixed lg:static right-0 h-full w-32 lg:w-auto bg-gray-800 overflow-auto lg:overflow-visible
    transform transition-transform duration-500 ease-in-out lg:translate-x-0
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="text-center lg:mt-3 lg:flex lg:items-center">
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
            href="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-white lg:mr-4"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
