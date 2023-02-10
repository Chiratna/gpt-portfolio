import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import IntroPage from "../components/screens/IntroPage";
import ScrollAnimation from "../components/screens/ScrollAnimation";

const inter = Inter({ subsets: ["latin"] });

const LoadingIcon = () => {
  return (
    <svg
      width="53"
      height="66"
      viewBox="0 0 53 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.2626 1H15.3513C17.3788 1 19.3442 1.69979 20.9155 2.98118L49.6009 26.3742C51.527 27.9449 52.7146 30.2564 52.779 32.7409C52.8357 34.93 52.8285 36.9937 52.6256 37.1591L20.912 63.0217C19.3407 64.3031 17.3788 65 15.3513 65H6.2626C3.35615 65 1 62.6439 1 59.7374H6.21018C9.76963 59.7374 12.9789 57.5941 14.3426 54.3063L21.7808 36.3731C22.6765 34.2136 22.6765 31.7864 21.7808 29.6269L14.3426 11.6937C12.9789 8.40586 9.76964 6.2626 6.21019 6.2626H1C1 3.35615 3.35615 1 6.2626 1Z"
        fill="white"
      />
      <path
        d="M1 6.2626V6.2626C1 3.35615 3.35615 1 6.2626 1H15.3513C17.3788 1 19.3442 1.69979 20.9155 2.98118L49.6009 26.3742C51.527 27.9449 52.7146 30.2564 52.779 32.7409C52.8357 34.93 52.8285 36.9937 52.6256 37.1592C52.3151 37.4124 32.6778 53.4266 20.912 63.0217C19.3407 64.3031 17.3788 65 15.3513 65H6.2626C3.35615 65 1 62.6439 1 59.7374V59.7374M1 6.2626H15.3513C17.3788 6.2626 19.3442 6.96239 20.9155 8.24378L42.9492 26.2123C44.9889 27.8757 46.1724 30.3681 46.1724 33V33C46.1724 35.6319 44.9889 38.1243 42.9492 39.7877L20.9155 57.7562C19.3442 59.0376 17.3788 59.7374 15.3513 59.7374H1M1 6.2626H6.21019C9.76964 6.2626 12.9789 8.40586 14.3426 11.6937L21.7808 29.6269C22.6765 31.7864 22.6765 34.2136 21.7808 36.3731L14.3426 54.3063C12.9789 57.5941 9.76963 59.7374 6.21018 59.7374H1"
        stroke="white"
        stroke-width="0.338624"
      />
    </svg>
  );
};

const LoadingIcon2 = () => {
  return (
    <svg
      width="46"
      height="56"
      viewBox="0 0 46 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.46934 1H13.188C14.91 1 16.5791 1.59431 17.9135 2.68255L42.2751 22.5494C43.9108 23.8834 44.9194 25.8465 44.9741 27.9564C45.0222 29.8155 45.0161 31.5682 44.8438 31.7087L17.9105 53.6729C16.5761 54.7611 14.91 55.353 13.188 55.353H5.46933C3.00099 55.353 1 53.352 1 50.8836H5.42483C8.44774 50.8836 11.1733 49.0634 12.3314 46.2712L18.6484 31.0411C19.4091 29.2071 19.4091 27.1458 18.6484 25.3118L12.3314 10.0818C11.1733 7.28954 8.44774 5.46934 5.42483 5.46934H1C1 3.00099 3.00099 1 5.46934 1Z"
        fill="white"
      />
      <path
        d="M1 5.46934V5.46934C1 3.00099 3.00099 1 5.46934 1H13.188C14.91 1 16.5791 1.59431 17.9135 2.68255L42.2751 22.5494C43.9108 23.8834 44.9194 25.8465 44.9741 27.9564C45.0222 29.8155 45.0161 31.5682 44.8438 31.7087C44.5801 31.9238 27.9029 45.5241 17.9105 53.6729C16.5761 54.7611 14.91 55.3529 13.188 55.3529H5.46933C3.00099 55.3529 1 53.352 1 50.8836V50.8836M1 5.46934H13.188C14.91 5.46934 16.5791 6.06365 17.9135 7.15189L36.626 22.4119C38.3582 23.8246 39.3633 25.9413 39.3633 28.1765V28.1765C39.3633 30.4117 38.3582 32.5284 36.626 33.941L17.9135 49.2011C16.5791 50.2893 14.91 50.8836 13.188 50.8836H1M1 5.46934H5.42483C8.44774 5.46934 11.1733 7.28954 12.3314 10.0818L18.6484 25.3118C19.4091 27.1458 19.4091 29.2071 18.6484 31.0411L12.3314 46.2712C11.1733 49.0634 8.44774 50.8836 5.42483 50.8836H1"
        stroke="white"
        strokeWidth="0.287582"
      />
    </svg>
  );
};

const LoadingScreen = () => {
  const [y, setY] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setY(window.innerHeight);
    }, 800);
  }, []);

  return (
    <motion.div
      animate={{ y: -y }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="absolute inset-0 bg-[#2C73D2] items-center justify-center flex flex-col z-50"
    >
      <div className="flex items-center justify-center">
        <motion.div>
          <LoadingIcon />
        </motion.div>
        <motion.div
          initial={{ x: -20 }}
          animate={{ x: 10 }}
          transition={{ type: "spring" }}
        >
          <LoadingIcon2 />
        </motion.div>
      </div>
      <p className="mt-6 text-[25px] font-bold text-white">Loading...</p>
    </motion.div>
  );
};

export default function Home() {
  return (
    // <div className="relative w-screen h-screen">
    //   <LoadingScreen />
    //   <IntroPage />
    // </div>
    <ScrollAnimation />
  );
}
