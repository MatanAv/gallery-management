import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const ImageBox = ({ imgLink, btnText, btnOnClick, owner, disabled }) => {
  const [show, setShow] = useState("hidden");

  return (
    <li className='img-item'>
      <div
        className='img-box'
        onMouseOver={() => setShow("visible")}
        onMouseLeave={() => setShow("hidden")}
      >
        <img src={imgLink} width='190' height='120' alt='' title={owner} />
        <div style={{ visibility: show }}>
          <Button
            text={disabled ? "Added" : `${btnText}`}
            onClick={btnOnClick}
            isDisabled={disabled}
          />
        </div>
      </div>
    </li>
  );
};

ImageBox.propTypes = {
  imgLink: PropTypes.string,
  btnText: PropTypes.string.isRequired,
  btnOnClick: PropTypes.func.isRequired,
  owner: PropTypes.string,
  disabled: PropTypes.bool,
};

export default ImageBox;
