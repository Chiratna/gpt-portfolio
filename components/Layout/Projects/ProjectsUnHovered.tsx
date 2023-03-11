import { motion } from "framer-motion";

const ProjectsUnHovered = () => {
  return (
    <motion.div
      initial={{ y: 150, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="absolute top-[40%] left-6 right-0 flex-col space-y-6"
    >
      <span className="block text-4xl font-extrabold text-white">Who</span>
      <span className="block text-4xl font-extrabold text-white">loves</span>
      <span className="block text-6xl font-bold text-white">Beautiful</span>
      <span className="block font-extrabold text-[#FFBA61] text-7xl">
        UI...
      </span>
    </motion.div>
  );
};

export default ProjectsUnHovered;
