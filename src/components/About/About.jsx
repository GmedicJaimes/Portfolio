import img from "../../assets/foto3.png";
import style from "../About/About.module.css";
import CV from "../../Gulliano Jaimes Fullstack Dev - CV.pdf";

import { FormattedMessage } from "react-intl";

const About = () => {
  return (
    <section className={style.containerAbout} id="/">
      <div className={style.infoAbout}>
        <h2>
          <FormattedMessage id="about.title" defaultMessage="Hola" />
          <span>
            <FormattedMessage id="about.span" defaultMessage="!" />
          </span>{" "}
          <FormattedMessage id="about.secondpart" defaultMessage="Soy" />
          {/* Hi<span>!</span> I'm */}
        </h2>
        <h1>Gulliano Jaimes</h1>
        <h3>Fullstack | Frontend Developer</h3>
        {/* <h3>
          <FormattedMessage id="about.dev" defaultMessage="Fullstack" />
        </h3> */}

        <div className={style.buttonsAbout}>
          <a
            href="https://www.linkedin.com/in/gulliano-jaimes/"
            target="_blank"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/61/61109.png"
              alt=""
            />
          </a>
          <a href="https://github.com/GmedicJaimes" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/128/733/733609.png"
              alt=""
            />
          </a>
          <a href={CV} download={""}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/909/909263.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className={style.imageAbout}>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
