import { useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";

const App = () => {
  const [showHomepage, setShowHomepage] = useState(true);

  const handlePages = (btnName) => {
    return btnName === "Home Page"
      ? setShowHomepage(true)
      : setShowHomepage(false);
  };

  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <nav>
        <NavBar handlePages={handlePages} />
      </nav>
      <div className="content">
        {showHomepage ? <HomePage /> : <SearchPage />}
      </div>
    </div>
  );
};

export default App;
