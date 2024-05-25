import "./Skills.css";

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
    {
      icon: "",
      nombre: "Firebase",
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
      icon: "https://svgl.app/library/vercel_dark.svg",
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
    <section id="skills" class="containerSkills">
      <h1>Tecnologías</h1>
      <div className="skills">
        <article className="firstSkills">
          <div className="cardSkills">
            <div className="cardSkillsTitle">
              <h3>Frontend</h3>
            </div>
            {frontend.map((item) => (
              <ul key={item.nombre}>
                <li>{item.nombre}</li>
              </ul>
            ))}
          </div>
          <div className="cardSkills">
            <div className="cardSkillsTitle">
              <h3>Backend</h3>
            </div>
            {backend.map((item) => (
              <ul key={item.nombre}>
                <img src={item.icon} alt="" />
                <li>{item.nombre}</li>
              </ul>
            ))}
          </div>
        </article>
        <div className="cardSkills">
          <div className="cardSkillsTitle">
            <h3>Herramientas</h3>
          </div>
          {skills.map((item) => (
            <div className="infoSkills">
              <ul key={item.nombre}>
                <li>
                  <img src={item.icon} alt="" />
                </li>
              </ul>
              <span>{item.nombre}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
