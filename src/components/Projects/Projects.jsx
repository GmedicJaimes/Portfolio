import style from "./Projects.module.css";

import { FormattedMessage } from "react-intl";

const Projects = () => {
  return (
    <section id="projects" className={style.containerProjects}>
      <h1>Proyectos</h1>

      <div className={style.projectsCards}>
        <a href="https://dreamlodgeprueba.web.app/" target="_blank">
          <div className={style.cardProjects}>
            <img src="https://i.ibb.co/gtHN506/DL.jpg" alt="" />
            <div>
              <h3>DreamLodge</h3>
              <p></p>
              <p className={style.cardP}></p>
            </div>
          </div>
        </a>

        <a href="https://pi-nacion-data.vercel.app/" target="_blank">
          <div className={style.cardProjects}>
            <img src="https://i.ibb.co/h2d6zXp/ND.jpg" alt="" />

            <div>
              <h3>NationData</h3>
              <p></p>
              <p className={style.cardP}></p>
            </div>
          </div>
        </a>

        <a href="https://rick-and-morty-rust-seven.vercel.app/" target="_blank">
          <div className={style.cardProjects}>
            <img src="https://i.ibb.co/Lpc5wsh/RM.jpg" alt="" />

            <div>
              <h3>Rick & Morty</h3>
              <p></p>
              <p className={style.cardP}></p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
