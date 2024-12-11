import ParticlesContainer from "../components/ParticlesContainer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <>
      <div className="text-center flex flex-col justify-center lg:h-[80vh] h-[70vh]   lg:text-left container mx-auto">
        <motion.h1
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-[35px] lg:w-[60%] leading-tight md:text-[60px] font-semibold "
        >
          Building Innovative Digital
          <span className="text-accent"> Experiences</span>
        </motion.h1>
        <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="lg:w-[50%] w-full py-3"
        >
          I&apos; m AbdulQudus Ajape, a Front-End Developer passionate about
          creating seamless digital experiences. I blend precision and
          creativity to turn ideas into intuitive web solutions. Dive into my
          world, where every click unveils a story of meticulous craftsmanship
          and forward-thinking design.
        </motion.p>
      </div>

      <div className="w-[1200px] h-full absolute right-0 bottom-0 ">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 "/>
        <ParticlesContainer />
        <motion.div
          className="w-full h-full max-w-[737px] max-h-[678px] absolute lg:bottom-0 lg:right-[8%]"
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
        ></motion.div>
      </div>
    </>
  )
};

export default Home;
