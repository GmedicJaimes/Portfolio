import "../Navbar/Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 450) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 940) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`containerNav ${navActive ? "active" : ""}`}>
      <div className="logoNav">
        <Link
          onClick={closeMenu}
          activeClass="navbar--active-content"
          className="navbarLogo"
          to="/"
          spy={true}
          smooth={true}
          offset={-30}
          duration={1500}
        >
          <img src="./src/assets/foto3.png" alt="" />
          <h1>Gulliano Jaimes</h1>
        </Link>
      </div>

      <a
        className={`nav__hamburguer ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav_line"></span>
        <span className="nav_line"></span>
        <span className="nav_line"></span>
      </a>

      <div className="containerNavSections">
        <div className={`infoNav ${navActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                className="navbar--content"
                to="experience"
                spy={true}
                smooth={true}
                offset={-90}
                duration={2500}
              >
                Experiencia
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                className="navbar--content"
                to="projects"
                spy={true}
                smooth={true}
                offset={-90}
                duration={2500}
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                className="navbar--content"
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={2500}
              >
                Sobre mi
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                className="navbar--content"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2500}
              >
                Skills
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
