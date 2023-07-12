import React, { useState, useEffect, useRef } from "react";
// import styles from "../styles/portfolio.css";
import PortfolioModal from "./PortfolioModal";
import styles from "../styles/portfolio.css?inline";


const Portfolio = () => {
    const [aux, setAux] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    const comp = useRef();
    const circle = useRef();
    const portPage = useRef();
    const square = useRef();

    console.log("open modal", modalIsOpen);
    console.log("current project", currentProject);

    useEffect(() => {
        gsap.set(portPage.current, { autoAlpha: 1 });
        gsap.to(circle.current, {
            rotation: 360,
            scrollTrigger: {
                trigger: portPage.current,
                start: "top top",
                end: () => `+=${portPage.current.offsetHeight}px`,
                scrub: 3,
                pinSpacing: true,
                // markers: true,
                // toggleActions: "restart none none none",
                onEnter: () => {
                    gsap.set(portPage.current, { position: 'fixed', top: 0 })
                    gsap.set('.spacer', { display: 'block', height: `${portPage.current.offsetHeight}px` }) // Add spacer
                },
                onLeave: () => {
                    gsap.set(portPage.current, { position: 'static' })
                    // gsap.set('.spacer', { display: 'none' }) // Remove spacer
                },
                onEnterBack: () => {
                    gsap.set(portPage.current, { position: 'fixed', top: 0 })
                    // gsap.set('.spacer', { display: 'block', height: `${portPage.current.offsetHeight}px` }) // Add spacer
                },
                onLeaveBack: () => {
                    gsap.set(portPage.current, { position: 'static' })
                    gsap.set('.spacer', { display: 'none' }) // Remove spacer
                }
            }
        });
    }, []);

    useEffect(() => {
        gsap.set(portPage.current, { autoAlpha: 1 });
        gsap.to(circle.current, {
            rotation: 360,
            scrollTrigger: {
                trigger: portPage.current,
                start: "top top",
                end: () => `+=${portPage.current.offsetHeight}px`,
                scrub: 3,
                pinSpacing: true,
                // markers: true,
                // toggleActions: "restart none none none",
            }
        });
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
        console.log("Open Modal called");
    };

    const closeModal = () => {
        console.log("Close Modal called");
        setModalIsOpen(false);
        document.body.classList.remove('bodyNoScroll');
    };


    return (
        <div className="container">
            <div className='spacer' style={{ display: 'none' }}></div>
            {/* <div className='spacer' style={{ display: 'none' }}></div> */}
            {modalIsOpen && (
                <div>
                    <div className="modal-overlay"></div>
                    <div className="modal-div" >
                        <PortfolioModal isOpen={modalIsOpen} closeModal={closeModal} currentProject={currentProject} />
                    </div>
                </div>
            )}

            <div className='portfolio-container' ref={portPage}>
                <button className="arrow-button" onClick={shiftLeft}><img className="left-arrow" src="./coralarrow.png"></img></button>

                <div className='portfolio-image-div2' ref={square}>
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
    );
};

export default Portfolio;
