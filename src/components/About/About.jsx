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
          +1 año de experiencia.{" "}
          <span className={style.span}>
            Desarrollador de Software y Administrador de Empresas.
          </span>{" "}
          <span>
            Especializado en el mantenimiento y en la construcion de
            aplicaciones web dinamicas y efecientes, apasionado por la
            tecnologia y la innovacion.
          </span>{" "}
          apasionado por la tecnologia y la innovacion.{" "}
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
            />{" "}
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
