import React from "react";

const Button = (props) => {
  console.log(props);

  return (
    <button
      style={{
        backgroundColor: props.backGroundColor,
        color: props.color,
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;
