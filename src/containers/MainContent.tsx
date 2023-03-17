import "../styles/components/mainContainer.sass";
import AboutContainer from "../components/home/AboutContainer";
import ProjectsContainer from "../components/home/ProjectsContainer";
import TechnologiesContainer from "../components/home/TechnologiesContainer";

const MainContent = () => {
  return (
    <main id="main-container">
      <AboutContainer />
      <TechnologiesContainer />
      <ProjectsContainer />
    </main>
  );
};

export default MainContent;
