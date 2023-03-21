import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiPython,
} from "react-icons/di";
import {
  TbBrandNextjs,
  TbBrandSass,
  TbBrandTypescript,
  TbBrandPython,
} from "react-icons/tb";
import "../../styles/components/technologiesContainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "Javascript", icon: <DiJavascript1 /> },
  { id: "react", name: "Reactjs", icon: <DiReact /> },
  { id: "next", name: "Nextjs", icon: <TbBrandNextjs /> },
  { id: "sass", name: "Sass", icon: <TbBrandSass /> },
  { id: "typescript", name: "Typescript", icon: <TbBrandTypescript /> },
  { id: "python", name: "Python", icon: <TbBrandPython /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Technologies</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <span>{tech.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
