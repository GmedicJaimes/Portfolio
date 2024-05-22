import img from "../../assets/foto3.png";
import style from "../About/About.module.css";
import CV from "../../CV-GULLIANO.pdf";

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
          <h1>Hola! soy Gulliano Jaimes.</h1>
          <h3>Desarrollador de Software</h3>
        </div>
        <p>
          +1 año de experiencia.{" "}
          <span className={style.span}>
            Administrador de Empresas y Desarrollador de Software.
          </span>{" "}
          <span>
            Especializado en la construcción y mantenimiento de aplicaciones web
            dinamicas y eficientes,
          </span>{" "}
          apasionado por la tecnologia y la innovación.{" "}
        </p>

        <div className={style.buttonsAbout}>
          <button>
            <a
              href="https://www.linkedin.com/in/gulliano-jaimes/"
              target="_blank"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/61/61109.png"
                alt=""
                loading="lazy"
              />
              Linkedin
            </a>
          </button>
          <button>
            <a href="https://github.com/GmedicJaimes" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/733/733609.png"
                alt=""
                loading="lazy"
              />{" "}
              Github
            </a>
          </button>
          <button>
            <a href={CV} download={""}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/909/909263.png"
                alt=""
                loading="lazy"
              />{" "}
              Curriculum
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
