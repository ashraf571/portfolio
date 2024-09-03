import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faPaperPlane,
  faUser,
  faEnvelope,
  faPhone,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import FormImage from "../images/contact1.png";
import emailjs from "emailjs-com";
import { contactSchema } from "../Components/validationSchema/Schema";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { toast } from "react-toastify";

const Contact = () => {
  const formRef = useRef();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  const SERVICE_ID = "service_1x106ec";
  const TEMPLATE_ID = "template_r8m5kf6";
  const PUBLIC_KEY = "8dGco_tvQzFo-2Bqw";

  const formik = useFormik({
    initialValues: {
      username: "",
      useremail: "",
      userphone: "",
      usermessage: "",
    },
    validationSchema: contactSchema,
    onSubmit: (_values, { resetForm }) => {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      toast.success("Message sent successfullly", {
        iconTheme: {
          primary: "#0066cc", // Icon color
        },
        style: {
          color: "#ffffff",
          backgroundColor: "#0066cc",
        },
        progressStyle: {
          background: "#01478c", // Progress bar color
        },
      });
      resetForm();
    },
  });

  const { errors, touched, values, handleChange, handleBlur, handleSubmit } =
    formik;

  const animationVariants = {
    hidden: { x: "10vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const animationVariantsImage = {
    hidden: { x: "-10vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <div id="contact" className="w-full bg-skywhite py-8">
      <div className="flex items-center justify-center gap-2 pt-2">
        <span>
          <FontAwesomeIcon icon={faHeadset} className="h-9 w-9" />
        </span>
        <h1>
          <span className="text-4xl font-bold">Get In </span>
          <span className="text-4xl font-bold text-royalblue1">Touch</span>
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex justify-center gap-0 md:gap-10 w-[330px] md:w-[996px] bg-white mt-12 px-4 py-6 rounded-2xl overflow-hidden">
          <motion.div
            ref={ref}
            variants={animationVariantsImage}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <img src={FormImage} alt="" className="hidden md:block" />
          </motion.div>

          <form
            ref={formRef}
            className="flex flex-col gap-4 w-96"
            onSubmit={handleSubmit}
          >
            <motion.div
              ref={ref}
              variants={animationVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="input-container">
                <input
                  className="bg-skywhite h-12 w-full placeholder-black rounded-md border border-black pl-12"
                  type="text"
                  placeholder="Name"
                  id="username"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                <span className="flex justify-center items-center absolute top-0 h-12 w-12">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-lg text-greyishblack icon"
                  />
                </span>
                {errors.username && touched.username && (
                  <span className="text-heartcolor text-sm p-1">
                    {errors.username}
                  </span>
                )}
              </div>
            </motion.div>

            <motion.div
              ref={ref}
              variants={animationVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="input-container">
                <input
                  className="bg-skywhite h-12 w-full placeholder-black rounded-md border border-black group pl-12"
                  type="email"
                  placeholder="Email"
                  id="useremail"
                  name="useremail"
                  value={values.useremail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                <span className="flex justify-center items-center absolute top-0 h-12 w-12">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-lg text-greyishblack icon"
                  />
                </span>
                {errors.useremail && touched.useremail && (
                  <span className="text-heartcolor text-sm p-1">
                    {errors.useremail}
                  </span>
                )}
              </div>
            </motion.div>

            <motion.div
              ref={ref}
              variants={animationVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="input-container">
                <input
                  className="bg-skywhite h-12 w-full placeholder-black rounded-md border border-black pl-12"
                  type="tel"
                  placeholder="Phone"
                  id="userphone"
                  name="userphone"
                  value={values.userphone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                <span className="flex justify-center items-center absolute top-0 h-12 w-12">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-lg text-greyishblack icon"
                  />
                </span>
                {errors.userphone && touched.userphone && (
                  <span className="text-heartcolor text-sm p-1">
                    {errors.userphone}
                  </span>
                )}
              </div>
            </motion.div>

            <motion.div
              ref={ref}
              variants={animationVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="input-container">
                <textarea
                  className="bg-skywhite h-36 w-full placeholder-black rounded-md pl-12 border border-black pt-2 resize-none"
                  placeholder="Message"
                  id="usermessage"
                  name="usermessage"
                  value={values.usermessage}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                <span className="flex justify-center items-center absolute top-0 h-12 w-12">
                  <FontAwesomeIcon
                    icon={faCommentDots}
                    className="text-lg text-greyishblack icon"
                  />
                </span>
                {errors.usermessage && touched.usermessage && (
                  <span className="text-heartcolor text-sm p-1">
                    {errors.usermessage}
                  </span>
                )}
              </div>
            </motion.div>

            <motion.div
              ref={ref}
              variants={animationVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="flex ml-auto shadow-2xl w-32">
                <button
                  className="flex justify-center items-center gap-2 rounded-md bg-royalblue3 hover:bg-royalblue1 text-lg text-white w-32 h-12 cursor-pointer  button-gap"
                  type="submit"
                >
                  Submit
                  <span>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </span>
                </button>
              </div>
            </motion.div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
