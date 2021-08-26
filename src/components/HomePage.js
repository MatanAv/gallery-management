import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ImageBox from "./ImageBox";

const HomePage = ({ favImgs, removeFromFavs }) => {
  return (
    <div>
      <h5>There are {favImgs.length} images in your favorites</h5>
      <div className='img-list'>
        <ul>
          {favImgs.length > 0 &&
            favImgs.map((image) => (
              <ImageBox
                key={image.id}
                imgLink={image.address}
                owner={image.owner}
                isFav={true}
                btnText='Remove'
                btnOnClick={() => removeFromFavs(image.id)}
              />
            ))}
          <li className='img-item'>
            <div
              className='add-img-box'
              style={favImgs.length ? { float: "left" } : { bottom: "0px" }}
            >
              <Link to='/search' id='add-img-link'>
                Add Image
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  removeFromFavs: PropTypes.func.isRequired,
};

export default HomePage;
