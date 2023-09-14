import style from "./Projects.module.css";
import img1 from "../../assets/img/DL.jpg";
import img2 from "../../assets/img/ND.jpg";
import img3 from "../../assets/img/RM.jpg";

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
              <p>
                Online platform that facilitates the booking of temporary
                accommodation, whether in houses, apartments, rooms or holiday
                properties.
              </p>
              <p>Frontend: HTML, CSS, JS, React, Material UI and others.</p>
              <p>Backend: Axios, NodeJs, Firebase, Firestore, and others.</p>
            </div>
          </div>
        </a>

        <a href="https://pi-nacion-data.vercel.app/" target="_blank">
          <div className={style.cardProjects}>
            <img src={img2} alt="project 2" />

            <div>
              <h3>NationData</h3>
              <p>
                This project is a country data API client. It allows users to
                search for countries by ID, filter them by population and
                alphabet, etc.{" "}
              </p>
              <p>Frontend: HTML, CSS, JS, React, and Redux.</p>
              <p>Backend: ExpressJs, NodeJs, Sequelize, Morgan and others </p>
            </div>
          </div>
        </a>

        <a href="https://rick-and-morty-rust-seven.vercel.app/" target="_blank">
          <div className={style.cardProjects}>
            <img src={img3} alt="project 3" />

            <div>
              <h3>Rick & Morty</h3>
              <p>
                This project is a Rick and Morty API client. It allows users to
                search for characters by their ID, save them to favorites, and
                perform other actions.
              </p>
              <p>Frontend: HTML, CSS, React, Redux, etc</p>
              <p>
                Backend: ExpressJs, NodeJs, Morgan, Nodemon, Sequelize,
                PostgreSQL
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
