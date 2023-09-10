import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./components/About Me/AboutMe";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
