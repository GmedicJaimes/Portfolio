import style from "./Skills.module.css";

const Skills = () => {
  const frontend = ["HTML", "CSS", "JavaScript", "React", "Redux"];
  const backend = [
    "NodeJs",
    "ExpressJs",
    "Sequelize",
    "API Rest",
    "PostgreSQL",
  ];
  const other = ["Git", "Github", "Vercel", "Jest", "Scrum", "VS Code"];

  return (
    <section id="skills" className={style.containerSkills}>
      <h5>Know my</h5>
      <h1>Skills</h1>
      <div className={style.skills}>
        <div className={style.cardSkills}>
          <div className={style.cardSkillsTitle}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/732/732050.png"
              alt="frontend"
            />
            <h3>Frontend</h3>
          </div>
          {console.log(frontend)}
          {frontend.map((item) => (
            <ul key={item}>
              <li>{item}</li>
            </ul>
          ))}
        </div>
        <div className={style.cardSkills}>
          <div className={style.cardSkillsTitle}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/8016/8016946.png"
              alt="backend"
            />
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
            <img
              src="https://cdn-icons-png.flaticon.com/128/100/100852.png"
              alt="others"
            />
            <h3>Others</h3>
          </div>
          {other.map((item) => (
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
