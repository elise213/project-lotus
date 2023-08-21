import React, { useState, useEffect, useRef } from "react";
import PortfolioModal from "./PortfolioModal";
import styles from "../styles/portfolio.css?inline";
gsap.registerPlugin(ScrollTrigger);
import { gsap } from "gsap";
import CircleType from "circletype";

const Portfolio = () => {
    const [aux, setAux] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    const comp = useRef();
    const circle = useRef();
    const portPage = useRef();
    const circleInstance = useRef();
    const circleInstance2 = useRef();

    useEffect(() => {
        new CircleType(circleInstance.current).radius(300);
    }, []);

    useEffect(() => {
        new CircleType(circleInstance2.current).radius(300)
            .dir(-1)
    }, []);

    useEffect(() => {
        gsap.set(portPage.current, { autoAlpha: 1 });
        gsap.to(circle.current, {
            rotation: 360,
            scrollTrigger: {
                trigger: portPage.current,
                start: "center center",
                end: () => `+=${window.innerHeight / 2}`,
                scrub: 4,
                pin: true,
                // markers: true,
                toggleActions: "restart none none none"
            }
        });
        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
            gsap.globalTimeline.clear();
        };
    }, []);

    const projects = [
        {
            images: ["./sample1.png", "./sample2.png"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate magnam, at autem, repellendus laudantium omnis itaque ratione voluptatum nulla quos eaque hic voluptatem! Cum facilis iure excepturi esse impedit?",
            description2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate magnam, at autem, repellendus laudantium omnis itaque ratione voluptatum nulla quos eaque hic voluptatem! Cum facilis iure excepturi esse impedit?"
        },
        {
            images: ["./sample2.png", "./sample3.png"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate magnam, at autem, repellendus laudantium omnis itaque ratione voluptatum nulla quos eaque hic voluptatem! Cum facilis iure excepturi esse impedit?",
            description2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate magnam, at autem, repellendus laudantium omnis itaque ratione voluptatum nulla quos eaque hic voluptatem! Cum facilis iure excepturi esse impedit?"
        },
        {
            images: ["./sample3.png", "./sample4.png"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate magnam, at autem, repellendus laudantium omnis itaque ratione voluptatum nulla quos eaque hic voluptatem! Cum facilis iure excepturi esse impedit?",
            description2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate magnam, at autem, repellendus laudantium omnis itaque ratione voluptatum nulla quos eaque hic voluptatem! Cum facilis iure excepturi esse impedit?"
        },
        {
            images: ["./sample4.png", "./sample5.png"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate magnam, at autem, repellendus laudantium omnis itaque ratione voluptatum nulla quos eaque hic voluptatem! Cum facilis iure excepturi esse impedit?",
            description2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate magnam, at autem, repellendus laudantium omnis itaque ratione voluptatum nulla quos eaque hic voluptatem! Cum facilis iure excepturi esse impedit?"
        },
        {
            images: ["./sample5.png", "./sample1.png"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate magnam, at autem, repellendus laudantium omnis itaque ratione voluptatum nulla quos eaque hic voluptatem! Cum facilis iure excepturi esse impedit?",
            description2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate magnam, at autem, repellendus laudantium omnis itaque ratione voluptatum nulla quos eaque hic voluptatem! Cum facilis iure excepturi esse impedit?"
        },
    ];

    let lastIndex = projects.length - 1;

    const shiftLeft = () => {
        if (aux === 0) {
            setAux(lastIndex);
        } else {
            setAux(aux - 1);
        }
    };

    const shiftRight = () => {
        if (aux === lastIndex) {
            setAux(0);
        } else {
            setAux(aux + 1);
        }
    };

    const openModal = (project) => {
        setCurrentProject(project);
        setModalIsOpen(true);
        document.body.classList.add('bodyNoScroll');
        console.log("Open Modal called", project);
    };

    const closeModal = () => {
        console.log("Close Modal called");
        setModalIsOpen(false);
        document.body.classList.remove('bodyNoScroll');
    };

    return (
        <div className="container">
            {modalIsOpen && (
                <div>
                    <div className="modal-overlay"></div>
                    <div className="modal-div">
                        <PortfolioModal isOpen={modalIsOpen} closeModal={closeModal} currentProject={currentProject} />
                    </div>
                </div>
            )}
            {/* <div className='spacer' style={{ display: 'block' }}></div> */}
            <div className="question">
                <div className="circle-font" ref={circleInstance}>RECENT PROJECTS</div>
            </div>

            <div className='portfolio-container' ref={portPage}>
                <div className='portfolio-inner'>
                    <button className="arrow-button" onClick={shiftLeft}><img className="left-arrow" src="./coralarrow.png"></img></button>
                    <div className='portfolio-image-div2'>
                        <img className="portfolio-image2" src={projects[aux].images[0]} alt="" onClick={() => openModal(projects[aux])} />
                    </div>
                    <div className='portfolio-image-div1 box' ref={circle}>
                        <img className="portfolio-image1" src={projects[(aux + 1) % projects.length].images[0]} alt="" onClick={() => openModal(projects[(aux + 1) % projects.length])} />
                    </div>
                    <div className='portfolio-image-div2'>
                        <img className="portfolio-image2" src={projects[(aux + 2) % projects.length].images[0]} alt="" onClick={() => openModal(projects[(aux + 2) % projects.length])} />
                    </div>
                    <button className="arrow-button" onClick={shiftRight}><img className="right-arrow" src="./coralarrow.png"></img></button>
                </div>
            </div>

            <div className="question-2">
                <div className="circle-font-2" ref={circleInstance2}>RECENT PROJECTS</div>
            </div>
        </div>
    );
};

export default Portfolio;

