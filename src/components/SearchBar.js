import { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    onSubmit(e, text);
    setText("");
  };

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <div className='form-control-search'>
        <input
          className='search-bar'
          type='text'
          value={text}
          placeholder='Search on Pixabay...'
          onChange={(e) => setText(e.target.value)}
        />
        <input className='search-submit' type='submit' value='Search' />
      </div>
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
