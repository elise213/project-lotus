import React, { useState, useEffect } from 'react';
import styles from "../styles/portfolio.css";

const Portfolio = () => {
    const [aux, setAux] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    // const handleScroll = () => {
    //     if (window.scrollY > 500) {
    //         scroll.scrollToTop();
    //     }
    // };

    const projects = [
        {
            images: ["./sample1.png", "./sample2.png"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate magnam, at autem, repellendus laudantium omnis itaque ratione voluptatum nulla quos eaque hic voluptatem! Cum facilis iure excepturi esse impedit?"
        },
        {
            images: ["./sample2.png", "./sample3.png"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate magnam, at autem, repellendus laudantium omnis itaque ratione voluptatum nulla quos eaque hic voluptatem! Cum facilis iure excepturi esse impedit?"
        },
        {
            images: ["./sample3.png", "./sample4.png"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate magnam, at autem, repellendus laudantium omnis itaque ratione voluptatum nulla quos eaque hic voluptatem! Cum facilis iure excepturi esse impedit?"
        },
        {
            images: ["./sample4.png", "./sample5.png"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate magnam, at autem, repellendus laudantium omnis itaque ratione voluptatum nulla quos eaque hic voluptatem! Cum facilis iure excepturi esse impedit?"
        },
        {
            images: ["./sample5.png", "./sample1.png"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate magnam, at autem, repellendus laudantium omnis itaque ratione voluptatum nulla quos eaque hic voluptatem! Cum facilis iure excepturi esse impedit?"
        },
    ];

    console.log("PROJECTS", projects.length)

    let aux2 = projects.length - 1;

    const shiftLeft = () => {
        if (aux === 0) {
            setAux(aux2);
        } else {
            setAux(aux - 1);
        }
    }

    const shiftRight = () => {
        if (aux === aux2) {
            setAux(0);
        } else {
            setAux(aux + 1);
        }
    }

    const openModal = (project) => {
        setCurrentProject(project);
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        <div className='portfolio-container'>
            <button onClick={shiftLeft}>
                Left
            </button>
            <div className='portfolio-img-div'>
                <img className="image2" src={projects[aux].images[0]} alt="" onClick={() => openModal(projects[aux])} />
            </div>
            <div className='portfolio-img-div'>
                <img className="image1" src={projects[(aux + 1) % projects.length].images[0]} alt="" onClick={() => openModal(projects[(aux + 1) % projects.length])} />
            </div>
            <div className='portfolio-img-div'>
                <img className="image2" src={projects[(aux + 2) % projects.length].images[0]} alt="" onClick={() => openModal(projects[(aux + 2) % projects.length])} />
            </div>
            <button onClick={shiftRight}>
                Right
            </button>

            {modalIsOpen && (
                <div className='modal'>
                    <div className='modal-header'>
                        <span className='close' onClick={closeModal}>X</span>
                    </div>
                    <div className="port">
                        <img className='port-img' src={currentProject.images[0]} alt="" />
                        <div className="description-div">
                            <p className="description">{currentProject.description}</p>
                        </div>
                    </div>
                    <div className="center-animated-div">
                        <img className='port-img' src={currentProject.images[1]} alt="" />
                        <img className='port-img' src={currentProject.images[0]} alt="" />
                    </div>
                    <div className="port">
                        <div className="description-div">
                            <p className="description">{currentProject.description}</p>
                        </div>
                        <img className='port-img' src={currentProject.images[1]} alt="" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Portfolio;
