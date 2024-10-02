import React, { useRef } from "react";
import {
  FaLocationDot,
  FaPhoneVolume,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { LuArrowUpSquare } from "react-icons/lu";
import emailjs from "@emailjs/browser";
import "./Contact.css"; // Import the external CSS

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oy2b4j9",
        "template_qp626bs",
        form.current,
        "IEMjTYzRIroeoO-L-"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

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
          <h2>Let's Talk</h2>
          <p>
            I'm available for any kind of project, so feel free to contact me.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <MdAttachEmail size={29} className="icon" />
              <p>krishnachavan459@gmail.com</p>
            </div>
            <div className="contact-detail">
              <FaPhoneVolume size={29} className="icon" />
              <p>+91 9284769125</p>
            </div>
            <div className="contact-detail">
              <FaLocationDot size={29} className="icon" />
              <p>Nashik, Maharashtra</p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="from_name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="reply_to"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Write your message here</label>
              <textarea
                id="message"
                name="message"
                rows={8}
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="scroll-to-top" onClick={ScrolltoTop}>
        <LuArrowUpSquare size={40} />
      </div>
      <footer className="footer">
        <div className="social-icons">
          <a
            href="https://www.instagram.com/krishnachavan_1930?igsh=MXh6NTJqMzM5MmI1eg=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://wa.me/919284769125"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
        <p className="copyright">
          &copy; 2024 Krishna Chavan. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
