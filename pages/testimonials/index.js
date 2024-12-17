import TestimonialSlider from "../../components/TestimonialSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const Testimonials = () => {
  return (
    <div className=" bg-primary/30 h-[100vh] pt-[2rem]  text-center ">
      <div className="container mx-auto flex flex-col justify-center  ">
        <motion.h2
          variants={fadeIn("up", "0.2")}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 lg:pt-[10%]"
        >
          Feedback &  <span className="text-accent">Experiences.</span>
        </motion.h2>
        <motion.div
          variants={fadeIn("up", "0.4")}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full lg:px-[10%]"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
