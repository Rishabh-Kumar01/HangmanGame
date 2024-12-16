import React from "react";
import getButtonVariant from "./getButtonVariant";

const Button = ({ text, onClickHandler, variant }) => {
  return (
    <button
      className={`text-white py-2 px-4 rounded ${getButtonVariant(variant)}`}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

export default Button;
