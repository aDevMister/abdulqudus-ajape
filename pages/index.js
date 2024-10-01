// import Image from "next/image";
// import ParticlesContainer from "../components/ParticlesContainer";
// import ProjectsBtn from "../components/ProjectsBtn";
// import Avatar from "../components/Avatar";
// import { motion } from "framer-motion";
// import { fadeIn, FadeIn } from "../variants";

// const Home = () => {
//   return (
//     <div className="bg-primary/60 h-full">
//       <div className=" w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 ">
//         <div className="text-center flex flex-col justify-center xl:pt-40 h-full xl:text-left container mx-auto">
//           <motion.h1
//           variants={fadeIn('down', 0.4)}
//           initial="hidden"
//           animate="show"
//           exit="hidden"
//           className="h1">
//             Transforming Ideas <br /> Into
//             <span className="text-accent">Digital Reality</span>
//           </motion.h1>
//           <motion.p
//           variants={fadeIn('down', 0.3)}
//           initial="hidden"
//           animate="show"
//           exit="hidden"
//           className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 ">
//             lorem ipsun Checking the network cables, modem, and router lorem
//             ipsun Checking the network cables, modem, and router Reconnecting to
//             Wi-Fimotion. lorem ipsun Checking the network cables, modem, and router
//           </motion.p>
//           <div className="flex justify-center xl:hidden relative">
//             <ProjectsBtn  />
//           </div>
//           <motion.div variants={fadeIn('down', 0.4)}
//           initial="hidden"
//           animate="show"
//           exit="hidden"
//           className="hidden xl:flex"
//           >
//             <ProjectsBtn />
//           </motion.div>
//         </div>
//       </div>
//       <div className="">Image</div>
//     </div>
//   );
// };

// export default Home;

import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 h-full xl:text-left container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 lg:pt-0 pt-12 md:pt-8"
          >
            Transforming Ideas Into
            <span className="text-accent pl-5">Digital Reality</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 "
          >
            Checking the network cables, modem, and router. Reconnecting to
            Wi-Fi.
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* Image or ParticlesContainer here */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0 ">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 "></div>
        <ParticlesContainer />
        <motion.div
          className="w-full h-full max-w-[737px] max-h-[678px] absolute  lg:bottom-0 lg:right-[8%]  "
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
