import React from "react";
import Button from "./Button";

const NavBar = () => {
  return (
    <div className='nav_bar'>
      <ul>
        <li>
          <Button text='Home Page' routeTo='home' />
        </li>
        <li>
          <Button text='Search Page' routeTo='search' />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
