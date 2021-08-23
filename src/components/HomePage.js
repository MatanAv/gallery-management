import { useState } from "react";
import ImageBox from "./ImageBox";

const HomePage = () => {
  const [favList, setFavList] = useState([]);

  return (
    <div className='homepage'>
      <h3>My Favorites</h3>
      <div className='fav-list'>
        <ul className='images-list'>
          {favList.length ? <ImageBox /> : <ImageBox isLast={true} />}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
