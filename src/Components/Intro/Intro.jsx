import React, { useContext } from "react";
import "./Intro.css";
import Typewriter from "typewriter-effect";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import thumbup from "../../img/thumbup.png";
import glassesimoji from "../../img/glassesimoji.png";
import crown from "../../img/crown.png";
import anjali from "../../img/anjali.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";

function Intro() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro" id="home">
      <div className="i-left">
        <div className="i-name">
          <span>Hi, I'm</span>
          <span>Anjali!</span>
          <span>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "Enthusiastic Dev",
                  "Frontend Dev",
                  "ReactJS Developer",
                ],
              }}
            />
          </span>

          <span>
            Professional Frontend Developer, bringing a wealth of experience to
            the table in the realms of web design, development, and maintenance.
            My expertise lies in creating compelling, user-friendly interfaces
            and ensuring the seamless operation of various web applications
          </span>
        </div>
        <button
          className="button i-button"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/anjali-s-947ab0179/",
              "_blank"
            )
          }
        >
          Hire Me
        </button>
        <div className="i-icons">
          <a
            href="https://www.linkedin.com/in/anjali-s-947ab0179/"
            target="_blank"
          >
            <BsLinkedin size={60} color={"blue"} />
          </a>
          <a href="https://github.com/anjiattri" target="_blank">
            <FaGithub size={60} color={darkMode ? "white" : "black"} />
          </a>
          <a href="https://www.instagram.com/anji.attri/" target="_blank">
            <FaInstagram size={60} color={"red"} />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1}></img>
        <img src={Vector2}></img>
        <img src={anjali}></img>
        <img src={glassesimoji}></img>

        <div
          style={{
            top: "-4%",
            left: "68%",
          }}
        >
          <FloatingDiv
            image={crown}
            txt1={"Web"}
            txt2={"Developer"}
            darkMode={darkMode}
          ></FloatingDiv>
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv
            image={thumbup}
            txt1={"Web"}
            txt2={"Design"}
            darkMode={darkMode}
          ></FloatingDiv>
        </div>
        <div className="blur" style={{ background: "rgba(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
