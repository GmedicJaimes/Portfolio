import style from "../About Me/AboutMe.module.css";
import img from "../../assets/foto3.png";

const AboutMe = () => {
  return (
    <section id="about" className={style.containerAboutMe}>
      <h1>Sobre mí</h1>
      <section className={style.aboutMeInfo}>
        <div className={style.aboutMeSectionOne}>
          <p>
            Hola a todos! Mi nombre es Gulliano, un poco dificil de pronunciar
            pero asi es.{" "}
            <span>
              Soy un administrador de empresas apasionado por el desarrollo de
              software y toda la industria de la Tecnologia
            </span>
            . Estudiante autodidacta de Programación y Desarrollo web desde hace
            2 años.
          </p>
          <p>
            Cuando no estoy organizando proyectos o escribiendo líneas de
            código, <span> me encontrarás disfrutando de un buen café </span>
            mientras busco nuevas formas de innovar y crecer en ambos mundos.
          </p>
          <p>
            Me considero una persona curiosa y con ganas de aprender
            constantemente.{" "}
            <span>
              {" "}
              Me fascina explorar nuevas tecnologías y tendencias en el mundo
              empresarial y del desarrollo{" "}
            </span>
            . Siempre estoy buscando formas de mejorar mis habilidades y llevar
            mis proyectos al siguiente nivel.
          </p>
        </div>
        <div className={style.aboutMeSectionTwo}>
          <img src={img} alt="" />
        </div>
      </section>
    </section>
  );
};

export default AboutMe;
