import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import ViewButton from "../Components/Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import securehops from "../images/ExperienceImages/securehops_logo.jpeg";
import tydiup from "../images/ExperienceImages/tydiup_logo.jpeg";
import Salamgram from "../images/ExperienceImages/Salamgram.jpeg";
import ewiglife from "../images/ExperienceImages/ewiglife.jpeg";
import fiver from "../images/ExperienceImages/fiverr_com_logo.jpeg";
import stepinSolutions from "../images/ExperienceImages/stepinSolutions.jpeg";
import upwork from "../images/ExperienceImages/upwork_logo.jpeg";
import Pitaco from "../images/ExperienceImages/Pitaco.jpeg";
import vvork from "../images/ExperienceImages/vvork.jpeg";
import Devsins from "../images/ExperienceImages/Devsins.jpeg";

const Experience = () => {
  const [allexperience, setAllexperience] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  const handleView = () => {
    setAllexperience(!allexperience);
  };

  const animationVariants = {
    hidden: { y: "-20vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const initialProjects = NewExperiencedData.slice(0, 6);
  const remainingProjects = NewExperiencedData.slice(6);

  return (
    <div id="experience" className="bg-offwhite w-full pt-4 overflow-hidden">
      <div className="flex justify-center items-center  gap-2">
        <span className="items-center">
          <FontAwesomeIcon
            icon={faBriefcase}
            className="h-10 w-10 text-darkblack"
          />
        </span>
        <h1 className="text-4xl font-bold text-darkblack">Experience</h1>
      </div>

      <div
        className="w-12 h-[690px] bg-transparent relative m-0 md:mx-auto  "
        ref={ref}
      >
        <div className="w-2 h-full absolute bg-black mx-auto top-0 left-0 right-0"></div>

        {initialProjects.map((Data, index) => {
          return (
            <motion.div
              ref={ref}
              key={index}
              variants={animationVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className={`h-8 w-8 bg-white border-4 border-royalblue2 rounded-full absolute left-0 right-0 mx-auto ${Data.div1}`}
            >
              <div className="h-full w-full relative flex justify-center items-center">
                <FontAwesomeIcon icon={faBriefcase} className="w-7 " />
                <a
                  className={`w-[280px] md:w-[300px] lg:w-[380px]  absolute bg-royalblue1 -top-[14px] md:mx-auto rounded-md 
                    ${
                      index % 2 === 0
                        ? "left-16"
                        : "left-16 md:left-auto md:right-16"
                    }
                  `}
                  href={Data.companylink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative w-full ">
                    <div
                      className={`absolute bg-royalblue1 h-6 w-6 top-4 rotate-45 ${Data.div5}`}
                    ></div>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col px-8 py-2">
                        <h1 className="font-bold text-white">
                          {Data.companyname}
                        </h1>
                        <h1 className="font-bold text-white">
                          {Data.designation}
                        </h1>
                        <span className="text-white">{Data.date}</span>
                      </div>
                      <div className="h-8 w-8 lg:h-10 lg:w-10 rounded-full bg-red-500 mr-4 lg:mr-10 hidden md:block">
                        <img
                          src={Data.img}
                          alt=""
                          className="h-full w-full rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      {allexperience && (
        <div
          className="w-12 h-[490px] bg-transparent relative m-0 md:mx-auto bottom-4"
          ref={ref}
        >
          <div className="w-2 h-full absolute bg-black mx-auto top-0 left-0 right-0"></div>

          {remainingProjects.map((Data, index) => {
            return (
              <motion.div
                ref={ref}
                key={index}
                variants={animationVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className={`h-8 w-8 bg-white border-4 border-royalblue2 rounded-full absolute left-0 right-0 mx-auto ${Data.div1}`}
              >
                <div className="h-full w-full relative flex justify-center items-center">
                  <FontAwesomeIcon icon={faBriefcase} className="w-7 " />
                  <a
                    className={`w-[280px] md:w-[300px] lg:w-[380px]  absolute bg-royalblue1 -top-[14px] md:mx-auto rounded-md 
                    ${
                      index % 2 === 0
                        ? "left-16"
                        : "left-16 md:left-auto md:right-16"
                    }
                  `}
                    href={Data.companylink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative w-full bg-red400">
                      <div
                        className={`absolute bg-royalblue1 h-6 w-6 top-4 rotate-45 ${Data.div5}`}
                      ></div>
                      <div className="flex justify-between items-center">
                        <div className="flex flex-col px-8 py-2">
                          <h1 className="font-bold text-white">
                            {Data.companyname}
                          </h1>
                          <h1 className="font-bold text-white">
                            {Data.designation}
                          </h1>
                          <span className="text-white">{Data.date}</span>
                        </div>
                        <div className="h-8 w-8 lg:h-10 lg:w-10 rounded-full bg-red-500 mr-4 lg:mr-10 hidden md:block">
                          <img
                            src={Data.img}
                            alt=""
                            className="h-full w-full rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
      {!allexperience ? (
        <div className="" onClick={() => handleView()}>
          <ViewButton buttonValue={"View More"} experience={true} />
        </div>
      ) : (
        <div onClick={() => handleView()}>
          <ViewButton buttonValue={"View Less"} experience={true} />
        </div>
      )}
    </div>
  );
};
export default Experience;

const NewExperiencedData = [
  {
    div1: "top-10",
    div3: "left-16",
    div5: "-left-2 md:-left-2",
    date: "Jul 2022 - present",
    companyname: "Securehops",
    designation: "Backend Developer",
    img: securehops,
    companylink: "https://securehops.com/",
    delay: 2,
  },
  {
    div1: "top-36",
    div3: " left-16 md:right-16 ",
    div5: "-left-2 md:left-auto md:-right-2",
    date: "Apr 2024 - present",
    companyname: "TYDIUP",
    designation: "Flutter Developer",
    img: tydiup,
    companylink: "https://www.tydiup.com/",
    delay: 3,
  },
  {
    div1: " top-64",
    div3: "left-16",
    div5: "-left-2 md:-left-2",
    date: "Jan 2020 - present",
    companyname: "Devsinn Technologies",
    designation: "Flutter Developer",
    img: Devsins,
    companylink: "https://devsinntechnologies.com/",
    delay: 4,
  },
  {
    div1: "top-[368px]",
    div3: "right-16",
    div5: "-left-2 md:left-auto md:-right-2",
    date: "March 2022 - Sept 2022",
    companyname: "Salamgram.inc",
    designation: "Flutter Developer",
    img: Salamgram,
    companylink: "https://salamgram.com/",
    delay: 5,
  },
  {
    div1: "top-[480px]",
    div3: "left-16 md:left-16",
    div5: "-left-2 md:-left-2",
    date: "Apr 2020 - Sept 2022",
    companyname: "Fiverr",
    designation: "Mobile Developer",
    img: fiver,
    companylink: "https://www.fiverr.com/arhamsarwar?up_rollout=true",
    delay: 6,
  },
  {
    div1: "top-[592px]",
    div3: "left-16 md:right-16",
    div5: "-left-2 md:left-auto md:-right-2",
    date: "Oct 2020 - Jan 2022",
    companyname: "Upwork",
    designation: "Freelancing ",
    img: upwork,
    companylink: "https://www.upwork.com/freelancers/~01433b6d184d210e9b",
    delay: 7,
  },

  // new entrie
  {
    div1: "top-10",
    div3: "left-16",
    div5: "-left-2 md:-left-2",
    date: "Oct 2021 - Nov 2021",
    companyname: "Stepin Solutions",
    designation: "FLUTTER DEVELOPER",
    img: stepinSolutions,
    companylink: "https://www.stepin-solutions.com/",
    delay: 8,
  },
  {
    div1: "top-36",
    div3: " left-16 md:right-16 ",
    div5: "-left-2 md:left-auto md:-right-2",
    date: "March 2020 - Sept 2020",
    companyname: "Ewiglife Technologies",
    designation: "Flutter Developer",
    img: ewiglife,
    companylink: "",
    delay: 9,
  },
  {
    div1: "top-64",
    div3: "left-16",
    div5: "-left-2 md:-left-2",
    date: "Oct 2019 - Mar 2020",
    companyname: "Pitaco",
    designation: "Cloud Computing",
    img: Pitaco,
    companylink: "",
    delay: 10,
  },
  {
    div1: "top-[368px]",
    div3: " left-16 md:right-16 ",
    div5: "-left-2 md:left-auto md:-right-2",
    date: "Mar 2019 - Dec 2019",
    companyname: "Vvork  Technologies",
    designation: "MERN Stack Developer",
    img: vvork,
    companylink: "https://www.vvorkcloud.com/",
    delay: 11,
  },
];
