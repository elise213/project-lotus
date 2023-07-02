import React, { useState } from 'react';
import styles from "../styles/portfolio.css";

const Portfolio = () => {
    const [aux, setAux] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    const projects = [
        {
            images: ["./sample1.png", "./sample1_2.png"],
            description: "Description for Project 1",
        },
        {
            images: ["./sample2.png", "./sample2_2.png"],
            description: "Description for Project 2",
        },
        {
            images: ["./sample3.png", "./sample3_2.png"],
            description: "Description for Project 3",
        },
        {
            images: ["./sample4.png", "./sample4_2.png"],
            description: "Description for Project 4",
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
                    <span className='close' onClick={closeModal}>X</span>
                    <img className='port-img' src={currentProject.images[0]} alt="" />
                    <p>{currentProject.description}</p>
                    <img className='port-img' src={currentProject.images[1]} alt="" />
                </div>
            )}
        </div>
    )
}

export default Portfolio;
