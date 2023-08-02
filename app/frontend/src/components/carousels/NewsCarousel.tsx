import React from "react";
import { Link } from "react-router-dom";

type Props = {
  image: string;
  title: string;
  description: string;
  sourceName: string;
  sourceUrl: string;
};

const NewsCarousel = (props: Props) => {
  return (
    <div className="container mx-auto">
      <div className="h-96 w-full md:w-[750px] mx-auto shadow-xl bg-slate-300 py-4 opacity-20 rounded-lg overflow-hidden">
        <div
          className="w-full h-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
        <div className="flex flex-col items-center justify-center h-1/2 p-4">
          <div className="text-2xl lg:text-3xl">{props.title}</div>
          <div className="text-md lg:text-xl mt-4">{props.description}</div>
          <div className="text-sm lg:text-md mt-4 lg:mb-0 mb-8 underline">
            <Link to={props.sourceUrl}>{props.sourceName}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCarousel;
