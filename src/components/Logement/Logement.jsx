import React from "react";
import { Link } from "react-router-dom";
import "../Logement/Logement.css";

function Logement(props) {
  return (
    <div className="logement">
      <Link to="/logement" state={{ logementId: props.id }}> {/* On fait passer l'id du logement par le state */}
        <img src={props.imageUrl} alt="" />
        <h2 className="logement-name">{props.title}</h2>
      </Link>
    </div>
  );
}

export default Logement;
