import { LayoutGroup, motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import MyPic from "../../public/Cns.jpg";
import clsxm from "../../utils/clsxm";
import AboutMe from "../Layout/AboutMe";
import Projects from "../Layout/Projects";
import Skills from "../Layout/Skills";

function IntroPage() {
  const [hoverId, setHoverId] = useState<number>(-1);
  const control = useAnimationControls();
  return (
    <div className="absolute inset-0 flex bg-white">
      <LayoutGroup id="column">
        <motion.div
          onMouseEnter={() => setHoverId(1)}
          onMouseLeave={() => setHoverId(-1)}
          layout
          className={clsxm(
            "bg-[#7C7B7D] backdrop-blur relative flex-auto flex max-w-[33.33vw] h-full transition-all duration-500",
            hoverId === 1 && "flex-grow-[2] max-w-[40vw]"
          )}
        >
          <Image src={MyPic} fill alt="MyPic" className="object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
          <AboutMe activeTab={hoverId} />
        </motion.div>
        <motion.div
          onMouseEnter={() => setHoverId(2)}
          onMouseLeave={() => setHoverId(-1)}
          layout
          className={clsxm(
            "bg-black relative flex-auto h-full max-w-[33.33vw] transition-all duration-500",
            hoverId === 2 && "flex-grow-[2] max-w-[40vw]"
          )}
        >
          <Skills activeTab={hoverId} />
        </motion.div>
        <motion.div
          onMouseEnter={() => setHoverId(3)}
          onMouseLeave={() => setHoverId(-1)}
          layout
          className={clsxm(
            "bg-[#393053] relative max-w-[33.33vw] flex-auto h-full transition-all duration-500",
            hoverId === 3 && "flex-grow-[2] max-w-[40vw]"
          )}
        >
          <Projects activeTab={hoverId} />
        </motion.div>
      </LayoutGroup>
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
