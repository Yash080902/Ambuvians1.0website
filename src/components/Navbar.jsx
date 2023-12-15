import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div id="navbar" style={{ height: isScrolled ? "6vh" : "7vh" }}>
        <div id="logo">
          <a href="/">
            <img
              src="images/Navbar-images/ambu logo.webp"
              alt="ambuvians Logo"
              id="logo1"
              style={{ height: isScrolled ? "7vh" : "8vh" }}
            />
          </a>
        </div>
        <div className="right-header">
          <div>
            <ul className="links right-header-element">
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/about">ABOUT</a>
              </li>
              <li>
                <a href="/services">SERVICES</a>
              </li>
              <li>
                <a href="/hiring">JOIN US</a>
              </li>
              <li>
                <a href="/login" className="openModelBtn">LOGIN</a>
              </li>
            </ul>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1vw",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="toggle_btn" onClick={toggleMenu}>
              <i
                className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`dropdown_menu ${isMenuOpen ? "open" : ""}`}>
        <div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/hiring">Join Us</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
