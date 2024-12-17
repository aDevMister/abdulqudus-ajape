import {} from "react-icons/rx";
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
export const serviceData = [];
const Work = () => {
  return (
    <div className="lg:h-[90vh] md:h-[70vh] sm:h-[90vh] bg-primary/30 lg:mb-[12rem]  lg:px-[9rem] flex items-center ">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 ">
          <div className="text-center flex lg:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 ">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="lg:pt-0 pt-4"
            >
              <div className="h2">
                My work <span className="text-accent">,</span>
              </div>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px]  md:max-w-[100%] mx-auto lg:mx-0 "
            >
              Explore my portfolio of projects that demonstrate my commitment to
              quality and creativity. Each piece highlights my ability to solve
              challenges and deliver impactful digital experiences that resonate
              with users.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
