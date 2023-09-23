import React from "react";
import TestimonialTable from "../components/tables/TestimonialsTable";

const TestimonialsPage: React.FC = () => {
  return (
    <div className="text-center items-center justify-center">
      <div className="flex justify-between items-center">
        <div className="text-4xl text-center text-white p-8">
          Witness Testimonials
        </div>
        <button className="bg-green-500 hover:bg-green-400 text-white p-2 rounded-lg m-4">
          <a href="/testimonials/new">Submit a Sighting</a>
        </button>
      </div>
      <div className="mt-8 drop-shadow-xl">
        <TestimonialTable
          headers={[
            "Case Number",
            "Date",
            "Time",
            "Location",
            "Number of Witnesses",
            "Description",
            "Behavior",
            "Duration",
            "Full Report",
          ]}
          rows={[
            [
              "1",
              "2021-10-11",
              "10:00 AM",
              "1234 Main St",
              "2",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed turpis id nisi aliquet venenatis. Nullam sit amet eros quis leo consequat aliquet. Nulla facilisi. Donec auctor, velit eu ultricies ultricies, lorem augue tempor nunc, ut ullamcorper enim nisl nec nisl. ",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed turpis id nisi aliquet venenatis. Nullam sit amet eros quis leo consequat aliquet. Nulla facilisi. Donec auctor, velit eu ultricies ultricies, lorem augue tempor nunc, ut ullamcorper enim nisl nec nisl. ",
              "5 minutes",
            ],
          ]}
          icon="image"
        />
      </div>
    </div>
  );
};

export default TestimonialsPage;
