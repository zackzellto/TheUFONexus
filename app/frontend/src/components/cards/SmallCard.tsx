import React from "react";
import { Link } from "react-router-dom";

type Props = {
  image: string;
  title: string;
  description: string;
  sourceUrl: string;
  sourceName: string;
};

const CardContainer = (props: Props) => {
  return (
    <div
      className="bg-slate-300 opacity-20 shadow-xl rounded-lg mx-auto m-4 h-72 w-[360px] flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="overflow-auto mt-20 p-2">
        <div className="text-xl lg:text-3xl mt-4 text-center">
          {props.title}
        </div>
        <div className="text-md mt-4 text-center">{props.description}</div>
        <div className="text-sm lg:text-md mt-2 text-center underline">
          <Link to={props.sourceUrl}>{props.sourceName}</Link>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
