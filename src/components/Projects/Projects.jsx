import ProjectItem from "./ProjectItem.jsx/ProjectItem";
import style from "./Projects.module.css";
import img1 from "../../assets/img/DL.jpg";
import img2 from "../../assets/img/ND.jpg";
import img3 from "../../assets/img/RM.jpg";

const PROJECTS = [
  {
    id: 1,
    src: img1,
    nombre: "Dreamlodge",
    tecnologias: "tecnologias",
    description: "description",
    link: "https://dreamlodgeprueba.web.app/",
  },
  {
    id: 2,
    src: img2,
    nombre: "NationData",
    tecnologias: "tecnologias",
    description: "description",
    link: "https://pi-nacion-data.vercel.app/",
  },
  {
    id: 3,
    src: img3,
    nombre: "Rick and Morty",
    tecnologias: "tecnologias",
    description: "description",
    link: "https://rick-and-morty-rust-seven.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className={style.containerProjects}>
      <h1>Proyectos</h1>

      <div className={style.projectsCards}>
        {PROJECTS.map((pro) => (
          <ProjectItem
            key={pro.id}
            img={pro.src}
            nombre={pro.nombre}
            tecnologias={pro.tecnologias}
            description={pro.description}
            link={pro.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
