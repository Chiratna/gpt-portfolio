import { AnimatePresence } from "framer-motion";
import Button from "../../common/Button";
import ProjectsUnHovered from "./ProjectsUnHovered";

const Projects = ({ activeTab }: { activeTab: number }) => {
  return (
    <>
      <AnimatePresence>
        {activeTab !== 3 && <ProjectsUnHovered />}
      </AnimatePresence>
      <Button activeTab={activeTab} tabId={3} />
    </>
  );
};

export default Projects;
