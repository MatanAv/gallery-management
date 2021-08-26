import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const ImageBox = ({ imgLink, btnText, btnOnClick, isFav, owner }) => {
  const [show, setShow] = useState("hidden");
  const [disabled, setDisabled] = useState(false);

  const handleOnClick = () => {
    setDisabled(true);
    btnOnClick();
  };

  return (
    <li className='img-item'>
      <div
        className='img-box'
        onMouseOver={() => setShow("visible")}
        onMouseLeave={() => setShow("hidden")}
      >
        <img
          src={imgLink}
          width='150'
          height='99'
          alt=''
          title={isFav ? { owner } : ""}
        />
        <div style={{ visibility: show }}>
          <Button
            text={btnText}
            onClick={handleOnClick}
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
  isFav: PropTypes.bool,
  owner: PropTypes.string,
};

export default ImageBox;
