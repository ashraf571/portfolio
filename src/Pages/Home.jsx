import React, { useState } from "react";
import { Link } from "react-scroll";
import { TypeWriter } from "./TypeWriterComponent";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
// import LogoDevIcon from "@mui/icons-material/LogoDev";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import hero from "../images/arhamProfile.png";
import { Tilt } from "react-tilt";
import fiver from "../images/ExperienceImages/fiverbgremove.png";
import upwork from "../images/ExperienceImages/upworkbgremove.png";

const Home = () => {
  const [hover, setHover] = useState(false);
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row justify-between items-center px-4 md:px-24 py-8 md:py-28 gap-12 mt-[60px] h-auto md:h-screen"
    >
      {/* <ParticlesComponent id="particles" /> */}
      <div className=" flex  items-start justify-center flex-col gap-4 w-full  ml-2 md:ml-0">
        <h2 className="text-3xl md:text-5xl font-bold text-mudblue font-poppins ">
          Hi There, <br /> I'm Ashraf{" "}
          <span className="text-royalblue1">Ali</span>
        </h2>
        <div className="">
          <TypeWriter
            className="md:"
            texts={[
              "Mern Stack Development",
              "Full Stack Development",
              "Backend Development",
              "DevOps",
            ]}
            speed={80}
          />
        </div>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex items-center gap-2 text-base cursor-pointer "
        >
          {/* shadow-xl hover:shadow-2xl transition-shadow duration-300  */}
          <button className="btn">
            <span className="flex gap-1 items-center text-lg ">
              About Me
              <span className="text-lg">
                <FontAwesomeIcon icon={faCircleArrowDown} />
              </span>
            </span>
          </button>
        </Link>

        <div className="flex gap-2 mt-4">
          {IconLinkData.map((item, index) => {
            return (
              <div
                key={index}
                className={`h-12 w-12 ${
                  hover ? "" : ""
                } flex items-center justify-center rounded-full bg-royalblue1 group hover:bg-darknavyblue cursor-pointer transition duration-300 `}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {/* <item.icon className="text-white group-hover:text-greenglow transition duration-300" /> */}
                  {typeof item.icon === "string" ? (
                    <img
                      src={item.icon}
                      alt=""
                      className="text-white group-hover:bg-greenglow  transition duration-300  h-6 w-6 rounded-full"
                    />
                  ) : (
                    <item.icon className="text-white group-hover:text-greenglow transition duration-300 h-6 w-6" />
                  )}
                  {/* <img
                    src={item.icon}
                    alt=""
                    className="text-white group-hover:bg-greenglow rounded-full transition duration-300 h-6 w-6"
                  /> */}
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <Tilt options={{ max: 25, scale: 1, speed: 400 }}>
        <div className="h-80 w-80 md:h-96 md:w-96 ">
          <img src={hero} alt="" className=" h-full w-full rounded-full" />
        </div>
      </Tilt>
    </section>
  );
};
export default Home;

export const IconLinkData = [
  // {
  //   icon: InstagramIcon,
  //   link: "",
  //   bghover: "#007bb6",
  // },
  // {
  //   icon: TwitterIcon,
  //   link: "",
  //   bghover: "#00aced",
  // },
  {
    icon: GitHubIcon,
    link: "https://github.com/ashraf571",
    bghover: "#0e0e0e",
  },
  {
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/in/ashraf-ali-b9879613b/",
    bghover: "#ee00da",
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
  //   bghover: "#ffffff",
  // },
];
