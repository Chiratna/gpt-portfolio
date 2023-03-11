import { motion } from "framer-motion";
export const SkillsUnHovered = () => {
  return (
    <motion.div
      initial={{ y: 150, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="absolute top-[35%] left-6 right-0 -translate-x-[50%] flex-col space-y-6"
    >
      <span className="block text-4xl font-extrabold leading-none text-white xl:text-5xl">
        A
      </span>
      <span className="block text-4xl font-extrabold leading-none text-white xl:text-5xl ">
        Self
      </span>
      <span className="block text-4xl font-extrabold leading-none text-white xl:text-5xl ">
        motivated
      </span>
      <span className="block font-extrabold text-[#B87C4C] text-6xl xl:text-7xl">
        Frontend
      </span>
      <span className="block text-4xl font-extrabold leading-none text-white xl:text-5xl">
        Developer
      </span>
    </motion.div>
  );
};
