import React from "react";
import "./Button.css";

const Button = ({ text, onClickHandler }) => {
  return (
    <button className="btn" onClick={onClickHandler}>
      {text}
    </button>
  );
};

export default Button;
