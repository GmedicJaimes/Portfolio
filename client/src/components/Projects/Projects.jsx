import style from "./Projects.module.css";
import img1 from "../../assets/foto.jpg";

const Projects = () => {
  return (
    <section id="projects" className={style.containerProjects}>
      <h5>Browse My Recent</h5>
      <h1>Projects</h1>

      <div className={style.projectsCards}>
        <a href="https://dreamlodgeprueba.web.app/" target="_blank">
          <div className={style.cardProjects}>
            <img src={img1} alt="project 1" />
            <div>
              <h3>DreamLodge</h3>
              <p>Descripcion</p>
              <p>Tecnologies</p>
            </div>
          </div>
        </a>

        <a href="">
          <div className={style.cardProjects}>
            <img src={img1} alt="project 2" />

            <div>
              <h3>NationData</h3>
              <p>Descripcion</p>
              <p>Tecnologies</p>
            </div>
          </div>
        </a>

        <a href="">
          <div className={style.cardProjects}>
            <img src={img1} alt="project 3" />

            <div>
              <h3>Rick & Morty</h3>
              <p>Descripcion</p>
              <p>Tecnologies</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
