import "../../styles/components/projectsComponent.sass";
import ImageTest from "../../assets/image-test.jpg";
import CardAnimation from "../../assets/projects-images/card-animation.png";
import cloneNexflix from "../../assets/projects-images/clone-nexflix.png";
import cloneTwitter from "../../assets/projects-images/clone-twitter.png";
import devFinance from "../../assets/projects-images/dev-finance.png";
import healthForm from "../../assets/projects-images/heralth-form.png";
import landingPage from "../../assets/projects-images/landing-page.png";
import moveIt from "../../assets/projects-images/move-it.png";
import multiStepForm from "../../assets/projects-images/multi-step-form.png";
import piano from "../../assets/projects-images/piano.png";
import pokedex from "../../assets/projects-images/pokedex.png";
import rickAndMorty from "../../assets/projects-images/rick-and-morty.png";
import taskList from "../../assets/projects-images/task-list.png";

interface ProjectsTypes {
  img: any;
  h1: string;
  link: string;
}

const dataProjects = [
  {
    img: CardAnimation,
    h1: "Card Animation",
    link: "https://card-animation-mornieur.vercel.app/",
  },
  {
    img: cloneNexflix,
    h1: "Netflix Responsive Clone",
    link: "https://clone-netflix-responsive-ika0cw04j-mornieur.vercel.app/",
  },
  {
    img: cloneTwitter,
    h1: "Twitter Responsive Clone",
    link: "https://clone-twitter-responnsive-bwjprgvfo-mornieur.vercel.app/",
  },
  {
    img: rickAndMorty,
    h1: "Rick And Morty",
    link: "https://rick-and-morty-api-neon.vercel.app/",
  },
  {
    img: landingPage,
    h1: "Nutritional Landing Page",
    link: "https://pagina-de-comidas-saudaveis-9njg-971rg8t4x-mornieur.vercel.app/",
  },
  {
    img: pokedex,
    h1: "Pokedex",
    link: "https://pokedex-ahiec5yxb-mornieur.vercel.app/",
  },
  {
    img: devFinance,
    h1: "Dev Finance",
    link: "https://dev-finance-sable.vercel.app/",
  },

  {
    img: moveIt,
    h1: "Move It",
    link: "https://moveit-next-qqnkm6tql-mornieur.vercel.app/",
  },
  {
    img: multiStepForm,
    h1: "Multi-Step Form",
    link: "https://form-kqmr8xaps-mornieur.vercel.app/",
  },
  {
    img: piano,
    h1: "Piano",
    link: "https://piano-project.vercel.app/",
  },

  {
    img: taskList,
    h1: "Task List",
    link: "https://task-form-e5uudjjbb-mornieur.vercel.app/",
  },
];

const ProjectsComponent = () => {
  return (
    <section className="container">
      <h1 className="title">PROJETOS</h1>
      {dataProjects.map((item: ProjectsTypes) => (
        <div className="projects">
          <img src={item.img} alt="imagem do projeto" />
          <h1>{item.h1}</h1>
          <a href={item.link} target="_blank" title="link do projeto">
            Acesse aqui
          </a>
        </div>
      ))}
    </section>
  );
};

export default ProjectsComponent;
