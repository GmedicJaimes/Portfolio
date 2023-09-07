import "./App.css";
import AboutMe from "./components/About Me/AboutMe";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      {/* <h1>Estamos en mi portfolio</h1> */}
      <About />
      <AboutMe />
    </div>
  );
}

export default App;
