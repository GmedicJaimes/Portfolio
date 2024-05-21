import ProjectItem from "./ProjectItem.jsx/ProjectItem";
import style from "./Projects.module.css";
import img1 from "../../assets/img/DL.webp";
import img2 from "../../assets/img/ND.webp";
import img3 from "../../assets/img/RM.webp";

const PROJECTS = [
  {
    id: 1,
    src: img1,
    nombre: "Dreamlodge - Encuentra tu lugar de descanso",
    tecnologias: ["React", "Node.js", "Firebase", "Firestore"],
    description:
      "Plataforma en linea que conecta a propietarios de viviendas con viajeros que buscan estadias unicas. Permite a los anfitriones monetizar sus propiedades y a los huéspedes vivir experiencias locales auténticas.",
    link: "https://dreamlodgeprueba.web.app/",
  },
  {
    id: 2,
    src: img2,
    nombre: "NationData",
    tecnologias: ["React", "Node.js", "Redux"],
    description: "description",
    link: "https://pi-nacion-data.vercel.app/",
  },
  {
    id: 3,
    src: img3,
    nombre: "Rick and Morty",
    tecnologias: [],
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
