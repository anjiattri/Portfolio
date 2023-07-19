import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Attri2707@gmail.com</span>
        <div className="f-icons">
          <a
            href="https://www.linkedin.com/in/anjali-s-947ab0179/"
            target="_blank"
          >
            <BsLinkedin size={60} color={"blue"} />
          </a>
          <a href="https://github.com/anjiattri" target="_blank">
            <FaGithub size={60} color={"black"} />
          </a>
          <a href="https://www.instagram.com/anji.attri/" target="_blank">
            <FaInstagram size={60} color={"red"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
