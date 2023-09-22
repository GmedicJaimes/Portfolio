import style from "./Projects.module.css";
import img1 from "../../assets/img/DL.jpg";
import img2 from "../../assets/img/ND.jpg";
import img3 from "../../assets/img/RM.jpg";
import { FormattedMessage } from "react-intl";

const Projects = () => {
  //   <a href="https://ibb.co/r5TYCBv"><img src="https://i.ibb.co/gtHN506/DL.jpg" alt="DL" border="0"></a>
  // <a href="https://ibb.co/5sj0HYq"><img src="https://i.ibb.co/h2d6zXp/ND.jpg" alt="ND" border="0"></a>
  // <a href="https://ibb.co/0J6tNzV"><img src="https://i.ibb.co/Lpc5wsh/RM.jpg" alt="RM" border="0"></a>
  return (
    <section id="projects" className={style.containerProjects}>
      <h5>
        <FormattedMessage
          id="projects.subtitle"
          defaultMessage="Browse My Recent"
        />
      </h5>
      <h1>
        <FormattedMessage id="projects.title" defaultMessage="Projects" />
      </h1>

      <div className={style.projectsCards}>
        <a href="https://dreamlodgeprueba.web.app/" target="_blank">
          <div className={style.cardProjects}>
            {/* <img src={img1} alt="project 1" loading="lazy" /> */}
            <img src="https://i.ibb.co/gtHN506/DL.jpg" alt="" />
            <div>
              <h3>DreamLodge</h3>
              <p>
                <FormattedMessage
                  id="projects.one.info"
                  defaultMessage="Online platform that facilitates the booking of temporary accommodation, whether in houses, apartments, rooms or holiday properties."
                />
              </p>
              <p className={style.cardP}>
                <FormattedMessage
                  id="projects.one.tech"
                  defaultMessage="Tech used: HTML, CSS, JS, React, Material UI, Axios, NodeJs,Firebase, Firestore, and others."
                />
              </p>
            </div>
          </div>
        </a>

        <a href="https://pi-nacion-data.vercel.app/" target="_blank">
          <div className={style.cardProjects}>
            {/* <img src={img2} alt="project 2" loading="lazy" /> */}
            <img src="https://i.ibb.co/h2d6zXp/ND.jpg" alt="" />

            <div>
              <h3>NationData</h3>
              <p>
                <FormattedMessage
                  id="projects.two.info"
                  defaultMessage="This project is a country data API client. It allows users to search for countries by ID, filter them by population and alphabet, etc"
                />
              </p>
              <p className={style.cardP}>
                <FormattedMessage
                  id="projects.two.tech"
                  defaultMessage="Tech used: HTML, CSS, JS, React, Redux, ExpressJs, NodeJs, Sequelize, Morgan and others."
                />
              </p>
            </div>
          </div>
        </a>

        <a href="https://rick-and-morty-rust-seven.vercel.app/" target="_blank">
          <div className={style.cardProjects}>
            {/* <img src={img3} alt="project 3" loading="lazy" /> */}
            <img src="https://i.ibb.co/Lpc5wsh/RM.jpg" alt="" />

            <div>
              <h3>Rick & Morty</h3>
              <p>
                <FormattedMessage
                  id="projects.three.info"
                  defaultMessage="This project is a Rick and Morty API client. It allows users to search for characters by their ID, save them to favorites, and perform other actions."
                />
              </p>
              <p className={style.cardP}>
                <FormattedMessage
                  id="projects.three.tech"
                  defaultMessage="Tech used: HTML, CSS, React, Redux, ExpressJs, NodeJs, Morgan, Nodemon, Sequelize, PostgreSQL."
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
