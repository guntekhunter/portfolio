import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Experience from "./Experience";

export default function ExperienceSection() {

  const ref1 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: (ref1),
    offset: ["end end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [.5, 1], [1, 0]);

  return (
    <section ref={ref1} className="flex justify-around w-full pb-[5rem]">
      <motion.div style={{opacity:opacity}} className="w-[80%]">
        <div>
          <h1 className="text-[1.8rem] font-bold">EXPIRIENCE</h1>
        </div>
        {/* <div className="flex justify-between space-x-[3rem] mt-[2rem]"> */}
        <div className="grid grid-cols-2 gap-14 mt-[2rem]">
          <Experience />
          <Experience />
        </div>
      </motion.div>
    </section>
  );
}
