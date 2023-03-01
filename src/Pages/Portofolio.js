import React from "react";

export default function Portofolio() {
  return (
    <div>
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
      <div className="grid w-full justify-items-center">
        <div className="m-4">
          <h1 className="text-[8rem]">Confie.id</h1>
        </div>
        <div className="w-full grid justify-items-center">
          <div className="w-[100%] h-[20rem] bg-contain overflow-hidden relative border-solid border-[#353435]">
            <div className=""/>
            <img
              src="./project/1.jpg"
              alt=""
              className="absolute top-[-7rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
