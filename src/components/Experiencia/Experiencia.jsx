import React, { useState } from "react";
import "./Experiencia.css";
import data from "../../data.json";
import ExperienceItem from "./ExperienceItem/ExperienceItem";

const Experiencia = () => {
  return (
    <article className="containerExperiencia">
      <h1 id="experience">Experiencia Laboral</h1>

      <section className="contentsExperiencia">
        {data.experiencia.map((exp) => (
          // console.log(experiencie)
          <ExperienceItem
            key={exp.id}
            job={exp.job}
            company={exp.company}
            date={exp.date}
            description={exp.description}
          />
        ))}
      </section>
    </article>
  );
};

export default Experiencia;
