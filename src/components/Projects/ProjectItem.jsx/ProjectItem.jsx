import React from "react";
import style from "../Projects.module.css";

const ProjectItem = (props) => {
  const { id, img, nombre, tecnologias, description, link } = props;

  return (
    <div>
      <article className={style.cardProjects} key={id}>
        <img src={img} alt="" />
        <div>
          <h1>{nombre}</h1>
          <ul>
            {tecnologias.map((tags) => (
              <li key={tags}>{tags}</li>
            ))}
          </ul>
          <p>{description}</p>
          <a href={link} target="_blank">
            Preview
            <img
              src="https://cdn-icons-png.flaticon.com/128/3018/3018434.png"
              alt=""
            />
          </a>
        </div>
      </article>
    </div>
  );
};

export default ProjectItem;
