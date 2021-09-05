import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { API, LOCAL_STORAGE_KEY } from "./Constants";
import axios from "axios";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";

const App = () => {
  const [search, setSearch] = useState({
    searchValue: "",
    amount: 30,
    totalResults: 0,
    images: null,
  });

  const [favImgs, setFavImgs] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedFavs) setFavImgs(storedFavs);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favImgs));
  }, [favImgs, search]);

  const fetchImages = async (e, text) => {
    e.preventDefault();
    if (text) {
      try {
        const response = await axios.get(
          `${API.url}/?key=${API.key}&q=${text}
            &image_type=photo&per_page=${search.amount}`
        );

        setSearch({
          ...search,
          searchValue: text,
          totalResults: response.data.totalHits,
          images: response.data.hits.map((image) => {
            return {
              id: image.id,
              address: image.webformatURL,
              owner: image.user,
              onFavs: false,
            };
          }),
        });
      } catch (err) {
        alert(err);
      }
    } else {
      setSearch({ searchValue: "", amount: 30, totalResults: 0, images: null });
    }
  };

  const addToFavs = (image) => {
    const newImg = { ...image, onFavs: true };
    setFavImgs([...favImgs, newImg]);
  };

  const removeFromFavs = (image) => {
    setFavImgs(
      favImgs.filter((img) => {
        return image.id !== img.id;
      })
    );
  };

  return (
    <Router>
      <div className='container'>
        <header>
          <Header />
        </header>
        <nav>
          <NavBar />
        </nav>
        <div className='content'>
          <Switch>
            <Route
              exact
              path='/search'
              render={(props) => (
                <SearchPage
                  search={search}
                  fetchImages={fetchImages}
                  addToFavs={addToFavs}
                  favList={favImgs}
                  {...props}
                />
              )}
            ></Route>
            <Route
              render={(props) => (
                <HomePage
                  favImgs={favImgs}
                  removeFromFavs={removeFromFavs}
                  {...props}
                />
              )}
            ></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
