import { useId, useRef } from "react";
import AboutMe from "../About Me/AboutMe";
import style from "../Navbar/Navbar.module.css";

const Navbar = () => {
  const about = useId();

  return (
    <nav className={style.containerNav}>
      <section className={style.logoNav}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/5450/5450925.png"
          alt=""
        />
        <h1>Gulliano Jaimes</h1>
      </section>

      <section className={style.infoNav}>
        <ul>
          <li>
            {/* <Link to={"/about"}>About Me</Link> */}
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Skills">Tech Skills</a>
          </li>
          <li>
            <a href="#Contact">Contact Me</a>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
