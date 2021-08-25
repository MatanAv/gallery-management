import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const ImageBox = ({ imgLink, owner }) => {
  const [show, setShow] = useState("hidden");

  return (
    <li className='img-item'>
      <div
        className='img-box'
        onMouseOver={() => setShow("visible")}
        onMouseLeave={() => setShow("hidden")}
      >
        <img src={imgLink} width='150' height='99' alt='' />
        <div className='btn-in-img' style={{ visibility: show }}>
          <span>
            <Button text='Add' />
          </span>
        </div>
      </div>
    </li>
  );
};

ImageBox.propTypes = {
  imgLink: PropTypes.string,
  owner: PropTypes.string,
};

export default ImageBox;
