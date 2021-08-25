import { Link } from "react-router-dom";
import ImageBox from "./ImageBox";

const HomePage = ({ favs }) => {
  return (
    <div>
      <h5>There are {favs.currLen} images in your favorites</h5>
      <div className='img-list'>
        <ul>
          {favs.images && <ImageBox />}
          <li className='img-item'>
            <div
              className='add-img-box'
              style={favs.images && { bottom: "79px" }}
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

export default HomePage;
