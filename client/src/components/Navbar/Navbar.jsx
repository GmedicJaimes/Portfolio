import AboutMe from "../About Me/AboutMe";
import style from "../Navbar/Navbar.module.css";

const Navbar = () => {
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
            <a href="#About">About Me</a>
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
