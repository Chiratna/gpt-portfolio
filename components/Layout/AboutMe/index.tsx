import { AnimatePresence } from "framer-motion";
import AboutMeUnHoveredState from "./AboutMeUnHoveredState";
import Image from "next/image";
import myPic from "../../../public/MyThobra.jpg";
import Button from "../../common/Button";
import AboutMeFocused from "./AboutMeFocused";
const AboutMe = ({ activeTab }: { activeTab: number }) => {
  return (
    <>
      <Image
        src={myPic}
        width={80}
        height={80}
        alt="My Pic"
        className="absolute object-cover rounded-full right-10 top-14"
      />
      <AnimatePresence>
        {activeTab !== 1 && <AboutMeUnHoveredState key={"001"} />}
        {activeTab === 1 && <AboutMeFocused />}
      </AnimatePresence>
      <Button activeTab={activeTab} tabId={1} />
    </>
  );
};

export default AboutMe;
