import "../styles/components/sidebar.sass";
import Avatar from "../assets/me.jpg";
import SocialNetworks from "./SocialNetworks";
import InformationsContainer from "./InformationsContainer";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Maria Fernanda" />
      <p className="title">Desenvolvedora Front-end</p>
      <SocialNetworks />
      <InformationsContainer />
      <a href="" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
