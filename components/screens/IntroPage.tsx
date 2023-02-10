import { motion } from "framer-motion";
import React from "react";

function IntroPage() {
  return (
    <div className="absolute inset-0 bg-[#163a69]  p-6">
      <motion.div>
        <div>
          <p className="text-[6rem] font-bold text-white font-montserat  block">
            FRONTEND
          </p>
          <p className="text-[7rem] font-bold text-white font-montserat  block leading-6">
            DEVELOPER
          </p>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-14 right-8">
        <div>
          <p className="text-[5rem] font-bold text-white font-montserat  block">
            CHIRATNA
          </p>
          <p className="text-[5rem] font-bold text-white font-montserat  block leading-6">
            CHAKRABORTY
          </p>
        </div>
      </motion.div>
    </div>
  );
}

/**
 * const MusicCard = () => {
   const ref = useRef(null);
   const { scrollXProgress } = useScroll({
     target: ref,
     offset: ["end end", "start start"],
   });
  return (
    <motion.div
      className={`w-[300px] h-[400px] bg-red-700 mx-3 flex-grow-0 flex-shrink-0 basis-auto rounded-lg snap-start`}
      style={{scale : scrollXProgress}}
    ></motion.div>
  );
};
 */

export default IntroPage;
