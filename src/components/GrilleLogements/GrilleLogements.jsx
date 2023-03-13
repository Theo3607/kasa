import React, { useEffect, useState } from "react";
import "../GrilleLogements/GrilleLogements.css";
import Logement from "../Logement/Logement.jsx";

function GrilleLogements() {

  const [logements, setLogements] = useState([]); // Au chargement, on fait un fetch 

  useEffect(fetchLogements, []);
  // Puisque l'array est vide, la fonction "fetchLogements" s'exécute au chargement du composant "GrilleLogement"

  // Ici on utilise la méthode fetch pour récupérer une réponse des données que l'on transforme ensuite en objet grâce à la fonction json
  function fetchLogements() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((res) => setLogements(res))
      .catch(console.error);
  }

  /* Ici on affiche une div en utilisant la fonction map() qui permettra d'afficher autant de logements qu'il y en a de disponibles*/

  return (
    <div className="grid">
      {logements.map((logement) => (
        <Logement
          title={logement.title}
          imageUrl={logement.cover}
          id={logement.id}
        />
      ))}
    </div>
  );
}

export default GrilleLogements;
