import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Exprience from "./sections/Exprience";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Project from "./sections/Project";
import Skills from "./sections/Skills";
import Testimonial from "./sections/Testimonial";
import ParticlesBackgrounds from "./components/ParticlesBackgrounds"

export default function App(){
  return(
    <div className="relative gradient text-white">
      <ParticlesBackgrounds/>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Exprience/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}