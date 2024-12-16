import React from "react";

const Button = ({ text, backGroundColor, color }) => {
  return (
    <button
      style={{
        backgroundColor: backGroundColor,
        color: color,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
