import React, { useState } from "react";

export default function Experience() {
    const [active, setActive] = useState(true);

    // dropdown
  const dropDown = () => {
    console.log("clicked");
    setActive(true);
    if (active === true){
      setActive(false);
    }
  };
  return (
    <div
      className="flex text-[.73rem] w-full cursor-pointer"
      onClick={dropDown}
    >
      <div className="flex w-[100%] align-center">
        <p className="date w-full mt-[.2rem]">Oct 12 2022 - Jan 12 Jan</p>
      </div>
      <div className="content flex">
        <div>
          <p className="title text-[1rem] font-bold">
            Frotend Developer Intern
          </p>
          <div className="flex space-x-2">
            <p
              className={`description w-[18rem] ${
                active ? `duration-500` : `truncate overflow-hidden pr-2 duration-500`
              }`}
            >
              Website persuratan upana studio dibuat untuk memudahkan proses
              administrasi strartup ini, mengubah sistem persuratan dari manual
              menjadi website akan menghemat waktu kariawan du Upana studio
            </p>
          </div>
        </div>
        <div className="w-2 h-full pt-[1.8rem]">
          <img
            alt=""
            src="./icon/arrow.png"
            className={`-rotate-90 w-[1rem] ${active ? `rotate-90 duration-300` : `-rotate-90 duration-300`}`}
          ></img>
        </div>
      </div>
    </div>
  );
}
