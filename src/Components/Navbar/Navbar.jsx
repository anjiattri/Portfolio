import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="name">Anjali</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link to="home" smooth={true} spy={true}>
              <li>Home</li>
            </Link>
            <Link to="services" smooth={true} spy={true}>
              <li>Services</li>
            </Link>
            <Link to="experience" smooth={true} spy={true}>
              <li>Experience</li>
            </Link>
            <Link to="works" smooth={true} spy={true}>
              <li>Portfolio</li>
            </Link>
          </ul>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
<Link to="contact" smooth={true} spy={true}>
  <button className="button s-button">Hire Me</button>
</Link>;
