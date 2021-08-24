import React from "react";
import { Link } from "react-router-dom";

const ImageBox = ({ isLast, imageAddr }) => {
  return (
    <li className='image'>
      {!isLast ? (
        <img src={imageAddr} width='150' height='99' alt='' />
      ) : (
        <div className='add-image'>
          <span>
            <Link to='/search' id='add-link'>
              Add Image
            </Link>
          </span>
        </div>
      )}
    </li>
  );
};

export default ImageBox;
