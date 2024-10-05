import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { HiArrowRight } from "react-icons/hi2";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Link from "next/link"; // Import Link

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center  h-full xl:text-left container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 lg:pt-0 pt-12 md:pt-8"
          >
            Building Innovative Digital
            <span className="text-accent pl-5"> Experiences</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="lg:w-[50%] "
          >
            I&apos;m AbdulQudus Ajape, a Front-End Developer passionate about
            creating seamless digital experiences. I blend precision and
            creativity to turn ideas into intuitive web solutions. Dive into my
            world, where every click unveils a story of meticulous craftsmanship
            and forward-thinking design.
          </motion.p>

          {/* Test Link */}

          <div className=" mx-auto mb-10 xl:mx-0 xl:hidden">
            <div
              className="relative w-[185px] h-[185px] cursor-pointer flex justify-center items-center  group "
            >
              <Link href="/work">
                <button className="mt-5 p-2 bg-blue-500 text-white rounded">
                  Test Work Link
                </button>
              </Link>
              {/* <HiArrowRight className="absolute  text-4xl group-hover:translate-x-2 transition-all duration-300 " /> */}
            </div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <div className=" mx-auto mb-10 xl:mx-0 xl:hidden">
              <div
                className="relative w-[185px] h-[185px] cursor-pointer flex justify-center items-center  group "
              >
                <Link href="/work">
                  <button className="mt-5 p-2 bg-blue-500 text-white rounded">
                    Test Work Link
                  </button>
                </Link>
                {/* <HiArrowRight className="absolute  text-4xl group-hover:translate-x-2 transition-all duration-300 " /> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image or ParticlesContainer here */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0 ">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 "></div>
        <ParticlesContainer />
        <motion.div
          className="w-full h-full max-w-[737px] max-h-[678px] absolute lg:bottom-0 lg:right-[8%]"
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* <Avatar /> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
