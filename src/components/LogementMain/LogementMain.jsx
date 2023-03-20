import React from "react";
import { useState } from "react";
import "../LogementMain/LogementMain.css";
import LogementDescription from "../../components/LogementDescription/LogementDescription";

export function LogementMain(props) {
  const logement = props.logement;

  // eslint-disable-next-line
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <>
      <div className="logements-infos1">
        <div className="logement-first">
          <div className="logement-title">
            <h1 className="logement-title">{logement.title}</h1>
            <h2 className="logement-localisation">{logement.location}</h2>
            <div className="logement-tags">
              {logement.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="logement-proprietaire">
          <div className="owner-informations">
            <h3>{logement.host.name}</h3>
            <div className="logement-proprietaire-badge">
              <img src={logement.host.picture} alt="" />
            </div>
          </div>
          {/* Pour chacun des chiffres de l'array, on créé une span avec une étoile grise par defaut. Si le rating est supérieur ou égal à la valeur de rating alors on met la classe "on" et la ou les étoiles deviennent rouge*/}
          <div className="logement-proprietaire-note">
            {[1, 2, 3, 4, 5].map((number) => (
              <span className={props.logement.rating >= number ? "on" : ""}>
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="logements-infos2">
        <LogementDescription
          title="Description"
          content={logement.description}
        />
        <LogementDescription
          title="Équipements"
          content=<ul>
            {logement.equipments.map((eq) => (
              <li>{eq}</li>
            ))}
          </ul>
        />
      </div>
    </>
  ) : (
    <>
      <div className="logements-infos1">
        <div className="logement-first">
          <div className="logement-title">
            <h1 className="logement-title">{logement.title}</h1>
            <h2 className="logement-localisation">{logement.location}</h2>
            <div className="logement-tags">
              {logement.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="logement-proprietaire">
          <div className="owner-informations">
            <h3>{logement.host.name}</h3>
            <div className="logement-proprietaire-badge">
              <img src={logement.host.picture} alt="" />
            </div>
          </div>
          {/* Pour chacun des chiffres de l'array, on créé une span avec une étoile grise par defaut. Si le rating est supérieur ou égal à la valeur de rating alors on met la classe "on" et la ou les étoiles deviennent rouge*/}
          <div className="logement-proprietaire-note">
            {[1, 2, 3, 4, 5].map((number) => (
              <span className={props.logement.rating >= number ? "on" : ""}>
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="logements-infos2">
        <LogementDescription
          title="Description"
          content={logement.description}
        />
        <LogementDescription
          title="Équipements"
          content=<ul>
            {logement.equipments.map((eq) => (
              <li>{eq}</li>
            ))}
          </ul>
        />
      </div>
    </>
  );
}

export default LogementMain;
