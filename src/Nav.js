import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <nav className="top-bar">
        <ul className="nav-bar-left">
          <li className="nav-links">
            <Link className="navs" to="/about">
              About
            </Link>
          </li>
          <li className="nav-links">
            <Link className="navs" to="/homepage">
              Home
            </Link>
          </li>
        </ul>

        <ul className="nav-bar-right">
          <li className="nav-links">
            <Link className="navs" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-links">
            <Link className="navs" to="/logout">
              logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
