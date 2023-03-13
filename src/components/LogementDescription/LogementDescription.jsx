import React from "react";
import downArrow from "../LogementDescription/arrow_back_ios-24px-closed.png";
import upArrow from "../LogementDescription/arrow_back_ios-24px.png";
import { useState } from "react";

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? ( //vérifie si il est ouvert ou non, si c'est le cas, afficher le texte
    <div className="logement-description">
      <div onClick={() => setIsOpen(false)} className="description-chevron">
        <p className="description-chevron">{title}</p>
        <img src={upArrow} alt="Fermeture menu déroulant" className="downArrow" />
      </div>
      <div className="contentContainer">
        <p className="description">{content}</p>
      </div>
    </div>
  ) : (
    <div className="logement-description">
      <div onClick={() => setIsOpen(true)} className="description-chevron">
        <p className="description-chevron">{title}</p>
        <img src={downArrow} alt="Ouverture menu déroulant" className="downArrow" />
      </div>
    </div>
  );
};

export default Dropdown;
