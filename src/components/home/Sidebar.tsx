import "../../styles/components/sidebar.sass";
import Avatar from "../../assets/me.jpg";
import SocialNetworks from "./SocialNetworks";
import InformationsContainer from "./InformationsContainer";
import { motion } from "framer-motion";
import BackgroundProfile from "../animated/BackgroundProfile";
import curriculum from "../../assets/pdf/curriculum-maria.pdf";

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1.3 },
  },
};

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <BackgroundProfile />
      <motion.div
        className="card"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.7 }}
      >
        <motion.div className="image-container" variants={imageAnimate}>
          <img src={Avatar} alt="Maria Fernanda" />
        </motion.div>
      </motion.div>

      <p className="title">Desenvolvedora Front-end</p>
      <SocialNetworks />
      <InformationsContainer />
      <a className="btn" href={curriculum} target="_blank" download>
        Download do Currículo
      </a>
    </aside>
  );
};

export default Sidebar;
