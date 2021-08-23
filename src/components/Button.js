import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({ text, onClick, routeTo }) => {
  return routeTo !== undefined ? (
    <Link to='`/${routeTo}`'>
      <button className='btn' type='button'>
        {text}
      </button>
    </Link>
  ) : (
    <button className='btn' onClick={() => onClick(text)} type='button'>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  routeTo: PropTypes.string,
};

export default Button;
