import "./App.css";

import Topbar from "./Pages/Topbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Work from "./Pages/Work";
import Skills from "./Pages/Skills";
import Education from "./Pages/Education";
import Footer from "./Pages/Footer";
import Experience from "./Pages/Experience";
import ParticlesComponent from "./Components/config/particles_config";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ResponsiveTester from "./Components/ResponsiveTester/ResponsiveTester";

function App() {
  return (
    <div>
      <Topbar />
      <Home />
      <ParticlesComponent id="particles" className="h-screen" />
      <About />
      <Skills />
      <Education />
      <Work />
      <Experience />
      <Contact />
      <Footer />
      <ToastContainer />

      {/* <ResponsiveTester /> */}
    </div>
  );
}

export default App;
