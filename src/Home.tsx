import Sidebar from "./components/home/Sidebar";
import MainContent from "./containers/MainContent";
import "./styles/components/home.sass";

const Home = () => {
  return (
    <div id="portifolio">
      <h2>Maria Fernanda</h2>
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Home;
