import img from "../../assets/foto3.png";
import style from "../About/About.module.css";
import CV from "../../Gulliano Jaimes Fullstack Dev - CV.pdf";

import { IntlProvider, FormattedMessage } from "react-intl";
import es from "../../languages/es-ES.json";
import en from "../../languages/en-US.json";

const About = () => {
  return (
    <IntlProvider locale="es-ES" messages={es}>
      <section className={style.containerAbout} id="/">
        <div className={style.infoAbout}>
          <h2>
            <FormattedMessage id="app.title" defaultMessage="Hola" />
            <span>
              <FormattedMessage id="app.title.span" defaultMessage="!" />
            </span>{" "}
            <FormattedMessage id="app.title.secondpart" defaultMessage="Soy" />
            {/* Hi<span>!</span> I'm */}
          </h2>
          <h1>Gulliano Jaimes</h1>
          <h3>Fullstack | Frontend Developer</h3>

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
    </IntlProvider>
  );
};

export default About;
