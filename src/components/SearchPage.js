import PropTypes from "prop-types";
import Button from "./Button";
import ImageBox from "./ImageBox";
import SearchBar from "./SearchBar";

const SearchPage = ({ search, fetchImages, addToFavs }) => {
  return (
    <div>
      <SearchBar onSubmit={fetchImages} />
      <div className='img-list'>
        {search.totalResults > 0 ? (
          <ul>
            {search.images.map((image) => (
              <ImageBox
                key={image.id}
                imgLink={image.address}
                btnText='Add'
                btnOnClick={() => addToFavs(image)}
              />
            ))}
          </ul>
        ) : (
          search.images && (
            <span>No results found for {`"${search.searchValue}"`}</span>
          )
        )}
      </div>
      <Button text='Back To Home Page' routeTo='home' />
    </div>
  );
};

SearchPage.propTypes = {
  fetchImages: PropTypes.func.isRequired,
  addToFavs: PropTypes.func.isRequired,
};

export default SearchPage;
