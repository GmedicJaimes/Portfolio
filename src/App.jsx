import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./components/About Me/AboutMe";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Form from "./components/Form/Form";
import React, { useContext } from "react";

import { langContext } from "./context/langContext";
import { IntlProvider } from "react-intl";
import es from "../src/languages/es-ES.json";
import en from "../src/languages/en-US.json";

function App() {
  const idioma = useContext(langContext);

  console.log(idioma);
  return (
    <IntlProvider locale="es-ES" messages={es}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
        <AboutMe />
        <Projects />
        <Skills />
        <Form />
      </div>
    </IntlProvider>
  );
}

export default App;
