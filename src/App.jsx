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

function App() {
  const idioma = useContext(langContext);

  return (
    <div>
      <Navbar />
      <About />
      <AboutMe />
      <Projects />
      <Skills />
      <Form />
    </div>
  );
}

export default App;
