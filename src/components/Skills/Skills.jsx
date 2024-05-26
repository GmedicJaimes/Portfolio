import "./Skills.css";

const Skills = () => {
  const tech = [
    {
      icon: "https://svgl.app/library/html5.svg",
      nombre: "HTML",
    },
    {
      icon: "https://svgl.app/library/css.svg",
      nombre: "CSS",
    },
    {
      icon: "https://svgl.app/library/javascript.svg",
      nombre: "JavaScript",
    },
    {
      icon: "https://svgl.app/library/react.svg",
      nombre: "React",
    },
    {
      icon: "https://svgl.app/library/redux.svg",
      nombre: "Redux",
    },
    {
      icon: "https://svgl.app/library/tailwindcss.svg",
      nombre: "TailwindCSS",
    },
    {
      icon: "https://svgl.app/library/bootstrap.svg",
      nombre: "Bootstrap",
    },
    {
      icon: "https://svgl.app/library/figma.svg",
      nombre: "Figma",
    },
    {
      icon: "https://svgl.app/library/php_dark.svg",
      nombre: "PHP",
    },
    {
      icon: "https://cdn.icon-icons.com/icons2/2415/PNG/96/codeigniter_plain_wordmark_logo_icon_146592.png",
      nombre: "Codeigniter",
    },
    {
      icon: "https://cdn.icon-icons.com/icons2/2415/PNG/96/nodejs_plain_logo_icon_146409.png",
      nombre: "Node.js",
    },
    {
      icon: "https://svgl.app/library/expressjs_dark.svg",
      nombre: "Express.js",
    },
    {
      icon: "https://svgl.app/library/mysql.svg",
      nombre: "MySQL",
    },
    {
      icon: "https://svgl.app/library/postgresql.svg",
      nombre: "PostgreSQL",
    },
    {
      icon: "https://svgl.app/library/git.svg",
      nombre: "Git",
    },
    {
      icon: "https://svgl.app/library/github.svg",
      nombre: "Github",
    },
    {
      icon: "https://svgl.app/library/vercel_dark.svg",
      nombre: "Vercel",
    },
    {
      icon: "https://svgl.app/library/npm.svg",
      nombre: "npm",
    },
    {
      icon: "https://cdn.icon-icons.com/icons2/2367/PNG/96/terminal_shell_icon_143501.png",
      nombre: "Terminal",
    },
    {
      icon: "https://svgl.app/library/vscode.svg",
      nombre: "VSCode",
    },
    {
      icon: "https://cdn.icon-icons.com/icons2/1381/PNG/96/xampp_94513.png",
      nombre: "Xampp",
    },
    {
      icon: "https://svgl.app/library/laravel.svg",
      nombre: "Laravel",
    },
    {
      icon: "https://svgl.app/library/astro_dark.svg",
      nombre: "Astro",
    },
    {
      icon: "https://svgl.app/library/nextjs_icon_dark.svg",
      nombre: "Next.js",
    },
  ];

  return (
    <section id="skills" class="containerSkills">
      <h1>Skills</h1>
      <div className="skills">
        {tech.map((item) => (
          <div className="infoSkills">
            <ul key={item.nombre}>
              <li>
                <img src={item.icon} alt={item.nombre} />
              </li>
            </ul>
            <span>{item.nombre}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
