import React, { useRef, useCallback, useState } from "react";
import menu_open from "../assets/menu.png";
import menu_close from "../assets/close.png";
import './Navbar.css'; // Import the CSS file

const Navbar = ({ heroRef, aboutRef, projectsRef, certiRef, contactRef }) => {
  const menuRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const scrollHandler = useCallback((elmRef) => {
    window.scrollTo({
      top: elmRef.current.offsetTop,
      behavior: "smooth",
    });
    closeMenu();
  }, [closeMenu]);

  const handleConnectClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/krishna-chavan-882516249/", "_blank", "noopener,noreferrer");
  }, []);

  return (
    <nav className="Navbar">
      <h1 className="navbar-logo">Krishna</h1>
      <button
        aria-label="Open Menu"
        className="nav-mob-open"
        onClick={openMenu}
      >
        <img src={menu_open} alt="Open Menu" />
      </button>
      <ul ref={menuRef} className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <button
          aria-label="Close Menu"
          className="nav-mob-close"
          onClick={closeMenu}
        >
          <img src={menu_close} alt="Close Menu" />
        </button>
        <li><button onClick={() => scrollHandler(heroRef)}>Home</button></li>
        <li><button onClick={() => scrollHandler(aboutRef)}>About Me</button></li>
        <li><button onClick={() => scrollHandler(projectsRef)}>Projects</button></li>
        <li><button onClick={() => scrollHandler(certiRef)}>Certificates</button></li>
        <li><button onClick={() => scrollHandler(contactRef)}>Contact</button></li>
      </ul>
      <div className="nav-Connect">
        <button onClick={handleConnectClick}>Connect With Me</button>
      </div>
    </nav>
  );
};

export default Navbar;
