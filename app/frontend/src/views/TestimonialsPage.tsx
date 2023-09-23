import React from "react";
import TestimonialTable from "../components/tables/TestimonialsTable";

const TestimonialsPage: React.FC = () => {
  return (
    <div className="text-center items-center justify-center">
      <TestimonialTable
        headers={[
          "Date",
          "Time",
          "Location",
          "Number of Witnesses",
          "Description",
          "Behavior",
          "Duration",
          "Other Details",
        ]}
        rows={[
          [
            "2021-10-11",
            "10:00 AM",
            "1234 Main St",
            "2",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed turpis id nisi aliquet venenatis. Nullam sit amet eros quis leo consequat aliquet. Nulla facilisi. Donec auctor, velit eu ultricies ultricies, lorem augue tempor nunc, ut ullamcorper enim nisl nec nisl. ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed turpis id nisi aliquet venenatis. Nullam sit amet eros quis leo consequat aliquet. Nulla facilisi. Donec auctor, velit eu ultricies ultricies, lorem augue tempor nunc, ut ullamcorper enim nisl nec nisl. ",
            "5 minutes",
            "Blue White Green Yellow Red Lights",
          ],
        ]}
      />
    </div>
  );
};

export default TestimonialsPage;
