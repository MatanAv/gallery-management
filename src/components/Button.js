import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({ text, routeTo, isDisabled, onClick }) => {
  return !routeTo ? (
    <button
      className={`btn ${isDisabled ? "btn-disabled" : ""}`}
      type='button'
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  ) : (
    <Link to={`/${routeTo}`}>
      <button className='btn' type='button'>
        {text}
      </button>
    </Link>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  routeTo: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
