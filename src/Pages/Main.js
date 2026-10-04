import React, {
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";
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
import projectList2 from "../Data/ProjectList.json";
import { useInView } from "react-intersection-observer";
import ExperienceSection from "../Component/ExperienceSection";
import SkillsSection from "../Component/SkillsSection";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import Contact from "../Component/Contact";
import Modal from "../Component/Modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazySocialMedia from "../Component/LazySocialMedia";

const LazyLoad = React.lazy(() => import("../Component/LazyLoadingImage"));

export default function Main() {
  const refSumary = useRef(null);
  const refMyWork = useRef(null);
  const refExperience = useRef(null);
  const refSkills = useRef(null);
  const refContact = useRef(null);
  const [idProject, setIdProject] = useState();
  const [showModal, setShowModal] = useState(false);
  const [id] = useState();
  const [hoverId, setHoverId] = useState();
  const [scrollPosition, setScrollPosition] = useState();
  const [mobile, setMobile] = useState(false);
  const [emailSend, setEmailSend] = useState(false);
  const [userName, setUserName] = useState();
  let [activeNav, setActiveNav] = useState(false);



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
  const { inView } = useInView({
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
  }, [inView, animation]);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // scroll to component with navbar
  const clickSumary = () => {
    refSumary.current?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(false);
  };
  const clickMyWork = () => {
    refMyWork.current?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(false);
  };

  const clickExperience = () => {
    refExperience.current?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(false);
  };
  const clickSkills = () => {
    refSkills.current?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(false);
  };
  const clickContact = () => {
    refContact.current?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(false);
  };

  // navbar mobile function
  const handleNavbar = () => {
    setActiveNav(!activeNav);
  };

  const goToWhatsup = () => {
    const phoneNumber = "085241944648";
    const whatsappURL = `https://wa.me/${phoneNumber}`;

    window.open(whatsappURL, "_blank");
  };

  const modalActive = (e, name) => {
    setEmailSend(e);
    setUserName(name);
    setTimeout(() => {
      setEmailSend(false);
    }, 3000);
  };

  // make 2 section data into one data
  const section1 = projectList2[0].section1;
  const section2 = projectList2[0].section2;
  const gabung = [...section1, ...section2];

  return (
    <div className="overflow-hidden md:overflow-visible relative bg-white">
      <Modal isActive={emailSend} userName={userName} />
      {/* navbar desktop*/}
      <motion.div
        className={`flex items-center justify-around text-[#353435] z-50 sticky top-0 ${
          scrollPosition > 0
            ? "bg-black duration-500 text-white"
            : "duration-500"
        } `}
      >
        <nav className="md:flex items-center justify-between w-[80%] h-[1rem] realtive z-10 py-5 hidden">
          <div>
            <h1 className="font-bold text-[15px]">AGUNG</h1>
          </div>
          <div className="flex space-x-5">
            <div>
              <ul className="inline-flex text-[9px] font-bold justify-between w-full z-10 space-x-5">
                <li
                  className="hover:text-[#BEBBB5] z-10 cursor-pointer duration-200"
                  id="sumary"
                  onClick={clickSumary}
                >
                  Sumary
                </li>
                <li
                  className="hover:text-[#BEBBB5] z-10 cursor-pointer duration-200"
                  id="my work"
                  onClick={clickMyWork}
                >
                  My Work
                </li>
                <li
                  className="hover:text-[#BEBBB5] z-10 cursor-pointer duration-200"
                  id="experience"
                  onClick={clickExperience}
                >
                  Experience
                </li>
                <li
                  className="hover:text-[#BEBBB5] z-10 cursor-pointer duration-200"
                  id="skills"
                  onClick={clickSkills}
                >
                  Skils
                </li>
              </ul>
            </div>
            <div
              className={`text-[9px] font-bold hover:text-[#BEBBB5] z-10 cursor-pointer duration-200 p-2 ${
                scrollPosition > 0
                  ? "bg-white text-black"
                  : "bg-black text-white"
              } `}
              id="skills"
              onClick={clickContact}
            >
              Get In Touch
            </div>
          </div>
        </nav>
      </motion.div>

      {/* navbar mobile */}
      <nav
        className={`justify-around flex fixed top-0 right-0 left-0 md:hidden z-50 ${
          scrollPosition > 0
            ? "bg-black duration-500 text-white"
            : "duration-500"
        } h-[2.5rem] `}
      >
        <div className="w-[80%] justify-between flex pt-[.5rem]">
          <div
            className={`${
              activeNav ? "text-white duration-100 ease-in" : ""
            } font-bold`}
          >
            <p>AGUNG</p>
          </div>
          <div
            className={`${
              activeNav
                ? "w-[.9rem] pt-[.5rem] duration-100"
                : "w-[1rem] pt-[.5rem] duration-100"
            }`}
          >
            {scrollPosition > 0 ? (
              <LazyLoadImage
                src={`${
                  activeNav
                    ? "./icon/x-white.png"
                    : "./icon/hamburger-white.png"
                } `}
                className="duration-100"
                alt=""
                onClick={handleNavbar}
              />
            ) : (
              <LazyLoadImage
                src={`${
                  activeNav ? "./icon/x-white.png" : "./icon/hamburger.png"
                }`}
                alt=""
                className="duration-100"
                onClick={handleNavbar}
              />
            )}
          </div>
        </div>
        {/* page selector mobile */}
        <div
          className={`absolute left-0 pl-[1.9rem] pt-[2rem] bg-black w-full z-[-1] transition-all duration-500 ease-in ${
            activeNav ? "top-0" : "top-[-20rem]"
          }`}
        >
          <ul className=" text-[9px] font-bold justify-between w-full z-10 space-y-[1rem] py-[1rem]">
            <li
              className="z-10 cursor-pointer duration-200 text-white"
              id="sumary"
              onClick={clickSumary}
            >
              Sumary
            </li>
            <li
              className="text-[#BEBBB5] hover:text-[#BEBBB5] z-10 cursor-pointer duration-200"
              id="my work"
              onClick={clickMyWork}
            >
              My Work
            </li>
            <li
              className="text-[#BEBBB5] hover:text-[#BEBBB5] z-10 cursor-pointer duration-200"
              id="experience"
              onClick={clickExperience}
            >
              Experience
            </li>
            <li
              className="text-[#BEBBB5] hover:text-[#BEBBB5] z-10 cursor-pointer duration-200"
              id="skills"
              onClick={clickSkills}
            >
              Skils
            </li>
            <li
              className="text-[#BEBBB5] hover:text-[#BEBBB5] z-10 cursor-pointer duration-200"
              id="skills"
              onClick={clickContact}
            >
              <button className="bg-white text-black px-[1rem] py-[.2rem]">
                Get In Touch
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* summary section */}
      <div
        ref={ref1}
        className="flex items-center justify-around realtive block md:mt-0 mt-[4rem]"
      >
        <motion.div
          style={{ opacity: opacity }}
          transition={{ delay: 2 }}
          className="absolute z-0 w-full items-center justify-around realtive md:flex hidden"
        >
          <MouseParallaxContainer
            useWindowMouseEvents
            className="flex w-full items-center justify-around paralax z-0"
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
                <LazyLoadImage
                  alt=""
                  src="./icon/background/2.png"
                  className="ml-2 w-2"
                />
              </MouseParallaxChild>
              <MouseParallaxChild factorX={0.5} factorY={0.5}>
                <LazyLoadImage
                  alt=""
                  src="./icon/background/1.png"
                  className="pt-[7rem] w-[6rem]"
                />
              </MouseParallaxChild>
            </div>
          </MouseParallaxContainer>
        </motion.div>
        <div className="w-[80%]" ref={refSumary}>
          <div className="justify-between w-full md:pt-[5rem] block md:flex ">
            {/* socialmedia */}
            <motion.div
              className="media-social w-[10rem] md:mt-[4rem] hidden md:flex z-20"
              style={{ opacity: opacity }}
            >
              <ul className="space-y-[1rem] flex md:block">
                <li className="rounded-full w-[2rem] h-[2rem] bg-[#D9D9D9] p-2">
                  <Link to="https://www.instagram.com/agung_guntek/">
                    <Suspense fallback={<LazySocialMedia />}>
                      <LazyLoad src="./icon/instagram.png" />
                    </Suspense>
                  </Link>
                </li>
                <li className="rounded-full w-[2rem] h-[2rem] bg-[#D9D9D9] p-2">
                  <Link to="https://github.com/guntekhunter">
                    <Suspense fallback={<LazySocialMedia />}>
                      <LazyLoad src="./icon/github.png" />
                    </Suspense>
                  </Link>
                </li>
                <li className="rounded-full w-[2rem] h-[2rem] bg-[#D9D9D9] p-2">
                  <Link to="https://www.linkedin.com/in/muh-agung-haeruddin-a74018186/">
                    <Suspense fallback={<LazySocialMedia />}>
                      <LazyLoad src="./icon/linkedin.png" />
                    </Suspense>
                  </Link>
                </li>
                <li
                  onClick={goToWhatsup}
                  className="rounded-full w-[2rem] h-[2rem] bg-[#D9D9D9] p-2 cursor-pointer"
                >
                  <Suspense fallback={<LazySocialMedia />}>
                    <LazyLoad src="./icon/whatsapp.png" />
                  </Suspense>
                </li>
              </ul>
            </motion.div>

            {/* content */}
            {mobile ? (
              <div className="summary-content md:w-[40rem] w-[100%] flex">
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute w-[9rem] ml-100% right-0 md:hidden w-[100%] hight-[100%] top-[2rem] left-[12rem]"
                >
                  <LazyLoadImage
                    src="./foto.png"
                    alt="./foto.png"
                  ></LazyLoadImage>
                </motion.div>
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition}
                  className="summary-container z-10"
                >
                  <p className="hy text-[.7rem] font-light"></p>
                  <motion.p
                    // style={{ opacity: opacity }}
                    className="name text-[.7rem]"
                  >
                    Hey, I'm Agung
                    <br /> and
                  </motion.p>

                  <p className="name text-[1.9rem] font-bold lg:text-[4.8rem]">
                    I'M A
                  </p>
                  <p className="name text-[1.9rem] font-bold lg:text-[4.8rem]">
                    FULLSTACK
                  </p>
                </motion.div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ opacity: opacity }}
                className="summary-content md:w-[40rem] w-[100%] flex relative"
              >
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition}
                  className="summary-container z-10"
                >
                  <p className="hy text-[.7rem] font-light"></p>
                  <motion.p
                    style={{ opacity: opacity }}
                    className="name text-[1rem]"
                  >
                    Hey, my name is Agung
                  </motion.p>

                  <p className="name text-[2rem] font-bold lg:text-[4.8rem]">
                    I'M A
                  </p>
                  <p className="name text-[2rem] font-bold lg:text-[4.8rem]">
                    FULLSTACK
                  </p>
                </motion.div>
              </motion.div>
            )}
            <motion.div className="w-[30rem]" style={{ opacity: opacity }}>
              <div className="md:flex absolute top-14 left-[45rem]">
                <LazyLoadImage
                  src="./foto.png"
                  alt=""
                  className="w-[20rem] md:flex hidden"
                ></LazyLoadImage>
              </div>
            </motion.div>
          </div>
          {mobile ? (
            <p className="name font-bold md:ml-[7.8rem] text-[1.8rem] font-bold lg:text-[4.8rem] text-[2rem] z-10">
              WEB DEVELOPER
            </p>
          ) : (
            <motion.p
              style={{ opacity: opacity }}
              className="name font-bold md:ml-[7.8rem] text-[1.8rem] font-bold lg:text-[4.8rem] text-[2rem] z-10"
            >
              WEB DEVELOPER
            </motion.p>
          )}
          {/* socialmedia mobile*/}
          <div className="media-social w-[40%] md:mt-[4rem] block md:hidden flex w-full space-x-[1.5rem] mt-[1rem]">
            <div className="rounded-full w-[2rem] h-[2rem] bg-[#D9D9D9] p-2">
              <Link to="https://www.instagram.com/agung_guntek/">
                <LazyLoadImage
                  alt=""
                  src="./icon/instagram.png"
                ></LazyLoadImage>
              </Link>
            </div>
            <div className="rounded-full w-[2rem] h-[2rem] bg-[#D9D9D9] p-2">
              <Link to="https://github.com/guntekhunter">
                <LazyLoadImage alt="" src="./icon/github.png"></LazyLoadImage>
              </Link>
            </div>
            <div className="rounded-full w-[2rem] h-[2rem] bg-[#D9D9D9] p-2">
              <Link to="https://www.linkedin.com/in/muh-agung-haeruddin-a74018186/">
                <LazyLoadImage alt="" src="./icon/linkedin.png"></LazyLoadImage>
              </Link>
            </div>
            <div
              className="rounded-full w-[2rem] h-[2rem] bg-[#D9D9D9] p-2"
              onClick={goToWhatsup}
            >
              <LazyLoadImage alt="" src="./icon/whatsapp.png"></LazyLoadImage>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="flex justify-around"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        {mobile ? (
          <div className="mt-6">
            <p className="">See My Portfolio</p>
            <div className="w-full flex justify-center mt-2">
              <LazyLoadImage
                alt=""
                src="./icon/arrow.png"
                className="rotate-[90deg] w-5"
              />
            </div>
          </div>
        ) : (
          <motion.div style={{ opacity: opacity }} className="mt-6">
            <p className="">See My Portfolio</p>
            <div className="w-full flex justify-center mt-2">
              <LazyLoadImage
                alt=""
                src="./icon/arrow.png"
                className="rotate-[90deg] w-5"
              />
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* project on mobile looks */}
      <div ref={refMyWork}>
        <div className="grid grid-cols-2 gap-5 p-[2rem] md:hidden">
          {gabung &&
            gabung.map((data) => {
              const myImage = new CloudinaryImage(data.image, {
                cloudName: "unm",
              });
              return (
                <Link to={`/portofolio/${data.id}`}>
                  <div className="relative shadow-md">
                    <div className="h-[3.8rem] overflow-hidden">
                      <AdvancedImage
                        loading="lazy"
                        cldImg={myImage}
                        alt=""
                      ></AdvancedImage>
                    </div>
                    <div className="text-[.5rem] px-[.5rem] py-[.5rem]">
                      <p className="font-bold">{data.name}</p>
                      <p className="truncate ... h-[1rem]">
                        {data.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>

        {/* all the project */}
        <section className="relative hidden md:block py-[5rem]">
          <div className="container mx-auto">
            <div className="text-[2rem] ml-[10%] mb-[4rem] border-b-[2px] border-[#353435] w-max">
              <p className="">SOME OF</p>
              <p className="font-bold">MY WORK.</p>
            </div>
            <MouseParallaxContainer
              useWindowMouseEvents
              className="w-full h-full paralax"
              globalFactorX={0.3}
              globalFactorY={0.3}
              resetOnLeave
            >
              <div className="flex flex-wrap justify-center gap-14 px-[2rem]">
                {gabung &&
                  gabung.map((data, key) => {
                    const myImage = new CloudinaryImage(data.image, {
                      cloudName: "unm",
                    });
                    return (
                      <MouseParallaxChild
                        key={key}
                        factorX={data.factoryX}
                        factorY={data.factoryY}
                        className="ease-out duration-500 flex items-center justify-center"
                      >
                        <Link to={`/portofolio/${data.id}`} state={data.width}>
                          <motion.div
                            exit={hoverId !== data.id && { opacity: 0 }}
                            className="relative cursor-pointer bg-gray-200"
                            style={{ width: data.width }}
                            id={data.id}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleLeave}
                          >
                            <AdvancedImage
                              loading="lazy"
                              cldImg={myImage}
                              className="border-[#353435] border-dashed border-[2px] relative hover:border-dashed hover:opacity-70 duration-500 w-full"
                            />
                            <p
                              className={`${
                                idProject === data.id
                                  ? "flex duration-500"
                                  : "hidden"
                              } absolute ease-out left-[50%] top-[50%] z-0 text-[1rem] bg-black text-white duration-300 px-3 py-1 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap`}
                            >
                              {data.name}
                            </p>
                          </motion.div>
                        </Link>
                      </MouseParallaxChild>
                    );
                  })}
              </div>
            </MouseParallaxContainer>
          </div>
        </section>
      </div>

      <ModalProject
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        id={id}
      />
      {/* expirience section */}
      <div ref={refExperience} className="pt-[3rem]">
        <ExperienceSection />
      </div>

      {/* skills section */}
      <div ref={refSkills}>
        <SkillsSection />
      </div>

      {/* contact section */}
      <div ref={refContact} className="z-10">
        <Contact callback={modalActive} />
      </div>
    </div>
  );
}
