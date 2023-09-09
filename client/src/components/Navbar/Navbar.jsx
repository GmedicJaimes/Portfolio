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
        <h1>Gulliano Jaimes</h1>
      </section>

      <section className={style.infoNav}>
        <ul>
          <li>
            {/* <Link to={"/about"}>About Me</Link> */}
            <Link to="aboutMe">About Me</Link>
          </li>
          <li>
            <Link>Projects</Link>
          </li>
          <li>
            <Link>Tech Skills</Link>
          </li>
          <li>
            <Link>Contact Me</Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
