import img from "../../assets/foto3.png";
import style from "../About/About.module.css";
import CV from "../../Gulliano Jaimes Fullstack Dev - CV.pdf";

import { FormattedMessage } from "react-intl";

const About = () => {
  return (
    <section className={style.containerAbout} id="/">
      <div className={style.infoAbout}>
        <button>
          <a
            href="https://www.linkedin.com/in/gulliano-jaimes/"
            target="_blank"
          >
            Disponible para trabajar
          </a>
        </button>
        <div>
          <h1>
            Hola
            <span>,</span> soy Gulliano<span>!</span>
          </h1>
          <h3>Desarrollador de Software</h3>
        </div>
        <p>
          +1 año de experiencia. Desarrollador de Software{" "}
          <span>
            especializado en el mantenimiento de aplicaciones y en la
            construcion de aplicaciones web dinamicas y efecientes
          </span>
          , apasionado por la tecnologia y la innovacion. Administrador de
          empresas con enfoque empresarial con excelentes
          <span>
            conocimientos en gestion de proyectos, planificacion de procesos y
            analisis de datos para la toma de decisiones
          </span>{" "}
        </p>

        <div className={style.buttonsAbout}>
          <a
            href="https://www.linkedin.com/in/gulliano-jaimes/"
            target="_blank"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/61/61109.png"
              alt=""
              loading="lazy"
            />
          </a>
          <a href="https://github.com/GmedicJaimes" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/128/733/733609.png"
              alt=""
              loading="lazy"
            />
          </a>
          <a href={CV} download={""}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/909/909263.png"
              alt=""
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
