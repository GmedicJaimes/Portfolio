import { useId } from "react";
import style from "../About Me/AboutMe.module.css";
import { FormattedMessage } from "react-intl";

const AboutMe = () => {
  return (
    <section id="about" className={style.containerAboutMe}>
      <h5>
        <FormattedMessage id="aboutme.subtitle" defaultMessage="Conoce más" />
      </h5>
      <h1>
        <FormattedMessage id="aboutme.title" defaultMessage="Sobre Mi" />
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
              defaultMessage="Expereciencia"
            />
          </h2>
          <p>
            <FormattedMessage
              id="aboutme.experience"
              defaultMessage="+10 meses"
            />
          </p>
          <p>
            <FormattedMessage
              id="aboutme.experience.two"
              defaultMessage="+4 meses"
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
              defaultMessage="Sobre Mi"
            />
          </h2>
          <p>
            <FormattedMessage
              id="aboutme.education"
              defaultMessage="Sobre Mi"
            />
          </p>
          <p>
            <FormattedMessage
              id="aboutme.education.two"
              defaultMessage="Sobre Mi"
            />
          </p>
        </div>
      </section>
      <section className={style.aboutMeText}>
        <p>
          <FormattedMessage
            id="aboutme.information"
            defaultMessage="texto-uno"
          />
        </p>
        <br />
        <p>
          <FormattedMessage
            id="aboutme.information.two"
            defaultMessage="texto-dos"
          />
        </p>
      </section>
    </section>
  );
};

export default AboutMe;
