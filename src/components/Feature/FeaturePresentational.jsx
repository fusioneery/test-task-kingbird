import React from "react";
import "./style.sass";

const FeaturePresentational = ({ name, value, leftSideValue, accentValue }) => {
  return (
    <div className="feature">
      {name && <span className="feature__name">{name}</span>}
      <span className="feature__value">
        {leftSideValue && (
          <span className="value__leftside">{leftSideValue}</span>
        )}
        {value}
        {accentValue && <span className="value__accent">{accentValue}</span>}
      </span>
    </div>
  );
};

export default FeaturePresentational;
