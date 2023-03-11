import { motion, Variants } from "framer-motion";
import css_icon from "../../../public/css-icon.png";
import html_icon from "../../../public/html-icon.png";
import flutter_icon from "../../../public/flutter-icon.png";
import js_icon from "../../../public/js-icon.png";
import next_icon from "../../../public/next_js.png";
import react_icon from "../../../public/react-js-icon.png";
import tailwind_icon from "../../../public/tailwind-css-icon.png";
import typescript_icon from "../../../public/typescript-icon.png";
import Image, { StaticImageData } from "next/image";
import clsxm from "../../../utils/clsxm";

const container: Variants = {
  initial: { y: 150, opacity: 0 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const photo: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const FrameWorkIcon = ({
  left,
  right,
  top,
  bottom,
  src,
  size,
  isNext,
}: {
  src: StaticImageData;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  size: number;
  isNext?: boolean;
}) => {
  return (
    <motion.div
      className="absolute rounded-full cursor-pointer"
      variants={photo}
      whileHover={{ scale: 1.3 }}
      style={{ left, right, top, bottom }}
    >
      <Image
        src={src}
        width={size}
        height={size}
        alt="icon"
        className={clsxm(isNext && "bg-white rounded-full")}
      />
    </motion.div>
  );
};
const SkillsFocused = () => {
  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="animate"
      className="absolute bottom-0 flex-col space-y-6 top-16 left-6 right-6 "
    >
      <span className="text-3xl font-extrabold text-white xl:text-4xl">
        Pringels is my second favorite,
        <br /> My{" "}
        <span className="text-[#B87C4C] text-4xl xl:text-5xl">first</span>{" "}
        are...
      </span>
      <FrameWorkIcon size={90} src={css_icon} top={"20%"} left={"16%"} />
      <FrameWorkIcon size={80} src={html_icon} top={"20%"} right={"35%"} />
      <FrameWorkIcon size={80} src={flutter_icon} top={"70%"} left={"45%"} />
      <FrameWorkIcon size={90} src={tailwind_icon} top={"45%"} left={"46%"} />
      <FrameWorkIcon size={80} src={js_icon} top={"45%"} right={"80%"} />
      <FrameWorkIcon size={80} src={typescript_icon} top={"55%"} left={"80%"} />
      <FrameWorkIcon
        isNext
        size={100}
        src={next_icon}
        top={"70%"}
        right={"70%"}
      />
      <FrameWorkIcon size={90} src={react_icon} top={"35%"} left={"80%"} />
    </motion.div>
  );
};

export default SkillsFocused;
