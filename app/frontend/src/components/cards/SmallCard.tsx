import React from "react";

type Props = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const CardContainer = (props: Props) => {
  return (
    <div className="bg-slate-300 opacity-40 rounded-lg ml-14 mt-96 h-72 w-64 p-2">
      <div className="w-full">{props.image}</div>
      <div className="mt-28">{props.title}</div>
      <div className="mt-4">{props.description}</div>
      <div className="mt-6">{props.link}</div>
    </div>
  );
};

export default CardContainer;
