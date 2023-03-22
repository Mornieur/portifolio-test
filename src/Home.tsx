import Sidebar from "./components/home/Sidebar";
import MainContent from "./containers/MainContent";
import "./styles/components/home.sass";
import { GoTelescope } from "react-icons/go";
import { TextAnimated } from "./components/animated/TextAnimated";

const Home = () => {
  return (
    <div id="portifolio">
      <span className="homeTitle">
        <GoTelescope className="icon" />
        <TextAnimated>
          {" "}
          <h2 className="name">Maria Fernanda</h2>
        </TextAnimated>
      </span>

      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Home;
