import "./App.css";
import AboutMe from "./components/About Me/AboutMe";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<About />}>
          <Redirect to=""></Redirect>
        </Route>
        <Route path="/#About" element={<AboutMe />}></Route>
      </Routes> */}

      <About />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
