import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Form from "./Form"

const Contact = () => {
    const form = useRef();
    const SERVICE_ID = "service_betnze8";
    "service_0hip2bt";
    const TEMPLATE_ID = "template_99iigjc";
    // "template_u7nitmj";
    const PUBLIC_KEY = "bSrh0TD_khQU1Jash";
    "frmUHhhWUG9vtMRit";

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
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
        <div className="contact-page">
            <div className='spacer' style={{ display: 'block' }}></div>
            <form ref={form} onSubmit={sendEmail}>

                <div className="mb-3 row">
                    <div className="col">
                        <label>Name</label>
                        <input type="text" name="first_name"
                            required
                            maxLength="50"
                            className="form-control"
                            id="first_name"
                        />
                    </div>

                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <label >Email Address</label>
                        <input
                            type="email"
                            required
                            maxLength="50"
                            className="form-control"
                            id="email_addr"
                            name="email"
                            placeholder=""
                        />
                    </div>

                    <div className="mt-2">
                        <label htmlFor="message">Message</label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows="3"
                        ></textarea>
                    </div>
                    <div className=" mt-3">
                        <button type="submit" value="send" className="submit">
                            Send
                        </button>
                    </div>
                </div>
            </form>
        </div>

    );
};


export default Contact;
