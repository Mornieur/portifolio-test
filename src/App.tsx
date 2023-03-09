import MainContent from "./components/MainContent";
import Sidebar from "../src/components/Sidebar";
import "./styles/components/app.sass";

function App() {
  return (
    <div id="portifolio">
      <h2>Maria Fernanda</h2>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
