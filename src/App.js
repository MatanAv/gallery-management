import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";

const App = () => {
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
            <Route exact path='/' component={HomePage}></Route>
            <Route exact path='/home' component={HomePage}></Route>
            <Route exact path='/search' component={SearchPage}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
