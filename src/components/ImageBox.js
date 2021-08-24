import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "./Button";

const ImageBox = ({ isLast, imgLink, owner }) => {
  return (
    <li className='img-item'>
      {!isLast ? (
        <div className='img-box'>
          <img src={imgLink} width='150' height='99' alt='' />
          <div className='btn-in-img'>
            <span>
              <Button text='Add' />
            </span>
          </div>
        </div>
      ) : (
        <div className='add-img'>
          <span>
            <Link to='/search' id='add-img-link'>
              Add Image
            </Link>
          </span>
        </div>
      )}
    </li>
  );
};

ImageBox.propTypes = {
  isLast: PropTypes.bool,
  imgLink: PropTypes.string,
  owner: PropTypes.string,
};

export default ImageBox;
