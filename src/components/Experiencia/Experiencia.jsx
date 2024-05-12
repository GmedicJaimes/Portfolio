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
              <h4>Analista de Calidad de Software y Soporte Técnico.</h4>
              <h3>Universidad Francisco de Paula Santander</h3>
              <h2>Enero 2024 - Presente</h2>
            </div>
            <div className="descriptionCompany">
              <p>
                Encargado de la creación de documentación completa enfocada en
                la resolucion de problemas y apoyo a los usuarios.
              </p>
              <p>
                Responsable de elaborar manuales detallados, realizar pruebas de
                calidad, documentar procedimientos, soluciones y mejores
                practicas en el funcionamiento de la plataforma, generar
                informes tecnicos y brindar soporte de primera linea colaborando
                con los equipos de desarrollo.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="companyName">
              <h4>Asistente de Enseñanza Fullstack.</h4>
              <h3>SoyHenry Bootcamp</h3>
              <h2>Julio 2023 - Agosto 2023</h2>
            </div>
            <div className="descriptionCompany">
              <p>
                Fui mentor de estudiantes en el desarrollo web full stack,
                brindándoles apoyo individualizado, conferencias y explicaciones
                de lógica de programación en JavaScript. Mi objetivo: sentar las
                bases para su éxito en el Bootcamp y su futuro como
                desarrolladores.
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
              <p>
                De manera eficiente y organizada, cree y gestione un proceso de
                almacenamiento, en el cual se dividio por sectores, enfocados en
                los productos mas utilizados hasta los no tan comunes, tamaño,
                uso y fragilidad, aumentando en un 70% la eficacia al despacho
                del producto y al momento de implementar los inventarios.
              </p>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default Experiencia;
