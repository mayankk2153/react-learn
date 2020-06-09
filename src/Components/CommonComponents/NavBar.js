import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  let activeStyle = { color: "blue" };
  return (
    <div>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/course" activeStyle={activeStyle}>
        Course Page
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </div>
  );
}

export default NavBar;
