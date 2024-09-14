import React, { useRef } from "react";
import "./Contact.css";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { LuArrowUpSquare } from "react-icons/lu";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oy2b4j9', 'template_qp626bs', form.current, 'IEMjTYzRIroeoO-L-')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
      });
  };

  // Function to scroll to top
  const ScrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm available for any kind of project, so feel free to contact me.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <MdAttachEmail size={29} className="img" />
              <p>krishnachavan459@gmail.com</p>
            </div>
            <div className="contact-detail">
              <FaPhoneVolume size={29} className="img" />
              <p>+91 9284769125</p>
            </div>
            <div className="contact-detail">
              <FaLocationDot size={29} className="img" />
              <p>Nashik, Maharashtra</p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail}>
            <div className="contact-detail">
              <label htmlFor="name">Your Name</label>
              <input type="text" name="from_name" placeholder="Enter your name" required />
            </div>
            <div className="contact-detail">
              <label htmlFor="email">Your Email</label>
              <input type="email" name="reply_to" placeholder="Enter your email" required />
            </div>
            <div className="contact-detail">
              <label htmlFor="message">Write your message here</label>
              <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="contact-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
      {/* Scroll to Top button */}
      <div className="top">
        <li onClick={ScrolltoTop}><LuArrowUpSquare />  Top</li>
      </div>
    </div>
  );
};

export default Contact;
