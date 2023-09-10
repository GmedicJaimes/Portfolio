import data from "../../data/index.json";
import style from "./Projects.module.css";

const Projects = () => {
  return (
    <section id="projects">
      <h1>My Projects</h1>
      <div>
        {console.log(data)}
        {data.projects.map((item, index) => {
          <div key={index}>
            <div>
              <h2>Becerro</h2>
              <img src={item.src} alt={item.title} />
            </div>
            <div>
              <h2 className={style.h1}>{item.title}</h2>
              <p>{item.description}</p>
              <a href={item.deploy}>
                <button>deploy</button>
              </a>
            </div>
          </div>;
        })}
      </div>
    </section>
  );
};

export default Projects;
