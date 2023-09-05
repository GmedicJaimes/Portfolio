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
          <li>About</li>
          <li>Projects</li>
          <li>Tech Skills</li>
          <li>Contact</li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
