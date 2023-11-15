import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/portfolio.css";
gsap.registerPlugin(ScrollTrigger);
import { gsap } from "gsap";

const PortfolioModal = ({ closeModal, projects }) => {
  const middleContainer = useRef();

  // useEffect(() => {
  //   // gsap.set(middleContainer.current, { autoAlpha: 1 });
  //   gsap.to(dImage2.current, {
  //     rotation: 360,
  //     scrollTrigger: {
  //       trigger: dImage3.current,
  //       start: "center center",
  //       end: "top 10%",
  //       scrub: 4,
  //       pin: true,
  //       markers: false,
  //       toggleActions: "restart none none none",
  //     },
  //   });
  //   return () => {
  //     ScrollTrigger.getAll().forEach((st) => st.kill());
  //     gsap.globalTimeline.clear();
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("DIMAGE", dImage2.current);
  //   console.log(dImage3.current);
  // }, []);

  return (
    <div className="container-2" ref={middleContainer}>
      <span className="portfolio-close" onClick={closeModal}>
        X
      </span>
      <div className="portfolio-modal">
        <div className="modal-interior">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item">
              {/* Check the number of images for each project */}
              <div className="portfolio-images-container">
                {project.images.length === 1 ? (
                  // If there's only one image, render it directly
                  <div className="image-container">
                    <img
                      className="portfolio-item-image"
                      src={project.images[0]}
                      alt={`${project.project_title} - 1`}
                    />
                  </div>
                ) : (
                  // If there are multiple images, iterate over them
                  project.images.map((image, imageIndex) => (
                    <div key={imageIndex} className="image-container">
                      <img
                        className={`portfolio-item-image port-img-${
                          imageIndex + 1
                        }`}
                        src={image}
                        alt={`${project.project_title} - ${imageIndex + 1}`}
                      />
                    </div>
                  ))
                )}
              </div>
              {/* Project Title with Link */}
              {/* Description */}
              <div className="portfolio-description-div">
                <div className="portfolio-title">
                  <a
                    href={`http://${project.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.project_title}
                  </a>
                </div>
                <p className="portfolio-description">{project.description}</p>
                {/* <p className="portfolio-description">{project.description2}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
