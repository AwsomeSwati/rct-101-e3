import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Login from "../../pages/Login";

// use react-router Link or NavLink


const Navbar = () => {
 

  return (
    <div data-cy="navbar">

      <Link data-cy="navbar-home-link" to="/" >LOGO</Link>
      <Link to ="/Login"></Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button data-cy="navbar-login-logout-button">Login</button>
      {/* {isAuth ? "Logout" : "Login" } */}
    </div>
  );
};

export default Navbar;
