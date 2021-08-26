import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";

const API = {
  url: "https://pixabay.com/api",
  key: "23048158-b0f008045508100619ab90fab",
};

const App = () => {
  const [search, setSearch] = useState({
    searchValue: "",
    amount: 30,
    totalResults: 0,
    images: null,
  });

  const [favImgs, setFavImgs] = useState([]);

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

  // TODO - Check
  const addToFavs = (image) => {
    console.log(image);
    setFavImgs({ ...favImgs, image });
    console.log(favImgs);
  };

  // TODO - Check
  const removeFromFavs = (id) => {
    setFavImgs(
      favImgs.images.filter((image) => {
        return id !== image.id;
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
              path={["/", "/home"]}
              render={(props) => (
                <HomePage
                  favImgs={favImgs}
                  removeFromFavs={removeFromFavs}
                  {...props}
                />
              )}
            ></Route>
            <Route
              exact
              path='/search'
              render={(props) => (
                <SearchPage
                  search={search}
                  fetchImages={fetchImages}
                  addToFavs={addToFavs}
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
