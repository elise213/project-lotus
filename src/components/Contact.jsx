import React, { useState, useEffect, useRef } from "react";
import Form from "./Form";
import "../styles/contact.css";

const Contact = () => {
  const contactPage = useRef();

  return (
    <div className="contact-page" ref={contactPage}>
      <p className="getInTouch">Tell us about your project!</p>
      <Form />
    </div>
  );
};

export default Contact;
