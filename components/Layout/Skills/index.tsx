import { AnimatePresence } from "framer-motion";
import Button from "../../common/Button";
import SkillsFocused from "./SkillsFocused";
import { SkillsUnHovered } from "./SkillsUnHovered";

const Skills = ({ activeTab }: { activeTab: number }) => {
  return (
    <>
      <AnimatePresence>
        {activeTab !== 2 && <SkillsUnHovered key={"001"} />}
        {activeTab === 2 && <SkillsFocused />}
      </AnimatePresence>

      <Button activeTab={activeTab} tabId={2} />
    </>
  );
};

export default Skills;
