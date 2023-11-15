import React, { useEffect } from "react";
import "../styles/landing.css";
import Lotus from "/lotusonly.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Landing = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".lotus-container",
        start: "top top",
        end: "bottom bottom",
      },
    });

    // START
    tl.to(".lotus-img", {
      x: 50,
      y: 0,
      rotation: "0deg",
      duration: 1,
      ease: "sine.inOut",
      scale: 1,
    })
      // Movement 1
      .to(".lotus-img", {
        x: 165,
        y: 50,
        rotation: "-40deg",
        scale: 0.9,
        duration: 1,
        ease: "sine.inOut",
      })
      // Movement 2
      .to(".lotus-img", {
        x: 90,
        y: 110,
        rotation: "10deg",
        scale: 1.0,
        duration: 1,
        ease: "sine.inOut",
      })
      // Movement 3
      .to(".lotus-img", {
        x: 145,
        y: 175,
        rotation: "-40deg",
        scale: 1.2,
        duration: 1,
        ease: "sine.inOut",
      })
      // Movement 4
      .to(".lotus-img", {
        x: 100,
        y: 250,
        rotation: "10deg",
        scale: 1.2,
        duration: 1,
        ease: "sine.inOut",
      })
      // Movement 5
      .to(".lotus-img", {
        x: 130,
        y: 330,
        rotation: "-20deg",
        scale: 1.3,
        duration: 1,
        ease: "sine.inOut",
      })
      // Movement 6
      .to(".lotus-img", {
        x: 115,
        y: 395,
        rotation: "10deg",
        scale: 1.4,
        duration: 1,
        ease: "sine.inOut",
      })
      // FINAL POSITION
      .to(".lotus-img", {
        x: 110,
        y: 410,
        rotation: "-20deg",
        scale: 1.4,
        duration: 1,
        ease: "sine.inOut",
      });

    return () => {
      if (tl) {
        if (tl.scrollTrigger) {
          tl.scrollTrigger.kill();
        }
        tl.kill();
      }
    };
  }, []);

  //   console.log(tl.scrollTrigger);

  return (
    <div
      className="lotus-container"
      style={{ minHeight: "200vh", position: "relative" }}
    >
      <img
        src={Lotus}
        className="lotus-img"
        style={{ width: "100px", position: "absolute", right: "15%", x: "0" }}
        alt="Lotus"
      />
      <div className="landing-section">
        <div className="text-cont">
          <p className="text" style={{ "--i": 1 }}>
            C
          </p>
          <p className="text" style={{ "--i": 2 }}>
            O
          </p>
          <p className="text" style={{ "--i": 3 }}>
            D
          </p>
          <p className="text" style={{ "--i": 4 }}>
            E
          </p>
          <p className="text" style={{ "--i": 5 }}>
            L
          </p>
          <p className="text" style={{ "--i": 6 }}>
            O
          </p>
          <p className="text" style={{ "--i": 7 }}>
            T
          </p>
          <p className="text" style={{ "--i": 8 }}>
            U
          </p>
          <p className="text" style={{ "--i": 9 }}>
            S
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
