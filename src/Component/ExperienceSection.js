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
        <div className="md:grid grid-cols-2 md:gap-14 mt-[2rem] w-[100%] space-y-[2rem] md:space-y-0">
          <Experience />
          <Experience />
        </div>
      </motion.div>
    </section>
  );
}
