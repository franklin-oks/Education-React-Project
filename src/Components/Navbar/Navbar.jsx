import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/mylogo.jpg";
import { Link } from "react-scroll";
import { SlMenu } from "react-icons/sl";
// NB: run npm install react-scroll
const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky && "dark-nav"}`}>
      <div className="logo-img">
        <img src={logo} alt="logo" />
        <h1>Rhema Academy</h1>
      </div>
      <ul className={mobileMenu ? "mobile-menu" : "hide-mobile-menu"}>
        <li>
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={2000}
            onClick={toggleMenu}
          >
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="program"
            smooth={true}
            offset={-320}
            duration={2000}
            onClick={toggleMenu}
          >
            Program
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="about"
            smooth={true}
            offset={-200}
            duration={2000}
            onClick={toggleMenu}
          >
            About us
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="campus"
            smooth={true}
            offset={-350}
            duration={2000}
            onClick={toggleMenu}
          >
            Campus
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="testimonials"
            smooth={true}
            offset={-350}
            duration={2000}
            onClick={toggleMenu}
          >
            Testmonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-350}
            duration={2000}
            className="btn"
            onClick={toggleMenu}
          >
            Contact us
          </Link>
        </li>
      </ul>
      <SlMenu className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
