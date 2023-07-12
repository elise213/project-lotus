import React, {useRef} from 'react'
import '../styles/form.css'
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Form = () => {
    const form = useRef();
    
    const SERVICE_ID = "service_betnze8";
    const TEMPLATE_ID = "template_99iigjc";
    const PUBLIC_KEY = "bSrh0TD_khQU1Jash";

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current)
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result);
                Swal.fire({
                    icon: "success",
                    title: "Message Sent Successfully"
                })

            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: "error",
                    title: "Ooops, something went wrong",
                    text: error.text,
                })
            });
        e.target.reset()
    };

    return (
        <form ref={form} onSubmit={sendEmail} className='contact-form'>
            <div className='contact-form-top'>
                <div className="form-div">
                    <label className='text-color' htmlFor="nameInput">Name</label>
                    <input type="text" id='nameInput' name="name" className="form-control"/>
                </div>
                <div className="form-div">
                    <label className='text-color' htmlFor="emailInput">Email</label>
                    <input type="text" id='emailInput' name='email'  className="form-control"/>
                </div>
            </div>
            <div className='contact-form-mid'>
                <label className='text-color' htmlFor="contactTextArea">Message</label>
                <textarea id="contactTextArea" name='message' className="form-control"></textarea>
            </div>
            <button className='contact-send-btn' type='submit'>SEND</button>
        </form>
    )
}

export default Form