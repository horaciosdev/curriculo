import Avatar from "../img/eu.jpg";
import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Horácio Schumann" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">
        Download curriculo
      </a>
    </aside>
  );
};

export default Sidebar;
