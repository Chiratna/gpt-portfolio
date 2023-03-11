import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import clsxm from "../../utils/clsxm";

const RightArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3}
    stroke="currentColor"
    className="absolute z-10 w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

const Button = ({ activeTab, tabId }: { tabId: number; activeTab: number }) => {
  return (
    <div
      className={clsxm(
        "absolute cursor-pointer h-10 flex items-center justify-center transition-all duration-300 rounded-full w-28 bottom-4 bg-white bg-opacity-40 right-4 overflow-hidden"
      )}
    >
      <AnimatePresence>
        {activeTab === tabId && (
          <motion.div
            initial={{ right: "100%" }}
            animate={{ right: 0 }}
            exit={{ right: "100%" }}
            transition={{ duration: 0.5 }}
            className={clsxm(
              "top-0 bottom-0 absolute left-0 duration-700 bg-white rounded-full"
            )}
          />
        )}
      </AnimatePresence>
      <RightArrow />
    </div>
  );
};

export default Button;
