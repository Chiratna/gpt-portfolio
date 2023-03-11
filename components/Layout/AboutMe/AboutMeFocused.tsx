import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const AboutMeFocused = () => {
  return (
    <motion.div
      initial={{ y: 150, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="absolute  bottom-[30%] left-4 right-[20%] flex-col space-y-6 pl-10"
    >
      <div className="translate-y-[20%] xl:translate-y-[30%]">
        <span className="text-2xl font-bold leading-[2.5rem] text-white xl:text-4xl xl:leading-[3.5rem]">
          The man behind the keyboard loves to develope beautiful, stunning
          websites and applications.
          <br />I am currently interning at
          <span className="text-[#FF5B91] font-extrabold text-3xl xl:text-5xl mx-1">
            Betterhalf,
          </span>
          helping them scale their product for millions of users...
        </span>
        <div className="flex mt-6 space-x-3">
          <div className="p-5 bg-black rounded-full ">
            <FiLinkedin color="white" size={24} />
          </div>
          <div className="p-5 bg-black rounded-full">
            <FiGithub color="white" size={24} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMeFocused;
