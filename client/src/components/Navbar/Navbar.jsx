import { useId, useRef } from "react";
import AboutMe from "../About Me/AboutMe";
import style from "../Navbar/Navbar.module.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className={style.containerNav}>
      <section className={style.logoNav}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/5450/5450925.png"
          alt=""
        />
        <Link to="/" spy={true} smooth={true} offset={50} duration={1500}>
          <h1>Gulliano Jaimes</h1>
        </Link>
        {/* <a href="/">
          <h1>Gulliano Jaimes</h1>
        </a> */}
      </section>

      <section className={style.infoNav}>
        <ul>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={1500}
            >
              About Me
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
              Projects
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
              Tech Skills
            </Link>
            {/* <a href="#skills">Tech Skills</a> */}
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={1500}
            >
              Contact Me
            </Link>
            {/* <a href="#contact">Contact Me</a> */}
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
