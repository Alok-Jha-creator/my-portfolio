import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Exprience from "./sections/Exprience";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Project from "./sections/Project";
import Skills from "./sections/Skills";
import Testimonial from "./sections/Testimonial";
import ParticlesBackgrounds from "./components/ParticlesBackgrounds";
import CustomCursior from "./components/CustomCursior";
import IntroAnimation from "./components/IntroAnimation";

export default function App() {
  // ✅ Fix 1: React.useState -> useState (React import chhaina thiyo)
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {/* ✅ Fix 2: JSX tag galat thiyo — < missing thiyo IntroAnimation ma */}
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}

      {introDone && (
        <div className="relative gradient text-white">
          <CustomCursior />
          <ParticlesBackgrounds />
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Project />
          <Exprience />
          <Testimonial />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}