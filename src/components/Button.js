import React from "react";

const Button = ({ text, onClickBtn }) => {
  return (
    <button className="btn" onClick={() => onClickBtn(text)} type="button">
      {text}
    </button>
  );
};

export default Button;
