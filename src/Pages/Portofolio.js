import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import projectList from "../Data/ProjectList.json";
export default function Portofolio() {
  const [scrollPosition, setScrollPosition] = useState();
  const [data, setData] = useState();

  // get the id base on project that was clicked
  const id = useParams();
  const location = useLocation();

  // auto scroll from top using useScroll from motion
  const { scrollY } = useScroll();

  // transition duration for motion animation
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  // method to automate a scroll from top after changging page
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
    setScrollPosition(latest);
  });

  // get data from json file base on id that was passing from previous page
  // const selection = projectList
  useEffect(() => {
    const selected = projectList.map((obj) =>
      obj.section1.filter((item) => item.id === parseInt(id.id))
    );
    setData(selected);
  }, [projectList, id]);

  // console logs
  // console.log(scrollPosition);
  // console.log(id.id);
  console.log(data);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="scrollbar-hideflex whitespace-nowrap"
    >
      {/* navbar */}
      <motion.div
        className={`flex items-center justify-around text-[#353435] z-50 sticky top-0 ${
          scrollPosition > 0
            ? "bg-black duration-500 text-white"
            : "duration-500"
        } `}
      >
        <nav className="flex items-center justify-between w-[80%] h-[1rem] realtive z-10 py-4">
          <Link to="/">
            <h1 className="font-bold text-[15px] cursor-pointer">AGUNG</h1>
          </Link>
          <div className="w-[30%]">
            <ul className="inline-flex text-[9px] font-bold justify-between w-full z-10">
              <li className="z-10 cursor-pointer duration-200" id="sumary">
                Sumary
              </li>
              <li
                className="text-[#BEBBB5] hover:text-[#353435] z-10 cursor-pointer duration-200"
                id="my work"
              >
                My Work
              </li>
              <li
                className="text-[#BEBBB5] hover:text-[#353435] z-10 cursor-pointer duration-200"
                id="experience"
              >
                Experience
              </li>
              <li
                className="text-[#BEBBB5] hover:text-[#353435] z-10 cursor-pointer duration-200"
                id="skills"
              >
                Skills
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
      {/* section 1 */}
      <div className="grid w-full justify-items-center relative h-[100%]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="m-4"
        >
          {data &&
            data.map((item, key) =>
              item.map((item) => <h1 className="text-[8rem]">{item.name}</h1>)
            )}
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
              data.map((item, key) =>
                item.map((item) => (
                  <motion.img
                    key={key}
                    initial={{ scale: 1 }}
                    src={item.image}
                    transition={transition}
                    alt=""
                    className=" top-[1rem]"
                  />
                ))
              )}
          </motion.div>
        </div>
      </div>

      {/* section 2 */}
      <div className="grid bg-blue-200 content-around justify-items-center">
        <div className="flex w-[80%] justify-between">
          <div className="bg-yellow-200">asd</div>
          <div className="bg-green-200">asd</div>
        </div>
      </div>
    </motion.div>
  );
}
