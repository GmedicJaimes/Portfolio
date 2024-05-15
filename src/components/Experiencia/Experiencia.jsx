import React, { useState } from "react";
import "./Experiencia.css";
import data from "../../data.json";

const Experiencia = () => {
  // const [info, setInfo] = useState(data);

  return (
    <article className="containerExperiencia">
      <h1 id="experience">Experiencia Laboral</h1>

      <section className="contentsExperiencia">
        {data.experiencia.map((v) => (
          <div className="box" key={v.id}>
            <div className="companyName">
              <h2>{v.job}</h2>
              <h3>{v.company}</h3>
              <h4>{v.date}</h4>
            </div>
            <div className="descriptionCompany">
              <p>{v.description}</p>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
};

export default Experiencia;
