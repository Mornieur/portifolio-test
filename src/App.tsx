import { Route, Routes } from "react-router-dom";
import ProjectsPage from "./ProjectsPage";
import "./styles/components/home.sass";
import Home from "./Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}

export default App;
