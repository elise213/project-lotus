"use client";
import React, { useEffect } from "react";
import styles from '../styles/contact.css'
import Form from "./Form";


const Contact = () => {


    return (
        <div className="contact-page">
            <div className="contact-spacer" style={{ height: '200vh' }}></div> {/* Add spacer here */}
            <div className="message-background">
                <div className="contact-form contact-form-2">
                    <form id="contact_form" name="contact_form" method="post">

                        <div className="d-flex justify-content-center flex-direction-column">
                            <p className="consultation"> Schedule a free 15 minute consultation {" "}
                                <a href="https://calendly.com/d/z5t-v8z-2pr/free-consultation?month=2023-05" className="consultation-link">
                                    here </a> or send us a message below.
                            </p>
                        </div>
                        {/* <p className="text-center looking-forward" >We look forward to hearing from you!</p> */}
                        <div className="mb-3 row">
                            <div className="col">
                                <label className="label">Name</label>
                                <input
                                    type="text"
                                    required
                                    maxLength="50"
                                    className="form-control"
                                    id="first_name"
                                    name="first_name"
                                />
                            </div>
                            <div className="col">
                                <label className="label" htmlFor="email_addr">Email address</label>
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
                        </div>
                        <div className="row">
                            <div className="">
                                <label className="label" htmlFor="message">Message</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows="3"
                                ></textarea>
                                <button type="submit" className="send-button w-100 mt-4">
                                    Send
                                </button>

                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Contact;
