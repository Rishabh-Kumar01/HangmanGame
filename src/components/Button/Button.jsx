import React from "react";
import getButtonVariant from "./getButtonVariant";

const Button = ({ text, onClickHandler, variant, type = "button" }) => {
  return (
    <button
      className={`text-white py-2 px-4 rounded ${getButtonVariant(variant)}`}
      onClick={onClickHandler}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
