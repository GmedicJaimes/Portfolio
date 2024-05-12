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
                <h4>{info.job}</h4>
                <h3>{info.company}</h3>
                <h2>{info.date}</h2>
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
