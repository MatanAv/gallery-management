import { useState } from "react";

const HomePage = () => {
  const [favorites, setFavorites] = useState([]);

  return (
    <div className='homepage'>
      <h2>My Favorites</h2>
    </div>
  );
};

export default HomePage;
