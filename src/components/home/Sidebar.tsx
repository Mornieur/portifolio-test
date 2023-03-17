import "../../styles/components/sidebar.sass";
import Avatar from "../../assets/me.jpg";
import SocialNetworks from "./SocialNetworks";
import InformationsContainer from "./InformationsContainer";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Maria Fernanda" />
      <p className="title">Desenvolvedora Front-end</p>
      <SocialNetworks />
      <InformationsContainer />
      <a
        className="btn"
        href="./assets/docs/pdf/curriculum.pdf"
        target="_blank"
        download
      >
        Download do Currículo
      </a>
    </aside>
  );
};

export default Sidebar;
