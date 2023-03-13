import React from "react";
import { useState } from "react";
import "../LogementBanner/LogementBanner.css";

function LogementBanner(props) {
  const pictures = props.pictures;

  const [currentPicture, setCurrentPicture] = useState(0);

  const getClassName = (i) => {
    if (i === currentPicture) return "visible";
    else return "invisible";
  };

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  const moveToPrevious = () => {
    const newCurreentPicture = currentPicture - 1;
    if (newCurreentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
    setCurrentPicture(currentPicture - 1);
  };

  const arePicturesAvailable = () => {
    return pictures && pictures.length > 1;
  };

  return (
    <div className="logement-image">
      <div className="image-container">
        {pictures.map((pic, i) => (
          <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
        ))}
      </div>
      {arePicturesAvailable() && (
        <>
          <button className="btn-next" onClick={moveToNext}>
            <img src="arrow-next.png" alt="" />
          </button>
          <span className="slide-counter">
            {currentPicture + 1} / {pictures.length}
          </span>
          <button className="btn-previous" onClick={moveToPrevious}>
            <img src="arrow-previous.png" alt="" />
          </button>
        </>
      )}
    </div>
  );
}

export default LogementBanner;
