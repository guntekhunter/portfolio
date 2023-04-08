import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import projectList from "../Data/ProjectList.json";
import YouTube from "react-youtube";

export default function Portofolio() {
  const [scrollPosition, setScrollPosition] = useState();
  const [data, setData] = useState();
  const [videoId, setVideoId] = useState();
  const [activeNav, setActiveNav] = useState(false);

  // get the id base on project that was clicked
  const id = useParams();
  const location = useLocation();

  // auto scroll from top using useScroll from motion
  const { scrollY } = useScroll();

  // transition duration for motion animation
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  // method to automate a scroll from top after changging page
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollPosition(latest);
  });

  // get data from json file base on id that was passing from previous page
  // const selection = projectList
  const section1 = projectList[0].section1;
  const section2 = projectList[0].section2;
  const gabung = [...section1, ...section2];
  console.log(gabung);

  useEffect(() => {
    const selected = gabung.filter((data) => data.id === parseInt(id.id));
    setData(selected);
  }, [projectList, id]);

  // react youtube
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  React.useEffect(() => {
    const getVideo = async () => {
      const dataUrl = data[0].url;
      const idVideo = dataUrl.split("v=")[1];
      setVideoId(idVideo);
    };
    getVideo();
  }, [data]);

  console.log(videoId);

  // navbar mobile handle
  const handleNavbar = () => {
    console.log("clicked");
    if (activeNav === false) {
      setActiveNav(true);
    } else {
      setActiveNav(false);
    }
    console.log(activeNav);
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="overflow-hidden md:overflow-visible"
    >
      {/* navbar */}
      {/* navbar desktop*/}
      <motion.div
        className={`flex items-center justify-around text-[#353435] z-50 sticky top-0 ${
          scrollPosition > 0
            ? "bg-black duration-500 text-white"
            : "duration-500"
        } `}
      >
        <nav className="md:flex items-center justify-between w-[80%] h-[1rem] realtive z-10 py-5 hidden">
          <div>
            <h1 className="font-bold text-[15px]">AGUNG</h1>
          </div>
          <div className="w-[30%] relative">
            <Link to="/">
              <p
                className="text-[9px] font-bold z-10 cursor-pointer duration-200 absolute right-0 top-[-.4rem]"
                id="sumary"
              >
                Main Menu
              </p>
            </Link>
          </div>
        </nav>
      </motion.div>
      {/* navbar mobile */}
      <div
        className={`justify-around flex fixed top-0 right-0 left-0 md:hidden z-50 ${
          scrollPosition > 0
            ? "bg-black duration-500 text-white"
            : "duration-500"
        }`}
      >
        <div className="w-[80%] flex justify-between">
          <div>
            <h1
              className={`${
                activeNav ? "text-white duration-100 ease-in" : ""
              } font-bold`}
            >
              AGUNG
            </h1>
          </div>
          <div
            className={`mt-[-.2rem] ${
              activeNav
                ? "w-[.9rem] pt-[.5rem] duration-100"
                : "w-[1rem] pt-[.5rem] duration-100"
            }`}
          >
            {scrollPosition > 0 ? (
              <img
                src={`${
                  activeNav
                    ? "../icon/x-white.png"
                    : "../icon/hamburger-white.png"
                } `}
                className="duration-100"
                alt=""
                onClick={handleNavbar}
              />
            ) : (
              <img
                src={`${
                  activeNav ? "../icon/x-white.png" : "../icon/hamburger.png"
                }`}
                alt=""
                className="duration-100"
                onClick={handleNavbar}
              />
            )}
          </div>
        </div>
        {/* page selector mobile */}
        <div
          className={`absolute left-0 pl-[1.9rem] pt-[2rem] bg-black w-full z-[-1] transition-all duration-500 ease-in ${
            activeNav ? "top-0" : "top-[-20rem]"
          }`}
        >
          <ul className="text-[9px] font-bold justify-between w-full z-10 space-y-[1rem] py-[1rem] ml-[1rem]">
            <Link to="/"
              className="z-10 cursor-pointer duration-200 text-white"
              id="sumary"
            >
              Main Menu
            </Link>
          </ul>
        </div>
      </div>
      {/* section 1 */}
      <div className="grid w-full justify-items-center relative h-[100%]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="m-4"
        >
          {data &&
            data.map((item, key) => (
              <h1 className="text-[5rem] font-bold" key={key}>
                {item.name.toUpperCase()}
              </h1>
            ))}
        </motion.div>
        <div className="w-full grid justify-items-center">
          <motion.div
            initial={{ y: "-50%", width: location.state }}
            animate={{
              y: 0,
              width: "100%",
              height: window.innerWidth > 1440 ? 400 : 700,
              transition: { delay: 0.1, ...transition },
            }}
          >
            <div className="" />
            {data &&
              data.map((item, key) => (
                <motion.img
                  key={key}
                  initial={{ scale: 1 }}
                  src={item.image}
                  transition={transition}
                  alt=""
                  className=" top-[1rem]"
                />
              ))}
          </motion.div>
        </div>
      </div>

      {/* section 2 */}
      <div className="grid content-around justify-items-center py-[5rem] bg-black text-white">
        <div className="w-[80%] grid grid-cols-2 gap-8">
          <div className="grid content-center">
            <div className="grid content-center  ">
              <p className="grid content-center font-bold text-[2rem]">
                Here's what
              </p>
              <p className="grid content-center font-bold text-[2rem]">
                I did in this project
              </p>
            </div>
          </div>
          <div className="">
            <p>
              I was responsible for developing the interface of Upana Studio's
              mailing website, based on a stunning UI/UX design. To make sure
              the website is easy to use and looks great, I used React.js and
              tailwind. I also connected the website to the necessary API using
              axios, so everything works as it should. After three months of
              hard work, I successfully completed this project and I'm excited
              to share it with you.
            </p>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="grid content-around justify-items-center py-9">
        <div className="w-[80%]">
          <div className="grid content-center">
            <div className="flex justify-around">
              <p className="grid content-center font-bold text-[2rem] pb-[2rem]">
                OVERVIEW
              </p>
            </div>
          </div>
          <div className="flex justify-around">
            <YouTube videoId={videoId} opts={opts} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
