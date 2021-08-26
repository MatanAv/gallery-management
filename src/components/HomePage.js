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
                btnText='Remove'
                btnOnClick={() => removeFromFavs(image)}
              />
            ))}
        </ul>
      </div>
      <Link to='/search'>
        <div className='add-img-box'>
          <span>Add Image</span>
        </div>
      </Link>
    </div>
  );
};

HomePage.propTypes = {
  removeFromFavs: PropTypes.func.isRequired,
};

export default HomePage;
