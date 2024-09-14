import React, { useRef } from "react";
import "./Navbar.css";
import logo from "../../src/assets/logo.png";
import menu_open from "../assets/menu.png";
import menu_close from "../assets/close.png";

const Navbar = ({ heroRef, aboutRef, projectsRef, certiRef, contactRef }) => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  // Function to scroll to the section
  const scrollHandler = (elmRef) => {
    window.scrollTo({
      top: elmRef.current.offsetTop,
      behavior: "smooth",
    });
    closeMenu(); // Optionally close the mobile menu after scrolling
  };


  return (
    <div className="Navbar">
      <img src={logo} alt="Logo" height={100} />
      <img
        src={menu_open}
        alt="Open Menu"
        className="nav-mob-open"
        onClick={openMenu}
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          alt="Close Menu"
          className="nav-mob-close"
          onClick={closeMenu}
        />
        <li onClick={() => scrollHandler(heroRef)}>Home</li>
        <li onClick={() => scrollHandler(aboutRef)}>About Me</li>
        <li onClick={() => scrollHandler(projectsRef)}>Projects</li>
        <li onClick={() => scrollHandler(certiRef)}>Certificates</li>
        <li onClick={() => scrollHandler(contactRef)}>Contact</li>

      </ul>
      <div className="nav-Connect">
        <b onClick={() => window.open("https://www.linkedin.com/in/krishna-chavan-882516249/")}>Connect With Me</b>
      </div>
    </div>
  );
};

export default Navbar;
