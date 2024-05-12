import React from "react";
import "./Experiencia.css";

const Experiencia = () => {
  return (
    <>
      <article className="containerExperiencia">
        <h1>Experiencia Laboral</h1>

        <section className="contentsExperiencia">
          <div className="box">
            <div className="companyName">
              <h4>Analista de Soporte Técnico y Documentación</h4>
              <h3>Universidad Francisco de Paula Santander</h3>
              <h2>Enero 2024 - Presente</h2>
            </div>
            <div className="descriptionCompany">
              <p></p>
            </div>
          </div>
          <div className="box">
            <div className="companyName">
              <h4>Asistente de Enseñanza en Desarrollo Full Stack </h4>
              <h3>SoyHenry Bootcamp</h3>
              <h2>Julio 2023 - Agosto 2023</h2>
            </div>
            <div className="descriptionCompany">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                molestias velit, repudiandae obcaecati reiciendis eaque quaerat
                optio sapiente provident incidunt illo nulla ipsam soluta sunt
                quasi cum magni autem mollitia!
              </p>
            </div>
          </div>
          <div className="box">
            <div className="companyName">
              <h4>Jefe de Logistica</h4>
              <h3>Villaceramica</h3>
              <h2>Julio 2022 - Abril 2023</h2>
            </div>
            <div className="descriptionCompany">
              <p></p>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default Experiencia;
