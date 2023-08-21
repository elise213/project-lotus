import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/portfolio.css";
gsap.registerPlugin(ScrollTrigger);
import { gsap } from "gsap";

const PortfolioModal = ({ closeModal, currentProject }) => {
    const dImage2 = useRef();
    const dImage3 = useRef();
    const middleContainer = useRef();

    useEffect(() => {
        // gsap.set(middleContainer.current, { autoAlpha: 1 });
        gsap.to(dImage2.current, {
            rotation: 360,
            scrollTrigger: {
                trigger: dImage3.current,
                start: "center center",
                end: "top 10%",
                scrub: 4,
                pin: true,
                markers: true,
                toggleActions: "restart none none none"
            }
        });
        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
            gsap.globalTimeline.clear();
        };
    }, []);

    useEffect(() => {
        console.log("DIMAGE", dImage2.current);
        console.log(dImage3.current);
    }, []);


    return (
        <div className="container-2" ref={middleContainer}>
            <span className="portfolio-close" onClick={closeModal}>
                X
            </span>
            <div className="portfolio-modal">
                <div className="modal-interior">
                    <div className="portfolio-item">
                        <div className="image-container">
                            <img className='portfolio-item-image port-img-1' src={currentProject.images[0]} alt="" />
                        </div>
                        <div className="portfolio-description-div">
                            <p className="portfolio-description">{currentProject.description}</p>
                        </div>
                    </div>
                    <div className="portfolio-item" >
                        <div className="image-container">
                            <img className='portfolio-item-image port-img-2' ref={dImage2} src={currentProject.images[1]} alt="" />
                        </div>
                        <div className="image-container">
                            <img className='portfolio-item-image port-img-3' ref={dImage3} src={currentProject.images[0]} alt="" />
                        </div>
                    </div>
                    <div className="portfolio-item ">
                        <div className="portfolio-description-div">
                            <p className="portfolio-description">{currentProject.description2}</p>
                        </div>
                        <div className="image-container">
                            <img className='portfolio-item-image port-img-4' src={currentProject.images[1]} alt="" />
                        </div>
                    </div>
                </div >
            </div>
        </div >
    );
};

export default PortfolioModal;
