import ProjectItem from "./ProjectItem.jsx/ProjectItem";
import style from "./Projects.module.css";
// import data from "../../data.json";

const PROJECTS = [
  {
    id: 1,
    img: "",
    nombre: "Dreamlodge",
    tecnologias: "tecnologias",
    description: "description",
    link: "link",
  },
  {
    id: 2,
    img: "",
    nombre: "NationData",
    tecnologias: "tecnologias",
    description: "description",
    link: "link",
  },
  {
    id: 3,
    img: "",
    nombre: "Rick and Morty",
    tecnologias: "tecnologias",
    description: "description",
    link: "link",
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
            img={pro.img}
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
