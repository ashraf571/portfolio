import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { SkillsData } from "../data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Skills = () => {
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
    <section id="skills" className="w-full bg-royalblue2 overflow-hidden">
      <div className="flex justify-center items-center gap-2 p-2">
        <div className=" flex justify-center items-center gap-2 my-2">
          <span className="items-center ">
            <FontAwesomeIcon
              icon={faLaptopCode}
              className="h-14 w-14 text-white"
            />
          </span>
          <h1 className="">
            <span className="text-3xl md:text-4xl font-bold text-white">
              Skills &
            </span>
            <span className="text-3xl md:text-4xl font-bold text-greenglow">
              {" "}
              Abilities
            </span>
          </h1>
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <motion.div
          className="flex justify-center pb-4 gap-3 bg-royalblue1 flex-wrap rounded-lg mx-5 md:mx-24 lg:mx-48 pt-4 mb-4"
          ref={ref}
          variants={animationVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {SkillsData.map((item, index) => {
            return (
              <div
                className="flex flex-col justify-center items-center h-32 md:h-32 w-32 md:w-40 bg-white rounded-lg group hover:bg-royalblue2 transition duration-300 cursor-pointer"
                key={index}
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-10 w-10 md:h-14 md:w-14 bg-darknavyblue rounded-full group-hover:bg-white transition duration-300"
                />
                <span className="text-lg md:text-2xl text-black mt-2 group-hover:text-white transition duration-300">
                  {item.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default Skills;
