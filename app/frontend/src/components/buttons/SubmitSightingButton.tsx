import React from "react";

type Props = {};

const SubmitSightingButton = (props: Props) => {
  return (
    <div>
      <button className="bg-green-500 hover:bg-green-400 drop-shadow-xl text-white p-2 rounded-lg m-4 transform hover:scale-105 transition duration-500">
        <a href="/testimonials/new" className="drop-shadow-md">
          Submit Sighting
        </a>
      </button>
    </div>
  );
};

export default SubmitSightingButton;
