import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/navbar.css";

const Navbar = () => {
    const logo = '/src/assets/code-lotus3.png' // Change this path to your actual image location
    return (
        <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light" id="navbar">
            <div className="container-fluid">
                <Link to="/">
                    <img width={500} height={150} alt="" className="navbar-logo" src="../../public/code-lotus3.png" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <p className="navbar-toggler-icon"></p>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ flexGrow: '0' }}>
                    <div className="ml-auto nav-content">
                        {/* <span className="nav-item">
                        <Link to="/" className='nav-btn'>HOME</Link>
                    </span> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
