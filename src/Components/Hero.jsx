import React from "react";
import "./Hero.css";
import bg from "../../src/assets/photo.png";
import { MdFileDownload } from "react-icons/md";
import { IoBag } from "react-icons/io5";
import phutu from '../../src/assets/phutu.jpg';

const downloadfile = () => {
  window.location.href = "https://drive.google.com/file/d/11u73KvDgAJAF9i9dE1S5GtxCvyu7gcq-/view?usp=sharing";
};

const Hero = () => {
  return (
    <section id="intro">
      <div className="phutu">
        <img src={phutu} className="phutu" alt="Portrait" />
      </div>
      <div className="intro-content">
        <span className="hello">Hello</span>
        <span className="introText">
          I'm
          <span className="introName"> Krishna</span>
          <br />
          <span className="introJob">Web Developer</span>
          <p className="introPara">
            I am a skilled web designer with experience in creating visually
            appealing and user-friendly websites.
          </p>
          <div className="but">
            <button className="btn" onClick={() => window.open("https://www.linkedin.com/in/krishna-chavan-882516249/")}>
              <IoBag className="icon" size={24} /> Hire Me
            </button>
            <button className="btn btn2" onClick={downloadfile}>
              <MdFileDownload className="icon" size={24} /> Resume
            </button>
          </div>
        </span>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Hero;
