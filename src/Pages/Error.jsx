import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "../Pages/Error.css";

function Error() {
  return (
    <>
      <Navbar />
      <div className="error">
        <h1 className="error-title">404</h1>
        <h2 className="error-subtitle">
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <Link to="/" className="homepage-return-404">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </>
  );
}

export default Error;
