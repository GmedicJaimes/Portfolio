import style from "./Projects.module.css";
import data from "../../data.json";

import { FormattedMessage } from "react-intl";

const Projects = () => {
  return (
    <section id="projects" className={style.containerProjects}>
      <h1>Proyectos</h1>

      <div className={style.projectsCards}>
        {data.proyectos.map((v) => (
          <div className={style.cardProjects} key={v.id}>
            <img src={v.img} alt="" />
            <div>
              <h1>{v.nombre}</h1>
              <ul>
                <li>{v.tecnologias}</li>
              </ul>
              <p>{v.description}</p>
              <a href={v.link}>Link</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
