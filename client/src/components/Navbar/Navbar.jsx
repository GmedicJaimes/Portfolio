import { useId, useRef } from "react";
import AboutMe from "../About Me/AboutMe";
import style from "../Navbar/Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const about = useId();

  return (
    <nav className={style.containerNav}>
      <section className={style.logoNav}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/5450/5450925.png"
          alt=""
        />
        <Link to={"/"}>
          <h1>Gulliano Jaimes</h1>
        </Link>
      </section>

      <section className={style.infoNav}>
        <ul>
          <li>
            {/* <Link to={"/about"}>About Me</Link> */}
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to={"about"}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="skills"
            >
              Tech Skills
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="contact"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
