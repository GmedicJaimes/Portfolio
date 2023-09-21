import { useContext } from "react";
import AboutMe from "../About Me/AboutMe";
import style from "../Navbar/Navbar.module.css";
import { Link } from "react-scroll";
import logo from "../../assets/icons/logo.png";

import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/langContext";

const Navbar = () => {
  const idioma = useContext(langContext);

  return (
    <nav className={style.containerNav}>
      <div className={style.logoNav}>
        <img src={logo} alt="" />
        <Link to="/" spy={true} smooth={true} offset={50} duration={1500}>
          <h1>Gulliano Jaimes</h1>
        </Link>
        {/* <a href="/">
          <h1>Gulliano Jaimes</h1>
        </a> */}
      </div>

      <div className={style.infoNav}>
        <ul>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={1500}
            >
              <FormattedMessage id="nav.aboutme" defaultMessage="About Me" />
            </Link>
            {/* <a href="#about">About Me</a> */}
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={100}
              duration={1500}
            >
              <FormattedMessage id="nav.projects" defaultMessage="Projects" />
            </Link>
            {/* <a href="#projects">Projects</a> */}
          </li>
          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={1500}
            >
              <FormattedMessage id="nav.skills" defaultMessage="Skills" />
            </Link>
            {/* <a href="#skills">Tech Skills</a> */}
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={2000}
            >
              <FormattedMessage id="nav.contact" defaultMessage="Contact Me" />
            </Link>
            {/* <a href="#contact">Contact Me</a> */}
          </li>
        </ul>
        <button onClick={() => idioma.langChange("es-ES")}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/330/330557.png"
            alt=""
          />
        </button>
        <button className={style.en} onClick={() => idioma.langChange("en-US")}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/330/330425.png"
            alt=""
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
