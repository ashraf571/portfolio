import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { TopbarData } from "../data";
import MobileNavbar from "./Mobilenavbar";
import { Spin as Hamburger } from "hamburger-react";
import NameLogo from "../Components/Logo/logo";

const Topbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(false);
  };

  return (
    // fixed and static issues
    <div id="test2" className=" ">
      <div className="bg-white py-3 w-full flex items-center justify-end gap-6 px-5 md:px-16 fixed top-0 left-0 right-0 z-50 border-b ">
        <div className=" flex-1 ml-0 md:ml-7 ">
          <NameLogo />
        </div>

        {TopbarData.map((item, index) => {
          return (
            <div key={index} className="hidden md:flex">
              <Link
                activeClass="active"
                to={item.link}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="hover:border-b-2 border-royalblue1 font-semibold hover:text-royalblue1 pb-1.5 cursor-pointer font-poppins shadow-2xl space-links"
              >
                {item.name}
              </Link>
            </div>
          );
        })}

        <div className="block md:hidden">
          <Hamburger toggled={open} toggle={setOpen} />
        </div>
      </div>
      {open && <MobileNavbar handleMenuClick={handleMenuClick} isOpen={open} />}
    </div>
  );
};

export default Topbar;
