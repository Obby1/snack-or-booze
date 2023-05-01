import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/snacks">
        Snacks
      </NavLink>
      <NavLink exact to="/drinks">
        Drinks
      </NavLink>
      <NavLink exact to="/add">
        Add Item
      </NavLink>
    </nav>
  );
}

export default NavBar;
