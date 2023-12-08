import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { PiMessengerLogo } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";

import { useRef } from 'react';
import emailjs, { send } from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3gp6y2q', 'template_uxhnfqr', form.current, 'yA4UZZa5DKv43fHOy')
    
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>faizmohamad1993@gmail.com</h5>
            <a href="mailto:faizmohamad1993@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <PiMessengerLogo className="contact__option-icon" />
            <h4>Messanger</h4>
            <h5>faizmohamad</h5>
            <a
              href="https://m.me/profile.php?id=100027140584763"
              target="_blank"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+6013-9177718</h5>
            <a
              href="https://api.whatsapp.com/send?phone+60139177718"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary" value="send">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
