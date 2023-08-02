import React from "react";
import NewsCarousel from "../components/carousels/NewsCarousel";
import SmallCard from "../components/cards/SmallCard";

const HomePage: React.FC = () => {
  return (
    <div className="text-center">
      <NewsCarousel
        image="image"
        title="title"
        description="description"
        sourceUrl="sourceUrl"
        link="link"
      />
      <SmallCard
        image="image"
        title="title"
        description="description"
        sourceUrl="sourceUrl"
      />
    </div>
  );
};

export default HomePage;
