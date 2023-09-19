import { FormattedMessage } from "react-intl";
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
      <h5>
        <FormattedMessage id="skills.subtitle" defaultMessage="conoceme" />
      </h5>
      <h1>
        <FormattedMessage id="skills.title" defaultMessage="habilidades" />
      </h1>
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
            <h3>
              <FormattedMessage id="skills.other" defaultMessage="otros" />
            </h3>
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
