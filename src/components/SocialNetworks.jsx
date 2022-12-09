import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  {
    href: "https://www.linkedin.com/in/horaciosdev/",
    name: "linkedin",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://github.com/horaciosdev",
    name: "github",
    icon: <FaGithub />,
  },
  {
    href: "https://www.instagram.com/bagreheads/",
    name: "instagram",
    icon: <FaInstagram />,
  },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.href}
          target="_blank"
          className="social-btn"
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
