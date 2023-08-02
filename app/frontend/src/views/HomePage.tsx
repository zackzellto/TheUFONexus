import React from "react";
import NewsCarousel from "../components/carousels/NewsCarousel";
import SmallCard from "../components/cards/SmallCard";

const HomePage: React.FC = () => {
  return (
    <div className="text-center">
      <NewsCarousel
        image="image"
        title="Lorem ipsum"
        description="Maecenas aliquet nunc in sem varius, in ultricies arcu lacinia. Cras sodales tortor vel libero convallis, ac interdum ex ultricies. Sed dapibus augue a eros efficitur, nec facilisis enim egestas. "
        sourceName="sourceName"
        sourceUrl="sourceUrl"
      />
      <SmallCard
        image="image"
        title="Lorem ipsum"
        description="Aenean cursus convallis orci, sed porttitor augue egestas in. Nulla facilisi. Vestibulum et ultrices enim."
        sourceName="sourceName"
        sourceUrl="sourceUrl"
      />
    </div>
  );
};

export default HomePage;
