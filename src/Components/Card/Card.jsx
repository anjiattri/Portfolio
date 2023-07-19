import React from "react";
import "./Card.css";

const Card = ({ emoji, heading, detail, color }) => {
  const handleClick = (heading) => {
    if (heading == "Writer") {
      window.open(
        "https://www.includehelp.com/Members/Anjali-Singh.aspx",
        "_blank"
      );
    } else {
      window.open("https://www.linkedin.com/in/anjali-s-947ab0179/", "_blank");
    }
  };
  return (
    <div className="card" style={{ borderColor: { color } }}>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button" onClick={() => handleClick(heading)}>
        LEARN MORE
      </button>
    </div>
  );
};

export default Card;
