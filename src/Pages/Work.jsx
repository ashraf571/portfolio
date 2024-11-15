import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import ViewButton from "../Components/Button";
// web Images
import tilly from "../images/tilly.png";
import kwuk from "../images/kwuk.png";
import femclinic from "../images/ProjectImages/webImages/femclinic.png";
import brightbee from "../images/brightbee.png";
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
  const [selectedCategory, setSelectedCategory] = useState("webdevelopment");

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
        {/* <button
          onClick={() => setSelectedCategory("mobiledevelopment")}
          className={` text-sm md:text-2xl p-2 ${
            selectedCategory === "mobiledevelopment"
              ? "text-white border-b-2 border-greenglow"
              : "text-lightgrey "
          }`}
        >
          Mobile Development
        </button> */}

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
  {
    img: hpappen,
    alt: "hpappen",
    projectname: "Hp Appen",
    projectdescription:
      "Hpappen, a Swedish-based MCQ website, offering a streamlined and comprehensive approach to mastering multiple-choice questions.",
    webLink: "https://www.hpappen.se/",
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
    img: tilly,
    alt: "tilly",
    projectname: "TillyFertility",
    projectdescription:
      "The psychological impact of infertility is real - we know first-hand. That’s why we’ve created an app that holds your hand and helps you connect with others on the same journey.",
    webLink: "https://mytilly.co/en",
    androidLink: "",
    iOSLink: "",
    category: "webdevelopment",
    disable: "false",
  },
  {
    img: tilly,
    alt: "tilly",
    projectname: "TillyFertility",
    projectdescription:
      "The psychological impact of infertility is real - we know first-hand. That’s why we’ve created an app that holds your hand and helps you connect with others on the same journey.",
    webLink: "https://mytilly.co/en",
    androidLink: "",
    iOSLink: "",
    category: "backenddevelopment",
    disable: "false",
  },

  {
    img: brightbee,
    alt: "brightbee",
    projectname: "Brightbee",
    projectdescription:
      "Use our 5-click platform or simply integrate your website to create your ads automatically.",
    webLink: "https://brightbee.co/",
    androidLink: "",
    iOSLink: "",
    category: "webdevelopment",
    disable: "false",
  },
  {
    img: brightbee,
    alt: "brightbee",
    projectname: "Brightbee",
    projectdescription:
      "We trace your customers using our advanced Bright Targeting™ system. To ensure that your ads will reach the right audience at the right time.",
    webLink: "https://brightbee.co/",
    androidLink: "",
    iOSLink: "",
    category: "backenddevelopment",
    disable: "false",
  },

  {
    img: kwuk,
    alt: "kwuk",
    projectname: "kwuk",
    projectdescription:
      "The psychological impact of infertility is real - we know first-hand. That’s why we’ve created an app that holds your hand and helps you connect with others on the same journey.",
    webLink: "https://ai.kwuk.com/",
    androidLink: "",
    iOSLink: "",
    category: "webdevelopment",
    disable: "false",
  },
  {
    img: kwuk,
    alt: "kwuk",
    projectname: "kwuk",
    projectdescription:
      "The psychological impact of infertility is real - we know first-hand. That’s why we’ve created an app that holds your hand and helps you connect with others on the same journey.",
    webLink: "https://ai.kwuk.com/",
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
