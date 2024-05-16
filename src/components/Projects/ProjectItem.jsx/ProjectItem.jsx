import React from "react";
import style from "../Projects.module.css";

const ProjectItem = (props) => {
  const { id, img, nombre, tecnologias, description, link } = props;

  return (
    <div>
      <div className={style.cardProjects} key={id}>
        <img src={img} alt="" />
        <div>
          <h1>{nombre}</h1>
          <ul>
            <li>{tecnologias}</li>
          </ul>
          <p>{description}</p>
          <a href={link}>Link</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
