import style from "./Projects.module.css";
import data from "../../data.json";

import { FormattedMessage } from "react-intl";

const Projects = () => {
  return (
    <section id="projects" className={style.containerProjects}>
      <h1>Proyectos</h1>

      <div className={style.projectsCards}>
        {data.proyectos.map((v) => (
          <div className={style.cardProjects}>
            <img src={v.img} alt="" />
            <div>
              <h3>{v.nombre}</h3>
              <p>{v.tecnologias}</p>
              <p className={style.cardP}>{v.description}</p>
              <a href={v.link}>Link</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
