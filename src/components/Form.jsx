import React from 'react'
import '../styles/form.css'

const Form = () => {
    const handleSend = (e) => {
        e.preventDefault()
        alert("STAY CUTE OR DIE")
    }

  return (
    <form action="" className='contact-form'>
        <div className='contact-form-top'>
            <div className="form-div">
                <label className='text-color' htmlFor="nameInput">Name</label>
                <input type="text" id='nameInput' />
            </div>
            <div className="form-div">
                <label className='text-color' htmlFor="emailInput">Email</label>
                <input type="text" id='emailInput' />
            </div>
        </div>
        <div className='contact-form-mid'>
            <label className='text-color' htmlFor="contactTextArea">Message</label>
            <textarea name="" id="contactTextArea" ></textarea>
        </div>
        <button className='contact-send-btn' onClick={handleSend}>SEND</button>
    </form>
  )
}

export default Form