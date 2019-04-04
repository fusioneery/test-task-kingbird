import React from "react";
import "./style.sass";

const SlidePresentational = ({ img, onSlideClick }) => {
  return (
    <div className="slide" onClick={() => onSlideClick()}>
      <img src={img} alt="slide" className="slide__img" />
    </div>
  );
};

export default SlidePresentational;
