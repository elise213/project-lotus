import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg mb-3" id="navbar">
            {/* Navbar Brand Logo - Link to Home - Always Visible*/}
            <div className="container-fluid">
                <Link to="/">
                    <span className="navbar-brand ms-5">
                        <img className="navbar-logo" src="./assets/code-lotus.png"></img>
                    </span>
                </Link>

                {/* Dynamic Navbar collapse-expand */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={handleToggle}
                >
                    {!isExpanded ? <i className="fa-solid fa-bars navbar-toggler-icon"></i> : <span className="navbar-toggler-icon">X</span>}
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                    style={{ flexGrow: "0" }}
                >
                    <div className="my-navbar-items">

                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar
