import "../../styles/components/socialNetworks.sass";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const socialNetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/maria-fernanda-feitoza-dos-santos-29490515a/",
  },
  { name: "github", icon: <FaGithub />, link: "https://github.com/Mornieur" },
  {
    name: "instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/nandftz/",
  },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.link}
          className="social-btn"
          target="_blank"
          id={network.name}
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
