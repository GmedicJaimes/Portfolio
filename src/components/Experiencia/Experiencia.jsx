import React from "react";
import "./Experiencia.css";
import data from "../../data.json";

const Experiencia = () => {
  return (
    <>
      <article className="containerExperiencia">
        <h1>Experiencia Laboral</h1>

        <section className="contentsExperiencia">
          {data.experiencia.map((info) => (
            <div className="box" key={info.id}>
              <div className="companyName">
                <h2>{info.job}</h2>
                <h3>{info.company}</h3>
                <h4>{info.date}</h4>
              </div>
              <div className="descriptionCompany">
                <p>{info.description}</p>
              </div>
            </div>
          ))}
        </section>
      </article>
    </>
  );
};

export default Experiencia;
