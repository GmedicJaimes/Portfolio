import { useId, useRef } from "react";
import AboutMe from "../About Me/AboutMe";
import style from "../Navbar/Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={style.containerNav}>
      <section className={style.logoNav}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/5450/5450925.png"
          alt=""
        />
        {/* <Link to="/">
          <h1>Gulliano Jaimes</h1>
        </Link> */}
        <a href="/">
          <h1>Gulliano Jaimes</h1>
        </a>
      </section>

      <section className={style.infoNav}>
        <ul>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Tech Skills</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
