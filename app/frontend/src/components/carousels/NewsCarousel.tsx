import React from "react";

type Props = {
  image: string;
  title: string;
  description: string;
  source: string;
  link: string;
};

const NewsCarousel = (props: Props) => {
  return (
    <div className="h-96 w-72 mx-auto bg-slate-300 opacity-30 rounded-lg">
      <div className="w-full">{props.image}</div>
      <div className="mt-28">{props.title}</div>
      <div className="mt-4">{props.description}</div>
      <div className="mt-6">{props.source}</div>
      <div className="mt-6">{props.link}</div>
    </div>
  );
};

export default NewsCarousel;
