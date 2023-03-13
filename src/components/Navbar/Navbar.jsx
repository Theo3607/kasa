import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src="logo-header.png" alt="Logo Kasa" />
        </Link>
      </div>
      <div className="navmenu">
        <NavLink to="/">
          <div>Accueil</div>
        </NavLink>
        <NavLink to="/a-propos">
          <div>À propos</div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
