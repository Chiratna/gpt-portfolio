import { motion } from "framer-motion";

const ProjectsFocused = () => {
  return (
    <motion.div
      initial={{ y: 150, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="absolute top-[40%] left-6 right-0 flex-col space-y-6"
    >
      <span className="block text-5xl font-extrabold text-white">Who</span>
      <span className="block text-5xl font-extrabold text-white">loves</span>
      <span className="block font-bold text-white text-7xl">Beautiful</span>
      <span className="block font-extrabold text-[#FFBA61] text-8xl">
        UI...
      </span>
    </motion.div>
  );
};

export default ProjectsFocused;
