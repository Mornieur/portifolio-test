import Sidebar from "./components/home/Sidebar";
import MainContent from "./containers/MainContent";
import "./styles/components/home.sass";
import { GoTelescope } from "react-icons/go";

const Home = () => {
  return (
    <div id="portifolio">
      <span className="homeTitle">
        <GoTelescope className="icon" />
        <h2 className="name">Maria Fernanda</h2>
      </span>

      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Home;
