import Avatar from "../img/eu.jpg";
import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Horácio Schumann" />
      <p className="title">Horácio Schumann</p>
      <SocialNetworks />
      <InformationContainer />
      {/* <button onClick={window.print} className="btn">
        Download Currículo
      </button> */}
    </aside>
  );
};

export default Sidebar;
