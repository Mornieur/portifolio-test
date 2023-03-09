import { DiHtml5, DiCss3, DiJsBadge, DiReact } from "react-icons/di";
import { TbBrandNextjs, TbBrandSass } from "react-icons/tb";
import "../styles/components/technologiesContainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "Javascript", icon: <DiJsBadge /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "next", name: "Next", icon: <TbBrandNextjs /> },
  { id: "sass", name: "Sass", icon: <TbBrandSass /> },
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
              <p>{tech.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
