
import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/portfolio.css";

const PortfolioModal = ({ isOpen, closeModal, currentProject }) => {

    const dImage2 = useRef();
    const dImage3 = useRef();

    useEffect(() => {
        setTimeout(() => {
            window.gsap.to(dImage2.current, {
                rotation: 360,
                duration: 5,
                scrollTrigger: {
                    trigger: dImage3.current,
                    start: "top 40%",
                    end: "top 4%",
                    // scrub: 2,
                    // markers: true,
                    toggleActions: "restart none none none"
                }
            });
        }, 1000); // Delay in ms
    }, [isOpen]);

    console.log(currentProject, "current project")

    return (
        // isOpen && (
        <div className="container">
            <div className='portfolio-modal'>
                <div className='portfolio-modal-header'>
                    <span className='portfolio-close' onClick={closeModal}>X</span>
                </div>
                <div className="portfolio-item">
                    <img className='portfolio-item-image port-img-1' src={currentProject.images[0]} alt="" />
                    <div className="portfolio-description-div">
                        <p className="portfolio-description">{currentProject.description}</p>
                    </div>
                </div>
                <div className="portfolio-center-animated-div">
                    <img className='portfolio-item-image port-img-2' ref={dImage2} src={currentProject.images[1]} alt="" />
                    <img className='portfolio-item-image port-img-3' src={currentProject.images[0]} alt="" />
                </div>
                <div className="portfolio-item">
                    <div className="portfolio-description-div">
                        <p className="portfolio-description">{currentProject.description2}</p>
                    </div>
                    <img className='portfolio-item-image port-img-4' src={currentProject.images[1]} alt="" />
                </div>
            </div>
        </div>
    );
};

export default PortfolioModal;
