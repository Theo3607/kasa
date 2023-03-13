import React, { useEffect, useState } from "react";
import LogementBanner from "../components/LogementBanner/LogementBanner";
import LogementMain from "../components/LogementMain/LogementMain";
import "../Pages/FicheLogement.css";
import { useLocation } from "react-router-dom";

function FicheLogement() {
  const location = useLocation(); // Permet renvoyer l'objet de localisation qui représente l'URL actuelle
  const [logement, setLogement] = useState(null);
  // eslint-disable-next-line
  useEffect(fetchLogementDonnees, []);

  function fetchLogementDonnees() {
    fetch("logements.json")
      .then((res) => res.json())
      // Une fois les informations récupérées, on filtre les logements en fonction de l'id  pour garder uniquement d'id du logement qu'on souhaite
      .then((logements) => {
        const logement = logements.find(
          (logement) => logement.id === location.state.logementId
        );
        setLogement(logement);
      })
      .catch(console.error);
  }

  if (logement == null) return <div>Chargement...</div>;
  return (
    <div className="fiche-logement">
      <LogementBanner pictures={logement.pictures} />
      <LogementMain logement={logement} />
    </div>
  );
}

export default FicheLogement;
