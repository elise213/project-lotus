import React, { useEffect } from 'react';
import Landing from "./components/Landing";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import Lotus from "/lotusonly.png";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function App() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.home-container',
        start: 'top top',
        end: 'bottom bottom',
      }
    });

    // START
    tl.to('.lotus-img', {
      x: 50,
      y: 0,
      rotation: '0deg',
      duration: 1,
      ease: 'sine.inOut',
      scale: 1
    })
      // Movement 1 
      .to('.lotus-img', {
        x: 165,
        y: 50,
        rotation: '-40deg',
        scale: .9,
        duration: 1,
        ease: 'sine.inOut',
      })
      // Movement 2
      .to('.lotus-img', {
        x: 90,
        y: 110,
        rotation: '10deg',
        scale: 1.0,
        duration: 1,
        ease: 'sine.inOut',
      })
      // Movement 3
      .to('.lotus-img', {
        x: 145,
        y: 175,
        rotation: '-40deg',
        scale: 1.2,
        duration: 1,
        ease: 'sine.inOut',
      })
      // Movement 4
      .to('.lotus-img', {
        x: 100,
        y: 250,
        rotation: '10deg',
        scale: 1.2,
        duration: 1,
        ease: 'sine.inOut',
      })
      // Movement 5
      .to('.lotus-img', {
        x: 130,
        y: 330,
        rotation: '-20deg',
        scale: 1.3,
        duration: 1,
        ease: 'sine.inOut',
      })
      // Movement 6 
      .to('.lotus-img', {
        x: 115,
        y: 395,
        rotation: '10deg',
        scale: 1.4,
        duration: 1,
        ease: 'sine.inOut',
      })
      // FINAL POSITION
      .to('.lotus-img', {
        x: 110,
        y: 410,
        rotation: '-20deg',
        scale: 1.4,
        duration: 1,
        ease: 'sine.inOut',
      });;

    return () => {
      if (tl) {
        tl.scrollTrigger.kill();
        tl.kill();
      }
    };
  }, []);

  return (
    <div className='home-container' style={{ minHeight: '200vh', position: 'relative' }}>
      <img src={Lotus} className='lotus-img' style={{ width: "100px", position: 'absolute', right: '15%', x: "0" }} alt='Lotus' />
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

// Smoother way to do the gsap animation:
// useEffect(() => {
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.home-container',
//       start: 'top top',
//       end: 'bottom bottom',
//       // scrub: 1,
//       markers: true
//     }
//   });

//   tl.to('.lotus-img', {
//     motionPath: {
//       path: [
//         { x: 80, y: 90, },
//         { x: 120, y: 150 },
//         { x: 100, y: 230 },
//         { x: 125, y: 300 },
//         { x: 135, y: 310 }
//       ],
//       type: "soft"
//     },
//     // rotation: "-30, 30, -10, 0",
//     ease: 'sine.inOut',
//     duration: 4
//   });

//   return () => {
//     ScrollTrigger.getAll().forEach((st) => st.kill());
//     gsap.globalTimeline.clear();
//   };
// }, []);