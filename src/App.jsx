import React, { useRef } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Project";
import Contact from "./Components/Contact/Contact";
import Certi from "./Components/Certificates/Certificate";

const App = () => {
  // Create refs for each section
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const certiRef = useRef(null);
  const contactRef = useRef(null);


  return (
    <div>
      {/* Pass the refs to the Navbar */}
      <Navbar
        heroRef={heroRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        certiRef={certiRef}
        contactRef={contactRef}
      />

      {/* Assign the refs to each section */}
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={certiRef}>
        <Certi />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default App;
