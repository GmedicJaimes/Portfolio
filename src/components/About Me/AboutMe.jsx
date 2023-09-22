import { useId } from "react";
import style from "../About Me/AboutMe.module.css";
import { FormattedMessage } from "react-intl";

const AboutMe = () => {
  return (
    <section id="about" className={style.containerAboutMe}>
      <h5>
        <FormattedMessage
          id="aboutme.subtitle"
          defaultMessage="Get To Know More"
        />
      </h5>
      <h1>
        <FormattedMessage id="aboutme.title" defaultMessage="About Me" />
      </h1>
      <section className={style.aboutMeInfo}>
        <div className={style.aboutMeSection}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/8207/8207096.png"
            alt=""
          />
          <h2>
            <FormattedMessage
              id="aboutme.title.experience"
              defaultMessage="Experience"
            />
          </h2>
          <p>
            <FormattedMessage
              id="aboutme.experience"
              defaultMessage="+10 months Frontend developer"
            />
          </p>
          <p>
            <FormattedMessage
              id="aboutme.experience.two"
              defaultMessage="+4 months Fullstack developer"
            />
          </p>
        </div>
        <div className={style.aboutMeSection}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/942/942806.png"
            alt=""
          />
          <h2>
            <FormattedMessage
              id="aboutme.title.education"
              defaultMessage="Education"
            />
          </h2>
          <p>
            <FormattedMessage
              id="aboutme.education"
              defaultMessage="SoyHenry Bootcamp (FullStack Developer)"
            />
          </p>
          <p>
            <FormattedMessage
              id="aboutme.education.two"
              defaultMessage="Platzi (Frontend Developer)"
            />
          </p>
        </div>
      </section>
      <section className={style.aboutMeText}>
        <p>
          <FormattedMessage
            id="aboutme.information"
            defaultMessage="I am an enthusiastic Fullstack developer with a passion for technology and software development. I am currently focused on acquiring skills and knowledge in both front-end and back-end development, focusing more on front-end development with the aim of creating efficient and attractive web applications"
          />
        </p>
        <br />
        <p>
          <FormattedMessage
            id="aboutme.information.two"
            defaultMessage="Although I still have no professional experience in the field, my youth and enthusiasm allow me to keep abreast of the latest trends and technologies in the field of web development. In addition, my academic background in Fullstack Development has provided me with a solid foundation to tackle projects and learn quickly and effectively."
          />
        </p>
      </section>
    </section>
  );
};

export default AboutMe;
