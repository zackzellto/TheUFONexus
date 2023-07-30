import React from "react";
import { Link } from "react-router-dom";

const ReportUFOButton: React.FC = () => {
  return (
    <Link to="/report-ufo">
      <button className="bg-gray-800 hover:border-spacing-1 mt-4 lg:mt-0 hover:text-green-500 drop-shadow-none p-1 text-white rounded transform transition duration-500 hover:scale-105">
        Report UFO
      </button>
    </Link>
  );
};

export default ReportUFOButton;
