import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./components/Landing"
import About from "./components/About"
import Contact from "./components/Contact"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"
import Navbar from './components/Navbar'
gsap.registerPlugin(ScrollTrigger);
import gsap from "gsap";

function App() {
  return (
    <div className='home-container'>
      {/* <Navbar /> */}
      <Landing />
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

export default App;
