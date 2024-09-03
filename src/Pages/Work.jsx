import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import ViewButton from "../Components/Button";
// web Images
import certainlise from "../images/ProjectImages/webImages/Certainlise.png";
import certainliapp from "../images/ProjectImages/webImages/certainliapp.png";
import femclinic from "../images/ProjectImages/webImages/femclinic.png";
import Globe from "../images/ProjectImages/webImages/Globe.png";
import Abonline from "../images/ProjectImages/webImages/Abonline1.jpg";

// backend Images
import hpappen from "../images/ProjectImages/backendImages/hpappen.png";
import hpappenProduction from "../images/ProjectImages/backendImages/hpappenProduction.png";
import Globedeployment from "../images/ProjectImages/backendImages/Globe.png";

// android images
import BargainX from "../images/ProjectImages/AndroidImages/BargainX.png";
import Instacalm from "../images/ProjectImages/AndroidImages/Instacalm.png";
import Salamly from "../images/ProjectImages/AndroidImages/Salamly.png";
import pricepro from "../images/ProjectImages/AndroidImages/pricepro.png";
import ohReady from "../images/ProjectImages/AndroidImages/ohreadyimage.jpg";
import fittech from "../images/ProjectImages/AndroidImages/fittechimage.png";
import Airhome from "../images/ProjectImages/AndroidImages/airhome.png";
import diseaseImage from "../images/ProjectImages/AndroidImages/diseaseimage.png";
import Amici from "../images/ProjectImages/AndroidImages/amiciimage.png";
import Locksmith from "../images/ProjectImages/AndroidImages/locksmithweb.png";
import Roshi from "../images/ProjectImages/AndroidImages/roshiImage.png";
import unitedproposal from "../images/ProjectImages/AndroidImages/unitedimage.png";
import Flavourz from "../images/ProjectImages/AndroidImages/restaurantimage.png";
import mycash from "../images/ProjectImages/AndroidImages/mcashimage.png";
import EkCabFare from "../images/ProjectImages/AndroidImages/ekcabimage.png";
import darazan from "../images/ProjectImages/AndroidImages/darzanImage.png";
import funkyImage from "../images/ProjectImages/AndroidImages/funkyImage.png";
import wirdBook from "../images/ProjectImages/AndroidImages/wirdBook.jpg";
import EgoBest from "../images/ProjectImages/AndroidImages/egybestImage.png";
import vvpa from "../images/ProjectImages/AndroidImages/vvpa.png";
import wikifortune from "../images/ProjectImages/AndroidImages/wikifortune.png";

const Work = () => {
  const [allproject, setAllproject] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("mobiledevelopment");

  const handleViewProject = () => {
    setAllproject(!allproject);
  };

  const filteredProjects = ProjectsData.filter(
    (project) => project.category === selectedCategory
  );

  const initialProjects = filteredProjects.slice(0, 9);
  const remainingProjects = filteredProjects.slice(9);

  const shouldShowViewMoreButton = filteredProjects.length > 6;

  return (
    <section id="work" className="bg-royalblue2 w-full">
      <div className="flex justify-center items-center gap-2 py-4">
        <span className="items-center">
          <FontAwesomeIcon
            icon={faLaptopCode}
            className="h-14 w-14 text-white"
          />
        </span>
        <h1>
          <span className="text-3xl md:text-4xl font-bold text-white">
            Projects
          </span>
          <span className="text-3xl md:text-4xl font-bold text-greenglow">
            {" "}
            Made
          </span>
        </h1>
      </div>

      {/* Tabs Button */}
      <div className="flex gap-2 px-0 md:px-32 justify-center">
        <button
          onClick={() => setSelectedCategory("webdevelopment")}
          className={` text-sm md:text-2xl p-2 ${
            selectedCategory === "webdevelopment"
              ? "text-white border-b-2 border-greenglow"
              : "text-lightgrey"
          }`}
        >
          Web Development
        </button>
        <button
          onClick={() => setSelectedCategory("mobiledevelopment")}
          className={` text-sm md:text-2xl p-2 ${
            selectedCategory === "mobiledevelopment"
              ? "text-white border-b-2 border-greenglow"
              : "text-lightgrey "
          }`}
        >
          Mobile Development
        </button>

        <button
          onClick={() => setSelectedCategory("backenddevelopment")}
          className={` text-sm md:text-2xl p-2 ${
            selectedCategory === "backenddevelopment"
              ? "text-white border-b-2 border-greenglow"
              : "text-lightgrey"
          }`}
        >
          Backend Development
        </button>
      </div>

      {/* Portfolio Section */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-full gap-4 md:gap-6 mt-4 px-4 py-4 md:py-10 ">
          {initialProjects.map((Item, index) => {
            return (
              Item.disable !== "true" && (
                <div
                  key={index}
                  className="w-full h-[260px] md:max-w-[300px] lg:max-w-[400px] relative"
                >
                  <img
                    src={Item.img}
                    alt={Item.alt}
                    className="object-cover w-full h-full rounded-md "
                  />
                  {/* fill change to cover */}
                  <div className="absolute bottom-0 w-full">
                    <div className="bg-royalblue1 rounded-b-md px-2 py-4 text-xl font-bold text-white transition duration-300 pointer-events-none">
                      {Item.projectname}
                    </div>
                  </div>

                  {/* hover div h-full fix required */}
                  <div className="flex flex-col gap-3 absolute opacity-0 hover:opacity-100 bg-white bottom-0 right-0 transition duration-300 ">
                    <h3 className="text-xl bg-royalblue1 px-2 py-4 font-bold text-white">
                      {Item.projectname}
                    </h3>
                    <h1 className="px-5 text-base ">
                      {Item.projectdescription}
                    </h1>
                    {/* web links */}
                    {selectedCategory !== "mobiledevelopment" ? (
                      <div className="flex justify-center px-5 py-3 ">
                        {selectedCategory !== "mobiledevelopment" &&
                          Item.webLink && (
                            <a href={Item.webLink} target="blank">
                              <button className="flex gap-1 justify-center items-center py-3 px-5 rounded-md text-white bg-royalblue1 text-base button-gap">
                                <FontAwesomeIcon
                                  icon={faEye}
                                  className="h-4 w-4 text-center "
                                />
                                View
                              </button>
                            </a>
                          )}
                      </div>
                    ) : (
                      <div className="flex justify-between px-5 py-3">
                        {selectedCategory === "mobiledevelopment" &&
                          Item.androidLink && (
                            <a
                              href={Item.androidLink}
                              target="blank"
                              className=""
                            >
                              <button className="flex gap-1 justify-center items-center py-3 px-5 rounded-md text-white bg-royalblue1 text-base button-gap">
                                <FontAwesomeIcon
                                  icon={faEye}
                                  className="h-4 w-4 text-center "
                                />
                                Android
                              </button>
                            </a>
                          )}
                        {selectedCategory === "mobiledevelopment" &&
                          Item.iOSLink && (
                            <a href={Item.iOSLink} className="">
                              <button className="flex gap-1 justify-center items-center py-3 px-5 rounded-md text-white bg-royalblue1 text-base button-gap">
                                <FontAwesomeIcon
                                  icon={faEye}
                                  className="h-4 w-4 text-center "
                                />
                                IOS
                              </button>
                            </a>
                          )}
                      </div>
                    )}
                  </div>
                </div>
              )
            );
          })}

          {allproject &&
            remainingProjects.map((Item, index) => (
              <div
                key={index}
                className="w-full h-[260px] md:max-w-[300px]  lg:max-w-[400px] relative"
              >
                <img
                  src={Item.img}
                  alt={Item.alt}
                  className="object-cover w-full h-full rounded-md"
                />
                {/* fill change to cover */}
                <div className="absolute bottom-0 w-full">
                  <div className="bg-royalblue1 rounded-b-md px-2 py-4 text-xl font-bold text-white">
                    {Item.projectname}
                  </div>
                </div>

                {/* hover div */}
                <div className="flex flex-col gap-3 absolute opacity-0 hover:opacity-100 bg-white bottom-0 right-0 transition duration-300 ">
                  <h3 className="text-xl bg-royalblue1 px-2 py-4 font-bold text-white">
                    {Item.projectname}
                  </h3>
                  <h1 className="px-5 text-base ">{Item.projectdescription}</h1>
                  {/* web links */}
                  {selectedCategory !== "mobiledevelopment" ? (
                    <div className="flex justify-center px-5 py-3 ">
                      {selectedCategory !== "mobiledevelopment" &&
                        Item.webLink && (
                          <a href={Item.webLink} target="blank">
                            <button className="flex gap-1 justify-center items-center py-3 px-5 rounded-md text-white bg-royalblue1 text-base button-gap">
                              <FontAwesomeIcon
                                icon={faEye}
                                className="h-4 w-4 text-center mt-1"
                              />
                              View
                            </button>
                          </a>
                        )}
                    </div>
                  ) : (
                    <div className="flex justify-between px-5 py-3">
                      {selectedCategory === "mobiledevelopment" &&
                        Item.androidLink && (
                          <a
                            href={Item.androidLink}
                            target="blank"
                            className=""
                          >
                            <button className="flex gap-1 justify-center items-center py-3 px-5 rounded-md text-white bg-royalblue1 text-base button-gap">
                              <FontAwesomeIcon
                                icon={faEye}
                                className="h-4 w-4 text-center mt-1"
                              />
                              Android
                            </button>
                          </a>
                        )}
                      {selectedCategory === "mobiledevelopment" &&
                        Item.iOSLink && (
                          <a href={Item.iOSLink} className="bg-green">
                            <button className="flex gap-1 justify-center items-center py-3 px-5 rounded-md text-white bg-royalblue1 text-base button-gap">
                              <FontAwesomeIcon
                                icon={faEye}
                                className="h-4 w-4 text-center mt-1"
                              />
                              IOS
                            </button>
                          </a>
                        )}
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Conditional View More Button */}
      {shouldShowViewMoreButton && (
        <div className="" onClick={() => handleViewProject()}>
          <ViewButton
            buttonValue={allproject ? "View Less" : "View More"}
            work={true}
          />
        </div>
      )}
    </section>
  );
};

export default Work;

export const ProjectsData = [
  // Android
  {
    img: BargainX,
    alt: "BargainX",
    projectname: "BargainEx",
    projectdescription:
      "Bargain Exchange is your ultimate platform for buying and selling, offering a diverse range of categories from electronics to fashion and collectibles",
    webLink: "",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.pauspan.bargainex&pli=1",
    iOSLink: "https://apps.apple.com/pk/app/bargain-exchange/id6468424905",
    category: "mobiledevelopment",
    disable: "false",
  },
  {
    img: Salamly,
    alt: "Salamly",
    projectname: "Salamly",
    projectdescription:
      "Descover the ultimate Islamic app for Quran reading, Islamic qoutes and social networking.",
    webLink: "",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.salamgram.salamgram",
    iOSLink:
      "https://apps.apple.com/pk/app/salamly-muslim-daily-app/id1612064624",
    category: "mobiledevelopment",
    disable: "false",
  },
  {
    img: ohReady,
    alt: "ohReady",
    projectname: "ohReady",
    projectdescription:
      "With Oh Ready you can order food from your mobile phone in your town. Oh Ready will delivery your food at your door step.",
    webLink: "",
    androidLink: "",
    iOSLink: "https://apps.apple.com/pk/app/oh-ready/id1616311272",
    category: "mobiledevelopment",
    disable: "false",
  },
  {
    img: Instacalm,
    alt: "Instacalm",
    projectname: "InstaCalm Anxiety",
    projectdescription:
      "InstaCalm Anxiety Treatment app, employs 30+ Cognitive Behavioural Hypnotherapy Sessions for instant anxiety relief.",
    webLink: "",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.instacalm.instacalm_anxiety_treatment1",
    iOSLink:
      "https://apps.apple.com/pk/app/instacalm-anxiety-treatment/id1566417763",
    category: "mobiledevelopment",
    disable: "false",
  },
  {
    img: funkyImage,
    alt: "funkyImage",
    projectname: "Funky",
    projectdescription:
      "Funky is a multifaceted social media application offering modes for creators, kids, and advertisers to engage and earn.",
    webLink: "",
    androidLink: "",
    iOSLink: "",
    category: "mobiledevelopment",
    disable: "false",
  },
  {
    img: Roshi,
    alt: "Roshi",
    projectname: "Roshi Career",
    projectdescription:
      "Roshi is a specialized career app akin to linkedIn, tailored for recruiters and job seekers featuring a built-in CV generator for streamlined professional profile creation.",
    webLink: "",
    androidLink: "",
    iOSLink: "",
    category: "mobiledevelopment",
    disable: "false",
  },

  {
    img: ohReady,
    alt: "ohReady",
    projectname: "ohReady Admin",
    projectdescription:
      "With Oh Ready you can order Food from your mobile phone in your town. Oh Ready Will delivery your food at your door step.",
    webLink: "",
    androidLink: "",
    iOSLink: "",
    category: "mobiledevelopment",
    disable: "false",
  },
  {
    img: fittech,
    alt: "fittech",
    projectname: "Fittech",
    projectdescription:
      "Fittech App, designed for gyms and spanish speakers, is a fitness-oriented application facilitating daily fitness tracking.",
    webLink: "",
    androidLink: "",
    iOSLink: "",
    category: "mobiledevelopment",
    disable: "false",
  },
  // {
  //   img: FlipcartProject,
  //   alt: "projectimage",
  //   projectname: "Ping",
  //   projectdescription:
  //     "Ping, a dynamic social media app, facilitates local connections with features like nearby contacts, friend connections, news feeds and posts.",
  //   webLink: "",
  //   androidLink: "",
  //   iOSLink: "",
  //   category: "mobiledevelopment",
  //   disable: "false",
  // },
  {
    img: Airhome,
    alt: "Airhome",
    projectname: "AirHomeRestaurant",
    projectdescription:
      "AirHomeRestaurant is a specialized application catering to a specific restaurant, featuring a dual interface for sellers and buyers, akin to platforms like FoodPanda. ",
    webLink: "",
    androidLink: "",
    iOSLink: "",
    category: "mobiledevelopment",
    disable: "false",
  },
  // {
  //   img: FlipcartProject,
  //   alt: "projectimage",
  //   projectname: "IQRA Quran App",
  //   projectdescription:
  //     "IQRA is a Quran app offering features like Quranic content, prayer times, tasbeeh, and information on names of Allah and Prophet Muhammad.",
  //   webLink: "",
  //   androidLink: "",
  //   iOSLink: "",
  //   category: "mobiledevelopment",
  //   disable: "false",
  // },
  {
    img: diseaseImage,
    alt: "Resverse Disease",
    projectname: "Reverse Disease",
    projectdescription:
      "Reverse Disease is a health tracking app that monitors fasting, steps, weight, and more, providing a comprehensive tool for users aiming to improve their overall well-being.",
    webLink: "",
    androidLink: "",
    iOSLink: "",
    category: "mobiledevelopment",
    disable: "false",
  },
  {
    img: Amici,
    alt: "Amici",
    projectname: "Amici",
    projectdescription:
      "Amici App is designed to streamline the process of booking a chef for entire days to cater to your culinary needs at home.",
    webLink: "",
    androidLink: "",
    iOSLink: "",
    category: "mobiledevelopment",
    disable: "false",
  },
  {
    img: unitedproposal,
    alt: "United Proposal",
    projectname: "United Proposal",
    projectdescription:
      "United Proposal is an online matchmaking platform facilitating the search for ideal life partners while also offering features like discovering wedding venues and related services. ",
    webLink: "",
    androidLink: "",
    iOSLink: "",
    category: "mobiledevelopment",
    disable: "false",
  },
  {
    img: pricepro,
    alt: "pricepro",
    projectname: "PricePro",
    projectdescription:
      "Application to manage menus of different branches of restaurant. Copy/Move items across branches and set different rates.",
    webLink: "",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.mycompany.price",
    iOSLink: "",
    category: "mobiledevelopment",
    disable: "false",
  },
  {
    img: mycash,
    alt: "MyCash",
    projectname: "MyCash",
    projectdescription:
      "MyCash is a no-interest loan application designed to provide easy and compassionate financial assistance to users in need, offering a user-friendly",
    webLink: "",
    androidLink: "",
    iOSLink: "",
    category: "mobiledevelopment",
    disable: "false",
  },
  {
    img: Flavourz,
    alt: "Flavourz Restaurant",
    projectname: "Flavourz Restaurant",
    projectdescription:
      "Flavourz is a dedicated food application tailored for a specific restaurant, offering a seamless and specialized platform for customers to explore.",
    webLink: "",
    androidLink: "",
    iOSLink: "",
    category: "mobiledevelopment",
    disable: "false",
  },
  // {
  //   img: ProjectImage,
  //   alt: "projectimage",
  //   projectname: "Tritt",
  //   projectdescription:
  //     "Tritt is a FlutterFlow app resembling TrueCaller, with features such as SMS fetching and storage to Firestore, as well as Agora chat and call functionalities",
  //   webLink: "",
  //   androidLink: "",
  //   iOSLink: "",
  //   category: "mobiledevelopment",
  //   disable: "false",
  // },
  {
    img: Locksmith,
    alt: "Locksmith",
    projectname: "LockSmith Guru",
    projectdescription:
      "Locksmith Guru is a specialized app designed for resolving various types of locks in Dubai, including those on cars, doors, and more",
    webLink: "",
    androidLink: "",
    iOSLink: "",
    category: "mobiledevelopment",
    disable: "false",
  },
  {
    img: EkCabFare,
    alt: "EkCabFare",
    projectname: "EkCabFare",
    projectdescription:
      "This app displays and compares fares between Uber, Careem, and Ola cabs, utilizing scraping techniques to showcase real-time pricing information.",
    webLink: "",
    androidLink: "",
    iOSLink: "",
    category: "mobiledevelopment",
    disable: "false",
  },
  {
    img: darazan,
    alt: "Darazn",
    projectname: "Darazn",
    projectdescription:
      "Darazn App offers expert stitching services for men's shalwar qameez, ensuring a perfect fit and premium craftsmanship. Get your traditional attire tailored to perfection with just a few taps.",
    webLink: "",
    androidLink: "",
    iOSLink: "",
    category: "mobiledevelopment",
    disable: "false",
  },
  {
    img: wirdBook,
    alt: "wirdBook",
    projectname: "Wird Book",
    projectdescription:
      "The Wird Book is a compilation of litanies based on Prophetic traditions as recommended by Imam Abulhasan Al-Shadhili, the Master of the Qadiri-Shadhili.",
    webLink: "",
    androidLink: "https://play.google.com/store/apps/details?id=wirdbook.eito",
    iOSLink: "",
    category: "mobiledevelopment",
    disable: "false",
  },
  {
    img: EgoBest,
    alt: "EgyBest",
    projectname: "EgyBest",
    projectdescription:
      "An Application which is using Movies APIs to show movies data. The APIs provided by TMdb.",
    webLink: "",
    androidLink: "",
    iOSLink: "",
    category: "mobiledevelopment",
    disable: "false",
  },
  {
    img: vvpa,
    alt: "vvpa",
    projectname: "vvpa",
    projectdescription:
      "Enjoy seamless video playback with our app, loading videos directly from your device or streaming online content effortlessly. Watch your favorite videos anytime, anywhere, all in one place!",
    webLink: "",
    androidLink: "",
    iOSLink: "",
    category: "mobiledevelopment",
    disable: "false",
  },
  {
    img: wikifortune,
    alt: "wikifortune",
    projectname: "wikifortune",
    projectdescription:
      "Test your knowledge with our MCQ-based app and earn coins for every correct answer. Challenge yourself and climb the leaderboard while learning and having fun!",
    webLink: "",
    androidLink: "",
    iOSLink: "",
    category: "mobiledevelopment",
    disable: "false",
  },

  // Web
  {
    img: certainlise,
    alt: "certainli",
    projectname: "Certainli.se",
    projectdescription:
      "Certainli, born from a deep comprehension of modern challenges in product compliance, is driven by a team with extensive expertise in product development.",
    webLink: "https://certainli.se/",
    androidLink: "",
    iOSLink: "",
    category: "webdevelopment",
    disable: "false",
  },
  {
    img: certainliapp,
    alt: "certainliapp",
    projectname: "Certainli",
    projectdescription:
      "Certainli is a robust platform specializing in scraping electronic components and certificates from diverse sources, presenting the information in an organized manner. ",
    webLink: "https://app.certain.li/#/login",
    androidLink: "",
    iOSLink: "",
    category: "webdevelopment",
    disable: "false",
  },
  {
    img: femclinic,
    alt: "femclinic",
    projectname: "FemClinic",
    projectdescription:
      "Revolutionizing women's health with HarmonyHealth, a modern E-doctor platform seamlessly integrating hormonal health understanding.",
    webLink: "https://www.fem-clinic.com/",
    androidLink: "",
    iOSLink: "",
    category: "webdevelopment",
    disable: "false",
  },
  {
    img: Globe,
    alt: "Globe",
    projectname: "Globe",
    projectdescription:
      "A Globe is a unique website where each user interaction results in a dot on a Three.js globe, creating a visual representation. .",
    webLink: "http://34.29.235.205/",
    androidLink: "",
    iOSLink: "",
    category: "webdevelopment",
    disable: "false",
  },
  {
    img: Abonline,
    alt: "Ab Online",
    projectname: "Ab Online Earning",
    projectdescription:
      "AB Online Earning provided the beat platform for you. That help you to Boast your Business and Sales with Right Audience and make money online easily, We are working on different social media platfroms like Youtube, Facebook, Intsgram, Tiktok Etc.",
    webLink: "",
    androidLink: "",
    iOSLink: "",
    category: "webdevelopment",
    disable: "false",
  },

  // Backend
  {
    img: hpappen,
    alt: "hpappen",
    projectname: "Hp Appen",
    projectdescription:
      "Hpappen, a Swedish-based MCQ website, offering a streamlined and comprehensive approach to mastering multiple-choice questions.",
    webLink: "https://www.hpappen.se/",
    androidLink: "",
    iOSLink: "",
    category: "backenddevelopment",
    disable: "false",
  },
  {
    img: hpappenProduction,
    alt: "hpappenProduction",
    projectname: "Hp Appen Production",
    projectdescription:
      "Hpappen, a Swedish-based MCQ website, offering a streamlined and comprehensive approach to mastering multiple-choice questions.",
    webLink: "https://app.hpappen.se/",
    androidLink: "",
    iOSLink: "",
    category: "backenddevelopment",
    disable: "false",
  },
  {
    img: Globedeployment,
    alt: "Globe Deployment",
    projectname: "Globe Deployment",
    projectdescription:
      "A Globe is a unique website where each user interaction results in a dot on a Three.js globe, creating a visual representation.",
    webLink: "",
    androidLink: "",
    iOSLink: "",
    category: "backenddevelopment",
    disable: "false",
  },
];
