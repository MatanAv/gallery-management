import React from "react";
import Button from "./Button";

const NavBar = ({ handlePages }) => {
  return (
    <div className="nav_bar">
      <ul>
        <li>
          <Button onClickBtn={handlePages} text="Home Page" type="button" />
        </li>
        <li>
          <Button onClickBtn={handlePages} text="Search Page" type="button" />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
