import { useContext } from "react";
import "../Navbar/Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/langContext";

const Navbar = () => {
  const idioma = useContext(langContext);

  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 400) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      closeMenu;
    }
  }, []);

  return (
    <nav className="containerNav">
      <div className="logoNav">
        <img
          src="https://cdn-icons-png.flaticon.com/128/5450/5450925.png"
          alt=""
          loading="lazy"
        />
        <Link to="/" spy={true} smooth={true} offset={50} duration={1500}>
          <h1>Gulliano Jaimes</h1>
        </Link>
        {/* <a href="/">
          <h1>Gulliano Jaimes</h1>
        </a> */}
      </div>

      <div className="infoNav">
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
          <button onClick={() => idioma.langChange("es-ES")}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/330/330557.png"
              alt=""
              loading="lazy"
            />
          </button>
          <button className="en" onClick={() => idioma.langChange("en-US")}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/330/330425.png"
              alt=""
              loading="lazy"
            />
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
