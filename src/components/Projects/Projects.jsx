import style from "./Projects.module.css";
import img1 from "../../assets/img/DL.jpg";
import img2 from "../../assets/img/ND.jpg";
import img3 from "../../assets/img/RM.jpg";
import { FormattedMessage } from "react-intl";

const Projects = () => {
  return (
    <section id="projects" className={style.containerProjects}>
      <h5>
        <FormattedMessage
          id="projects.subtitle"
          defaultMessage="Explora mis recientes"
        />
      </h5>
      <h1>
        <FormattedMessage id="projects.title" defaultMessage="title" />
      </h1>

      <div className={style.projectsCards}>
        <a href="https://dreamlodgeprueba.web.app/" target="_blank">
          <div className={style.cardProjects}>
            <img src={img1} alt="project 1" />
            <div>
              <h3>DreamLodge</h3>
              <p>
                <FormattedMessage
                  id="projects.one.info"
                  defaultMessage="info proyecto"
                />
              </p>
              <p className={style.cardP}>
                <FormattedMessage
                  id="projects.one.tech"
                  defaultMessage="info proyecto"
                />
              </p>
            </div>
          </div>
        </a>

        <a href="https://pi-nacion-data.vercel.app/" target="_blank">
          <div className={style.cardProjects}>
            <img src={img2} alt="project 2" />

            <div>
              <h3>NationData</h3>
              <p>
                <FormattedMessage
                  id="projects.two.info"
                  defaultMessage="info proyecto"
                />
              </p>
              <p className={style.cardP}>
                <FormattedMessage
                  id="projects.two.tech"
                  defaultMessage="info proyecto"
                />
              </p>
            </div>
          </div>
        </a>

        <a href="https://rick-and-morty-rust-seven.vercel.app/" target="_blank">
          <div className={style.cardProjects}>
            <img src={img3} alt="project 3" />

            <div>
              <h3>Rick & Morty</h3>
              <p>
                <FormattedMessage
                  id="projects.three.info"
                  defaultMessage="info proyecto"
                />
              </p>
              <p className={style.cardP}>
                <FormattedMessage
                  id="projects.three.tech"
                  defaultMessage="info proyecto"
                />
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
