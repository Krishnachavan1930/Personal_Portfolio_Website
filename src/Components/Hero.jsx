import React from 'react';
import Image from "../../src/assets/phutu.jpg";
import './Hero.css';

export default function Hero() {
  return (
    <div className="hero">
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2>Hello</h2>
            <h1>I'm <span className="highlight">Krishna</span></h1>
            <h2>Web Developer</h2>
            <p>
              I am a skilled web designer with experience in creating visually appealing and user-friendly websites.
            </p>
            <div className="cta-buttons">
              <a href="https://drive.google.com/your-resume-link" target="_blank" rel="noopener noreferrer" className="btn resume-btn">
                <svg className="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white">
                  <path d="M10 2H4C2.9 2 2 2.9 2 4v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8l-8-6zm-1 2h7v7h7v13H4V4h7v1zm1 6v7h6v2H9v-9h6z" />
                </svg>
                Resume
              </a>
              <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="btn hire-btn">
                <svg className="icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="white">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Hire Me
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src={Image} alt="Krishna" />
          </div>
        </div>
      </div>
    </div>
  );
}
