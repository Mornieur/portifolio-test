import { Link } from "react-router-dom";

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        Aqui você pode encontrar todos meus projetos e uma breve descrição sobre
        eles e tecnologias usadas
      </p>

      <Link to="/projects" className="btn">
        Ver Projetos
      </Link>
    </section>
  );
};

export default ProjectsContainer;
