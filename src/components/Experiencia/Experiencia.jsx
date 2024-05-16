import React, { useState } from "react";
import "./Experiencia.css";
// import data from "../../data.json";
import { ExperienceItem } from "./ExperienceItem/ExperienceItem";

const Experiencia = () => {
  // const [info, setInfo] = useState(data);

  return (
    <article className="containerExperiencia">
      <h1 id="experience">Experiencia Laboral</h1>

      <section className="contentsExperiencia">
        {data.experiencia.map((v) => (
          
        ))}
      </section>
    </article>
  );
};

export default Experiencia;
