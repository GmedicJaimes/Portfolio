import style from "./Skills.module.css";

const Skills = () => {
  const frontend = [
    {
      icon: "",
      nombre: "HTML",
    },
    {
      icon: "",
      nombre: "CSS",
    },
    {
      icon: "",
      nombre: "JavaScript",
    },
    {
      icon: "",
      nombre: "React",
    },
    {
      icon: "",
      nombre: "Redux",
    },
    {
      icon: "",
      nombre: "TailwindCSS",
    },
    {
      icon: "",
      nombre: "Bootstrap",
    },
  ];
  const backend = [
    {
      icon: "",
      nombre: "PHP",
    },
    {
      icon: "",
      nombre: "Codeigniter ",
    },
    {
      icon: "",
      nombre: "Node.JS",
    },
    {
      icon: "",
      nombre: "Express.Js",
    },
    {
      icon: "",
      nombre: "MySQL",
    },
    {
      icon: "",
      nombre: "PostgreSQL",
    },
  ];
  const skills = [
    {
      icon: "",
      nombre: "Git",
    },
    {
      icon: "",
      nombre: "Github",
    },
    {
      icon: "",
      nombre: "Vercel",
    },
    {
      icon: "",
      nombre: "npm",
    },
    {
      icon: "",
      nombre: "Terminal",
    },
    {
      icon: "",
      nombre: "VSCode",
    },
    {
      icon: "",
      nombre: "Xampp",
    },
  ];

  return (
    <section id="skills" className={style.containerSkills}>
      <h1>Tecnologías</h1>
      <div className={style.skills}>
        <div className={style.cardSkills}>
          <div className={style.cardSkillsTitle}>
            <h3>Frontend</h3>
          </div>
          {frontend.map((item) => (
            <ul key={item.nombre}>
              <li>{item.nombre}</li>
            </ul>
          ))}
        </div>
        <div className={style.cardSkills}>
          <div className={style.cardSkillsTitle}>
            <h3>Backend</h3>
          </div>
          {backend.map((item) => (
            <ul key={item.nombre}>
              <li>{item.nombre}</li>
            </ul>
          ))}
        </div>
        <div className={style.cardSkills}>
          <div className={style.cardSkillsTitle}>
            <h3>Herramientas</h3>
          </div>
          {skills.map((item) => (
            <ul key={item.nombre}>
              <li>{item.nombre}</li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
