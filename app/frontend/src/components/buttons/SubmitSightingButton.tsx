import React, { useState } from "react";
import SubmitSightingModal from "../../components/modals/SubmitSightingModal"; // Update the path accordingly

const SubmitSightingButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="bg-green-500 hover:bg-green-400 drop-shadow-xl text-white p-2 rounded-lg m-4 transform hover:scale-105 transition duration-500"
      >
        <a href="#" className="drop-shadow-md">
          Submit Sighting
        </a>
      </button>

      {isModalOpen && <SubmitSightingModal />}
    </div>
  );
};

export default SubmitSightingButton;
