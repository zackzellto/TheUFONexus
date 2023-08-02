import React from "react";

type Props = {
  image: string;
  title: string;
  description: string;
  sourceUrl: string;
};

const CardContainer = (props: Props) => {
  return (
    <div
      className="bg-slate-300 opacity-20 shadow-xl rounded-lg mx-auto m-4 h-72 w-[360px] p-2 flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="text-2xl lg:text-3xl text-center">{props.title}</div>
      <div className="text-md lg:text-xl mt-4 text-center">
        {props.description}
      </div>
      <div className="text-sm lg:text-md mt-2 text-center">
        {props.sourceUrl}
      </div>
    </div>
  );
};

export default CardContainer;
