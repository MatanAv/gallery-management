import { useState } from "react";

const SearchBar = () => {
  const [text, setText] = useState("");

  return (
    <form className='search-form' onSumbit={null}>
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

export default SearchBar;
