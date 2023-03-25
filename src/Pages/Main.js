import React, { useEffect, useRef, useState } from "react";
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
import projectList from "../Data/ProjectList.json";
import { useInView } from "react-intersection-observer";
import ExperienceSection from "../Component/ExperienceSection";
import SkillsSection from "../Component/SkillsSection";

export default function Main() {
  const [next, setNext] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [idProject, setIdProject] = useState();
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState();
  const [hoverId, setHoverId] = useState();
  const [scrollPosition, setScrollPosition] = useState();
  const containerRef = useRef(null);
  const allRef = useRef(null);

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

  return (
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
        </nav>
      </motion.div>

      {/* summary section */}
      <div ref={ref1} className="flex items-center justify-around realtive">
        <motion.div
          style={{ opacity: opacity }}
          transition={{ delay: 2 }}
          className="flex absolute z-0 w-full items-center justify-around realtive h-full"
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

        {/* socialmedia */}
        <div className="w-[80%]">
          <div className="flex justify-between w-full pt-[5rem]">
            <div className="media-social w-[10rem] mt-[4rem]">
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
            <motion.div
              style={{ opacity: opacity }}
              className="summary-content w-[40rem] flex "
            >
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={transition}
                className="summary-container"
              >
                <p className="hy text-[.7rem] font-light"></p>
                <motion.p
                  style={{ opacity: opacity }}
                  className="name text-[.7rem]"
                >
                  Hello There
                </motion.p>

                <p className="name text-[4.8rem] font-bold">I'M A</p>
                <p className="name text-[4.8rem] font-bold">JUNIOR</p>
              </motion.div>
            </motion.div>
            <div className="w-[30rem]">
              <img src="./foto_agung.jpg" alt="" className="w-[8rem] pb-[1.6rem]"></img>
              <p className="descriptions text-[.7rem] w-[20rem]">
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
            className="name text-[4.8rem] font-bold ml-[7.8rem]"
          >
            FRONTEND DEVELOPER
          </motion.p>
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
            </motion.div>
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

      <ModalProject
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        id={id}
      />
      {/* expirience section */}
      <ExperienceSection />

      {/* skills section */}
      <SkillsSection/>
    </div>
  );
}
