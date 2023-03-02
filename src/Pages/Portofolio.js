import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { motion } from "framer-motion";
export default function Portofolio() {
  const id = useParams();
  const location = useLocation();

  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  console.log(id);
  console.log(location);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="scrollbar-hideflex whitespace-nowrap overflow-auto scrollbar-hide"
    >
      {/* navbar */}
      <nav>
        <div className="flex items-center justify-around text-[#353435] z-10">
          <nav className="flex items-center justify-between w-[80%] h-[3rem] realtive">
            <div>
              <h1 className="font-bold text-[20px]">AGUNG</h1>
            </div>
            <div className="w-[30%]">
              <ul className="inline-flex text-[12px] font-bold justify-between w-full">
                <li>SUMMARY</li>
                <li className="text-[#BEBBB5] hover:text-[#353435]">MY WORK</li>
                <li className="text-[#BEBBB5]">EXPERIENCE</li>
                <li className="text-[#BEBBB5]">SKILLS</li>
              </ul>
            </div>
            <div className="absolute right-0 w-[31rem] border-b-[2px] h-[3rem]" />
          </nav>
        </div>
        <div className="flex flex-coll justify-center items-center">
          <div className="w-20 flex flex-col"></div>
        </div>
      </nav>
      {/* section 1 */}
      <div className="grid w-full justify-items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="m-4"
        >
          <h1 className="text-[8rem]">Confie.id</h1>
        </motion.div>
        <div className="w-full grid justify-items-center">
          <motion.div
            initial={{ y: "-60%", width: location.state }}
            animate={{
              y: 0,
              width: "80%",
              height: window.innerHeight > 1440 ? 800 : 400,
              transition: { delay: 0.1, ...transition },
            }}
          >
            <div className="" />
            <motion.img
              // src={`./project/${id}.jpg`}
              initial={{ scale: 1 }}
              src={`/project/${id.id}.jpg`}
              transition={transition}
              alt=""
              className=" top-[1rem]"
            />
          </motion.div>
        </div>
      </div>

      <div>ahhay</div>
    </motion.div>
  );
}
