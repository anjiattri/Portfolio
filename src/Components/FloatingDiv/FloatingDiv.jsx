import React from "react";
import "./FloatingDiv.css";
function FloatingDiv({ image, txt1, txt2, darkMode }) {
  return (
    <div className="floatingdiv">
      <img src={image}></img>
      <span
        style={{
          color: "black",
        }}
      >
        {txt1}
        <br />
        {txt2}
      </span>
    </div>
  );
}

export default FloatingDiv;
