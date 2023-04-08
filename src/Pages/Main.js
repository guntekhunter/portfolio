import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { Link } from "react-router-dom";
import ModalProject from "../Component/ModalProject";

import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import projectList2 from "../Data/ProjectList.json";
import { useInView } from "react-intersection-observer";
import ExperienceSection from "../Component/ExperienceSection";
import SkillsSection from "../Component/SkillsSection";

export default function Main() {
  const refSumary = useRef(null);
  const refMyWork = useRef(null);
  const refMyWorkMobile = useRef(null);
  const refExperience = useRef(null);
  const refSkills = useRef(null);
  const [next, setNext] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [idProject, setIdProject] = useState();
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState();
  const [hoverId, setHoverId] = useState();
  const [scrollPosition, setScrollPosition] = useState();
  const containerRef = useRef(null);
  const allRef = useRef(null);
  let [activeNav, setActiveNav] = useState(false);

  const projectList = [
    {
      section1: [
        {
          id: 1,
          image: "/project/1.jpg",
          width: "20rem",
          class: "inset-[9rem] w-[15rem] hover:w-[17rem]",
          name: "Persuratan Upana",
          factoryX: 0.1,
          factoryY: 0.1,
        },
        {
          id: 2,
          image: "/project/3.jpg",
          width: "20rem",
          class: "inset-[7rem] left-[35rem] w-[18rem] hover:w-[19rem]",
          name: "Confie.id",
          factoryX: 0.2,
          factoryY: 0.2,
        },
        {
          id: 3,
          image: "/project/7.jpg",
          width: "15rem",
          class: "inset-[17rem] left-[60rem] w-[15rem] hover:w-[17rem]",
          name: "Car Rental",
          factoryX: 0.2,
          factoryY: 0.2,
        },
        {
          id: 4,
          image: "/project/9.jpg",
          width: "17rem",
          class: "right-[19rem] top-[28rem] w-[15rem] hover:w-[17rem]",
          name: "Personal Website",
          factoryX: 0.4,
          factoryY: 0.4,
        },
        {
          id: 5,
          image: "/project/6.jpg",
          width: "20rem",
          class: "inset-[15rem] top-[25rem] w-[16rem] hover:w-[17rem]",
          name: "Digides FAQ",
          factoryX: 0.3,
          factoryY: 0.3,
        },
      ],
      section2: [
        {
          id: 6,
          image: "/project/10.jpg",
          width: "20rem",
          class: "inset-[9rem] w-[15rem] hover:w-[17rem]",
          name: "Pisangji",
          description:
            "Pisangji is a personal project that I created to improve my web programming skills. I designed the website using only HTML and CSS to gain a better understanding of the basics of web programming. To enhance the website's functionality, I incorporated a library that allows users to locate the brand based on its physical location. Furthermore, I utilized CSS grid to create an aesthetically pleasing and organized layout for the website. Overall, this project served as a valuable learning experience that helped me to strengthen my web programming skills",
          url: "https://www.youtube.com/watch?v=9e1jGNzXI3o",
          factoryX: 0.3,
          factoryY: 0.3,
        },
        {
          id: 7,
          image: "/project/11.jpg",
          width: "20rem",
          class: "inset-[7rem] left-[35rem] w-[18rem] hover:w-[19rem]",
          name: "Titik Temu",
          description:
            "I created a project that involves cloning an existing website called 'Titik Temu. The project was designed using only HTML and CSS. My primary goal was to gain a better understanding of web layouting by attempting to recreate an already existing website. Through this project, I was able to study the design principles, layout, and features of 'Titik Temu' and successfully replicate them. Overall, this project was a challenging yet fulfilling learning experience that helped me to develop my skills in web development",
          url: "https://www.youtube.com/watch?v=9e1jGNzXI3o",
          factoryX: 0.5,
          factoryY: 0.5,
        },
        {
          id: 8,
          image: "/project/8.jpg",
          width: "15rem",
          class: "inset-[18rem] left-[60rem] w-[13rem] hover:w-[17rem]",
          name: "Kampusku",
          description:
            "This full-stack project was developed using PHP as the primary programming language. It comprises of a server-side and a user-side, where the user-side is dynamic and can be updated from the server-side. I created an interface for the project and also built a database to manage the configuration with the interface. To ensure an aesthetically pleasing and user-friendly interface, I utilized the Bootstrap framework and incorporated AOS animation to enhance the user experience. Additionally, I used the Codigniter framework to streamline the development process and MySQL to manage the database effectively. Overall, this project served as an excellent opportunity for me to hone my full-stack development skills and create a functional and interactive website.",
          url: "https://www.youtube.com/watch?v=9e1jGNzXI3o",
          factoryX: 0.2,
          factoryY: 0.2,
        },
        {
          id: 9,
          image: "/project/4.jpg",
          width: "12rem",
          class: "right-[19rem] top-[28rem] w-[15rem] hover:w-[17rem]",
          name: "Indobild",
          description:
            "I developed a website using HTML and CSS as a part of my internship program application for Indo Bild. The program required applicants to create a website based on a given design. I was able to create the website within seven days. However, at the time of development, I was not able to incorporate responsiveness in the website. Nonetheless, the project was a valuable learning experience that helped me to develop my web development skills and prepare me for future projects",
          url: "https://www.youtube.com/watch?v=9e1jGNzXI3o",
          factoryX: 0.3,
          factoryY: 0.4,
        },
      ],
    },
  ];

  // animation on scroll
  const ref1 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.2, 0.8], [1, 0]);

  // transition with motion
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.9] };
  // slider
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 1800;
    setNext(false);
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 1800;
    setNext(true);
  };

  const handleScroll = () => {
    setNext(containerRef?.current.scrollLeft);
  };

  const handleScrollSection = (e) => {
    if (e.target.id === "sumary") {
      setScroll(allRef?.current.scrollTop);
    }
  };

  const handleHover = (e) => {
    const id = parseInt(e.target.id);
    setIdProject(id);
    setHoverId(parseInt(e.target.id));
  };
  const handleLeave = (e) => {
    setIdProject(null);
  };

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollPosition(latest);
  });

  // animation on view
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 100,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw", opacity: 0 });
    }
    console.log(`inview ${inView}`);
  }, [inView]);

  // scroll to component with navbar
  const clickSumary = () => {
    refSumary.current?.scrollIntoView({ behavior: "smooth" });
  };
  const clickMyWork = () => {
    refMyWork.current?.scrollIntoView({ behavior: "smooth" });
  };
  const clickMyWorkMobile = () => {
    refMyWorkMobile.current?.scrollIntoView({ behavior: "smooth" });
  };

  const clickExperience = () => {
    refExperience.current?.scrollIntoView({ behavior: "smooth" });
  };
  const clickSkills = () => {
    refSkills.current?.scrollIntoView({ behavior: "smooth" });
  };

  // navbar mobile function
  const handleNavbar = () => {
    console.log("clicked");
    if (activeNav === false) {
      setActiveNav(true);
    } else {
      setActiveNav(false);
    }
    console.log(activeNav);
  };

  // make 2 section data into one data
  const section1 = projectList2[0].section1;
  const section2 = projectList2[0].section2;
  const gabung = [...section1, ...section2];
  console.log(gabung);

  return (
    <div className="overflow-hidden md:overflow-visible relative">
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
          <div className="w-[30%]">
            <ul className="inline-flex text-[9px] font-bold justify-between w-full z-10">
              <li
                className="z-10 cursor-pointer duration-200"
                id="sumary"
                onClick={clickSumary}
              >
                Sumary
              </li>
              <li
                className="text-[#BEBBB5] hover:text-[#353435] z-10 cursor-pointer duration-200"
                id="my work"
                onClick={clickMyWork}
              >
                My Work
              </li>
              <li
                className="text-[#BEBBB5] hover:text-[#353435] z-10 cursor-pointer duration-200"
                id="experience"
                onClick={clickExperience}
              >
                Experience
              </li>
              <li
                className="text-[#BEBBB5] hover:text-[#353435] z-10 cursor-pointer duration-200"
                id="skills"
                onClick={clickSkills}
              >
                Skils
              </li>
            </ul>
          </div>
        </nav>
      </motion.div>

      {/* navbar mobile */}
      <nav
        className={`justify-around flex fixed top-0 right-0 left-0 md:hidden z-50 ${
          scrollPosition > 0
            ? "bg-black duration-500 text-white"
            : "duration-500"
        } h-[2.5rem] `}
      >
        <div className="w-[80%] justify-between flex pt-[.5rem]">
          <div
            className={`${
              activeNav ? "text-white duration-100 ease-in" : ""
            } font-bold`}
          >
            <p>AGUNG</p>
          </div>
          <div
            className={`${
              activeNav
                ? "w-[.9rem] pt-[.5rem] duration-100"
                : "w-[1rem] pt-[.5rem] duration-100"
            }`}
          >
            {scrollPosition > 0 ? (
              <img
                src={`${
                  activeNav
                    ? "./icon/x-white.png"
                    : "./icon/hamburger-white.png"
                } `}
                className="duration-100"
                alt=""
                onClick={handleNavbar}
              />
            ) : (
              <img
                src={`${
                  activeNav ? "./icon/x-white.png" : "./icon/hamburger.png"
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
          <ul className=" text-[9px] font-bold justify-between w-full z-10 space-y-[1rem] py-[1rem]">
            <li
              className="z-10 cursor-pointer duration-200 text-white"
              id="sumary"
              onClick={clickSumary}
            >
              Sumary
            </li>
            <li
              className="text-[#BEBBB5] hover:text-[#353435] z-10 cursor-pointer duration-200"
              id="my work"
              onClick={clickMyWork}
            >
              My Work
            </li>
            <li
              className="text-[#BEBBB5] hover:text-[#353435] z-10 cursor-pointer duration-200"
              id="experience"
              onClick={clickExperience}
            >
              Experience
            </li>
            <li
              className="text-[#BEBBB5] hover:text-[#353435] z-10 cursor-pointer duration-200"
              id="skills"
              onClick={clickSkills}
            >
              Skils
            </li>
          </ul>
        </div>
      </nav>

      {/* summary section */}
      <div
        ref={ref1}
        className="flex items-center justify-around realtive block md:mt-0 mt-[4rem]"
      >
        <motion.div
          style={{ opacity: opacity }}
          transition={{ delay: 2 }}
          className="absolute z-0 w-full items-center justify-around realtive h-full md:flex hidden"
        >
          <MouseParallaxContainer
            useWindowMouseEvents
            className="flex w-full h-full items-center justify-around paralax z-0"
            globalFactorX={0.3}
            globalFactorY={0.3}
            resetOnLeave
          >
            <div className="w-[20rem]">
              <MouseParallaxChild
                factorX={0.1}
                factorY={0.1}
                className="w-[1rem]"
              >
                <img
                  alt=""
                  src="./icon/background/2.png"
                  className="ml-2 w-2"
                />
              </MouseParallaxChild>
              <MouseParallaxChild factorX={0.5} factorY={0.5}>
                <img
                  alt=""
                  src="./icon/background/1.png"
                  className="pt-[7rem] w-[6rem]"
                />
              </MouseParallaxChild>
            </div>
          </MouseParallaxContainer>
        </motion.div>

        <div className="w-[80%]" ref={refSumary}>
          <div className="justify-between w-full md:pt-[5rem] block md:flex ">
            {/* socialmedia */}
            <div className="media-social w-[10rem] md:mt-[4rem] hidden md:flex">
              <ul className="space-y-[1rem] flex md:block">
                <li className="rounded-full w-[2rem] bg-[#D9D9D9] p-2">
                  <img alt="" src="./icon/instagram.png"></img>
                </li>
                <li className="rounded-full w-[2rem] bg-[#D9D9D9] p-2">
                  <img alt="" src="./icon/github.png"></img>
                </li>
                <li className="rounded-full w-[2rem] bg-[#D9D9D9] p-2">
                  <img alt="" src="./icon/linkedin.png"></img>
                </li>
                <li className="rounded-full w-[2rem] bg-[#D9D9D9] p-2">
                  <img alt="" src="./icon/twitter.png"></img>
                </li>
              </ul>
            </div>

            {/* content */}
            <motion.div
              style={{ opacity: opacity }}
              className="summary-content md:w-[40rem] w-[100%] flex relative"
            >
              <div className="absolute z-0 w-[10rem] ml-100% right-0 md:hidden w-[100%] hight-[100%]">
                <img src="./foto_agung.jpg" alt=""></img>
              </div>
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={transition}
                className="summary-container z-10"
              >
                <p className="hy text-[.7rem] font-light"></p>
                <motion.p
                  style={{ opacity: opacity }}
                  className="name text-[1rem]"
                >
                  Hello There
                </motion.p>

                <p className="name text-[1.9rem] font-bold lg:text-[4.8rem]">
                  I'M A
                </p>
                <p className="name text-[1.9rem] font-bold lg:text-[4.8rem]">
                  JUNIOR
                </p>
              </motion.div>
            </motion.div>
            <div className="w-[30rem]">
              <img
                src="./foto_agung.jpg"
                alt=""
                className="w-[8rem] pb-[1.6rem] md:flex hidden"
              ></img>
              <p className="descriptions text-[.7rem] w-[20rem] md-flex hidden md:flex hidden">
                I am passionate about creating visually stunning and
                user-friendly websites that deliver exceptional browsing
                experiences to audiences. I am proficient in writing clean and
                efficient code to ensure optimal performance and responsiveness
                across all devices.
              </p>
            </div>
          </div>
          <motion.p
            style={{ opacity: opacity }}
            className="name font-bold md:ml-[7.8rem] text-[1.8rem] font-bold lg:text-[4.8rem] text-[2rem] z-10"
          >
            FRONTEND DEVELOPER
          </motion.p>
          {/* socialmedia */}
          <div className="media-social w-[100%] md:mt-[4rem] block md:hidden flex w-full justify-between mt-[1rem]">
            <div className="rounded-full w-[2rem] bg-[#D9D9D9] p-2">
              <img alt="" src="./icon/instagram.png"></img>
            </div>
            <div className="rounded-full w-[2rem] bg-[#D9D9D9] p-2">
              <img alt="" src="./icon/github.png"></img>
            </div>
            <div className="rounded-full w-[2rem] bg-[#D9D9D9] p-2">
              <img alt="" src="./icon/linkedin.png"></img>
            </div>
            <div className="rounded-full w-[2rem] bg-[#D9D9D9] p-2">
              <img alt="" src="./icon/twitter.png"></img>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="flex justify-around"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div style={{ opacity: opacity }} className="mt-6">
          <p className="">See My Portfolio</p>
          <div className="w-full flex justify-center mt-2">
            <img alt="" src="./icon/arrow.png" className="rotate-[90deg] w-5" />
          </div>
        </motion.div>
      </motion.div>

      {/* project on mobile looks */}
      <div ref={refMyWork}>
        <div className="grid grid-cols-2 gap-5 p-[2rem] md:hidden">
          {gabung &&
            gabung.map((data) => (
              <Link to={`/portofolio/${data.id}`}>
                <div className="relative shadow-md">
                  <div className="h-[3.8rem] overflow-hidden">
                    <img src={data.image} alt=""></img>
                  </div>
                  <div className="text-[.5rem] px-[.5rem] py-[.5rem]">
                    <p className="font-bold">{data.name}</p>
                    <p className="truncate ... h-[1rem]">{data.description}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>

        {/* all the project */}
        <section className="relative md:block hidden">
          {/* background paralax */}
          <div className="flex absolute z-0 w-full items-center justify-around realtive h-full ">
            <MouseParallaxContainer
              useWindowMouseEvents
              className="flex w-full h-full items-center justify-around paralax"
              globalFactorX={0.3}
              globalFactorY={0.3}
              resetOnLeave
            >
              <div className="w-[20rem]">
                <MouseParallaxChild
                  factorX={0.1}
                  factorY={0.1}
                  className="w-[1rem]"
                >
                  <img
                    alt=""
                    src="./icon/background/2.2.png"
                    className="mt-[1rem] w-2"
                  />
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.5} factorY={0.5}>
                  <img
                    alt=""
                    src="./icon/background/2.1.png"
                    className="pt-[7rem] ml-[25rem] w-[5rem]"
                  />
                </MouseParallaxChild>
              </div>
              <div className="w-[20rem]">
                <MouseParallaxChild
                  factorX={0.1}
                  factorY={0.1}
                  className="w-[1rem]"
                >
                  <div className="w-[10rem] h-[15rem]">
                    <MouseParallaxChild factorX={0.1} factorY={0.1}>
                      <img
                        alt=""
                        src="./icon/background/2.2.png"
                        className="mt-[-14rem] ml-[15rem] w-2"
                      />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.5} factorY={0.5}>
                      <img
                        alt=""
                        src="./icon/background/2.1.png"
                        className="mt-[2rem] ml-[8rem] w-[5rem]"
                      />
                    </MouseParallaxChild>
                  </div>
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.1} factorY={0.5}>
                  <img
                    alt=""
                    src="./icon/background/2.2.png"
                    className="ml-[15rem] mt-[5rem] w-[.51rem]"
                  />
                </MouseParallaxChild>
              </div>
            </MouseParallaxContainer>
          </div>
          <div
            className={`hover:opacity-100 opacity-0 duration-500 absolute left-[-1.5rem] grid content-center h-[75%] align-center z-10 p-[1rem] ${
              next >= 1296 ? "border-[#353435]" : "hidden duration-200"
            } cursor-pointer transition ease-in-out hover:translate-x-5`}
            onClick={slideLeft}
          >
            <img
              alt=""
              src="./icon/arrow.png"
              className="w-[1rem] h-[100%] bg-red rotate-180"
            />
          </div>
          <div
            id="slider"
            ref={containerRef}
            onScroll={handleScroll}
            className="flex overflow-scroll scroll whitespace-nowrap hover:overflow-x-scroll scrollbar-hide scroll-smooth"
          >
            <div>
              <div ref={ref}>
                <motion.div
                  className="container w-[100vw] h-[120vh] relative"
                  animate={animation}
                >
                  <MouseParallaxContainer
                    useWindowMouseEvents
                    className="flex w-full h-full items-center justify-around paralax "
                    globalFactorX={0.3}
                    globalFactorY={0.3}
                    resetOnLeave
                  >
                    {projectList.map((item) =>
                      item.section1.map((data, key) => (
                        <MouseParallaxChild
                          key={key}
                          factorX={data.factoryX}
                          factorY={data.factoryY}
                          width={data.width}
                          className={`absolute ${data.class} ease-out duration-500`}
                        >
                          <Link
                            to={`/portofolio/${data.id}`}
                            state={data.width}
                          >
                            <motion.div
                              exit={hoverId !== data.id && { opacity: 0 }}
                              className="w-full relative cursor-pointer bg-gray-200"
                              id={data.id}
                              onMouseEnter={handleHover}
                              onMouseLeave={handleLeave}
                            >
                              <img
                                // onClick={handleShowModal}
                                id={data.id}
                                alt=""
                                src={data.image}
                                className="border-[#353435] border-dashed border-[2px] relative hover:border-dashed hover:opacity-70 duration-500"
                              ></img>
                              <p
                                className={`${
                                  idProject === data.id
                                    ? "flex duration-500"
                                    : "hidden"
                                } absolute ease-out left-[50%] top-[50%] z-0 text-[.6rem] bg-black text-white duration-300 px-2`}
                              >
                                {data.name}
                              </p>
                            </motion.div>
                          </Link>
                        </MouseParallaxChild>
                      ))
                    )}
                    <motion.div
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ transition }}
                      className="text-container h-full flex items-center justify-around text-right"
                    >
                      <div className="text-[2rem] ml-[15rem] mt-[1rem] border-b-[2px] border-[#353435]">
                        <p className="">SOME OF</p>
                        <p className="font-bold">MY WORK.</p>
                      </div>
                    </motion.div>
                  </MouseParallaxContainer>
                </motion.div>
              </div>
            </div>
            <div>
              <div className="container w-[100vw] h-[120vh] relative">
                <MouseParallaxContainer
                  useWindowMouseEvents
                  className="flex w-full h-full items-center justify-around paralax"
                  globalFactorX={0.3}
                  globalFactorY={0.3}
                  resetOnLeave
                >
                  {projectList.map((item) =>
                    item.section2.map((data, key) => (
                      <MouseParallaxChild
                        key={key}
                        factorX={data.factoryX}
                        factorY={data.factoryY}
                        width={data.width}
                        className={`absolute ${data.class} ease-out duration-500`}
                      >
                        <Link to={`/portofolio/${data.id}`} state={data.width}>
                          <motion.div
                            exit={hoverId !== data.id && { opacity: 0 }}
                            className="w-full relative cursor-pointer bg-gray-200"
                            id={data.id}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleLeave}
                          >
                            <img
                              // onClick={handleShowModal}
                              id={data.id}
                              alt=""
                              src={data.image}
                              className="border-[#353435] border-dashed border-[2px] relative hover:border-dashed hover:opacity-70 duration-500"
                            ></img>
                            <p
                              className={`${
                                idProject === data.id
                                  ? "flex duration-500"
                                  : "hidden"
                              } absolute ease-out left-[50%] top-[50%] z-0 text-[.6rem] bg-black text-white duration-300 px-2`}
                            >
                              {data.name}
                            </p>
                          </motion.div>
                        </Link>
                      </MouseParallaxChild>
                    ))
                  )}
                </MouseParallaxContainer>
              </div>
            </div>
          </div>
          <div
            className={`hover:opacity-100 opacity-0 duration-500 absolute padding-auto grid content-center left-[76rem] h-[85%] top-0 flex justify-around align-center p-[1rem] ${
              next >= 1296 ? "hidden duration-200" : "border-[#353435]"
            }  cursor-pointer`}
            onClick={slideRight}
          >
            <img alt="" src="./icon/arrow.png" className="w-[1rem] h-[1rem]" />
          </div>
          <div className="container w-full items-center justify-around flex">
            <div className="w-[85%]">
              <div className="grid justify-items-end">
                <ul className="flex gap-x-5">
                  <li
                    className={`${
                      next ? "text-[#D9D9D9]" : "text-[#353435]"
                    } duration-200`}
                  >
                    01
                  </li>
                  <li
                    className={`${
                      !next ? "text-[#D9D9D9]" : "text-[#353435]"
                    } duration-200`}
                  >
                    02
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ModalProject
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        id={id}
      />
      {/* expirience section */}
      <div ref={refExperience} className="pt-[3rem]">
        <ExperienceSection />
      </div>

      {/* skills section */}
      <div ref={refSkills}>
        <SkillsSection />
      </div>
    </div>
  );
}
