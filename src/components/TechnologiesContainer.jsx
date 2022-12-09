import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiJsBadge,
  DiJqueryLogo,
  DiPhp,
  DiMysql,
  DiReact,
  DiAngularSimple,
} from "react-icons/di";

import { SiTypescript } from "react-icons/si";

import ProgressBar from "./ProgressBar";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  {
    id: "html",
    name: "HTML5",
    percentage: "90%",
    color: "#e44d26",
    icon: <DiHtml5 />,
  },
  {
    id: "css",
    name: "CSS3",
    percentage: "90%",
    color: "#1572b6",
    icon: <DiCss3 />,
  },
  {
    id: "sass",
    name: "SASS / SCSS",
    percentage: "70%",
    color: "#cd6799",
    icon: <DiSass />,
  },
  {
    id: "js",
    name: "JavaScript",
    percentage: "90%",
    color: "#f0db4f",
    icon: <DiJsBadge />,
  },
  {
    id: "ts",
    name: "TypeScript",
    percentage: "30%",
    color: "#007acc",
    icon: <SiTypescript />,
  },
  {
    id: "jQuery",
    name: "jQuery",
    percentage: "90%",
    color: "#0769ad",
    icon: <DiJqueryLogo />,
  },
  {
    id: "react",
    name: "React",
    percentage: "70%",
    color: "#61dafb",
    icon: <DiReact />,
  },
  {
    id: "angular",
    name: "Angular",
    percentage: "30%",
    color: "#dd1b16",
    icon: <DiAngularSimple />,
  },
  {
    id: "mysql",
    name: "MySQL",
    percentage: "80%",
    color: "#00618a",
    icon: <DiMysql />,
  },
  {
    id: "php",
    name: "PHP",
    percentage: "80%",
    color: "#777bb3",
    icon: <DiPhp />,
  },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div
            className="technology-card"
            style={{ color: tech.color }}
            id={tech.id}
            key={tech.id}
          >
            {tech.icon}
            <div className="technologie-info">
              <h3>{tech.name}</h3>
              <ProgressBar percentage={tech.percentage} color={tech.color} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
