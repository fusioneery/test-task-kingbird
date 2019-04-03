import React from "react";
import "./style.sass";
import mars from "../../images/1192646-planet-mars-wallpaper-2600-x-1600-4-k.png";
import mars2x from "../../images/1192646-planet-mars-wallpaper-2600-x-1600-4-k@2x.png";
import mars3x from "../../images/1192646-planet-mars-wallpaper-2600-x-1600-4-k@3x.png";

const MarsImagePresentational = () => {
  return (
    <img
      alt="Mars"
      src={mars}
      srcSet={`${mars2x} 2x,
              ${mars3x} 3x`}
      className="mars-img"
    />
  );
};

export default MarsImagePresentational;
