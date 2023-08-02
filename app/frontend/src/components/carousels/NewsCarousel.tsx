import React from "react";

type Props = {
  image: string;
  title: string;
  description: string;
  sourceUrl: string;
  link: string;
};

const NewsCarousel = (props: Props) => {
  return (
    <div className="h-96 w-[360px] md:w-[750px] mx-auto shadow-xl bg-slate-300 opacity-20 rounded-lg">
      <div
        className="w-full h-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="flex flex-col items-center justify-center h-1/2">
        <div className="text-2xl lg:text-3xl ">{props.title}</div>
        <div className="text-md lg:text-xl mt-4">{props.description}</div>
        <div className="text-sm lg:text-md mt-2">{props.sourceUrl}</div>
      </div>
    </div>
  );
};

export default NewsCarousel;
