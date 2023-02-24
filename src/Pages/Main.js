import React, { useEffect, useRef, useState } from "react";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import Experience from "../Component/Experience";
import ModalProject from "../Component/ModalProject";

export default function Main() {
  const [active, setActive] = useState(false);
  const [next, setNext] = useState(0);
  const containerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const projectList = [
    {
      section1: [
        {
          image: "./project/1.jpg",
          class: "inset-[8rem] w-[20rem] hover:w-[23rem]",
          factoryX: 0.1,
          factoryY: 0.1,
        },
        {
          image: "./project/2.jpg",
          class: "inset-[3rem] left-[35rem] w-[20rem] hover:w-[23rem]",
          factoryX: 0.2,
          factoryY: 0.2,
        },
        {
          image: "./project/3.jpg",
          class: "inset-[18rem] left-[60rem] w-[15rem] hover:w-[20rem]",
          factoryX: 0.2,
          factoryY: 0.2,
        },
        {
          image: "./project/4.jpg",
          class: "right-[19rem] top-[30rem] w-[17rem] hover:w-[23rem]",
          factoryX: 0.4,
          factoryY: 0.4,
        },
        {
          image: "./project/5.jpg",
          class: "inset-[10rem] top-[25rem] w-[20rem] hover:w-[23rem]",
          factoryX: 0.3,
          factoryY: 0.3,
        },
      ],
      section2: [
        {
          image: "./project/1.jpg",
          class: "inset-[8rem] w-[20rem] hover:w-[23rem]",
          factoryX: 0.3,
          factoryY: 0.3,
        },
        {
          image: "./project/2.jpg",
          class: "inset-[3rem] left-[35rem] w-[20rem] hover:w-[23rem]",
          factoryX: 0.5,
          factoryY: 0.5,
        },
        {
          image: "./project/3.jpg",
          class: "inset-[18rem] left-[60rem] w-[15rem] hover:w-[20rem]",
          factoryX: 0.2,
          factoryY: 0.2,
        },
        {
          image: "./project/4.jpg",
          class: "right-[19rem] top-[30rem] w-[17rem] hover:w-[23rem]",
          factoryX: 0.3,
          factoryY: 0.4,
        },
        {
          image: "./project/5.jpg",
          class: "inset-[10rem] top-[25rem] w-[20rem] hover:w-[23rem]",
          factoryX: 0.4,
          factoryY: 0.6,
        },
        {
          image: "./project/6.jpg",
          class: "inset-[33rem] top-[17rem] w-[20rem] hover:w-[23rem]",
          factoryX: 0.4,
          factoryY: 0.6,
        },
      ],
    },
  ];

  // console.log(
  //   projectList.map((item) => item.section1.map((data) => data.factorY))
  // );

  // slider
  const slideLeft = () => {
    console.log("left");
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 1800;
    setNext(false);
    // console.log(window.scrollX);
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
  console.log(next);

  const handleShowModal = () => {
    setShowModal(true);
    console.log("clicked");
  };

  return (
    <div>
      {/* navbar */}
      <div className="flex items-center justify-around text-[#353435] z-10">
        <nav className="flex items-center justify-between w-[80%] h-[3rem] realtive">
          <div>
            <h1 className="font-bold text-[20px]">AGUNG</h1>
          </div>
          <div className="w-[30%]">
            <ul className="inline-flex text-[12px] font-bold justify-between w-full">
              <li>SUMMARY</li>
              <li className="text-[#BEBBB5]">MY WORK</li>
              <li className="text-[#BEBBB5]">EXPERIENCE</li>
              <li className="text-[#BEBBB5]">SKILLS</li>
            </ul>
          </div>
          <div className="absolute right-0 w-[31rem] border-b-[2px] h-[3rem]" />
        </nav>
      </div>

      {/* summary section */}
      <div className="flex items-center justify-around realtive">
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
        <div className="sumary w-[80%] flex items-center justify-between h-[70vh] z-10 relative">
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
            <div className="summary-container">
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
            </div>
          </div>
          <div className="w-[15rem]"></div>
        </div>
      </div>

      {/* all the project */}
      <section className="py-[3rem] relative">
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
          className={`absolute padding-auto left-[5rem] top-[25rem] flex justify-around align-center z-10 p-[1rem] rounded-full border-[2px] ${
            next <= 1296 ? "hidden duration-200" : "border-[#353435]"
          } cursor-pointer`}
          onClick={slideLeft}
        >
          <img
            alt=""
            src="./icon/arrow.png"
            className="w-[1rem] h-[1rem] rotate-180"
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
                  item.section1.map((data) => (
                    <MouseParallaxChild
                      factorX={data.factoryX}
                      factorY={data.factoryY}
                      className={`absolute ${data.class} ease-out duration-500`}
                    >
                      <div className="w-full relative cursor-pointer">
                        <img
                          onClick={handleShowModal}
                          alt=""
                          src={data.image}
                          className="border-[#353435] border-dashed border-[2px] relative hover:border-dashed"
                        ></img>
                        {/* <div className="absolute left-[40%] top-[50%]">persuratan</div> */}
                      </div>
                    </MouseParallaxChild>
                  ))
                )}
                <div className="text-container h-full flex items-center justify-around text-right">
                  <div className="text-[2rem] ml-[15rem] mt-[5rem] border-b-[2px] border-[#353435]">
                    <p className="">SOME OF</p>
                    <p className="font-bold">MY WORK.</p>
                  </div>
                </div>
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
                  item.section2.map((data) => (
                    <MouseParallaxChild
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
          className={`absolute padding-auto left-[70rem] top-[25rem] flex justify-around align-center p-[1rem] rounded-full border-[2px] ${
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

      <ModalProject isVisible={showModal} />
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
            SKILLS
          </h1>
          <div className="grid grid-cols-6 gap-4 mt-[1.5rem]">
            <div className="justify-center flex border-[#353435] border-dashed border-[2px] duration-300 font-bold hover:text-white hover:bg-[#000000] hover:border-black cursor-pointer">
              HTML
            </div>
            <div className="justify-center flex border-[#353435] border-dashed border-[2px] duration-300 font-bold hover:text-white hover:bg-[#000000] hover:border-black cursor-pointer">
              CSS
            </div>
            <div className="justify-center flex border-[#353435] border-dashed border-[2px] duration-300 font-bold hover:text-white hover:bg-[#000000] hover:border-black cursor-pointer">
              JS
            </div>
            <div className="justify-center flex border-[#353435] border-dashed border-[2px] duration-300 font-bold hover:text-white hover:bg-[#000000] hover:border-black cursor-pointer">
              REACT
            </div>
            <div className="justify-center flex border-[#353435] border-dashed border-[2px] duration-300 font-bold hover:text-white hover:bg-[#000000] hover:border-black cursor-pointer">
              TAILWIND
            </div>
            <div className="justify-center flex border-[#353435] border-dashed border-[2px] duration-300 font-bold hover:text-white hover:bg-[#000000] hover:border-black cursor-pointer">
              AXIOS
            </div>
            <div className="justify-center flex border-[#353435] border-dashed border-[2px] duration-300 font-bold hover:text-white hover:bg-[#000000] hover:border-black cursor-pointer">
              HTML
            </div>
            <div className="justify-center flex border-[#353435] border-dashed border-[2px] duration-300 font-bold hover:text-white hover:bg-[#000000] hover:border-black cursor-pointer">
              CSS
            </div>
            <div className="justify-center flex border-[#353435] border-dashed border-[2px] duration-300 font-bold hover:text-white hover:bg-[#000000] hover:border-black cursor-pointer">
              JS
            </div>
            <div className="justify-center flex border-[#353435] border-dashed border-[2px] duration-300 font-bold hover:text-white hover:bg-[#000000] hover:border-black cursor-pointer">
              REACT
            </div>
            <div className="justify-center flex border-[#353435] border-dashed border-[2px] duration-300 font-bold hover:text-white hover:bg-[#000000] hover:border-black cursor-pointer">
              TAILWIND
            </div>
            <div className="justify-center flex border-[#353435] border-dashed border-[2px] duration-300 font-bold hover:text-white hover:bg-[#000000] hover:border-black cursor-pointer">
              AXIOS
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
