import {} from "react-icons/rx";
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
export const serviceData = [];
const Services = () => {
  return (
    <div className="lg:h-full h-[80vh] bg-primary/30  lg:px-[9rem] flex items-center ">
      <Circles />
      <div className="container  mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-8 ">
          <div className="text-center flex  flex-col lg:text-left  xl:mb-0 ">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My services <span className="text-accent">,</span>{" "}
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] text-wrap mx-auto lg:mx-0 "
            >
              I offer custom front-end development, from sleek landing pages to
              powerful web apps, using the latest technologies to create designs
              that perform and exceed expectations.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full lg:py-12 lg:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
