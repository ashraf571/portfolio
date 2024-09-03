import React from "react";
import { Link } from "react-scroll";

const MobileNavbar = ({ handleMenuClick, isOpen }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    // className="flex justify-end bg-royalblue2 w-[50%] absolute top-[70px] right-0 border shadow-md h-full "
    <div
      className={`fixed inset-0 bg-royalblue2 w-1/2 transform top-16 ${
        // translate-x-0 for true isopen
        isOpen ? "translate-x-full" : "translate-x-full"
      } transition-transform duration-300 ease-in-out shadow-md z-50`}
    >
      <div className="flex flex-col w-full gap-4 px-8 py-6">
        {MobileTopbarData.map((item, index) => {
          return (
            <div key={index} className="">
              <Link
                activeClass="active"
                to={item.link}
                className={classNames(
                  item.current
                    ? ""
                    : "text-black hover:bg-gray-700 hover:text-purple",
                  "hover:border-b-2 text-white hover:border-b-royalblue3 font-semibold pb-1.5 cursor-pointer font-poppins shadow-2xl space-links"
                )}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleMenuClick}
              >
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MobileNavbar;

export const MobileTopbarData = [
  {
    name: "Home",
    link: "home",
    current: true,
  },
  {
    name: "About",
    link: "about",
    current: false,
  },
  {
    name: "Skills",
    link: "skills",
    current: false,
  },
  {
    name: "Education",
    link: "education",
    current: false,
  },
  {
    name: "Work",
    link: "work",
    current: false,
  },
  {
    name: "Experience",
    link: "experience",
    current: false,
  },
  {
    name: "Contact",
    link: "contact",
    current: false,
  },
];
