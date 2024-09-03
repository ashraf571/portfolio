import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import SchoolImage from "../images/Arhamschool.jpeg";
import CollegeImage from "../images/Arhamcollege.jpeg";
import UniversityImage from "../images/Arhamuniversity.jpg";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Education = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  const animationVariants = {
    hidden: { y: "10vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
  return (
    <div id="education" className="w-full bg-skywhite py-8 overflow-hidden">
      <div className="flex flex-col gap-6 items-center">
        <div className="flex items-center gap-2">
          <span>
            <FontAwesomeIcon icon={faGraduationCap} className="h-9 w-9" />
          </span>
          <h1 className="">
            <span className="text-3xl md:text-4xl font-bold">My </span>
            <span className="text-3xl md:text-4xl font-bold text-royalblue1">
              Education
            </span>
          </h1>
        </div>

        <p className="text-lg  text-black text-center px-2 ">
          Education Is Not The Learning Of Facts, But The Training Of The Mind
          To Think.
        </p>
      </div>
      <div className="flex justify-center lg:items-center mt-4 py-4 ">
        <div ref={ref}>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[1230px] gap-4 mt-4 px-4 "
          >
            {EducationData.map((item, index) => {
              return (
                <div
                  // ref={ref}
                  key={index}
                  className="flex flex-col gap-0 md:gap-4  bg-brightwhite rounded-md shadow-xl hover:shadow-2xl transition-shadow duration-300 "
                >
                  {" "}
                  <div className="h-56 md:h-44 lg:h-64">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="w-full h-full object-cover object-center rounded-md"
                    />
                  </div>
                  <div className="flex flex-col justify-center  gap-2 w-full mt-2 p-4">
                    <div className="text-2xl font-semibold text-royalblue2">
                      {item.degree}
                    </div>
                    <div className="text-base text-lightblack">
                      {item.school}
                    </div>
                    <div className="text-lg font-semibold text-royalblue1">
                      {item.date}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Education;

export const EducationData = [
  {
    img: UniversityImage,
    alt: "institute Image",
    degree: "BS Information Technology",
    school: "University Of Punjab, Lahore",
    date: "2019-2023 | Completed",
  },
  {
    img: CollegeImage,
    alt: "institute Image",
    degree: "F.sc Pre-Engineering",
    school: "Govt Islamia College, Lahore",
    date: "2016-2019 | Completed",
  },
  {
    img: SchoolImage,
    alt: "institute Image",
    degree: "Matric",
    school: "Islamia High School, Lahore",
    date: "2014-2016 | Completed",
  },
];
