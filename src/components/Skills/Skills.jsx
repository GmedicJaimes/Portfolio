import style from "./Skills.module.css";

const Skills = () => {
  const frontend = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "TailwindCSS",
    "Bootstrap",
  ];
  const backend = [
    "PHP",
    "Codeigniter 4",
    "NodeJs",
    "ExpressJs",
    "Sequelize",
    "API Rest",
    "MySQL",
    "PostgreSQL",
  ];
  const skills = [
    "Git",
    "Github",
    "Vercel",
    "npm",
    "Terminal",
    "VSCode",
    "Xampp",
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
            <ul key={item}>
              <li>{item}</li>
            </ul>
          ))}
        </div>
        <div className={style.cardSkills}>
          <div className={style.cardSkillsTitle}>
            <h3>Backend</h3>
          </div>
          {backend.map((item) => (
            <ul key={item}>
              <li>{item}</li>
            </ul>
          ))}
        </div>
        <div className={style.cardSkills}>
          <div className={style.cardSkillsTitle}>
            <h3>Herramientas</h3>
          </div>
          {skills.map((item) => (
            <ul key={item}>
              <li>{item}</li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
