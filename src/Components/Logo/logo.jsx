import React from "react";
// import { ReactComponent as LogoIcon } from "./logo.svg";
import hero from "../../images/arhamProfile.png";

import { Link } from "react-scroll";

const NameLogo = () => {
  return (
    <Link
      activeClass="active"
      to="test2"
      spy={true}
      smooth={true}
      duration={500}
    >
      <div className="flex items-center ">
        {/* <LogoIcon className="h-9 w-9 " /> */}
        <img src={hero} alt="" className="h-9 w-9" />
        <span className="font-semibold text-2xl ml-2 hover:text-royalblue1 ">
          Arham
        </span>
      </div>
    </Link>
  );
};
export default NameLogo;
