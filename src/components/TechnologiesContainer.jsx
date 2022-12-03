import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiJsBadge,
  DiJqueryLogo,
  DiPhp,
  DiMysql,
  DiReact,
} from "react-icons/di";

import ProgressBar from "./ProgressBar";

import "../styles/components/technologiescontainer.sass";

const technologies = [  
  { id: "html", name: "HTML5", percentage: "90%", color: "#e44d26",icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", percentage: "90%", color: "#1572b6",icon: <DiCss3 /> },
  { id: "sass", name: "SASS", percentage: "50%", color: "#cd6799",icon: <DiSass /> },
  { id: "js", name: "JavaScript", percentage: "90%", color: "#f0db4f",icon: <DiJsBadge /> },
  { id: "jQuery", name: "jQuery", percentage: "90%", color: "#0769ad",icon: <DiJqueryLogo /> },
  { id: "react", name: "React", percentage: "50%", color: "#61dafb",icon: <DiReact /> },
  { id: "mysql", name: "MySQL", percentage: "80%", color: "#00618a",icon: <DiMysql /> },
  { id: "php", name: "PHP", percentage: "80%", color: "#777bb3",icon: <DiPhp /> },  
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" style={{ color: tech.color }} id={tech.id} key={tech.id}>
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
