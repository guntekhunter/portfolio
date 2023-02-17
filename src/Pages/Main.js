import React from "react";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

export default function Main() {
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

  console.log(
    projectList.map((item) => item.section1.map((data) => data.factorY))
  );
  // console.log(projectList.section1);
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
                <div className="border-b-[2px] border-[#D9D9D9] w-[7rem] realtive rotate-90"></div>
              </MouseParallaxChild>
              <MouseParallaxChild factorX={0.5} factorY={0.5}>
                <div className="border-b-[2px] border-[#D9D9D9] w-[7rem] realtive pb-[10rem] "></div>
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
                    <div className="border-b-[2px] border-[#D9D9D9] w-[7rem] realtive rotate-90"></div>
                  </MouseParallaxChild>
                  <MouseParallaxChild factorX={0.5} factorY={0.5}>
                    <div className="border-b-[2px] border-[#D9D9D9] w-[7rem] realtive pb-[10rem] ml-[5rem]"></div>
                  </MouseParallaxChild>
                </div>
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.1}
                factorY={0.5}
                className="w-[1rem]"
              >
                <div className="border-b-[2px] border-[#D9D9D9] w-[7rem] realtive rotate-90 mr-[9]"></div>
              </MouseParallaxChild>
            </div>
          </MouseParallaxContainer>
        </div>
        <div className="sumary w-[80%] flex items-center justify-between h-[70vh] z-10">
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
          <div className="summary-content w-[30rem]">
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
            </div>
          </div>
          <div className="contact -rotate-90 text-[.7rem] pr-auto font-bold">
            <p>agunghaeruddin270@gmail.com - 085241944648</p>
          </div>
        </div>
      </div>

      {/* all the project */}
      <section className="py-[3rem] flex overflow-hidden hover:overflow-x-scroll">
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
                item.section1.map((data) => (
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
      </section>

      
    </div>
  );
}
