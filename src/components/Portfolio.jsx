import React, { useState } from 'react';
import styles from "../styles/portfolio.css";

const Portfolio = () => {
    const [aux, setAux] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

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
            images: ["./sample4.png", "./sample1.png"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate magnam, at autem, repellendus laudantium omnis itaque ratione voluptatum nulla quos eaque hic voluptatem! Cum facilis iure excepturi esse impedit?"
        },
    ];

    const shiftLeft = () => {
        if (aux === 0) {
            setAux(3);
        } else {
            setAux(aux - 1);
        }
    }

    const shiftRight = () => {
        if (aux === 3) {
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
                    <div className="port">
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
