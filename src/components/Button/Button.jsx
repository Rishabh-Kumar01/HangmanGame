import React from "react";

const Button = ({ text, onClickHandler }) => {
  return (
    <button
      className="text-white py-2 px-4 rounded bg-blue-500 hover:bg-blue-700"
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

export default Button;
