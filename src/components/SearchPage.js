import { useState } from "react";
import Button from "./Button";
import ImageBox from "./ImageBox";
import SearchBar from "./SearchBar";
import axios from "axios";

const SearchPage = () => {
  const [results, setResults] = useState({
    searchValue: "",
    amount: 30,
    totalResults: 0,
    images: [],
  });

  const api = {
    url: "https://pixabay.com/api",
    key: "23048158-b0f008045508100619ab90fab",
  };

  const fetchImages = async (e, text) => {
    e.preventDefault();
    if (text) {
      try {
        const response = await axios.get(
          `${api.url}/?key=${api.key}&q=${text}
            &image_type=photo&per_page=${results.amount}`
        );

        console.log(response.data);

        setResults({
          ...results,
          searchValue: text,
          totalResults: response.data.totalHits,
          images: response.data.hits,
        });
      } catch (err) {
        alert(err);
      }
    }
  };

  console.log(results);

  return (
    <div>
      <SearchBar onSubmit={fetchImages} />
      <br />
      <div className='search-results'>
        {results.totalResults > 0 ? (
          <ul className='images-list'>
            <ImageBox />
          </ul>
        ) : (
          <span>No Results</span>
        )}
      </div>
      <Button text='Back To Home Page' routeTo='home' />
    </div>
  );
};

export default SearchPage;
