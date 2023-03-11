import { motion } from "framer-motion";

const AboutMeUnHoveredState = () => {
  return (
    <motion.div
      key={"container"}
      initial={{ y: 150, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="absolute top-[40%] left-6 right-0 flex-col space-y-6"
    >
      <span className="block text-4xl font-extrabold text-white xl:text-5xl">
        Hi...
      </span>
      <span className="block text-4xl font-extrabold text-white xl:text-5xl">
        I am,
      </span>
      <span className="block text-6xl  font-extrabold text-[#DE5D80] xl:text-7xl">
        Chiratna
      </span>
      <span className="block text-4xl font-extrabold text-white xl:text-5xl">
        Chakraborty
      </span>
    </motion.div>
  );
};

export default AboutMeUnHoveredState;
