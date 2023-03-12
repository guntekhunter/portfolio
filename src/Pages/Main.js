import React, { useEffect, useRef, useState } from "react";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { Link } from "react-router-dom";
import Experience from "../Component/Experience";
import ModalProject from "../Component/ModalProject";
// import projectList from "../Data/ProjectList.json";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";

export default function Main() {
  const [active, setActive] = useState(false);
  const [next, setNext] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [idProject, setIdProject] = useState();
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState();
  const [hoverId, setHoverId] = useState();
  const [scrollPosition, setScrollPosition] = useState();
  const containerRef = useRef(null);
  const allRef = useRef(null);

  const projectList = [
    {
      section1: [
        {
          id: 1,
          image: "./project/1.jpg",
          width: "20rem",
          class: "inset-[9rem] w-[15rem] hover:w-[17rem]",
          name: "Persuratan Upana",
          factoryX: 0.1,
          factoryY: 0.1,
        },
        {
          id: 2,
          image: "./project/2.jpg",
          width: "20rem",
          class: "inset-[7rem] left-[35rem] w-[18rem] hover:w-[19rem]",
          name: "Confie.id",
          factoryX: 0.2,
          factoryY: 0.2,
        },
        {
          id: 3,
          image: "./project/3.jpg",
          width: "15rem",
          class: "inset-[17rem] left-[60rem] w-[15rem] hover:w-[17rem]",
          name: "Confie.id",
          factoryX: 0.2,
          factoryY: 0.2,
        },
        {
          id: 4,
          image: "./project/4.jpg",
          width: "17rem",
          class: "right-[19rem] top-[28rem] w-[15rem] hover:w-[17rem]",
          name: "Confie.id",
          factoryX: 0.4,
          factoryY: 0.4,
        },
        {
          id: 5,
          image: "./project/5.jpg",
          width: "20rem",
          class: "inset-[15rem] top-[25rem] w-[16rem] hover:w-[17rem]",
          name: "Confie.id",
          factoryX: 0.3,
          factoryY: 0.3,
        },
      ],
      section2: [
        {
          id: 6,
          image: "./project/1.jpg",
          width: "20rem",
          class: "inset-[8rem] w-[14rem] hover:w-[17rem]",
          name: "Confie.id",
          factoryX: 0.3,
          factoryY: 0.3,
        },
        {
          id: 7,
          image: "./project/2.jpg",
          width: "20rem",
          class: "inset-[3rem] left-[35rem] w-[20rem] hover:w-[17rem]",
          name: "Confie.id",
          factoryX: 0.5,
          factoryY: 0.5,
        },
        {
          id: 8,
          image: "./project/3.jpg",
          width: "15rem",
          class: "inset-[18rem] left-[60rem] w-[15rem] hover:w-[17rem]",
          name: "Confie.id",
          factoryX: 0.2,
          factoryY: 0.2,
        },
        {
          id: 9,
          image: "./project/4.jpg",
          width: "17rem",
          class: "right-[19rem] top-[30rem] w-[17rem] hover:w-[17rem]",
          name: "Confie.id",
          factoryX: 0.3,
          factoryY: 0.4,
        },
        {
          id: 10,
          image: "./project/5.jpg",
          width: "20rem",
          class: "inset-[10rem] top-[25rem] w-[20rem] hover:w-[17rem]",
          name: "Confie.id",
          factoryX: 0.4,
          factoryY: 0.6,
        },
        {
          id: 11,
          image: "./project/6.jpg",
          width: "20rem",
          class: "inset-[33rem] top-[17rem] w-[20rem] hover:w-[17rem]",
          name: "Confie.id",
          factoryX: 0.4,
          factoryY: 0.6,
        },
      ],
    },
  ];

  // transition with motion
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.9] };
  // slider
  const slideLeft = () => {
    console.log("left");
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 1800;
    setNext(false);
  };

  const slideRight = () => {
    console.log("right");
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 1800;
    setNext(true);
  };

  const handleScroll = () => {
    console.log(containerRef?.current.scrollLeft);
    setNext(containerRef?.current.scrollLeft);
  };

  const handleScrollSection = (e) => {
    console.log("clicked" + e.target.id);
    if (e.target.id === "sumary") {
      console.log(allRef?.current.scrollTop);
      setScroll(allRef?.current.scrollTop);
    }
  };

  const handleHover = (e) => {
    console.log("hoverig" + e.target.id);
    const id = parseInt(e.target.id);
    setIdProject(id);
    setHoverId(parseInt(e.target.id));
  };
  const handleLeave = (e) => {
    console.log("hoverig" + e.target.id);
    setIdProject(null);
  };

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
    setScrollPosition(latest);
  });
  console.log(scrollPosition);
  return (
    // <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
    <div>
      {/* navbar */}
      <motion.div
        className={`flex items-center justify-around text-[#353435] z-50 sticky top-0 ${
          scrollPosition > 0
            ? "bg-black duration-500 text-white"
            : "duration-500"
        } `}
      >
        <nav className="flex items-center justify-between w-[80%] h-[1rem] realtive z-10 py-4">
          <div>
            <h1 className="font-bold text-[15px]">AGUNG</h1>
          </div>
          <div className="w-[30%]">
            <ul className="inline-flex text-[9px] font-bold justify-between w-full z-10">
              <li
                className="z-10 cursor-pointer duration-200"
                id="sumary"
                onClick={handleScrollSection}
              >
                Sumary
              </li>
              <li
                className="text-[#BEBBB5] hover:text-[#353435] z-10 cursor-pointer duration-200"
                id="my work"
                onClick={handleScrollSection}
              >
                My Work
              </li>
              <li
                className="text-[#BEBBB5] hover:text-[#353435] z-10 cursor-pointer duration-200"
                id="experience"
                onClick={handleScrollSection}
              >
                Experience
              </li>
              <li
                className="text-[#BEBBB5] hover:text-[#353435] z-10 cursor-pointer duration-200"
                id="skills"
                onClick={handleScrollSection}
              >
                Skils
              </li>
            </ul>
          </div>
          <div
            className={`absolute right-0 w-[31rem] border-b-[2px] h-[2rem] ${
              scrollPosition > 0 ? "hidden" : ""
            }`}
          />
        </nav>
      </motion.div>

      {/* summary section */}
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex items-center justify-around realtive"
      >
        <div className="flex absolute z-0 w-full items-center justify-around realtive h-full">
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
            <div className="w-[20rem]">
              <MouseParallaxChild
                factorX={0.1}
                factorY={0.1}
                className="w-[1rem]"
              >
                <div className="border-[2px] border-[#D9D9D9] w-[10rem] h-[15rem] realtive border-dashed">
                  <MouseParallaxChild
                    factorX={0.1}
                    factorY={0.1}
                    className="w-[1rem]"
                  >
                    <img
                      alt=""
                      src="./icon/background/2.png"
                      className="ml-[14rem] w-2"
                    />
                  </MouseParallaxChild>
                  <MouseParallaxChild factorX={0.5} factorY={0.5}>
                    <img
                      alt=""
                      src="./icon/background/1.png"
                      className="mt-[2rem] ml-[8rem] w-[6rem]"
                    />
                  </MouseParallaxChild>
                </div>
              </MouseParallaxChild>
              <MouseParallaxChild factorX={0.1} factorY={0.5}>
                <img
                  alt=""
                  src="./icon/background/2.png"
                  className="ml-[15rem] w-[.51rem]"
                />
              </MouseParallaxChild>
            </div>
          </MouseParallaxContainer>
        </div>

        {/* socialmedia */}
        <div className="sumary w-[80%] flex items-center justify-between h-[70vh] z-10 relative sicky">
          <div className="media-social">
            <ul className="space-y-[1rem]">
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
          <div className="summary-content w-[30rem] flex">
            <div className="w-[8rem] pt-[7rem] pr-2">
              <img src="./icon/custom-arrow.png" className="rotate-[250deg]" />
            </div>
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition}
              className="summary-container"
            >
              <p className="hy text-[.7rem]">Hi there! My name is</p>
              <p className="name text-[1.8rem] font-bold">
                MUH. AGUNG HAERUDDIN
              </p>
              <p className="descriptions text-[.7rem]">
                I am a front-end developer with a passion for creating visually
                appealing and user-friendly web experiences. With a strong
                background in React and a desire to stay up-to-date with the
                latest development technologies, I am dedicated to delivering
                high-quality and impactful projects.
              </p>
              <div className="flex">
                <button className="px-6 py-2 mt-3 border-[#353435] border-dashed border-[2px] duration-300 font-bold hover:text-white hover:bg-[#000000] hover:border-[#000000] cursor-pointer">
                  Contact Me
                </button>
              </div>
            </motion.div>
          </div>
          <div className="w-[15rem]"></div>
        </div>
      </motion.div>
      <div className="h-[3rem] bg-gray-200"></div>

      {/* all the project */}
      <section className="relative">
        {/* background paralax */}
        <div className="flex absolute z-0 w-full items-center justify-around realtive h-full">
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
            <div className="container w-[100vw] h-[120vh] relative">
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
                      className={`absolute ${data.class} ease-out duration-500`}
                    >
                      <img
                        alt=""
                        src={data.image}
                        className="border-[#353435] border-dashed border-[2px]"
                      ></img>
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

      <ModalProject
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        id={id}
      />
      {/* expirience section */}
      <section className="flex justify-around w-full pb-[5rem]">
        <div className="w-[80%]">
          <div>
            <h1 className="text-[1.8rem] font-bold">EXPIRIENCE</h1>
          </div>
          {/* <div className="flex justify-between space-x-[3rem] mt-[2rem]"> */}
          <div className="grid grid-cols-2 gap-14 mt-[2rem]">
            <Experience />
            <Experience />
          </div>
        </div>
      </section>

      {/* skills section */}
      <section className="flex justify-around w-full pb-[5rem] pt-[2rem]">
        <div className=" w-[80%]">
          <h1 className="text-[1.8rem] font-bold flex justify-center">
            TOOLS & SKILLS
          </h1>
          <div className="mt-6">
            <div className="grid w-full bg-black place-content-center">
              <p className="font-light text-white">Languange</p>
            </div>
            <div className="grid grid-cols-4 border-[.1rem] border-black row-span-3 py-4 gap-y-3">
              {/* will be change with looping */}
              <div className="flex justify-around">
                <div className="flex space-x-1 text-[.8rem] font-bold">
                  <div className="flex content-center flex-wrap ">
                    <img
                      src="./icon/github.png"
                      alt=""
                      className="w-[.7rem] h-[.71rem] mt-[-.1rem]"
                    ></img>
                  </div>
                  <div className="grid content-center">
                    <p>HTML</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-around">
                <div className="flex space-x-1 text-[.8rem] font-bold">
                  <div className="flex content-center flex-wrap ">
                    <img
                      src="./icon/github.png"
                      alt=""
                      className="w-[.7rem] h-[.71rem] mt-[-.1rem]"
                    ></img>
                  </div>
                  <div className="grid content-center">
                    <p>HTML</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-around">
                <div className="flex space-x-1 text-[.8rem] font-bold">
                  <div className="flex content-center flex-wrap ">
                    <img
                      src="./icon/github.png"
                      alt=""
                      className="w-[.7rem] h-[.71rem] mt-[-.1rem]"
                    ></img>
                  </div>
                  <div className="grid content-center">
                    <p>HTML</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-around">
                <div className="flex space-x-1 text-[.8rem] font-bold">
                  <div className="flex content-center flex-wrap ">
                    <img
                      src="./icon/github.png"
                      alt=""
                      className="w-[.7rem] h-[.71rem] mt-[-.1rem]"
                    ></img>
                  </div>
                  <div className="grid content-center">
                    <p>HTML</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-around">
                <div className="flex space-x-1 text-[.8rem] font-bold">
                  <div className="flex content-center flex-wrap ">
                    <img
                      src="./icon/github.png"
                      alt=""
                      className="w-[.7rem] h-[.71rem] mt-[-.1rem]"
                    ></img>
                  </div>
                  <div className="grid content-center">
                    <p>HTML</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex bg-black text-white font-lilght bg-white gap-[.1rem]">
              <div className="grid place-content-center bg-black w-[50%]">
                Library's
              </div>
              <div className="grid place-content-center bg-black w-[50%] border-r-[.1rem] border-black">
                Frameworks
              </div>
            </div>
            <div className=" grid grid-cols-2 bg-black text-white font-bold bg-black gap-[.1rem]">
              <div className="grid grid-cols-2 bg-white border-l-[.1rem] border-black text-black py-3 gap-y-3">
                <div className="flex justify-around">
                  <div className="flex space-x-1 text-[.8rem] font-bold">
                    <div className="flex content-center flex-wrap ">
                      <img
                        src="./icon/github.png"
                        alt=""
                        className="w-[.7rem] h-[.71rem] mt-[-.1rem]"
                      ></img>
                    </div>
                    <div className="grid content-center">
                      <p>HTML</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-around">
                  <div className="flex space-x-1 text-[.8rem] font-bold">
                    <div className="flex content-center flex-wrap ">
                      <img
                        src="./icon/github.png"
                        alt=""
                        className="w-[.7rem] h-[.71rem] mt-[-.1rem]"
                      ></img>
                    </div>
                    <div className="grid content-center">
                      <p>HTML</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 bg-white border-r-[.1rem] border-black text-black py-3 gap-y-3">
                <div className="flex justify-around">
                  <div className="flex space-x-1 text-[.8rem] font-bold">
                    <div className="flex content-center flex-wrap ">
                      <img
                        src="./icon/github.png"
                        alt=""
                        className="w-[.7rem] h-[.71rem] mt-[-.1rem]"
                      ></img>
                    </div>
                    <div className="grid content-center">
                      <p>HTML</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-around">
                  <div className="flex space-x-1 text-[.8rem] font-bold">
                    <div className="flex content-center flex-wrap ">
                      <img
                        src="./icon/github.png"
                        alt=""
                        className="w-[.7rem] h-[.71rem] mt-[-.1rem]"
                      ></img>
                    </div>
                    <div className="grid content-center">
                      <p>HTML</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-around">
                  <div className="flex space-x-1 text-[.8rem] font-bold">
                    <div className="flex content-center flex-wrap ">
                      <img
                        src="./icon/github.png"
                        alt=""
                        className="w-[.7rem] h-[.71rem] mt-[-.1rem]"
                      ></img>
                    </div>
                    <div className="grid content-center">
                      <p>HTML</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid w-full bg-black place-content-center">
              <p className="font-light text-white">Languange</p>
            </div>

            <div className="grid grid-cols-4 border-[.1rem] border-black row-span-3 py-3 gap-y-3">
              {/* will be change with looping */}
              <div className="flex justify-around">
                <div className="flex space-x-1 text-[.8rem] font-bold">
                  <div className="flex content-center flex-wrap ">
                    <img
                      src="./icon/github.png"
                      alt=""
                      className="w-[.7rem] h-[.71rem] mt-[-.1rem]"
                    ></img>
                  </div>
                  <div className="grid content-center">
                    <p>HTML</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-around">
                <div className="flex space-x-1 text-[.8rem] font-bold">
                  <div className="flex content-center flex-wrap ">
                    <img
                      src="./icon/github.png"
                      alt=""
                      className="w-[.7rem] h-[.71rem] mt-[-.1rem]"
                    ></img>
                  </div>
                  <div className="grid content-center">
                    <p>HTML</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-around">
                <div className="flex space-x-1 text-[.8rem] font-bold">
                  <div className="flex content-center flex-wrap ">
                    <img
                      src="./icon/github.png"
                      alt=""
                      className="w-[.7rem] h-[.71rem] mt-[-.1rem]"
                    ></img>
                  </div>
                  <div className="grid content-center">
                    <p>HTML</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-around">
                <div className="flex space-x-1 text-[.8rem] font-bold">
                  <div className="flex content-center flex-wrap ">
                    <img
                      src="./icon/github.png"
                      alt=""
                      className="w-[.7rem] h-[.71rem] mt-[-.1rem]"
                    ></img>
                  </div>
                  <div className="grid content-center">
                    <p>HTML</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-around">
                <div className="flex space-x-1 text-[.8rem] font-bold">
                  <div className="flex content-center flex-wrap ">
                    <img
                      src="./icon/github.png"
                      alt=""
                      className="w-[.7rem] h-[.71rem] mt-[-.1rem]"
                    ></img>
                  </div>
                  <div className="grid content-center">
                    <p>HTML</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
