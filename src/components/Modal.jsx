import React from 'react'
import '../styles/modal.css'

const Modal = (props) => {
    // toggleModal is how we open and close the modal 
    const toggleModal = (idx) => {
        let modalroot = document.getElementById(`card${idx}ModalRoot`)
        let body = document.querySelector('body')
        body.classList.toggle('no-scroll')
        modalroot.classList.toggle('d-none')
    }
        // this is how the modal does not close when you click in it 
    const modalClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        // e.stopImmediatePropagation();
        // return false;
    }
    return (
        <>  
            {/* this is the card that acts as the trigger for the modal */}
            <div className='card'>
                <div 
                    className='openModalDiv' 
                    onClick={() => toggleModal(props.idx)}
                >
                    <img src={props.image} alt='some image'/>
                </div>
            </div>
            {/* 
                this is the modal root which is now we are centering the modal 
                we also set the backgound color here.
            */}
            <div 
                className='modal-root d-none' 
                id={'card'+ props.idx + 'ModalRoot'}
                onClick={() => toggleModal(props.idx)}
            >
                <div 
                className='modal' 
                onClick={(e) => modalClick(e)}
                >
                    {/* this is the content of the modal  */}
                    {/* modal header */}
                    <div className='modal-header'>
                        <p><b>SOME TITLE</b></p>
                        <button 
                        aria-label='close-modal'
                        onClick={() => toggleModal(props.idx)}
                        >
                            X
                        </button>
                    </div>
                    {/* modal body */}
                    <div className='modal-body'>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    {/* modal footer */}
                    <div className='modal-footer'>
                        <button className='modal-submit-btn'>SUBMIT</button>
                    </div>
                    {/* this is the end of the content */}
                </div>

            </div>
        </>
    
    )
}

export default Modal