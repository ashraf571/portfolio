import React from "react";
import { Link } from "react-scroll";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

// import LogoDevIcon from "@mui/icons-material/LogoDev";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import WhatsAppIcon from "../Assets/images/whatsapp.svg";

import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import fiver from "../images/ExperienceImages/fiverbgremove.png";
import upwork from "../images/ExperienceImages/upworkbgremove.png";

const Footer = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  const itemVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
  return (
    <div className="flex flex-col gap-4 bg-royalblue1 px-4 md:px-20 relative">
      <div className="flex flex-col md:flex-row gap-8 pt-6">
        <div className="flex flex-col gap-2 w-full ">
          <h1 className="text-white  text-2xl">Ashraf's Portfolio</h1>
          <p className="text-white text-base">
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
          </p>
          <p className="text-white text-base">
            Keep Rising 🚀. Connect with me over live chat!
          </p>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-white text-2xl ">Quick links</h1>
          {QuickLinksData.map((Item, index) => {
            return (
              <Link
                key={index}
                activeClass="active"
                to={Item.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="flex items-center gap-2 text-white text-base cursor-pointer  hover:text-greenglow "
              >
                <span className="">
                  {" "}
                  <FontAwesomeIcon icon={Item.icon} />
                </span>
                {Item.text}{" "}
              </Link>
            );
          })}
        </div>
        <div className="flex items-start w-full">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-white text-2xl">Contact Info</h1>
            {ContactinfoData.map((Item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 text-white text-base"
                >
                  <FontAwesomeIcon
                    icon={Item.icon}
                    className="text-greenglow"
                  />
                  <span>{Item.text}</span>
                </div>
              );
            })}
            <div className="flex gap-2 mt-4">
              {IconLinkData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="h-12 w-12 flex items-center  justify-center rounded-full  bg-lightwhite group hover:bg-darknavyblue
                  border border-white cursor-pointer transition duration-300 "
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* <item.icon className="text-royalblue1 group-hover:text-greenglow transition duration-300" /> */}
                      {typeof item.icon === "string" ? (
                        <img
                          src={item.icon}
                          alt=""
                          className="text-royalblue1 group-hover:bg-greenglow bg-royalblue1  transition duration-300  h-6 w-6 rounded-full"
                        />
                      ) : (
                        <item.icon className="text-royalblue1 group-hover:text-greenglow transition duration-300" />
                      )}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <hr className="h-1 w-full" />

      {/* upArrow link */}
      <div ref={ref} className="bg-red-500 ">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            <div className="flex justify-center items-center h-9 w-9 bg-greenglow rounded-full fixed bottom-8 right-0 md:-right-10">
              <span>
                <FontAwesomeIcon icon={faAngleUp} className="text-black" />
              </span>
            </div>
          </Link>
        </motion.div>
      </div>

      <div className="flex justify-center mb-4">
        <div className="text-lightwhite ">
          Designed With{" "}
          <span>
            <FontAwesomeIcon icon={faHeart} className="text-heartcolor" />
          </span>{" "}
          By{" "}
          <a
            href="https://syedhamid.netlify.app/"
            target="blank"
            className="font-bold"
          >
            Syed Hamid Ali
          </a>
        </div>
      </div>

      {/* whatsapp link */}
      <div className="h-16 w-16 flex justify-center border border-white items-center fixed bottom-4 left-4 rounded-full bg-royalblue1  group hover:border-royalblue2 animate-bounce	">
        <a
          href="https://wa.link/li1t9c"
          target="blank"
          rel="noopener noreferrer"
        >
          <img
            src={WhatsAppIcon}
            alt=""
            className="text-lg text-white group-hover:text-mudorange h-full w-full "
          />
        </a>
      </div>
    </div>
  );
};
export default Footer;

export const QuickLinksData = [
  {
    icon: faChevronCircleRight,
    text: "Home",
    link: "home",
  },
  {
    icon: faChevronCircleRight,
    text: "About",
    link: "about",
  },
  {
    icon: faChevronCircleRight,
    text: "Skills",
    link: "skills",
  },
  {
    icon: faChevronCircleRight,
    text: "Education",
    link: "education",
  },
  {
    icon: faChevronCircleRight,
    text: "Work",
    link: "work",
  },
  {
    icon: faChevronCircleRight,
    text: "Experience",
    link: "experience",
  },
];

export const ContactinfoData = [
  {
    icon: faPhone,
    text: "+92 342-646-5571",
  },
  {
    icon: faEnvelope,
    text: "ashrafali.gcs@gmail.com",
  },
  {
    icon: faMapMarkedAlt,
    text: "Lahore, Pakistan-540000",
  },
];

export const IconLinkData = [
  // {
  //   icon: InstagramIcon,
  //   link: "",
  // },
  // {
  //   icon: TwitterIcon,
  //   link: "",
  // },

  {
    icon: GitHubIcon,
    link: "https://github.com/ashraf571",
  },
  {
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/in/ashraf-ali-b9879613b/",
  },
  {
    icon: FacebookRoundedIcon,
    link: "https://www.facebook.com/ashrafali.gcs",
    bghover: "#ee00da",
  },
  {
    icon: upwork,
    link: "https://www.upwork.com/freelancers/~0138a2327d9240ea7f",
    bghover: "#ee00da",
  },
  {
    icon: fiver,
    link: "https://www.fiverr.com/ashrafali5571?public_mode=true",
    bghover: "#ee00da",
  },

  // {
  //   icon: LogoDevIcon,
  //   link: "",
  // },
];
