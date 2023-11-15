import React, { useEffect } from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
// import Lotus from "/lotusonly.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function App() {
  return (
    <div
      className="home-container"
      style={{ minHeight: "200vh", position: "relative" }}
    >
      <Landing />
      <Services />
      <ErrorBoundary>
        <Portfolio />
      </ErrorBoundary>
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
