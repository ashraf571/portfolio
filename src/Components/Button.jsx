import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ViewButton = ({ buttonValue, work, experience }) => {
  return (
    <div className="flex justify-center ">
      <button
        className={`rounded-md text-white px-8 py-2.5 flex gap-1 mb-4
 ${
   work
     ? "mt-4 border-2 bg-royalblue3 border-white hover:bg-white hover:text-black button-gap"
     : ""
 } 
 ${experience ? "bg-royalblue3 mt-2 button-gap" : ""}
 

 
 `}
      >
        {buttonValue}
        <div>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </button>
    </div>
  );
};
export default ViewButton;
