import React, { useState } from "react";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";
// icons
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGit,
  FaGithub,
  FaArrowCircleDown,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiTailwindcss,
  SiRedux,
  SiCss3,
  SiTypescript,
  SiVercel,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import Bulb from "../../components/Bulb";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Frontend Development",
        icons: [
          FaHtml5,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiFramer,
          SiRedux,
          SiTypescript,
          SiPostman,
          SiFigma,
        ],
      },
      {
        title: "UI Frameworks",
        icons: [FaBootstrap, SiTailwindcss, SiCss3],
      },
      {
        title: "Version Control & Collaboration",
        icons: [FaGit, FaGithub, SiVercel],
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "Co-founder - AiNameIt.",
        stage: "July 2023 - July 2024",
      },
      {
        title: "Front-End Developer - MSME Ecosystem LTD.",
        stage: "May 2024 - Present",
      },
      {
        title: "Web Developer - Toshconsult Technologies Inc.",
        stage: "April 2023 - July 2023",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="lg:h-full h-[70vh] bg-primary/30 flex items-center justify-center  text-center xl:text-left">
      <Circles />

      <div className="container mx-auto  lg:h-full overflow-y-auto flex flex-col items-center lg:flex-row justify-center gap-x-6">
        <div className="flex-1 flex flex-col justify-center ">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Driven by Code, <span className="text-accent  ">Shaped</span> by
            Creativity
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 "
          >
            With a passion for technology and design, I specialize in building
            responsive, user-friendly interfaces. I collaborate closely with
            clients to bring their visions to life, ensuring each project
            reflects their unique identity and goals.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 "
          >
            <div className="flex flex-1 lg:gap-x-6 ">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-[5rem] ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={2} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Years of Experience
                </div>
              </div>

              <div className="relative flex-1  ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full  xl:max-w-[48%] h-[20px] lg:h-[420px] "
        >
          <div className="flex gap-x-4 xl:gap-8  mx-auto xl:mx-0 mb-4">
            <FaArrowCircleDown className="text-xl text-grey lg:hidden block animate-bounce " />
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`cursor-pointer capitalize xl:text-lg relative  after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0 ${
                    index === itemIndex
                      ? "text-accent after:w-[100%] after:bg-accent"
                      : ""
                  }`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
            <FaArrowCircleDown className="text-xl text-grey lg:hidden block animate-bounce " />
          </div>
          <div className=" lg:py-6 flex flex-col  lg:px-0 px-1   gap-y-1 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className=" flex flex-col lg:flex-row max-w-max gap-x-2 items-center text-white/60  "
                >
                  <div className="font-light text-center  text-[14px] mb-2 md:mb-0 ">
                    {item.title}
                  </div>
                  {item.stage && <div>{item.stage}</div>}
                  <div className="flex gap-x-4">
                    {item.icons?.map((Icon, iconIndex) => {
                      return (
                        <div key={iconIndex} className="text-2xl text-white">
                          <Icon />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
      <Bulb />

    </div>
  );
};

export default About;
