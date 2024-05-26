import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <span>
        ©2024
        <a href="">Gulliano Jaimes.</a>
        Casi todos los derechos reservados
      </span>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/gulliano-jaimes/"
            target="_blank"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/61/61109.png"
              alt=""
              loading="lazy"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/GmedicJaimes" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/128/733/733609.png"
              alt=""
              loading="lazy"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
