import { useState } from "react";
import Button from "./Button";
import ImageBox from "./ImageBox";
import SearchBar from "./SearchBar";

const SearchPage = () => {
  const [results, setResults] = useState([]);

  return (
    <div className='searchpage'>
      <SearchBar />
      <div className='search-results'>
        {results.length === 0 ? (
          <span>No Results</span>
        ) : (
          <ul className='images-list'>
            <ImageBox />
          </ul>
        )}
        <div className='btn-back'>
          <Button text='Back To Home Page' routeTo='home' />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
