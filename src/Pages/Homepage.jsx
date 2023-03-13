import React from "react";
import Banner from "../components/Banner/Banner";
import GrilleLogements from "../components/GrilleLogements/GrilleLogements.jsx";
import "../Pages/Homepage.css";

function Homepage() {
  return (
    <div>
      <Banner />
      <GrilleLogements />
    </div>
  );
}

export default Homepage;
