import React, { useState } from "react";
import "./About.css"; // Import a separate CSS file for styles
import pict from "../../assets/pass-pic.png";

const About = () => {
  const [activeTab, setActiveTab] = useState("Education");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={pict} alt="user" className="pict" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              Welcome to my portfolio! I'm Krishna, a skilled and creative web
              developer passionate about creating beautiful, responsive, and
              user-friendly websites. With experience in a variety of web
              projects, I specialize in delivering tailored solutions that
              captivate audiences. Explore my portfolio to witness the
              intersection of design and functionality.
            </p>
            <div className="tab-titles">
              <p
                className={`tab-links ${
                  activeTab === "Education" ? "active-link" : ""
                }`}
                onClick={() => openTab("Education")}
              >
                Education
              </p>
              <p
                className={`tab-links ${
                  activeTab === "Experience" ? "active-link" : ""
                }`}
                onClick={() => openTab("Experience")}
              >
                Experience
              </p>
              <p
                className={`tab-links ${
                  activeTab === "Skills" ? "active-link" : ""
                }`}
                onClick={() => openTab("Skills")}
              >
                Skills
              </p>
            </div>
            <div
              className={`tab-contents ${
                activeTab === "Education" ? "active-tab" : ""
              }`}
              id="Education"
            >
              <ul>
                <li>
                  <span>
                    <b>BE Computer Engineering </b>
                  </span>
                  <br />
                  Sandip Institute Of Technology And Research Centre, Nashik.
                  <br />
                  <i>(Savitribai phule Pune University)</i>.
                </li>
                <li>
                  <span>
                    <b>XII [HSC] </b>
                  </span>
                  <br />
                  Badrinarayan Barwale Junior College, Jalna.
                  <br />
                  <i>(Babasaheb Ambedkar Marathwada University)</i>.
                </li>
                <li>
                  <span>
                    <b>X [CBSE] </b>
                  </span>
                  <br />
                  Vivekananda English School, Partur.
                  <br />
                  <i>(Central Board Of Secondary Education, Delhi)</i>.
                </li>
              </ul>
            </div>
            <div
              className={`tab-contents ${
                activeTab === "Experience" ? "active-tab" : ""
              }`}
              id="Experience"
            >
              <ul>
                <li>
                  <span>
                    <b>TechnoHacks EduTech</b>
                  </span>
                  <br />
                  C++ Intern (2023)
                </li>
                <li>
                  <span>
                    <b>Class Representative</b>
                  </span>
                  <br />
                  Second Year Computer Engineering (2023-2024)
                </li>
                <li>
                  <span>
                    <b>Cultural Head</b>
                  </span>
                  <br />
                  Computer Engineering Students Association [TEAM-CESA]
                </li>
              </ul>
            </div>
            <div
              className={`tab-contents ${
                activeTab === "Skills" ? "active-tab" : ""
              }`}
              id="Skills"
            >
              <ul>
                <li>
                  <span>
                    <b>UI/UX</b>
                  </span>
                  <br />
                  Designing Web App Interfaces
                </li>
                <li>
                  <span>
                    <b>Frontend</b>
                  </span>
                  <br />
                  Building Responsive Websites
                </li>
                <li>
                  <span>
                    <b>Backend</b>
                  </span>
                  <br />
                  Developing Server-Side Logic
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
