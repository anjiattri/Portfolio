import React, { useContext } from "react";
import "./Works.css";
import Includehelp from "../../img/includehelp.png";
import Chalo from "../../img/chalo.png";
import Blueshark from "../../img/blueshark.png";
import Shuttl from "../../img/shuttl.png";
import Vogo from "../../img/vogo.png";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Worked for All these
          </span>
          <span>Brands & Clients</span>
          <span>
            Here are a few past projects I've worked on.
            <br />
            Want to see more? Email me. <br />
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Includehelp} alt="" />
          </div>
          <div className="w-secCircle">
            <img
              src={Blueshark}
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div className="w-secCircle">
            <img src={Chalo} alt="" style={{ width: "180px" }} />
          </div>
          <div className="w-secCircle">
            <img src={Shuttl} alt="" style={{ width: "100px" }} />
          </div>
          <div className="w-secCircle">
            <img
              src={Vogo}
              alt=""
              style={{ width: "100px", height: "50px" }}
            />
          </div>
        </div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
