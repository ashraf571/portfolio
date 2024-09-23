import React from "react";
import { useState } from "react";
import ProfileImage from "../images/ashraf.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import resume from "../images/ArhamSarwar.pdf";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });
  const [isTapped, setIsTapped] = useState(false);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: "8vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <section id="about" className="bg-mudwhite w-full py-12  ">
      <div>
        <div className="flex justify-center gap-2  ">
          <span>
            <FontAwesomeIcon icon={faUserAlt} className="h-9 w-9 " />
          </span>
          <h1>
            <span className="text-3xl md:text-4xl font-bold">About</span>
            <span className="text-3xl md:text-4xl font-bold text-royalblue1">
              {" "}
              Me
            </span>
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 items-center md:justify-center ">
          <div className="h-[350px] w-[320px]">
            <Tilt options={{ max: 25, scale: 1, speed: 400 }}>
              <motion.img
                src={ProfileImage}
                alt="Animated"
                draggable={false}
                className="mt-5 md:mt-0 bg-royalblue2 w-full h-full object-cover object-center"
                style={{
                  width: "320px",
                  height: "350px",
                  borderRadius: "20px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  mixBlendMode: "luminosity",
                  filter: isTapped
                    ? "grayscale(0%) saturate(150%)"
                    : "grayscale(100%)",
                }}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  filter: "grayscale(0%) saturate(150%)",
                }}
                onTap={() => setIsTapped(!isTapped)}
              />
            </Tilt>
          </div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {AboutData.map((item, index) => (
              <div
                ref={ref}
                key={index}
                className="flex items-start gap-2 flex-col py-4 px-5 md:max-w-[710px] lg:max-w-[780px]  overflow-hidden"
              >
                {/* max-w-[480px] */}
                <motion.div
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={itemVariants}
                >
                  <h1 className="text-2xl font-bold">{item.name}</h1>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={itemVariants}
                >
                  <h1 className="text-sm font-semibold flex gap-2">
                    {item.designation}
                    <span>( {item.experience} ) </span>
                  </h1>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={itemVariants}
                  className=" "
                >
                  <p className="text-base mt-4 w-full">{item.description} </p>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={itemVariants}
                >
                  <span className="flex gap-1 text-base font-poppins">
                    <p className="text-lightblue">Email :</p>{" "}
                    <a
                      href="https://mail.google.com/mail/u/0/#compose"
                      target="blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {item.email}
                    </a>
                    {/* <p>{item.email}</p> */}
                  </span>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={itemVariants}
                >
                  <span className="flex gap-1 text-base font-poppins">
                    <p className="text-lightblue">Place :</p>{" "}
                    <p>{item.place}</p>
                  </span>
                </motion.div>
                <motion.div
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={itemVariants}
                >
                  <span className="flex gap-1 text-base font-poppins">
                    <p className="text-lightblue">Phone Number :</p>{" "}
                    <a
                      href={`tel:${item.number}`}
                      // target="_blank"
                      // rel="noopener noreferrer"
                    >
                      {item.number}
                    </a>
                  </span>
                </motion.div>

                <a
                  href={resume}
                  download="Ashraf Ali"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="flex justify-center items-center font-sans font-medium rounded-md bg-royalblue3
                  text-white text-lg w-32 py-2 gap-2 mt-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 button-gap"
                  >
                    {item.button}
                    <FontAwesomeIcon icon={item.icon} className="w-2 mt-1" />
                  </button>
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

export const AboutData = [
  {
    name: "I'm Ashraf",
    designation: "Full Stack Developer",
    description:
      "As a dedicated Full-Stack Developer based in Lahore, Pakistan, I bring a wealth of experience and a deep passion for crafting innovative digital solutions. My journey in technology began with an Information Technology degree from Punjab University (PU), which laid the foundation for my expertise in both front-end and back-end development. Throughout my career, I have been driven by a commitment to continuous learning and excellence in coding. This passion has fueled my ability to design, develop, and deploy high-quality applications and websites that meet the evolving needs of users and businesses alike. My technical proficiency spans across modern development frameworks and languages, ensuring that every project I undertake is built with best practices and cutting-edge technologies. In my work I have had the privilege of developing both mobile applications and websites, focusing on creating Minimum Viable Products (MVPs) that provide maximum impact with minimal resources. This experience has honed my ability to prioritize features, streamline development processes, and deliver products that are both functional and market-ready. I believe that every line of code I write is an opportunity to innovate and solve real-world problems.",
    // description:
    // "I am a Full-Stack developer based in Lahore, Pakistan. I am an Information Technology graduate from PU. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to build Full-Stack clones.",
    experience: "5 Years",
    email: "ashrafali.gcs@gmail.com",
    place: "Lahore, Pakistan - 540000",
    number: "+92 342-646-5571",
    button: "Resume",
    icon: faChevronRight,
  },
];
