import React from "react";
import { useTypewriter } from "./Typewriterhook";

export const TypeWriter = ({ texts, speed }) => {
  const displayText = useTypewriter(texts, speed);
  return (
    <p className="text-lg md:text-2xl ">
      I'm into {/* text-[#940808] */}
      <span className="text-white  bg-royalblue1 font-semibold">
        &nbsp;{displayText} <b className="text-greenglow">|</b>
      </span>
    </p>
  );
};
